<template>
	<div class="diy_edit page_learning_courses" id="learning_courses_edit">
		<div class='warp'>
			<div class='container'>
				<div class='row diy_edit_content_box'>
						<div v-if="$check_field('set','student_users') || $check_field('add','student_users') || $check_field('get','student_users')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								学生用户:
							</span>
						</div>
						<div class="diy_field diy_down">
							<select id="form_student_users" :disabled="disabledObj['student_users_isDisabled']" v-model="form['student_users']" v-if="(form['student_users'] && $check_field('set','student_users')) || (!form['student_users'] && $check_field('add','student_users'))" >
								<option v-for="o in list_user_student_users" :value="o['user_id']">
									{{o['nickname'] + '-' + o['username']}}
								</option>
							</select>
							<span v-else-if="$check_field('get','student_users')">{{ form['student_users'] }}</span>
						</div>
					</div>
							<div v-if="$check_field('set','student_name') || $check_field('add','student_name') || $check_field('get','student_name')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								学生姓名:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_student_name" v-model="form['student_name']" placeholder="请输入学生姓名" v-if="(form['student_name'] && $check_field('set','student_name')) || (!form['student_name'] && $check_field('add','student_name'))"  :disabled="disabledObj['student_name_isDisabled']"/>
							<span v-else-if="$check_field('get','student_name')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','course_name') || $check_field('add','course_name') || $check_field('get','course_name')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								课程名称:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_course_name" v-model="form['course_name']" placeholder="请输入课程名称" v-if="(form['course_name'] && $check_field('set','course_name')) || (!form['course_name'] && $check_field('add','course_name'))"  :disabled="disabledObj['course_name_isDisabled']"/>
							<span v-else-if="$check_field('get','course_name')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','course_date') || $check_field('add','course_date') || $check_field('get','course_date')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								课程日期:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_course_date" v-model="form['course_date']" placeholder="请输入课程日期" v-if="(form['course_date'] && $check_field('set','course_date')) || (!form['course_date'] && $check_field('add','course_date'))"  :disabled="disabledObj['course_date_isDisabled']"/>
							<span v-else-if="$check_field('get','course_date')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
	




				</div>
				<div class="diy_edit_submit_box row">
					<div class="col-12">
						<div class="btn_box">
							<button class="btn_submit" @click="submit()">提交</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import mixin from "@/mixins/page.js";
	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				url_get_obj: "~/api/learning_courses/get_obj?",
				url_add: "~/api/learning_courses/add?",
				url_set: "~/api/learning_courses/set?",

				// 登录权限
				oauth: {
					"signIn": true,
					"user_group": []
				},

				// 查询条件
				query: {
						"student_users": 0,
							"student_name": "",
							"course_name": "",
							"course_date": "",
						"learning_courses_id": 0,
				},

				obj: {
						"student_users": 0, // 学生用户
							"student_name":  '', // 学生姓名
							"course_name":  '', // 课程名称
							"course_date":  '', // 课程日期
						"learning_courses_id": 0,
				},

				// 表单字段
				form: {
						"student_users": 0, // 学生用户
							"student_name":  '', // 学生姓名
							"course_name":  '', // 课程名称
							"course_date":  '', // 课程日期
						"learning_courses_id": 0,
				},
				disabledObj:{
						"student_users_isDisabled": false,
							"student_name_isDisabled": false,
							"course_name_isDisabled": false,
							"course_date_isDisabled": false,
					},

						// 用户列表
				list_user_student_users: [],
							
				// ID字段
				field: "learning_courses_id",

			}
		},
		methods: {
      /**
       * 提交前验证事件
       * @param {Object} 请求参数
       * @return {String} 验证成功返回null, 失败返回错误提示
       */
      submit_check(param) {
																        return null;
      },
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
					async get_user_session_student_users(){
				var _this = this;
				var json = await this.$get("~/api/user_group/get_obj?name=学生用户");
				if(json.result && json.result.obj){
					var source_table = json.result.obj.source_table;
					var user_id = _this.$store.state.user.user_id;
					if (user_id){
						var url = "~/api/"+source_table+"/get_obj?"
						this.$get(url, {"user_id":_this.$store.state.user.user_id}, function(res) {
							if (res.result && res.result.obj) {
								var arr = []
								for (let key in res.result.obj) {
									arr.push(key)
								}
								var arrForm = []
								for (let key in _this.form) {
									arrForm.push(key)
								}
								_this.form["student_users"] = user_id
								_this.disabledObj['student_users' + '_isDisabled'] = true
								for (var i=0;i<arr.length;i++){
                  if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
                    for (var j = 0; j < arrForm.length; j++) {
                      if (arr[i] === arrForm[j]) {
                        if (arr[i] !== "student_users") {
                          _this.form[arrForm[j]] = res.result.obj[arr[i]]
                          _this.disabledObj[arrForm[j] + '_isDisabled'] = true
                          break;
                        }
                      }
                    }
                  }
								}
							}
						});
					}
				}
				else if(json.error){
					console.error(json.error);
				}
			},
	
				
				
				
	
			/**
			 * 修改文件
			 * @param { Object } files 上传文件对象
			 * @param { String } str 表单的属性名
			 */
			change_file(files, str) {
				var form = new FormData();
				form.append("file", files[0]);
				this.$post("~/api/learning_courses/upload?", form, (res) => {
					if (res.result) {
						this.form[str] = res.result.url;
					} else if (res.error) {
						this.$toast(res.error.message);
					}
				});
			},

			/**
			 * 获取对象后获取缓存表单
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_before(param){
				var form = $.db.get("form");
				// if (form) {
        //   delete(form.examine_state)
        //   delete(form.examine_reply)
        //   this.obj = $.push(this.obj ,form);
				// 	this.form = $.push(this.form ,form);
				// }
				// var arr = []
				// for (let key in form) {
				// 	arr.push(key)
				// }
				// for (var i=0;i<arr.length;i++){
				// 	this.disabledObj[arr[i] + '_isDisabled'] = true
				// }
        if (form) {
          var arr = []
          for (let key in form) {
            arr.push(key)
          }
          var arrForm = []
          for (let key in this.form) {
            arrForm.push(key)
          }
          for (var i=0;i<arr.length;i++){
            if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
              for (var j = 0; j < arrForm.length; j++) {
                if (arrForm[j] === arr[i]) {
                  this.form[arrForm[j]] = form[arr[i]]
                  this.obj[arrForm[j]] = form[arr[i]]
                  this.disabledObj[arrForm[j] + '_isDisabled'] = true
                  break;
                }
              }
            }
          }
        }
								
        $.db.del("form");
				return param;
			},

			/**
			 * 获取对象后获取缓存表单
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json ,func){
				// var form = $.db.get("form");
				// var obj = Object.assign({} ,form ,this.obj);
				// if (obj) {
        //   delete(obj.examine_state)
        //   delete(obj.examine_reply)
				// 	this.obj = $.push(this.obj ,obj);
				// }
				// if (form) {
        //   delete(form.examine_state)
        //   delete(form.examine_reply)
				// 	this.form = $.push(this.form ,form);
				// }

				if(func){
					func(json);
				}
			},

		},
		created() {
					this.get_user_session_student_users();
					this.get_list_user_student_users();
												},
	}
</script>

<style>




</style>
