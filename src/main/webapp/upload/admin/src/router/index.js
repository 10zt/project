import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue';
import login from '../views/login.vue';
import forgot from '../views/forgot.vue';
import register from '../views/register.vue';
Vue.use(VueRouter)

const routes = [
    // 主页
    {
        path: '/',
        name: 'index',
        component: index,
        meta: {
            index: 0,
            title: '首页'
        }
    },

    // 登录
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            index: 0,
            title: '登录'
        }
    },

            // 注册
        {
            path: '/register',
            name: 'register',
            component: register,
            meta: {
                index: 0,
                title: '注册'
            }
        },
    
    // 忘记密码
    {
        path: '/forgot',
        name: "forgot",
        component: forgot,
        meta: {
            index: 0,
            title: '忘记密码'
        }
    },

    // 修改密码
    {
        path: '/user/password',
        name: "password",
        component: () => import("../views/user/password.vue"),
        meta: {
            index: 0,
            title: '修改密码'
        }
    },

    // 视频播放页
    {
        path: "/media/video",
        name: "video",
        component: () => import('../views/media/video.vue'),
        meta: {
            index: 0,
            title: "视频"
        }
    },

    // 音频播放页
    {
        path: "/media/audio",
        name: "audio",
        component: () => import('../views/media/audio.vue'),
        meta: {
            index: 0,
            title: "音频"
        }
    },

    
    
                // 轮播图路由
        {
            path: '/slides/table',
            name: 'slides_table',
            component: () => import('../views/slides/table.vue'),
            meta: {
                index: 0,
                title: '轮播图列表'
            }
        },
        {
            path: '/slides/view',
            name: 'slides_view',
            component: () => import('../views/slides/view.vue'),
            meta: {
                index: 0,
                title: '轮播图详情'
            }
        },
                    // 文章路由
            {
                path: '/article/table',
                name: 'article_table',
                component: () => import('../views/article/table.vue'),
                meta: {
                    index: 0,
                    title: '文章列表'
                }
            },
            {
                path: '/article/view',
                name: 'article_view',
                component: () => import('../views/article/view.vue'),
                meta: {
                    index: 0,
                    title: '文章详情'
                }
            },

            // 文章分类路由
            {
                path: '/article_type/table',
                name: 'article_type_table',
                component: () => import('../views/article_type/table.vue'),
                meta: {
                    index: 0,
                    title: '文章分类列表'
                }
            },
            {
                path: '/article_type/view',
                name: 'article_type_view',
                component: () => import('../views/article_type/view.vue'),
                meta: {
                    index: 0,
                    title: '文章分类详情'
                }
            },
                // 敏感词路由
        {
            path: '/sensitive_vocabulary/table',
            name: 'sensitive_vocabulary_table',
            component: () => import('../views/sensitive_vocabulary/table.vue'),
            meta: {
                index: 0,
                title: '敏感词列表'
            }
        },
        {
            path: '/sensitive_vocabulary/view',
            name: 'sensitive_vocabulary_view',
            component: () => import('../views/sensitive_vocabulary/view.vue'),
            meta: {
                index: 0,
                title: '敏感词详情'
            }
        },
            
            // 留言板路由
        {
            path: '/message/table',
            name: 'message_table',
            component: () => import('../views/message/table.vue'),
            meta: {
                index: 0,
                title: '留言反馈列表'
            }
        },
        {
            path: '/message/view',
            name: 'message_view',
            component: () => import('../views/message/view.vue'),
            meta: {
                index: 0,
                title: '留言反馈详情'
            }
        },
    
    
            // 公告路由
        {
            path: '/notice/table',
            name: 'notice_table',
            component: () => import('../views/notice/table.vue'),
            meta: {
                index: 0,
                title: '通知公告列表'
            }
        },
        {
            path: '/notice/view',
            name: 'notice_view',
            component: () => import('../views/notice/view.vue'),
            meta: {
                index: 0,
                title: '通知公告详情'
            }
        },
                    // 科目模块-考试路由
        {
            path: '/exam_subject/exams_table',
            name: 'exam_table',
            component: () => import('../views/exam_subject/exams_table.vue'),
            meta: {
                index: 0,
                title: '考试管理'
            }
        },
        // 自动题库
        {
            path: '/exam_subject/genQuestion',
            name: 'exam_genQuestion',
            component: () => import('../views/exam_subject/genQuestion.vue'),
            meta: {
                index: 0,
                title: '自动题库'
            }
        },
        //科目模块-考试详情
        {
            path: '/exam_subject/exams_view',
            name: 'exam_view',
            component: () => import('../views/exam_subject/exams_view.vue'),
            meta: {
                index: 0,
                title: '考试详情'
            }
        },
        //科目列表
        {
            path: '/exam_subject/table',
            name: 'subject_table',
            component: () => import('../views/exam_subject/table.vue'),
            meta: {
                index: 0,
                title: '科目列表'
            }
        },
        //科目详情
        {
            path: '/exam_subject/view',
            name: 'subject_view',
            component: () => import('../views/exam_subject/view.vue'),
            meta: {
                index: 0,
                title: '科目详情'
            }
        },
        {
            path: '/exam_subject/exams_db',
            name: 'exams_db',
            component: () => import('../views/exam_subject/exams_db.vue'),
            meta: {
                index: 0,
                title: '试题库'
            }
        },
        {
            path: '/exam_subject/wrong_list',
            name: 'wrong_list',
            component: () => import('../views/exam_subject/wrong_list.vue'),
            meta: {
                index: 0,
                title: '错题记录'
            }
        },
        {
            path: '/exam_subject/answer_wrong_view',
            name: 'question_view',
            component: () => import('../views/exam_subject/answer_wrong_view.vue'),
            meta: {
                index: 0,
                title: '错题详情'
            }
        },
        {
            path: '/exam_subject/question_table',
            name: 'question_table_table',
            component: () => import('../views/exam_subject/question_table.vue'),
            meta: {
                index: 0,
                title: '题库列表'
            }
        },
        {
            path: '/exam_subject/question_view',
            name: 'question_view_view',
            component: () => import('../views/exam_subject/question_view.vue'),
            meta: {
                index: 0,
                title: '题库详情'
            }
        },

        {
            path: '/exam_subject/question_database_table',
            name: 'question_database_table',
            component: () => import('../views/exam_subject/question_database_table.vue'),
            meta: {
                index: 0,
                title: '题库列表'
            }
        },
        {
            path: '/exam_subject/question_database_view',
            name: 'question_database_view',
            component: () => import('../views/exam_subject/question_database_view.vue'),
            meta: {
                index: 0,
                title: '题库详情'
            }
        },
        //科目模块-答题
        {
            path: '/exam_subject/answer_view',
            name: 'answer_view_view',
            component: () => import('../views/exam_subject/answer_view.vue'),
            meta: {
                index: 0,
                title: '答题'
            }
        },
        //科目模块-评分列表
        {
            path: '/exam_subject/score_table',
            name: 'score_table_table',
            component: () => import('../views/exam_subject/score_table.vue'),
            meta: {
                index: 0,
                title: '评分列表'
            }
        },
        //科目模块-评分详情
        {
            path: '/exam_subject/score_view',
            name: 'score_view_view',
            component: () => import('../views/exam_subject/score_view.vue'),
            meta: {
                index: 0,
                title: '评分详情'
            }
        },
        
            // 评论路由
        {
            path: '/comment/table',
            name: 'comment_table',
            component: () => import('../views/comment/table.vue'),
            meta: {
                index: 0,
                title: '评论列表'
            }
        },
        {
            path: '/comment/view',
            name: 'comment_view',
            component: () => import('../views/comment/view.vue'),
            meta: {
                index: 0,
                title: '评论详情'
            }
        },
        
            // 教师用户路由
        {
            path: '/teacher_users/table',
            name: 'teacher_users_table',
            component: () => import('../views/teacher_users/table.vue'),
            meta: {
                index: 0,
                title: '教师用户列表'
            }
        },
        {
            path: '/teacher_users/view',
            name: 'teacher_users_view',
            component: () => import('../views/teacher_users/view.vue'),
            meta: {
                index: 0,
                title: '教师用户详情'
            }
        },
            // 学生用户路由
        {
            path: '/student_users/table',
            name: 'student_users_table',
            component: () => import('../views/student_users/table.vue'),
            meta: {
                index: 0,
                title: '学生用户列表'
            }
        },
        {
            path: '/student_users/view',
            name: 'student_users_view',
            component: () => import('../views/student_users/view.vue'),
            meta: {
                index: 0,
                title: '学生用户详情'
            }
        },
            // 班级教师路由
        {
            path: '/class_teacher/table',
            name: 'class_teacher_table',
            component: () => import('../views/class_teacher/table.vue'),
            meta: {
                index: 0,
                title: '班级教师列表'
            }
        },
        {
            path: '/class_teacher/view',
            name: 'class_teacher_view',
            component: () => import('../views/class_teacher/view.vue'),
            meta: {
                index: 0,
                title: '班级教师详情'
            }
        },
            // 课程信息路由
        {
            path: '/course_information/table',
            name: 'course_information_table',
            component: () => import('../views/course_information/table.vue'),
            meta: {
                index: 0,
                title: '课程信息列表'
            }
        },
        {
            path: '/course_information/view',
            name: 'course_information_view',
            component: () => import('../views/course_information/view.vue'),
            meta: {
                index: 0,
                title: '课程信息详情'
            }
        },
            // 学习课程路由
        {
            path: '/learning_courses/table',
            name: 'learning_courses_table',
            component: () => import('../views/learning_courses/table.vue'),
            meta: {
                index: 0,
                title: '学习课程列表'
            }
        },
        {
            path: '/learning_courses/view',
            name: 'learning_courses_view',
            component: () => import('../views/learning_courses/view.vue'),
            meta: {
                index: 0,
                title: '学习课程详情'
            }
        },
            // 学习进度路由
        {
            path: '/rate_of_learning/table',
            name: 'rate_of_learning_table',
            component: () => import('../views/rate_of_learning/table.vue'),
            meta: {
                index: 0,
                title: '学习进度列表'
            }
        },
        {
            path: '/rate_of_learning/view',
            name: 'rate_of_learning_view',
            component: () => import('../views/rate_of_learning/view.vue'),
            meta: {
                index: 0,
                title: '学习进度详情'
            }
        },
            // 学生分数路由
        {
            path: '/student_score/table',
            name: 'student_score_table',
            component: () => import('../views/student_score/table.vue'),
            meta: {
                index: 0,
                title: '学生分数列表'
            }
        },
        {
            path: '/student_score/view',
            name: 'student_score_view',
            component: () => import('../views/student_score/view.vue'),
            meta: {
                index: 0,
                title: '学生分数详情'
            }
        },
    
    // 用户路由
    {
        path: '/user/table',
        name: 'user_table',
        component: () => import('../views/user/table.vue'),
        meta: {
            index: 0,
            title: '用户列表'
        }
    },
    {
        path: '/user/view',
        name: 'user_view',
        component: () => import('../views/user/view.vue'),
        meta: {
            index: 0,
            title: '用户详情'
        }
    },
    {
        path: '/user/info',
        name: 'user_info',
        component: () => import('../views/user/info.vue'),
        meta: {
            index: 0,
            title: '个人信息'
        }
    },
    // 用户组路由
    {
        path: '/user_group/table',
        name: 'user_group_table',
        component: () => import('../views/user_group/table.vue'),
        meta: {
            index: 0,
            title: '用户组列表'
        }
    },
    {
        path: '/user_group/view',
        name: 'user_group_view',
        component: () => import('../views/user_group/view.vue'),
        meta: {
            index: 0,
            title: '用户组详情'
        }
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    let token = to.query.token;
    if (token) {
        $.db.set("token", token, 120);
    }
    next();
})

router.afterEach((to, from, next) => {
    let title = "在线学习考试系统-admin";
    document.title = title;
})

export default router
