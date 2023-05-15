/**
* 商户建档
*/
<template>
	<view>
		<u--form :model="recordInfo" ref="createForm" label-position="top" label-width="300rpx">
			<u-form-item label="商户名称" prop="fullName" borderBottom ref="fullName">
				<u--input v-model="recordInfo.fullName" placeholder="请输入商户名称"></u--input>
			</u-form-item>
			<u-form-item label="商户简称" prop="abbreviation" borderBottom ref="abbreviation">
				<u--input v-model="recordInfo.abbreviation" placeholder="请输入商户简称"></u--input>
			</u-form-item>
			<u-form-item label="商户联系方式" prop="phoneNumber" borderBottom ref="phoneNumber">
				<u--input v-model="recordInfo.phoneNumber" placeholder="请输入商户联系方式"></u--input>
			</u-form-item>

			<u-form-item label="实际负责人信息" prop="fullName" borderBottom ref="name">
				<u--textarea v-model="recordInfo.principalInfo" placeholder="请输入实际负责人信息"></u--textarea>
			</u-form-item>
			<u-form-item label="商户位置" prop="location" borderBottom>
				<u--input style="width: 60%;" v-model="recordInfo.location" suffixIcon="map-fill"
					suffixIconStyle="color: #909399" placeholder="请定位" disabled></u--input>
				<template #right>
					<u-button @tap="getAddressText">点击定位</u-button>
				</template>
			</u-form-item>
			<u-form-item label="商圈位置" prop="location" borderBottom>
				<u--input style="width: 60%;" v-model="recordInfo.district" suffixIcon="map-fill"
					suffixIconStyle="color: #909399" placeholder="请先定位, 系统自动识别"></u--input>
			</u-form-item>
			<u-form-item label="商户照片(证照信息可自动识别)" prop="fullName" borderBottom ref="name">
				<view class="pictures">
					<view class="pictureItem">
						<u-upload :file-list="fileList[0]" :max-count="1" @afterRead="afterRead($event, 0)"
							@delete="deletePic($event, 0)"></u-upload>
						<view>1. 营业执照</view>
					</view>
					<view class="pictureItem">
						<u-upload :file-list="fileList[1]" :max-count="1" @afterRead="afterRead($event, 1)"
							@delete="deletePic($event, 1)"></u-upload>
						<view>2. 身份证正面</view>
					</view>
					<view class="pictureItem">
						<u-upload :file-list="fileList[2]" :max-count="1" @afterRead="afterRead($event, 2)"
							@delete="deletePic($event, 2)"></u-upload>
						<view>3. 身份证背面</view>
					</view>
					<view class="pictureItem">
						<u-upload :file-list="fileList[3]" :max-count="1" @afterRead="afterRead($event, 3)"
							@delete="deletePic($event, 3)"></u-upload>
						<view>4. 商户门头</view>
					</view>
					<view class="pictureItem">
						<u-upload :file-list="fileList[4]" :max-count="1" @afterRead="afterRead($event, 4)"
							@delete="deletePic($event, 4)"></u-upload>
						<view>5. 其他照片</view>
					</view>
				</view>

			</u-form-item>

			<u-collapse>
				<u-collapse-item title="营业执照相关">
					<u-form-item label="统一社会信用代码" borderBottom>
						<u--input v-model="recordInfo.creditCode"></u--input>
					</u-form-item>
					<u-form-item label="单位名称" borderBottom>
						<u--input v-model="recordInfo.unitName"></u--input>
					</u-form-item>
					<u-form-item label="地址" borderBottom>
						<u--input v-model="recordInfo.address"></u--input>
					</u-form-item>
					<u-form-item label="组成形式" borderBottom>
						<u--input v-model="recordInfo.compositionForm"></u--input>
					</u-form-item>
					<u-form-item label="经营范围" borderBottom>
						<u--input v-model="recordInfo.businessScope"></u--input>
					</u-form-item>
					<u-form-item label="成立日期" borderBottom>
						<u--input v-model="recordInfo.establishmentDate"></u--input>
					</u-form-item>
					<u-form-item label="法人姓名" borderBottom>
						<u--input v-model="recordInfo.legalPersonName"></u--input>
					</u-form-item>
					<u-form-item label="法人联系方式" borderBottom>
						<u--input v-model="recordInfo.legalPersonContact"></u--input>
					</u-form-item>
					<u-form-item label="注册资本" borderBottom>
						<u--input v-model="recordInfo.registeredCapital"></u--input>
					</u-form-item>
					<u-form-item label="证件编号" borderBottom>
						<u--input v-model="recordInfo.idNumber"></u--input>
					</u-form-item>
					<u-form-item label="有效期" borderBottom>
						<u--input v-model="recordInfo.validityTime"></u--input>
					</u-form-item>
					<u-form-item label="核准日期" borderBottom>
						<u--input v-model="recordInfo.approvalDate"></u--input>
					</u-form-item>
					<u-form-item label="公司类型" borderBottom>
						<u--input v-model="recordInfo.companyType"></u--input>
					</u-form-item>
				</u-collapse-item>

				<u-collapse-item title="身份证相关">
					<u-form-item label="实际负责人姓名" borderBottom>
						<u--input v-model="recordInfo.chargeName"></u--input>
					</u-form-item>
					<u-form-item label="实际负责人性别" borderBottom>

						<u-radio-group v-model="recordInfo.chargeGender">
							<u-radio :customStyle="{marginBottom: '8px',marginRight: '8px'}"
								v-for="(item, index) in genderList" :key="index" :label="item.name"
								:name="item.value"></u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="实际负责人出生日期" borderBottom>
						<u--input v-model="recordInfo.chargeBirth"></u--input>
					</u-form-item>
					<u-form-item label="实际负责人民族" borderBottom>
						<u--input v-model="recordInfo.chargeNationality"></u--input>
					</u-form-item>
					<u-form-item label="实际负责人联系方式" borderBottom>
						<u--input v-model="recordInfo.chargeContact"></u--input>
					</u-form-item>
					<u-form-item label="实际负责人住址" borderBottom>
						<u--input v-model="recordInfo.chargeAddress"></u--input>
					</u-form-item>
					<u-form-item label="实际负责人身份证号码" borderBottom>
						<u--input v-model="recordInfo.chargeIdNumber"></u--input>
					</u-form-item>
					<u-form-item label="身份证签发日期" borderBottom>
						<u--input v-model="recordInfo.idCardIssueDate"></u--input>
					</u-form-item>
					<u-form-item label="身份证失效日期" borderBottom>
						<u--input v-model="recordInfo.idCardExpiryDate"></u--input>
					</u-form-item>
				</u-collapse-item>
			</u-collapse>

		</u--form>
		<u-button @tap="submission" type="primary">建档</u-button>
		<u-button @tap="submissionTest" type="primary">建档测试</u-button>
	</view>
</template>

<script>
	import {
		getAddress,
		qqmapsdk
	} from '@/utils/location.js';

	import {
		OBSUpload
	} from '@/obs/OBSUploadFile.js';
	import {
		config
	} from '@/obs/Configuration.js';
	import {
		createMerchant
	} from '@/api/merchant.js';
	import {
		licenseRecognize
	} from '@/api/recognize.js';
	import operate from '@/common/operate.js'


	export default {
		data() {
			return {
				genderList: [{
						name: '男',
						value: 1,
						disabled: false
					},
					{
						name: '女',
						value: 0,
						disabled: false
					},
				],
				testRecordInfo: {
					recordId: 0,
					fullName: "金拱门",
					abbreviation: "嗷嗷",
					location: "啊啊啊啊",
					district: "啊啊啊啊",
					phoneNumber: "1233211231",
					coordinate: {
						latitude: 32.123456,
						longitude: 118.123456
					},
					receiptStatus: 0,
					principalInfo: "",
					"creditCode": "ABCDE123456789",
					"unitName": "金拱门（中国）有限公司",
					"address": "江苏省南京市鼓楼区广州路19号",
					"compositionForm": "ss",
					"businessScope": "餐饮业",
					"establishmentDate": "2019-09-01",
					"legalPersonName": "liulu",
					"legalPersonContact": "17352252954",
					"registeredCapital": "1000万",
					"idNumber": "1000000000",
					"validityTime": "2020-09-01",
					"approvalDate": "2060-09-01",
					"companyType": "有限责任公司",
					"chargeName": "liulu",
					"chargeGender": 1,
					"chargeBirth": "2002-09-24",
					"chargeNationality": "汉",
					"chargeContact": "17352252954",
					"chargeAddress": "南京大学陶园南楼",
					"chargeIdNumber": "620123000000000000",
					"idCardIssueDate": "2019-07-01",
					"idCardExpiryDate": "2029-07-01",
					"marketerName": "lll",
					"marketerLocation": {
						"latitude": 33.050361,
						"longitude": 118.782421
					},
					"pictureList": [{
						"type": 3,
						"url": "https://wx3.sinaimg.cn/orj360/6c614a46ly1hd9xd7qc1xj237m24tx6p.jpg"
					}, ],
				},
				recordInfo: {
					recordId: 0,
					fullName: "",
					abbreviation: "",
					location: "",
					district: "",
					phoneNumber: "",
					coordinate: {
						latitude: 32.123456,
						longitude: 118.123456
					},
					receiptStatus: 0,
					principalInfo: "",
					pictureList: [
						//0 - 营业执照，1 - 身份证证明，2 - 身份证背面，3 - 商户门头，4 - 其他照片
					],
					recordState: 0,
					// 以下为营业执照信息ocr
					creditCode: '', //统一社会信用代码
					unitName: '', // 单位名称
					address: '', // 地址
					compositionForm: '', // 组成形式
					businessScope: '', // 经营范围
					establishmentDate: '', // 成立日期
					legalPersonName: '', // 法人姓名
					legalPersonContact: '', // 法人联系方式
					registeredCapital: '', // 注册资本
					idNumber: '', // 证件编号
					validityTime: '', // 有效期
					approvalDate: '', // 核准日期
					companyType: '', // 公司类型
					// 以下为身份证ocr
					chargeName: '', // 实际负责人姓名
					chargeGender: null, // 实际负责人性别
					chargeBirth: '', // 实际负责人出生
					chargeNationality: '', // 实际负责人民族
					chargeContact: '', // 实际负责人联系方式
					chargeAddress: '', // 实际负责人住址
					chargeIdNumber: '', // 实际负责人身份证号码
					idCardIssueDate: '', // 负责人身份证签发日期
					idCardExpiryDate: '', // 负责人身份证失效日期
					marketerId: null,
					marketerLocation: {
						latitude: 17,
						longitude: 83
					},
				},
				fileList: [
					[],
					[],
					[],
					[],
					[]
				],

			}
		},
		methods: {
			getAddressText() {
				uni.getLocation({
					success: (res) => {
						this.recordInfo.coordinate.longitude = res.longitude;
						this.recordInfo.coordinate.latitude = res.latitude;
						this.recordInfo.marketerLocation.longitude = res.longitude;
						this.recordInfo.marketerLocation.latitude = res.latitude;
						console.log(this.recordInfo.coordinate)
						qqmapsdk.reverseGeocoder({
							location: this.location,
							success: (res) => {
								const result = res.result;
								console.log(result, '详细地址信息'); //这里边就是你需要的定位数据了
								this.recordInfo.location = result.address;
								const districtText =
									`${result.address_component.province}-${result.address_component.city}-${result.address_component.district}-${result.address_reference.business_area.title}`
								this.recordInfo.district = districtText;
							},
						})
					},
					fail: (res) => {
						uni.showToast({
							'title': '获取定位失败！请检查是否开启定位权限。'
						})
					},
					complete: (res) => {

					}
				})
			},
			deletePic(event, type) {
				this[`fileList${event.name}`][type].splice(event.index, 1);
				const list = this.recordInfo.pictureList;
				for (let i = 0; i < list.length; i++) {
					if (list[i].type == type) {
						list.splice(i, 1);
						break;
					}
				}
				console.log(list)
			},
			afterRead(event, type) {
				console.log(event, type)

				let lists = [].concat(event.file);
				let fileListLen = this[`fileList${event.name}`][type].length;

				this.fileList[type].push({
					...event,
					status: 'uploading',
					message: '上传中'
				})
				this.uploadOCR(event.file.url, type).then(res => {
					console.log(res);
				})
				OBSUpload(event.file.url, (res) => {
					if (res.statusCode == '204') {
						const spliter = res.header.Location.split('/');
						console.log(res.header)
						const fileName = spliter[spliter.length - 1];
						console.log(fileName)
						const url = config.EndPoint + '/' + fileName;
						console.log(url)
						this.recordInfo.pictureList.push({
							type: type,
							url: url,
						});

						this[`fileList${event.name}`][type][0] = Object.assign(this[`fileList${event.name}`][type][
							0
						], {
							status: 'success',
							message: '',
							url: url
						});

					}
				});

			},
			submission() {
				this.recordInfo.marketerId = uni.getStorageSync('userInfo').id;

				createMerchant(this.recordInfo).then(
					res => {
						console.log(res);
						wx.requestSubscribeMessage({
							tmplIds: ['4valJSLcPDi0RTYgkuKXEPaSLuVkmGXRCZVvp66cipU',
								'7Vn5CQ3llVED7A45rn43QqcEVZuL9vIIAKj0d_XGQwA'
							],
							success(res) {
								console.log(res);
							},
							fail(err) {
								console.log(err)
							}
						})
					}
				)
			},
			submissionTest() {
				this.testRecordInfo.marketerId = uni.getStorageSync('userInfo').id;

				createMerchant(this.testRecordInfo).then(
					res => {
						console.log(res);
						wx.requestSubscribeMessage({
							tmplIds: ['4valJSLcPDi0RTYgkuKXEPaSLuVkmGXRCZVvp66cipU',
								'7Vn5CQ3llVED7A45rn43QqcEVZuL9vIIAKj0d_XGQwA'
							],
							success(res) {
								console.log(res);
							},
							fail(err) {
								console.log(err)
							}
						})
					}
				)
			},
			uploadOCR(filePath, mode) { // mode: 0-营业执照, 1-身份证正面，2-身份证背面
				let url = operate.api + '/recognize';
	
				switch (mode) {
					case 0:
						url += '/businessLicence';
						break;
					case 1:
						url += '/idCard/front';
						break;
					case 2:
						url += '/idCard/back';
						break;
					case 3:
						url += '/facade';
						break;
					default:
						return;
						break;
				}
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: url, // 仅为示例，非真实的接口地址
						filePath: filePath,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							console.log(res);
							const result = JSON.parse(res.data);
							if(result.code == 200){
								for(let key in result.data) {
								    this.recordInfo[key] = result.data[key]
								}
							}
							
						}
					});
				})

			}

		}
	}
</script>

<style>
	.pictures {
		display: flex;
		flex-wrap: wrap;

	}
</style>