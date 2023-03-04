<template>
	<view class="login">
		<view class="login-bg"></view>
		<view class="header">
			<image class="header-img" src="@/static/image/campus-logo.png" />
			<view class="title">
				<view>校园易约</view>
				<view>欢迎您登录!</view>
			</view>
		</view>
		<view class="login-form">
			<van-cell-group>
				<van-field label="学号" :value="loginUser.account" placeholder="请输入学号" required title-width="3.0em"
					left-icon="manager" clearable custom-style="margin-bottom:20rpx"
					@change="handleChange('account',$event)" />
				<van-field label="密码" :value="loginUser.password" placeholder="请输入密码" required password
					title-width="3.0em" left-icon="lock" clearable @change="handleChange('password',$event)" />
			</van-cell-group>
			<van-button custom-style="margin-top:80rpx;" block round color="#0396FF" @click="handleLoginClick">登录
			</van-button>
			<view class="tip">
				<text class="sign" @click="handleQuestionClick">
					登录遇到问题?
				</text>
				
			</view>
		</view>
		<view class="bottom">
			<text>— 校园医务室预约就诊小程序 —</text>
		</view>
	</view>
	<van-toast id="van-toast" />
</template>

<script setup>
	import {
		reactive
	} from 'vue';
	import Toast from '@vant/weapp/dist/toast/toast';
	import useLoginStore from '../../store/login/login.js'

	const loginStore = useLoginStore();

	const loginUser = reactive({
		account: "",
		password: ""
	})

	const handleChange = (key, event) => {
		loginUser[key] = event.detail
	}

	const handleLoginClick = () => {
		const toast = Toast.loading({
			duration: 0, // 持续展示 toast
			forbidClick: true,
			message: '正在登录中',
			selector: '#van-toast',
		});
		loginStore.userLoginAction(loginUser).then(res => {
			uni.reLaunch({
				url:"/pages/home/home",
				complete: () => {
					 Toast.clear();
				}
			})
		},err => {
			
		})
	}
	
	const handleQuestionClick = () => {
		uni.navigateTo({
			url:"./c-pages/question/question"
		})
	}
</script>

<style lang="scss">
	.bottom {
		position: absolute;
		bottom: 100rpx;
		left: 10rpx;
		right: 0;
		width: 420rpx;
		margin: 0 auto;
		font-size: 28rpx;
		// color: #DCDCDC;
		color: #C3C3EA;
	}

	.login-form {
		box-sizing: border-box;
		position: relative;
		z-index: 2;
		margin: 0 auto;
		width: 88vw;
		height: 580rpx;
		padding: 60rpx 30rpx 40rpx 40rpx;
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 2px 3px 7px rgb(0 0 0 / 20%);

		.tip {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			margin-top: 25rpx;
			font-size: 24rpx;
			color: #D3D3D3;

			text {
				height: 60rpx;
				line-height: 60rpx;
			}
		}
	}


	.login {
		width: 100vw;
		height: 100vh;
		position: relative;

		.login-bg {
			box-sizing: border-box;
			position: absolute;
			z-index: 1;
			width: 100vw;
			height: 450rpx;
			border-bottom-left-radius: 10%;
			border-bottom-right-radius: 10%;
			// background-image: linear-gradient(135deg, #E2B0FF 10%, #9F44D3 100%);
			background-image: linear-gradient(135deg, #ABDCFF 10%, #0396FF 100%);
		}

		.header {
			position: relative;
			z-index: 2;
			display: flex;
			align-items: center;
			padding: 90rpx 25rpx 55rpx 40rpx;

			.header-img {
				width: 200rpx;
				height: 200rpx;
			}

			.title {
				color: white;
				font-size: 42rpx;
				font-weight: bold;
				margin-left: 25rpx;
				letter-spacing: 4rpx;

				&>view {
					margin-bottom: 10rpx;
				}
			}
		}
	}
</style>
