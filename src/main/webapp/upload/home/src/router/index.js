import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue'
import login from '../views/account/login.vue';

Vue.use(VueRouter)

const routes = [
	// 主页ss
	{
		path: '/',
		name: 'index',
		component: index
	},
	// 登录
	{
		path: '/account/login',
		name: 'login',
		component: login
	},
	// 忘记密码
	{
		path: '/account/forgot',
		name: 'forgot',
		component: () => import('../views/account/forgot.vue')
	},
	// 注册账号
	{
		path: '/account/register',
		name: 'register',
		component: () => import('../views/account/register.vue')
	},
	// 媒体图片
	{
		path: '/media/image',
		name: 'media_image',
		component: () => import('../views/media/image.vue')
	},
	// 音乐
	{
		path: '/media/music',
		name: 'media_music',
		component: () => import('../views/media/music.vue')
	},
	// 媒体视频
	{
		path: '/media/video',
		name: 'media_video',
		component: () => import('../views/media/video.vue')
	},
	// 媒体视频
	{
		path: '/user_center/index',
		name: 'user_center_index',
		component: () => import('../views/user_center/index.vue')
	},
	// 文章路由
	{
		path: '/article/list',
		name: 'article_list',
		component: () => import('../views/article/list.vue')
	},
	{
		path: '/article/details',
		name: 'article_details',
		component: () => import('../views/article/details.vue')
	},
	// 浏览网站
	// 收藏路由
	{
		path: '/user/collect',
		name: 'collect_list',
		component: () => import('../views/user/collect.vue')
	},


	{
		path: '/comment/table',
		name: 'comment_table',
		component: () => import('../views/comment/table.vue')
	},
	{
		path: '/comment/view',
		name: 'comment_view',
		component: () => import('../views/comment/view.vue')
	},

		// 考试路由
	{
		path: '/subject_exam/list',
		name: 'exam_list',
		component: () => import('../views/subject_exam/list.vue')
	},
	{
		path: '/subject_exam/details',
		name: 'exam_details',
		component: () => import('../views/subject_exam/details.vue')
	},
	


	 // 留言路由
	 {
	 	path: '/message/list',
	 	name: 'message_list',
	 	component: () => import('../views/message/list.vue')
	 },
	 {
		path: '/message/edit',
		name: 'message_edit',
		component: () => import('../views/message/edit.vue')
	 },
	// 留言板路由
	{
		path: '/message/table',
		name: 'message_table',
		component: () => import('../views/message/table.vue')
	},
	{
		path: '/message/view',
		name: 'message_view',
		component: () => import('../views/message/view.vue')
	},

	// 公告路由
	{
		path: '/notice/list',
		name: 'notice_list',
		component: () => import('../views/notice/list.vue')
	},
	{
		path: '/notice/details',
		name: 'notice_details',
		component: () => import('../views/notice/details.vue')
	},
	// 教师用户表格路由
	{
		path: '/teacher_users/table',
		name: '/teacher_users_table',
		component: () => import('../views/teacher_users/table.vue')
	},
	// 教师用户详情路由
	{
		path: '/teacher_users/view',
		name: '/teacher_users_view',
		component: () => import('../views/teacher_users/view.vue')
	},
	
	
		// 学生用户表格路由
	{
		path: '/student_users/table',
		name: '/student_users_table',
		component: () => import('../views/student_users/table.vue')
	},
	// 学生用户详情路由
	{
		path: '/student_users/view',
		name: '/student_users_view',
		component: () => import('../views/student_users/view.vue')
	},
	
	
		// 班级教师表格路由
	{
		path: '/class_teacher/table',
		name: '/class_teacher_table',
		component: () => import('../views/class_teacher/table.vue')
	},
	// 班级教师详情路由
	{
		path: '/class_teacher/view',
		name: '/class_teacher_view',
		component: () => import('../views/class_teacher/view.vue')
	},
	
	
		// 课程信息表格路由
	{
		path: '/course_information/table',
		name: '/course_information_table',
		component: () => import('../views/course_information/table.vue')
	},
	// 课程信息详情路由
	{
		path: '/course_information/view',
		name: '/course_information_view',
		component: () => import('../views/course_information/view.vue')
	},
	
		// 课程信息列表路由
	{
		path: '/course_information/list',
		name: '/course_information_list',
		component: () => import('../views/course_information/list.vue')
	},
	
		// 课程信息详情路由
	{
		path: '/course_information/details',
		name: '/course_information_details',
		component: () => import('../views/course_information/details.vue')
	},
		// 学习课程表格路由
	{
		path: '/learning_courses/table',
		name: '/learning_courses_table',
		component: () => import('../views/learning_courses/table.vue')
	},
	// 学习课程详情路由
	{
		path: '/learning_courses/view',
		name: '/learning_courses_view',
		component: () => import('../views/learning_courses/view.vue')
	},
		// 学习课程添加路由
	{
		path: '/learning_courses/edit',
		name: '/learning_courses_edit',
		component: () => import('../views/learning_courses/edit.vue')
	},
	
	
		// 学习进度表格路由
	{
		path: '/rate_of_learning/table',
		name: '/rate_of_learning_table',
		component: () => import('../views/rate_of_learning/table.vue')
	},
	// 学习进度详情路由
	{
		path: '/rate_of_learning/view',
		name: '/rate_of_learning_view',
		component: () => import('../views/rate_of_learning/view.vue')
	},
	
	
		// 学生分数表格路由
	{
		path: '/student_score/table',
		name: '/student_score_table',
		component: () => import('../views/student_score/table.vue')
	},
	// 学生分数详情路由
	{
		path: '/student_score/view',
		name: '/student_score_view',
		component: () => import('../views/student_score/view.vue')
	},
	
	
	
	// 用户路由
	{
		path: '/user/index',
		name: 'user_index',
		component: () => import('../views/user/index.vue')
	},
	// 基本信息
	{
		path: '/user/info',
		name: 'user_info',
		component: () => import('../views/user/info.vue')
	},
	// 找回密码
	{
		path: '/user/password',
		name: 'user_password',
		component: () => import('../views/user/password.vue')
	},

	// 搜索
	{
		path: '/search',
		name: 'search',
		component: () => import('../views/search/index.vue')
	},
	// 局部搜索
	{
		path: '/search/details',
		name: 'search_details',
		component: () => import('../views/search/details.vue')
	}
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

router.afterEach((to, from, next) => {
	let title = "在线学习考试系统-home";
	document.title = title;
	document.logo = "在线学习考试系统"
})

export default router
