<template>
	<view class="menu">
		<van-cell title="修改密码" is-link size="large" center @click="handleChangePasswordClick">
			<i slot="icon" class="iconfont icon-xiugaimima icon1"></i>
		</van-cell>
		<van-cell title="紧急联系" is-link size="large" center @click="handleContactClick">
			<i slot="icon" class="iconfont icon-dianhua icon2"></i>
		</van-cell>
		<van-cell title="转发分享" is-link size="large" center custom-style="position:relative;">
			<button class="share" open-type="share"></button>
			<i slot="icon" class="iconfont icon-zhuanfa-mian icon3"></i>
		</van-cell>
		<van-cell title="退出登录" is-link size="large" center @click="handleLogoutClick">
			<i slot="icon" class="iconfont icon-tuichudenglu icon4"></i>
		</van-cell>
	</view>
</template>

<script setup>
const handleChangePasswordClick = () => {
	uni.navigateTo({
		url:"/pages/profile/c-pages/change-password/change-password"
	})
}

const handleContactClick = () => {
	uni.navigateTo({
		url:"/pages/profile/c-pages/contact/contact"
	})
}

const emit = defineEmits(["logout"])

const handleLogoutClick = () => {
	emit("logout")
}
</script>

<style lang="scss">
	button::after{
		border: none;
	}
	.share{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: transparent;
		padding: 0px;
	}
	.menu {
		width: 95vw;
		margin: 20rpx auto;
		border-radius: 10rpx;
		overflow: hidden;
		
		.icon1{
			color: #1777FF;
		}
		.icon2{
			color: #ff0000;
		}
		.icon3{
			color:#90EE90;
		}
		.icon4{
			font-size: 38rpx;
			top: 1rpx;
			color:$primary-color;
		}
	}
</style>