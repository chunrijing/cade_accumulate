var BzCloudComp; 
	if(!BzCloudComp) 
	BzCloudComp = {};	
	(function() {
		// 获取构件的状态 返回值(0 下载 1 更新 2 应用 3 版本过高 负数 正在下载（取正是百分比）)
		BzCloudComp.GetCompType = function(type, strCompGUID, strCompMd5, strCompID, strSourceCompId, strVersion)
		{
			// type 构件的小类
			// strCompGUID 构件的GUID
			// strCompMd5 构件的MD5值
			// strCompID 构件的企业ID
			// strSourceCompId 构件来源Id
			// strVersion 版本号
			//native function GetCompType(type, strCompGUID, strCompMd5, strCompID, strSourceCompId, strVersion);
			//return GetCompType(type, strCompGUID, strCompMd5, strCompID, strSourceCompId, strVersion);
		};

		// 应用构件
		BzCloudComp.UseComp = function(type, strCompGUID, strCompID, strSourceCompId)
		{
			// type 构件的小类
			// strCompGUID 构件的GUID
			// strCompID 构件的企业ID
			// strSourceCompId 构件来源Id（没有时设为0）
			//native function UseComp(type, strCompGUID, strCompID, strSourceCompId);
			//return UseComp(type, strCompGUID, strCompID, strSourceCompId);
		};

		// 获取构件的详细信息 返回值(json{"detail":[{"key":"","value":"","name":""}]})
		BzCloudComp.GetCompDetail = function(Id)
		{
			// Id 构件Id
			//native function GetCompDetail(Id);
			//return GetCompDetail(Id);
		};
		
		// 下载
		BzCloudComp.DownloadComp = function(Id, epId, orgEpId, strEpName, strOrgEpName)
		{
			// Id 构件Id
			//native function DownloadComp(Id, epId, orgEpId, strEpName, strOrgEpName);
			//return DownloadComp(Id, epId, orgEpId, strEpName, strOrgEpName);
		};


		// 批量下载
		BzCloudComp.BatchDownloadComp = function(strJson)
		{
			// strJson(json{[{"id":"","epId":"","orgEpId":"","epName":"", "orgEpName":""}]})
			//native function BatchDownloadComp(strJson);
			//return BatchDownloadComp(strJson);
		};

		// 获取上传构件 返回值({"name":"","identify":"","tier":"","type":"", "status":"","children":""})
		BzCloudComp.GetUpLoadDetail = function()
		{
			return {
				"name": "构件库",
				"identify": "0",
				"type": "0",
				"tier": "0",
				"status": "0",
				"children": [
					{
						"name": "自定义",
						"identify": "0",
						"type": "0",
						"tier": "1",
						"status": "0",
						"children": [
							{
								"name": "户型",
								"identify": "0",
								"type": "0",
								"tier": "2",
								"status": "0",
								"children": [
									{
										"name": "套装门",
										"identify": "0",
										"type": "0",
										"tier": "3",
										"status": "0",
										"children": [
											{
												"name": "浅色单开入户门_副本",
												"identify": "9C9D1989-7820-4977-B6B7-CB27CE6F6451",
												"type": "14",
												"tier": "4",
												"status": "1"
											}
										]
									}
								]
							},
							{
								"name": "硬装",
								"identify": "0",
								"type": "0",
								"tier": "2",
								"status": "0",
								"children": [
									{
										"name": "波打线",
										"identify": "0",
										"type": "0",
										"tier": "3",
										"status": "0",
										"children": [
											{
												"name": "新构件",
												"identify": "327DD97C-A00A-4838-8CFF-3F3177B6C0FD",
												"type": "79",
												"tier": "4",
												"status": "1"
											},
											{
												"name": "米兰生态瓷砖-墙地一体砖-086215B_副本",
												"identify": "77F73208-FBE0-4708-A354-D968B0864426",
												"type": "79",
												"tier": "4",
												"status": "1"
											}
										]
									},
									{
										"name": "挡水条",
										"identify": "0",
										"type": "0",
										"tier": "3",
										"status": "0",
										"children": [
											{
												"name": "挡水条01_副本",
												"identify": "76649839-3256-4C59-AD07-5AA36936C46F",
												"type": "96",
												"tier": "4",
												"status": "1"
											},
											{
												"name": "挡水条01_副本1",
												"identify": "9015EB77-8AF4-4734-9B21-0102B8202287",
												"type": "96",
												"tier": "4",
												"status": "1"
											},
											{
												"name": "新构件",
												"identify": "DCF242D2-E539-4020-9AA8-990D27888F09",
												"type": "96",
												"tier": "4",
												"status": "1"
											},
											{
												"name": "挡水条01_副本2",
												"identify": "DEC8A157-8147-4F9E-B8D9-132BAEBE65F1",
												"type": "96",
												"tier": "4",
												"status": "1"
											},
											{
												"name": "新构件1",
												"identify": "989D35B0-6666-4C4D-BCEA-9A088D4F7A9C",
												"type": "96",
												"tier": "4",
												"status": "1"
											}
										]
									},
									{
										"name": "墙面线条",
										"identify": "0",
										"type": "0",
										"tier": "3",
										"status": "0",
										"children": [
											{
												"name": "石膏线条_副本",
												"identify": "0DBCE87A-616B-475F-9341-16F4898B2075",
												"type": "97",
												"tier": "4",
												"status": "1"
											}
										]
									},
									{
										"name": "踢脚线",
										"identify": "0",
										"type": "0",
										"tier": "3",
										"status": "0",
										"children": [
											{
												"name": "木质踢脚线1_副本",
												"identify": "496D6773-F8AD-4C8D-A1A8-AC8969D31443",
												"type": "21",
												"tier": "4",
												"status": "1"
											}
										]
									},
									{
										"name": "顶角线",
										"identify": "0",
										"type": "0",
										"tier": "3",
										"status": "0",
										"children": [
											{
												"name": "新构件",
												"identify": "B85D22EC-C017-4966-915A-9F16C5142AAC",
												"type": "22",
												"tier": "4",
												"status": "1"
											}
										]
									}
								]
							},
							{
								"name": "软装",
								"identify": "0",
								"type": "0",
								"tier": "2",
								"status": "0",
								"children": [
									{
										"name": "沙发",
										"identify": "0",
										"type": "0",
										"tier": "3",
										"status": "0",
										"children": [
											{
												"name": "新构件",
												"identify": "ED1ADFDE-3510-4282-BE7C-E47F1287CDD3",
												"type": "43",
												"tier": "4",
												"status": "1"
											},
											{
												"name": "新构件1",
												"identify": "41B1AE79-B51D-4C3F-9AC6-FBAFC7EBEAAB",
												"type": "43",
												"tier": "4",
												"status": "1"
											}
										]
									},
									{
										"name": "桌几",
										"identify": "0",
										"type": "0",
										"tier": "3",
										"status": "0",
										"children": [
											{
												"name": "新构件",
												"identify": "DDD57EBF-10BA-4907-9A70-9DF496BFEAB1",
												"type": "47",
												"tier": "4",
												"status": "1"
											}
										]
									}
								]
							}
						]
					}
				]
			}

			//native function GetUpLoadDetail();
			//return GetUpLoadDetail();
		};

		// 上传
		BzCloudComp.UpLoadDetail = function(IsPublic, strJson, strStruct)
		{
			// IsPublic 是否公开构件
			// strJson(json[{"identify":"","type":"","status":""}])
			// strStruct 组织结构Id
			//native function UpLoadDetail(IsPublic, strJson, strStruct);
			//return UpLoadDetail(IsPublic, strJson, strStruct);
		};
		
		// 取消上传
		BzCloudComp.CancelUpLoad = function()
		{
			//native function CancelUpLoad();
			//return CancelUpLoad();
		};

		// 取消上传
		BzCloudComp.CancelUpLoad = function()
		{
			//native function CancelUpLoad();
			//return CancelUpLoad();
		};

		// 获取企业类别(0: 普通用户 1：特殊企业用户 2: 其他企业用户)
		BzCloudComp.GetEpType = function()
		{
			//native function GetEpType();
			//return GetEpType();
		};

		// 获取服务器地址
		BzCloudComp.GetServerUrl = function()
		{
			//native function GetServerUrl();
			return "http://192.168.3.103:9000/banzhucls";
		};

})();	