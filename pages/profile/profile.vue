<template>
	<view class="profile">
		<profile-info></profile-info>
		<profile-record></profile-record>
		<profile-menu></profile-menu>
	</view>
</template>

<script setup>
	import ProfileInfo from "./components/profile-info.vue"
	import ProfileRecord from "./components/profile-record"
	import ProfileMenu from "./components/profile-menu.vue"
</script>

<style lang="scss">
	page {
		height: 100vh;
		background-color: #F6F6F6;
	}
</style>
