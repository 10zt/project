<template>
	<div class="page_user" id="user_address">
		<div class="warp">
			<div class="container">
				<div class="row justify-content-between">
					<div class="col-12 col-md-3">
						<div class="card_menu">
							<!-- 左侧边栏 -->
							<list_admin_menu_user></list_admin_menu_user>
						</div>
					</div>
					<div class="col-12 col-md-9">
						<div class="card_addres pl-2">
							<!-- 学习进度 -->
							<div><span>学习进度</span></div>
							<table_rate_of_learning v-if="$check_action('/rate_of_learning/table','get')"></table_rate_of_learning>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	import list_admin_menu_user from "@/components/diy/list_admin_menu_user.vue";
	import table_rate_of_learning from "../../components/diy/table_rate_of_learning.vue";
	export default {
		data() {
			return {
			};
		},
		mounted() {
		},
		methods: {
		},

		components: {
			list_admin_menu_user,
			table_rate_of_learning,
		},
	};
</script>

<style scoped>
	.container {
		min-height: 800px;
	}
</style>
