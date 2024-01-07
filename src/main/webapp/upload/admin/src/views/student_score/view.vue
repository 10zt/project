<template>
	<el-main class="bg edit_wrap comtable_e">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">
		<el-row class="row_ce"> 
							<el-col v-if="user_group === '管理员' || $check_field('get','student_users') || $check_field('add','student_users') || $check_field('set','student_users')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="学生用户" prop="student_users">
													<el-select v-if="user_group === '管理员' || (form['student_score_id'] && $check_field('set','student_users')) || (!form['student_score_id'] && $check_field('add','student_users'))" id="student_users" v-model="form['student_users']" :disabled="disabledObj['student_users_isDisabled']">
							<el-option v-for="o in list_user_student_users" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
						<el-select v-else-if="$check_field('get','student_users')" id="student_users" v-model="form['student_users']" :disabled="true">
							<el-option v-for="o in list_user_student_users" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','student_name') || $check_field('add','student_name') || $check_field('set','student_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="学生姓名" prop="student_name">
								<el-select id="student_name" v-model="form['student_name']"						v-if="user_group === '管理员' || (form['student_score_id'] && $check_field('set','student_name')) || (!form['student_score_id'] && $check_field('add','student_name'))">
						<el-option v-for="o in list_student_name" :key="o['student_name']" :label="o['student_name']"
							:value="o['student_name']">
						</el-option>
					</el-select>
					<div v-else-if="$check_field('get','student_name')">{{form['student_name']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','average_score') || $check_field('add','average_score') || $check_field('set','average_score')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="平均分数" prop="average_score">
								<el-input-number id="average_score" v-model.number="form['average_score']"
						v-if="user_group === '管理员' || (form['student_score_id'] && $check_field('set','average_score')) || (!form['student_score_id'] && $check_field('add','average_score'))" :disabled="disabledObj['average_score_isDisabled']"></el-input-number>
					<div v-else-if="$check_field('get','average_score')">{{form['average_score']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','highest_score') || $check_field('add','highest_score') || $check_field('set','highest_score')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="最高得分" prop="highest_score">
								<el-input-number id="highest_score" v-model.number="form['highest_score']"
						v-if="user_group === '管理员' || (form['student_score_id'] && $check_field('set','highest_score')) || (!form['student_score_id'] && $check_field('add','highest_score'))" :disabled="disabledObj['highest_score_isDisabled']"></el-input-number>
					<div v-else-if="$check_field('get','highest_score')">{{form['highest_score']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','minimum_score') || $check_field('add','minimum_score') || $check_field('set','minimum_score')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="最低分数" prop="minimum_score">
								<el-input-number id="minimum_score" v-model.number="form['minimum_score']"
						v-if="user_group === '管理员' || (form['student_score_id'] && $check_field('set','minimum_score')) || (!form['student_score_id'] && $check_field('add','minimum_score'))" :disabled="disabledObj['minimum_score_isDisabled']"></el-input-number>
					<div v-else-if="$check_field('get','minimum_score')">{{form['minimum_score']}}</div>
							</el-form-item>
			</el-col>
					
	
	
	
	
	
	
		</el-row>
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item v-if="$check_action('/student_score/view','set') || $check_action('/student_score/view','add') || $check_option('/student_score/table','examine')">
					<el-button type="primary" @click="submit()">提交</el-button>
					<el-button @click="cancel()">取消</el-button>
				</el-form-item>
				<el-form-item v-else>
					<el-button @click="cancel()">返回</el-button>
				</el-form-item>
			</el-col>

		</el-form>
	</el-main>
</template>

<script>
	import mixin from "@/mixins/page.js";

	export default {
		mixins: [mixin],
		data() {
			return {
				field: "student_score_id",
				url_add: "~/api/student_score/add?",
				url_set: "~/api/student_score/set?",
				url_get_obj: "~/api/student_score/get_obj?",
				url_upload: "~/api/student_score/upload?",

				query: {
					"student_score_id": 0,
				},

				form: {
								"student_users": 0, // 学生用户
										"student_name":  '', // 学生姓名
										"average_score":  0, // 平均分数
										"highest_score":  0, // 最高得分
										"minimum_score":  0, // 最低分数
											"student_score_id": 0, // ID
						
				},
				disabledObj:{
								"student_users_isDisabled": false,
										"student_name_isDisabled": false,
					          			"average_score_isDisabled": false,
					          			"highest_score_isDisabled": false,
					          			"minimum_score_isDisabled": false,
										},

	
					// 用户列表
				list_user_student_users: [],
										// 学生姓名选项列表
				list_student_name: [""],
	
		
		
		
	
			}
		},
		methods: {


	
	
				/**
			 * 获取学生用户用户列表
			 */
			async get_list_user_student_users() {
                // if(this.user_group !== "管理员" && this.form["student_users"] === 0) {
                //     this.form["student_users"] = this.user.user_id;
                // }
                var json = await this.$get("~/api/user/get_list?user_group=学生用户");
                if(json.result && json.result.list){
                    this.list_user_student_users = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
					get_user_student_users(id){
				var obj = this.list_user_student_users.getObj({"user_id":id});
				var ret = "";
				if(obj){
					if(obj.nickname){
						ret = obj.nickname;}
					else{
						ret = obj.username;
					}
				}
				return ret;
			},
			
				/**
			 * 获取学生姓名列表
			 */
			async get_list_student_name() {
				var json = await this.$get("~/api/student_users/get_list?");
				if(json.result && json.result.list){
					this.list_student_name = json.result.list;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
					
			
	
			
	
			
	
		
			/**
			 * 获取对象之前
			 * @param {Object} param
			 */
			get_obj_before(param) {
				var form = "";
													
				if(this.form && form){
					Object.keys(this.form).forEach(key => {
						Object.keys(form).forEach(dbKey => {
							// if(dbKey === "charging_standard"){
							// 	this.form['charging_rules'] = form[dbKey];
							// 	this.disabledObj['charging_rules_isDisabled'] = true;
							// };
							if(key === dbKey){
								this.disabledObj[key+'_isDisabled'] = true;
							}
						})
					})
				}
														$.db.del("form");

				return param;
			},

			/**
			 * 获取对象之后
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json, func){
																				

			},

			/**
			 * 提交前验证事件
			 * @param {Object} 请求参数
			 * @return {String} 验证成功返回null, 失败返回错误提示
			 */
			submit_check(param) {
																																																			return null;
			},

			is_view(){
				var bl = this.user_group == "管理员";

				if(!bl){
					bl = this.$check_action('/student_score/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/student_score/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/student_score/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/student_score/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/student_score/view','get');
					console.log(bl ? "你有视图查询权限视作有查询权限" : "你没有视图查询权限");
				}

				console.log(bl ? "具有当前页面的查看权，请注意这不代表你有字段的查看权" : "无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行");

				return bl;
			},
			/**
			 * 上传文件
			 * @param {Object} param
			 */
			uploadimg(param) {
				this.uploadFile(param.file, "avatar");
			},

		},
		created() {
					this.get_list_user_student_users();
							this.get_list_student_name();
										},
	}
</script>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}




</style>
