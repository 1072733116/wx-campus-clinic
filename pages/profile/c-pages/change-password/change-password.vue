<template>
	<view class="change-password">
		<van-cell-group>
			<van-field size="large" :value="newPassword" center clearable label="新密码" placeholder="请输入新的密码"
				border="{{ false }}" use-button-slot @change="handlePasswordChange">
				<van-button slot="button" size="small" color="#1777FF" @click="handleChangePasswordClick">
					保存	
				</van-button>
			</van-field>
		</van-cell-group>
	</view>
</template>

<script setup>
	import {
		ref,
		computed,
		watch
	} from "vue"
	import useProfileStore from "@/store/profile/profile.js"
	import useLoginStore from "@/store/login/login.js"
	const loginStore = useLoginStore();
	const profileStore = useProfileStore();
	const userInfo = computed(() => loginStore.user)
	let newPassword = ref("")
	const handleChangePasswordClick = () => {
		if (newPassword.value == "" || newPassword.value.length < 6) {
			uni.showToast({
				title: "长度不少于6位",
				duration: 1000,
				icon: "error"
			})
			return;
		}
		const account = {
			account:userInfo.value.account,
			password: newPassword.value
		}
		profileStore.changePasswordAction(account).then(res => {	
			uni.showToast({
				title:"保存成功",
				duration:1000,
				success: (res) => {
					setTimeout(() => {
						uni.navigateBack()
					},1000)
				}
			})
		})
	}
	const handlePasswordChange = (e) => {
		newPassword.value = e.detail
	}
</script>

<style lang="scss">

</style>
