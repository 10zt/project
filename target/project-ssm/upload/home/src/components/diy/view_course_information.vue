<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">
		<el-row class="row_ce"> 
							<el-col v-if="user_group === '管理员' || $check_field('get','teacher_users') || $check_field('add','teacher_users') || $check_field('set','teacher_users')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="教师用户" prop="teacher_users">
																		<div v-if="user_group !== '管理员'">
							{{ get_user_session_teacher_users(form['teacher_users']) }}
							<!--<el-input id="business_name" v-model="form['teacher_users']" placeholder="请输入教师用户"-->
							<!--v-if="user_group === '管理员' || (form['course_information_id'] && $check_field('set','teacher_users')) || (!form['course_information_id'] && $check_field('add','teacher_users'))" :disabled="disabledObj['teacher_users_isDisabled']"></el-input>-->
							<!--<div v-else-if="$check_field('get','teacher_users')">{{form['teacher_users']}}</div>-->
							<el-select v-if="user_group === '管理员' || (form['course_information_id'] && $check_field('set','teacher_users')) || (!form['course_information_id'] && $check_field('add','teacher_users'))" id="teacher_users" v-model="form['teacher_users']" :disabled="disabledObj['teacher_users_isDisabled']">
								<el-option v-for="o in list_user_teacher_users" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
							<el-select v-else-if="$check_field('get','teacher_users')" id="teacher_users" v-model="form['teacher_users']" :disabled="true">
								<el-option v-for="o in list_user_teacher_users" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
						</div>
						<el-select v-else id="teacher_users" v-model="form['teacher_users']" :disabled="disabledObj['teacher_users_isDisabled']">
							<el-option v-for="o in list_user_teacher_users" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
																</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','course_name') || $check_field('add','course_name') || $check_field('set','course_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="课程名称" prop="course_name">
												<el-input id="course_name" v-model="form['course_name']" placeholder="请输入课程名称"
							  v-if="user_group === '管理员' || (form['course_information_id'] && $check_field('set','course_name')) || (!form['course_information_id'] && $check_field('add','course_name'))" :disabled="disabledObj['course_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','course_name')">{{form['course_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','course_cover') || $check_field('add','course_cover') || $check_field('set','course_cover')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="课程封面" prop="course_cover">
								<el-upload :disabled="disabledObj['course_cover_isDisabled']" id="course_cover" class="avatar-uploader" drag
						accept="image/gif, image/jpeg, image/png, image/jpg" action="" :http-request="upload_course_cover"
						:show-file-list="false" v-if="user_group === '管理员' || (form['course_information_id'] && $check_field('set','course_cover')) || (!form['course_information_id'] && $check_field('add','course_cover'))">
						<img v-if="form['course_cover']" :src="$fullUrl(form['course_cover'])" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<el-image v-else-if="$check_field('get','course_cover')" style="width: 100px; height: 100px"
						:src="$fullUrl(form['course_cover'])" :preview-src-list="[$fullUrl(form['course_cover'])]">
						<div slot="error" class="image-slot">
							<img src="../../../public/img/error.png" style="width: 90px; height: 90px" />
						</div>
					</el-image>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','department_information') || $check_field('add','department_information') || $check_field('set','department_information')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="院系信息" prop="department_information">
												<el-input id="department_information" v-model="form['department_information']" placeholder="请输入院系信息"
							  v-if="user_group === '管理员' || (form['course_information_id'] && $check_field('set','department_information')) || (!form['course_information_id'] && $check_field('add','department_information'))" :disabled="disabledObj['department_information_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','department_information')">{{form['department_information']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','professional_information') || $check_field('add','professional_information') || $check_field('set','professional_information')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="专业信息" prop="professional_information">
												<el-input id="professional_information" v-model="form['professional_information']" placeholder="请输入专业信息"
							  v-if="user_group === '管理员' || (form['course_information_id'] && $check_field('set','professional_information')) || (!form['course_information_id'] && $check_field('add','professional_information'))" :disabled="disabledObj['professional_information_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','professional_information')">{{form['professional_information']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','class_name') || $check_field('add','class_name') || $check_field('set','class_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="班级名称" prop="class_name">
												<el-input id="class_name" v-model="form['class_name']" placeholder="请输入班级名称"
							  v-if="user_group === '管理员' || (form['course_information_id'] && $check_field('set','class_name')) || (!form['course_information_id'] && $check_field('add','class_name'))" :disabled="disabledObj['class_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','class_name')">{{form['class_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','course_date') || $check_field('add','course_date') || $check_field('set','course_date')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="课程日期" prop="course_date">
								<el-date-picker :disabled="disabledObj['course_date_isDisabled']" v-if="user_group === '管理员' || (form['course_information_id'] && $check_field('set','course_date')) || (!form['course_information_id'] && $check_field('add','course_date'))" id="course_date"
						v-model="form['course_date']" type="date" placeholder="选择日期">
					</el-date-picker>
					<div v-else-if="$check_field('get','course_date')">{{form['course_date']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','course_video') || $check_field('add','course_video') || $check_field('set','course_video')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="课程视频" prop="course_video">
												<el-upload v-if="user_group === '管理员' || (form['course_information_id'] && $check_field('set','course_video')) || (!form['course_information_id'] && $check_field('add','course_video'))" class="upload-demo" drag
						action="" style="max-width: 300px;width: 100%;" :http-request="upload_course_video" :limit="1" accept="video/ogg,video/mp4,video/webm">
						<i class="el-icon-upload"></i>
						<div class="el-upload__text">将视频拖到此处，或<em>点击上传</em></div>
					</el-upload>
					<div v-else-if="$check_field('get','course_video')">
						<el-button type="primary" @click="download(form['course_video'])">下载<i
								class="el-icon-download el-icon--right"></i></el-button>
					</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','course_attachments') || $check_field('add','course_attachments') || $check_field('set','course_attachments')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="课程附件" prop="course_attachments">
												<div v-if="disabledObj['course_attachments_isDisabled']">
						<div v-if="$check_field('get','course_attachments')">
							<el-button type="primary" @click="$download($fullUrl(form['course_attachments']),form['course_attachments'])">下载<i
									class="el-icon-download el-icon--right"></i></el-button>
						</div>
					</div>
					<div v-else>
						<el-upload v-if="user_group === '管理员' || (form['course_information_id'] && $check_field('set','course_attachments')) || (!form['course_information_id'] && $check_field('add','course_attachments'))" class="upload-demo" drag
								   action="" style="max-width: 300px;width: 100%;" :http-request="upload_course_attachments" :limit="1" accept="">
							<i class="el-icon-upload"></i>
							<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
						</el-upload>
						<div v-else-if="$check_field('get','course_attachments')">
							<el-button type="primary" @click="$download($fullUrl(form['course_attachments']),form['course_attachments'])">下载<i
									class="el-icon-download el-icon--right"></i></el-button>
						</div>
					</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','course_introduction') || $check_field('add','course_introduction') || $check_field('set','course_introduction')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="课程介绍" prop="course_introduction">
								<el-input type="textarea" id="course_introduction" v-model="form['course_introduction']" placeholder="请输入课程介绍"
						v-if="user_group === '管理员' || (form['course_information_id'] && $check_field('set','course_introduction')) || (!form['course_information_id'] && $check_field('add','course_introduction'))" :disabled="disabledObj['course_introduction_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','course_introduction')">{{form['course_introduction']}}</div>
							</el-form-item>
			</el-col>
					
	
	
	
	
	
	
	</el-row>
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item v-if="$check_action('/course_information/view','set') || $check_action('/course_information/view','add') || $check_option('/course_information/table','examine')">
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
				field: "course_information_id",
				url_add: "~/api/course_information/add?",
				url_set: "~/api/course_information/set?",
				url_get_obj: "~/api/course_information/get_obj?",
				url_upload: "~/api/course_information/upload?",

				query: {
					"course_information_id": 0,
				},

				form: {
								"teacher_users": 0, // 教师用户
										"course_name":  '', // 课程名称
										"course_cover":  '', // 课程封面
										"department_information":  '', // 院系信息
										"professional_information":  '', // 专业信息
										"class_name":  '', // 班级名称
										"course_date":  '', // 课程日期
										"course_video":  '', // 课程视频
										"course_attachments":  '', // 课程附件
										"course_introduction":  '', // 课程介绍
											"course_information_id": 0, // ID
						
				},
				disabledObj:{
								"teacher_users_isDisabled": false,
										"course_name_isDisabled": false,
										"course_cover_isDisabled": false,
										"department_information_isDisabled": false,
										"professional_information_isDisabled": false,
										"class_name_isDisabled": false,
										"course_date_isDisabled": false,
										"course_video_isDisabled": false,
										"course_attachments_isDisabled": false,
										"course_introduction_isDisabled": false,
										},

	
					// 用户列表
				list_user_teacher_users: [],
						// 用户组
				group_user_teacher_users: "",
				
		
		
		
		
		
		
		
		
	
			}
		},
		methods: {


	
	
				/**
			 * 获取教师用户用户列表
			 */
			async get_list_user_teacher_users() {
                var json = await this.$get("~/api/user/get_list?user_group=教师用户");
                if(json.result && json.result.list){
                    this.list_user_teacher_users = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
					/**
			 * 获取教师用户用户组
			 */
			async get_group_user_teacher_users() {
							this.form["teacher_users"] = this.$store.state.user.user_id;
							var json = await this.$get("~/api/user_group/get_obj?name=教师用户");
				if(json.result && json.result.obj){
					this.group_user_teacher_users = json.result.obj;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
			get_user_session_teacher_users(id){
				var _this = this;
				var user_id = {"user_id":id}
				var url = "~/api/"+_this.group_user_teacher_users.source_table+"/get_obj?"
				this.$get(url, user_id, function(res) {
					if (res.result && res.result.obj) {
						var arr = []
						for (let key in res.result.obj) {
							arr.push(key)
						}
						var arrForm = []
									for (let key in _this.form) {
							arrForm.push(key)
						}
												_this.form["teacher_users"] = id
									_this.disabledObj['teacher_users' + '_isDisabled'] = true
						for (var i=0;i<arr.length;i++){
						  if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
							for (var j = 0; j < arrForm.length; j++) {
							  if (arr[i] === arrForm[j]) {
								if (arr[i] !== "teacher_users") {
			                      _this.form[arrForm[j]] = res.result.obj[arr[i]]
			                      _this.disabledObj[arrForm[j] + '_isDisabled'] = true
								  break;
								} else {
								  _this.disabledObj[arrForm[j] + '_isDisabled'] = true
								}
							  }
							}
						  }
						}
					}
				});
			},
					get_user_teacher_users(id){
				var obj = this.list_user_teacher_users.getObj({"user_id":id});
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
			 * 上传课程封面
			 * @param {Object} param 图片参数
			 */
			upload_course_cover(param){
						this.uploadFile(param.file, "course_cover");
					},
	
	
			
	
			
	
			
	
			
	
						/**
			 * 上传课程视频
			 * @param {Object} param 视频参数
			 */
			upload_course_video(param){
						this.uploadFile(param.file, "course_video");
					},
	
	
						/**
			 * 上传课程附件
			 * @param {Object} param 文件参数
			 */
			upload_course_attachments(param){
						this.uploadFile(param.file, "course_attachments");
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
														        if (this.form["course_date"] && this.form["course_date"].indexOf("-")===-1){
          this.form["course_date"] = this.$toTime(parseInt(this.form["course_date"]),"yyyy-MM-dd")
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

																														if(this.form["course_date"]=="0000-00-00"){
				  this.form["course_date"] = null;
				}
				if(parseInt(this.form["course_date"]) > 9999){
					this.form["course_date"] = this.$toTime(parseInt(this.form["course_date"]),"yyyy-MM-dd")
				}
															

			},

			/**
			 * 提交前验证事件
			 * @param {Object} 请求参数
			 * @return {String} 验证成功返回null, 失败返回错误提示
			 */
			submit_check(param) {
																																																														if (!param.course_date){
					return "课程日期不能为空";
				}
																																								return null;
			},

			is_view(){
				var bl = this.user_group == "管理员";

				if(!bl){
					bl = this.$check_action('/course_information/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/course_information/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/course_information/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/course_information/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/course_information/view','get');
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
					this.get_list_user_teacher_users();
					this.get_group_user_teacher_users();
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
