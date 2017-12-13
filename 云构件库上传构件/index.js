'use strict';
/**
 * uploadCom
 */
let app = angular.module('myApp', []);
app.controller('uploadComCtrl', ['$scope', '$http','$timeout',
    function ($scope, $http,$timeout) {
        let height = $(document).height();
        $(".uploadCom").height(height-50);
        $(".uploadCom .comTree").height(height-180);
        $(".uploadComSet").height(height-50);
        $(".uploadComSet .comTree").height(height-180);
        $(".progressWrap").height(height-50);
        $(".progressWrap .proText").height(height-280);
        $scope.cancel = function () {
            window.close();
        };

        /*
        * 左侧树结构
        * */
        let zNodes;
        let setting = {
            check: {
                enable: true,
                chkStyle: "checkbox",
                chkboxType: { "Y": "ps", "N": "ps" }
            },
            view: {
                showIcon: false,
                showLine: false
            },
            data: {
                simpleData: {
                    enable: true
                }
            }
        };

        /*获取上传构件左侧树结构*/
        let treeObj;
        zNodes = BzCloudComp.GetUpLoadDetail();

        if(zNodes == ''){
            document.title='提示';
            alert("当前无可上传构件!");
            $(document).click(function(){
                window.close();
            })
        }

        //zNodes = JSON.parse(zNodes);
        status(zNodes);
        function status(param) {
            if(null != param)
            {
                switch (param.status) {
                    case "1":
                        param.name = "(新增)" + param.name;
                        break;
                    case "2":
                    case "3":
                        param.name = "(更新)" + param.name;
                        break;
                    default:
                        break;
                }
            }
            if (null == param || null == param.children
                || "" == param.children) {
                return;
            }
            for (let i=0; i < param.children.length;i++) {
                status(param.children[i]);
            }
        }
        $(document).ready(function(){
            $.fn.zTree.init($(".uploadCom .ztree"), setting, zNodes);
            treeObj = $.fn.zTree.getZTreeObj("treeLeft");
            treeObj.expandAll(true);
        })
        $scope.upload = function(){
            let check;
            if($('.uploadCom .public>input').prop('checked') == true){
                check = 0;
            }else{
                check = 1;
            }
            let nodes = treeObj.getChangeCheckedNodes();
            let selectNodes = [];
            let nIndex = 1;
            for(let i = 0;i < nodes.length;i++){
                let obj = {
                    identify: nodes[i].identify,
                    type: nodes[i].type,
                    status: nodes[i].status
                }
                selectNodes.push(obj);

                //判断上传构件中是否存在新增构件
                if(nodes[i].status == '' || nodes[i].status == undefined){
                    alert("请选择构件！");
                }
                if(nodes[i].status == 1){
                    nIndex = 1;
                    break;
                    //如果是，弹出权限设置,选择后上传
                } else {
                    //如果否，直接上传
                    nIndex = 0;
                }
            }
            if(selectNodes.length == 0){
                return;
            }
            switch(nIndex)
            {
                case 0:
                    BzCloudComp.UpLoadDetail(check,JSON.stringify(selectNodes),"");
                    $('.uploadCom').hide();
                    $('.progressWrap').show();
                    break;
                case 1:
                    if(selectNodes == []){
                        return;
                    }
                    $('.uploadComSet').show();
                    $('.uploadCom').hide();
                    break;
                default:
                    break;
            }
        }

        /*
        判断是否是特殊企业,隐藏
         */
        $scope.comId = true;
        let comId = BzCloudComp.GetEpType();
        if(comId == 1){
            $scope.comId = false;
        }

        /*
        * 获取右侧树结构
        * */
        let ids = [];//权限选择
        let node;
        let rTreeObj;
        let zNode;
        let objClick;
        let rSetting = {
            view: {
                showIcon: false,
                showLine: false
            },
            data: {
                simpleData: {
                    enable: true,
                    idKey: "orgId",
                    pIdKey: "parentId"
                },
                key: {
                    name: "orgName"
                }
            },
            callback:{
                onClick:function zTreeOnClick(event, treeId, treeNode){
                    $($(event.target)[0]).toggleClass('showNode');
                    if($($(event.target)[0]).hasClass('showNode')){
                        //ids.push(treeNode.orgId.toString());
                        ids[treeNode.orgId.toString()] = treeNode.orgId.toString();
                    }
                    else
                    {
                        ids[treeNode.orgId.toString()] = null;
                    }
                    //console.log(ids);
                }
            }
        };
        let orgInfo = {
            "data" : [
                {
                    "isDept" : 0,
                    "orgId" : 3721,
                    "orgName" : "班筑软件研发中心",
                    "parentId" : 3721
                },
                {
                    "isDept" : 0,
                    "orgId" : 3722,
                    "orgName" : "工程顾问",
                    "parentId" : 3721
                },
                {
                    "isDept" : 0,
                    "orgId" : 3728,
                    "orgName" : "聚通尚海",
                    "parentId" : 3721
                },
                {
                    "isDept" : 0,
                    "orgId" : 3729,
                    "orgName" : "上海迈考",
                    "parentId" : 3721
                }
            ],
            "status" : 200
        }
        zNode = orgInfo.data;
        $.fn.zTree.init($(".uploadComSet .ztree"), rSetting, zNode);
        $("#treeRight>li:first-child>a .node_name").addClass("showNode");
        rTreeObj = $.fn.zTree.getZTreeObj("treeRight");
        rTreeObj.expandAll(true);
        node = rTreeObj.getNodesByFilter(function (node) { return node.level == 0 }, true);
        ids[node.orgId.toString()] = node.orgId.toString();

        /*let url = BzCloudComp.GetServerUrl();
        $http.get(url + "/rs/component/getOrgInfo").then(function(data){
            zNode=data.data;
            $.fn.zTree.init($(".uploadComSet .ztree"), rSetting, zNode);
            $("#treeRight>li:first-child>a .node_name").addClass("showNode");
            rTreeObj = $.fn.zTree.getZTreeObj("treeRight");
            rTreeObj.expandAll(true);
            node = rTreeObj.getNodesByFilter(function (node) { return node.level == 0 }, true);
            ids[node.orgId.toString()] = node.orgId.toString();
        });*/


        //权限设置
        $scope.ok = function () {
            console.log(ids);
            let check;
            if($('.uploadCom .public>input').prop('checked') == true){
                check = 0;
            }else{
                check = 1;
            }
            let nodes = treeObj.getChangeCheckedNodes();
            let selectNodes = [];
            for(let i = 0;i < nodes.length;i++){
                let obj = {
                    identify: nodes[i].identify,
                    type: nodes[i].type,
                    status: nodes[i].status
                }
                selectNodes.push(obj);
            }
            /*let strJson=[];
            node = rTreeObj.getChangeCheckedNodes();
            for(let i=0;i<node.length;i++){
                strJson.push(node[i].orgId.toString());
            }*/
            let structId = "";
            for(let key in ids){
                if (null != ids[key]) {
                    if ("" != structId) {structId += ','}
                    structId += ids[key];
                }
            }
            console.log(structId);
            if(structId == ""){
                return;
            }
            //ids =  ids.join(",");
            $('.uploadComSet').hide();
            $('.progressWrap').show();
            BzCloudComp.UpLoadDetail(check, JSON.stringify(selectNodes), structId);
        };

        $scope.close = function(){
            let pro = $(".progressWrap #prog").width();
            if(pro != 510){
                $('.progressWrap .proModal').show();
            }else{
                $uibModalInstance.dismiss('cancel');
            }
        }

        $scope.btnCancel = function(){
            $('.progressWrap .proModal').hide();
        }

        $scope.btnOk = function(){
            $uibModalInstance.dismiss('cancel');
            BzCloudComp.CancelUpLoad();
        }

        //心跳
        //commonService.heartBeat();
    }])