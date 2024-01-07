<template>
	<div>
			<el-form-item v-if="$check_register_field('add','teachers_name','/teacher_users/view')" label="教师姓名" prop="teachers_name">
				<el-input id="teachers_name" v-model="form['teachers_name']" placeholder="请输入教师姓名"></el-input>
				</el-form-item>
				<el-form-item v-if="$check_register_field('add','teacher_gender','/teacher_users/view')" label="教师性别" prop="teacher_gender">
				<el-select id="teacher_gender" v-model="form['teacher_gender']">
			<el-option v-for="o in list_teacher_gender" :key="o" :label="o" :value="o">
			</el-option>
		</el-select>
				</el-form-item>
				<el-form-item v-if="$check_register_field('add','contact_phone_number','/teacher_users/view')" label="联系电话" prop="contact_phone_number">
				<el-input id="contact_phone_number" v-model="form['contact_phone_number']" placeholder="请输入联系电话" type="tel">
		</el-input>
				</el-form-item>
				<el-form-item v-if="$check_register_field('add','family_information','/teacher_users/view')" label="系别信息" prop="family_information">
				<el-input id="family_information" v-model="form['family_information']" placeholder="请输入系别信息"></el-input>
				</el-form-item>
	
	</div>
</template>

<script>
	import mixin from "@/mixins/component.js";

	export default {
		mixins: [mixin],
		props:{

			form:{
				type: Object,
				default: function(){
					return {
							"teachers_name":  '' ,
								"teacher_gender":  '' ,
								"contact_phone_number":  '' ,
								"family_information":  '' ,
						}
				}
			},

		},
		data() {
			return {
				field: "teacher_users_id",
				url_add: "~/api/teacher_users/add?",
				url_set: "~/api/teacher_users/set?",
				url_upload: "~/api/teacher_users/upload?",

								list_teacher_gender: ['男','女'],
							rules: {
					"teachers_name": [    {required: true,message: '教师姓名不能为空'},  ],
					"teacher_gender": [    {required: true,message: '教师性别不能为空'},  ],
					"contact_phone_number": [   {validator: this.$is_phone,trigger: 'blur'},   {required: true,message: '联系电话不能为空'},  ],
					"family_information": [    {required: true,message: '系别信息不能为空'},  ],
				}

			}
		},
		methods: {

	
	
	

	
	
	

	
	
	

	
	
	

		},
		created() {
						}
	}
</script>
