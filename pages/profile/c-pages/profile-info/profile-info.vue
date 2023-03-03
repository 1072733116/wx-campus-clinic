<template>
	<view class="profile-info">
		<view class="form-info">
			<van-field :value="userInfo.name" required size="large" label="姓名" placeholder="请输入姓名" border="{{ false }}"
				@change="handleInfoChange($event,'name')" />
			<van-field :value="userInfo.account" required size="large" label="学号" placeholder="请输入学号"
				border="{{ false }}" @change="handleInfoChange($event,'account')" />
			<van-field :value="userInfo.college" required size="large" label="学院" placeholder="请输入学院"
				border="{{ false }}" @change="handleInfoChange($event,'college')" />
			<van-field :value="userInfo.major" required size="large" label="专业班级" placeholder="请输入专业班级"
				border="{{ false }}" @change="handleInfoChange($event,'major')" />
			<van-field required size="large" label="性别">
				<view slot="input">
					<radio-group @change="handleInfoChange($event,'gender')">
						<label class="radio">
							<radio :value="0" color="#1777FF" style="transform:scale(0.8)"
								:checked="userInfo.gender == 0" />男
						</label>
						<label class="radio">
							<radio :value="1" color="#1777FF" style="transform:scale(0.8)"
								:checked="userInfo.gender == 1" />女
						</label>
					</radio-group>
				</view>
			</van-field>
			<van-field :value="userInfo.phone" required size="large" label="手机号码" placeholder="请输入手机号码"
				border="{{ false }}" @change="handleInfoChange($event,'phone')" />
		</view>
		<button @click="handleSaveClick" hover-class="save-hover-btn" class="save-btn">保存</button>
		<van-toast id="van-toast" />
	</view>
</template>

<script setup>
	import Toast from '@vant/weapp/dist/toast/toast';
	import {
		onLoad
	} from "@dcloudio/uni-app"
	import {
		reactive,
		ref
	} from "vue"
	import useProfileStore from "@/store/profile/profile.js"
	import useLoginStore from "@/store/login/login.js"
	import {
		storeToRefs
	} from "pinia"
	const profileStore = useProfileStore();
	const loginStore = useLoginStore();
	const {
		user
	} = storeToRefs(loginStore)

	const userInfo = reactive({...user.value})

	const handleInfoChange = (e, key) => {
		if (key == "gender") {
			userInfo[key] = Number(e.detail.value)
		} else {
			userInfo[key] = e.detail
		}
	}

	const handleSaveClick = () => {
		for (const key in userInfo) {
			if (userInfo[key] === "") {
				uni.showToast({
					title: "请补充完整菜单",
					icon: "error",
					duration: 1000
				})
				return;
			}
		}
		const toast = Toast.loading({
			duration:0,
		  message: '正在保存',
		  forbidClick: true,
			selector: '#van-toast',
		})
		profileStore.updateUserInfoAction(userInfo).then(res => {
			  Toast.clear();
				Toast.success({
					message:'保存成功',
					duration:1000
				});
				setTimeout(() => {
					uni.navigateBack()
				},1500)
		},err => {
			 Toast.clear();
		})
	}
</script>

<style lang="scss">
	page {
		background-color: #F6F6F6;
	}

	.radio {
		margin-right: 35rpx;
	}

	.form-info {
		width: 96%;
		border-radius: 20rpx;
		overflow: hidden;
		margin: 30rpx auto;
	}

	.save-btn {
		width: 96%;
		color: #fff;
		background-color: $primary-color;
		border-radius: 100rpx;
		margin-top: 50px;
	}

	.save-hover-btn {
		background-color: #337ECC;
	}
</style>
