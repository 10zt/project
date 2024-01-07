<template>
  <div class="list_menu diy_menu">
    <router-link
            to="/user_center/index"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/user_center/index'}"
     >
      <span class="left_span">个人首页</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
    <router-link
            to="/teacher_users/table"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/teacher_users/table'}"
            v-if="user_group == '管理员' || $check_action('/teacher_users/table','get')">
      <span class="left_span">教师用户</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
    <router-link
            to="/student_users/table"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/student_users/table'}"
            v-if="user_group == '管理员' || $check_action('/student_users/table','get')">
      <span class="left_span">学生用户</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
    <router-link
            to="/class_teacher/table"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/class_teacher/table'}"
            v-if="user_group == '管理员' || $check_action('/class_teacher/table','get')">
      <span class="left_span">班级教师</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
    <router-link
            to="/course_information/table"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/course_information/table'}"
            v-if="user_group == '管理员' || $check_action('/course_information/table','get')">
      <span class="left_span">课程信息</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
    <router-link
            to="/learning_courses/table"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/learning_courses/table'}"
            v-if="user_group == '管理员' || $check_action('/learning_courses/table','get')">
      <span class="left_span">学习课程</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
    <router-link
            to="/rate_of_learning/table"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/rate_of_learning/table'}"
            v-if="user_group == '管理员' || $check_action('/rate_of_learning/table','get')">
      <span class="left_span">学习进度</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
    <router-link
            to="/student_score/table"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/student_score/table'}"
            v-if="user_group == '管理员' || $check_action('/student_score/table','get')">
      <span class="left_span">学生分数</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
      <router-link
              to="/message/table"
              class="menu_item"
              :class="{ selected: this.$route.path=== '/message/table'}"
              v-if="user_group == '管理员' || $check_action('/message/table','get')">
        <span class="left_span">留言反馈</span>
        <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
      </router-link>

  <router-link
              to="/user/collect"
              class="menu_item"
              :class="{ selected: this.$route.path=== '/collect/list'}"
              v-if="user_group == '管理员' || $check_action('/collect/list','get')">
        <span class="left_span">收藏</span>
        <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
  </router-link>
  </div>
</template>

<script>
import mixin from "@/mixins/page.js";
export default {
  mixins: [mixin],
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },

  components: {
  },
};
</script>

<style scoped>
.list_menu {
  flex: 0 0 25%;
  border-bottom: 1px solid #eee;
}
.menu_item {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border: 1px solid #eee;
  border-bottom: none;
  background-color: #fff;
}
.menu_item.selected {
  background-color: #000;
}
.menu_item.selected span {
  color: #fff ;
}
.content {
  flex: 0 0 74%;
}
</style>
