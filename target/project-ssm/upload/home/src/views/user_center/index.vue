<template>
	<div class="page_user my_home" id="user_address">
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
							<div class="warp">
								<div class="container-fluid">
									<el-row>
										<div>欢迎来到个人中心</div>
									</el-row>
									<el-row>
																	<el-col v-if="user_group !== '管理员' && !$check_option('/subject_exam/table','teacher') && $check_figure('/subject_exam/table')" :span="8">
											<div class="card chart">
												<subjectExamCharts v-if="bar_obj_subject_exam.values.length >　0" id="line_obj_data_account_statistics"
																   :title="'用户考试科目数据统计'" :vm="bar_obj_subject_exam"
																   @changeTab="get_url_subject_exam_list">
												</subjectExamCharts>
												<div v-if="!bar_obj_subject_exam.values.length">数据分析没有符合条件的数据</div>
											</div>
										</el-col>
									</el-row>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import list_admin_menu_user from "@/components/diy/list_admin_menu_user.vue";
	import subjectExamCharts from "@/components/charts/subject_exam_charts.vue";
	export default {
		data() {
			return {
																		bar_obj_subject_exam: {
					names: [],
					xAxis: [],
					values: [],
					tabs: []
				},
			};
		},
		mounted() {
		},
		methods: {
			async get_nickname(list,flag){
				if (flag) {
					for (let i=0;i<list.length;i++){
						await this.$get(
								"~/api/user/get_obj?user_id="+list[i],
								null,
								(json) => {
									if (json.result) {
										list[i] = json.result.obj.nickname;
									}
								});
					}
				}else {
					for (let i=0;i<list.length;i++){
						await this.$get(
								"~/api/user/get_obj?user_id="+list[i].name,
								null,
								(json) => {
									if (json.result) {
										list[i].name = json.result.obj.nickname;
									}
								});
					}
				}
			},
																	async get_url_subject_list() {
				const result = await this.$get("~/api/subject/get_list", null);
				for (let i = 0; i < result.result.list.length; i++) {
					this.bar_obj_subject_exam.tabs.push(result.result.list[i].name)
				}
				await this.get_url_subject_exam_list(this.bar_obj_subject_exam.tabs[0])
				this.bar_obj_subject_exam.names = [this.bar_obj_subject_exam.tabs[0]]
			},
			async get_url_subject_exam_list(e) {
				const json = await this.$get("~/api/subject_exam/get_list?subject_name=" + e)
				const allResult = []
				this.bar_obj_subject_exam.xAxis = []
				for (let j = 0; j < json.result.list.length; j++) {
					this.bar_obj_subject_exam.xAxis.push(json.result.list[j].name)
					const value = await this.$get("~/api/subject_user_answer/get_list", {
						user_id: this.$store.state.user.user_id,
						exam_id: json.result.list[j].exam_id,
					})
					for (let k = 0; k < value.result.list.length; k++) {
						allResult.push([value.result.list[k].score])
					}
				}
				this.bar_obj_subject_exam.values = allResult
				this.bar_obj_subject_exam.names = [e]
			}
		},
		created() {
										this.get_url_subject_list();
		},
		components: {
			subjectExamCharts,
			list_admin_menu_user
		},
	};
</script>

<style scoped>
	.container {
		min-height: 800px;
	}
</style>
