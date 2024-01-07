<template>
  <div class="page_search search_index">
	<div class="warp">
	  <div class="container">
		<div class="row">
		  <div class="col-12">
			<div class="card_result_search">
			  <div class="title">搜索结果</div>

				<!-- 文章搜索结果 -->
			  <list_result_search
				:list="result_article"
				title="校园资讯"
				source_table="article"
			  ></list_result_search>


						  <list_result_search
				v-if="$check_action('/teacher_users/list', 'get')"
				:list="result_teacher_users_teachers_name"
				title="教师用户教师姓名"
				source_table="teacher_users"
			  ></list_result_search>
																		  <list_result_search
				v-if="$check_action('/student_users/list', 'get')"
				:list="result_student_users_student_name"
				title="学生用户学生姓名"
				source_table="student_users"
			  ></list_result_search>
																								  <list_result_search
				v-if="$check_action('/class_teacher/list', 'get')"
				:list="result_class_teacher_user_name"
				title="班级教师用户姓名"
				source_table="class_teacher"
			  ></list_result_search>
																		  <list_result_search
				v-if="$check_action('/course_information/list', 'get')"
				:list="result_course_information_course_name"
				title="课程信息课程名称"
				source_table="course_information"
			  ></list_result_search>
																																				  <list_result_search
				v-if="$check_action('/learning_courses/list', 'get')"
				:list="result_learning_courses_student_name"
				title="学习课程学生姓名"
				source_table="learning_courses"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/learning_courses/list', 'get')"
				:list="result_learning_courses_course_name"
				title="学习课程课程名称"
				source_table="learning_courses"
			  ></list_result_search>
															  <list_result_search
				v-if="$check_action('/rate_of_learning/list', 'get')"
				:list="result_rate_of_learning_student_name"
				title="学习进度学生姓名"
				source_table="rate_of_learning"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/rate_of_learning/list', 'get')"
				:list="result_rate_of_learning_course_name"
				title="学习进度课程名称"
				source_table="rate_of_learning"
			  ></list_result_search>
															  <list_result_search
				v-if="$check_action('/student_score/list', 'get')"
				:list="result_student_score_student_name"
				title="学生分数学生姓名"
				source_table="student_score"
			  ></list_result_search>
															</div>
		  </div>
		</div>
	  </div>
	</div>
  </div>
</template>

<script>
import mixin from "../../mixins/page.js";
import list_result_search from "../../components/diy/list_result_search.vue";

export default {
  mixins: [mixin],
  data() {
	return {
	  "query": {
		word: "",
	  },
	  "result_article": [],
						"result_teacher_users_teachers_name":[],
																		"result_student_users_student_name":[],
																								"result_class_teacher_user_name":[],
																		"result_course_information_course_name":[],
																																				"result_learning_courses_student_name":[],
								"result_learning_courses_course_name":[],
															"result_rate_of_learning_student_name":[],
								"result_rate_of_learning_course_name":[],
															"result_student_score_student_name":[],
													};
  },
  methods: {
	/**
	 * 获取文章
	 */
	get_article() {
	  this.$get("~/api/article/get_list?like=0", { page: 1, size: 10, title: this.query.word }, (json) => {
		if (json.result) {
		  this.result_article = json.result.list;
		}
	  });
	},

				/**
	 * 获取teachers_name
	 */
	get_teacher_users_teachers_name(){
		let url = "~/api/teacher_users/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "teachers_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_teacher_users_teachers_name = json.result.list;
			result_teacher_users_teachers_name.map(o => o.title = o['teachers_name'])
	  			this.result_teacher_users_teachers_name = result_teacher_users_teachers_name
		 	}
		});
	},
																/**
	 * 获取student_name
	 */
	get_student_users_student_name(){
		let url = "~/api/student_users/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "student_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_student_users_student_name = json.result.list;
			result_student_users_student_name.map(o => o.title = o['student_name'])
	  			this.result_student_users_student_name = result_student_users_student_name
		 	}
		});
	},
																						/**
	 * 获取user_name
	 */
	get_class_teacher_user_name(){
		let url = "~/api/class_teacher/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "user_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_class_teacher_user_name = json.result.list;
			result_class_teacher_user_name.map(o => o.title = o['user_name'])
	  			this.result_class_teacher_user_name = result_class_teacher_user_name
		 	}
		});
	},
																/**
	 * 获取course_name
	 */
	get_course_information_course_name(){
		let url = "~/api/course_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "course_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_course_information_course_name = json.result.list;
			result_course_information_course_name.map(o => o.title = o['course_name'])
	  			this.result_course_information_course_name = result_course_information_course_name
		 	}
		});
	},
																																		/**
	 * 获取student_name
	 */
	get_learning_courses_student_name(){
		let url = "~/api/learning_courses/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "student_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_learning_courses_student_name = json.result.list;
			result_learning_courses_student_name.map(o => o.title = o['student_name'])
	  			this.result_learning_courses_student_name = result_learning_courses_student_name
		 	}
		});
	},
						/**
	 * 获取course_name
	 */
	get_learning_courses_course_name(){
		let url = "~/api/learning_courses/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "course_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_learning_courses_course_name = json.result.list;
			result_learning_courses_course_name.map(o => o.title = o['course_name'])
	  			this.result_learning_courses_course_name = result_learning_courses_course_name
		 	}
		});
	},
													/**
	 * 获取student_name
	 */
	get_rate_of_learning_student_name(){
		let url = "~/api/rate_of_learning/get_list?like=0";
				url = url+"&examine_state=已通过";
				this.$get(url, { page: 1, size: 10, "student_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_rate_of_learning_student_name = json.result.list;
			result_rate_of_learning_student_name.map(o => o.title = o['student_name'])
	  			this.result_rate_of_learning_student_name = result_rate_of_learning_student_name
		 	}
		});
	},
						/**
	 * 获取course_name
	 */
	get_rate_of_learning_course_name(){
		let url = "~/api/rate_of_learning/get_list?like=0";
				url = url+"&examine_state=已通过";
				this.$get(url, { page: 1, size: 10, "course_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_rate_of_learning_course_name = json.result.list;
			result_rate_of_learning_course_name.map(o => o.title = o['course_name'])
	  			this.result_rate_of_learning_course_name = result_rate_of_learning_course_name
		 	}
		});
	},
													/**
	 * 获取student_name
	 */
	get_student_score_student_name(){
		let url = "~/api/student_score/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "student_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_student_score_student_name = json.result.list;
			result_student_score_student_name.map(o => o.title = o['student_name'])
	  			this.result_student_score_student_name = result_student_score_student_name
		 	}
		});
	},
												
  },
  components: { list_result_search },
	created(){
    this.query.word = this.$route.query.word || "";
  },
  mounted() {
	this.get_article();
					this.get_teacher_users_teachers_name();
																	this.get_student_users_student_name();
																							this.get_class_teacher_user_name();
																	this.get_course_information_course_name();
																																			this.get_learning_courses_student_name();
							this.get_learning_courses_course_name();
														this.get_rate_of_learning_student_name();
							this.get_rate_of_learning_course_name();
														this.get_student_score_student_name();
												  },
  watch: {
	$route() {
	  $.push(this.query, this.$route.query);
	  this.get_article();
				  this.get_teacher_users_teachers_name();
																  this.get_student_users_student_name();
																						  this.get_class_teacher_user_name();
																  this.get_course_information_course_name();
																																		  this.get_learning_courses_student_name();
						  this.get_learning_courses_course_name();
													  this.get_rate_of_learning_student_name();
						  this.get_rate_of_learning_course_name();
													  this.get_student_score_student_name();
													},
  },
};
</script>

<style scoped>
.card_search {
  text-align: center;
}
.card_result_search>.title {
  text-align: center;
  padding: 10px 0;
}
</style>
