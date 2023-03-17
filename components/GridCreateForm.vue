<template>
	<view>
		<u--form :model="grid" :rules="rules" ref="createForm" label-position="top" label-width="200rpx">
			<u-form-item label="网格名称" prop="name" borderBottom ref="name">
				<u--input v-model="grid.name" placeholder="请输入网格名称"></u--input>
			</u-form-item>
			<u-form-item label="网格类型" prop="type" borderBottom ref="type">
				<u--input v-model="grid.typeText" @tap="filterShow = true" disabled disabledColor="#ffffff"
					placeholder="请选择网格类型"></u--input>
				<template #right>
					<u-icon name="arrow-right"></u-icon>
				</template>
			</u-form-item>
			<u-form-item label="所属机构" prop="institutionId" @tap="navigateToInstitutionSelection()" borderBottom
				ref="institutionId">
				<u--input v-model="grid.institutionName" placeholder="请选择所属机构" disabled disabledColor="#ffffff"></u--input>
				<template #right>
					
					<u-icon name="arrow-right"></u-icon>
				</template>
			</u-form-item>
			<u-picker :show="filterShow" :columns="filterColumns" @confirm="filterConfirm" @cancel="filterShow = false">
			</u-picker>
		</u--form>
		
		<u-button type="primary" @tap="submit">创建</u-button>
	
	</view>
	
</template>

<script>
	export default {
		name: "GridCreateForm",

		data() {
			return {
				filterShow: false,
				filterColumns: [
					['街道', '商业区', '社区', '居民区', '郊区'],
				],
				rules: {
					'name': {
						type: 'string',
						required: true,
						message: '请填写网格名称',
						trigger: ['blur', 'change']
					},
					'type': {
						type: 'number',
						required: true,
						message: '请选择网格类型',
						trigger: ['blur', 'change']
					},
					'institutionId': {
						type: 'number',
						required: true,
						message: '请选择所属机构',
						trigger: ['blur', 'change']
					},
				},
				grid: {
					name: "",
					type: null,
					typeText: '',
					institutionId: null,
					institutionName: '',
					adminId: 0,
					state: 1,
					point: [

					]
				}
			};
		},
		methods: {
			filterConfirm(e) {
				const typeNum = e.indexs[0],
					typeText = e.value[0];
				this.grid.type = typeNum;
				this.grid.typeText = typeText;
				this.filterShow = false;
			},
			navigateToInstitutionSelection() {
				uni.navigateTo({
					url: '/pages/institution/InstitutionList'
				})
			},
			submit() {
				this.$refs.createForm.validate().then(res => {
					uni.$u.toast('校验通过')
				}).catch(errors => {
					uni.$u.toast('请完整填写资料！')
				})
			}
		},
		mounted() {
			this.$refs.createForm.setRules(this.rules);
			uni.$on(
				'selectedInstitution',
				(data) => {
					this.grid.institutionId = data.institutionId;
					this.grid.institutionName = data.institutionName;
					console.log('this.grid.institutionId:',this.grid.institutionId)
				}
			)
		},
		destroyed() {
			uni.$off('selectedInstitution');
		}
	}
</script>

<style>
</style>
