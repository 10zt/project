<template>
  <div class="page_message" id="message_list">
    <div class="warp">
      <div class="container">
        <div class="left_box">
            <span></span>
            <span></span>
            <span></span>
          </div>
        <div class="row">
          <div class="col-12">
            <div class="card_message">
              <h4 class="fl m-1">留言列表</h4>
              <b-button
                class="fr m-1"
                variant="outline-success"
                @click="$router.push('/message/edit')"
                v-if="$check_action('/message/edit', 'add')"
                ><span>留言</span></b-button
              >
              <!-- 留言列表 -->
              <list_message
                class="fn"
                :list="list"
              ></list_message>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- 分页器 -->
          <div class="col overflow-auto flex_cc">
            <b-pagination
                v-model="query.page"
                :total-rows="count"
                :per-page="query.size"
                @change="goToPage"
            />
          </div>
        </div>
<!--        <b-modal-->
<!--          id="my-modal"-->
<!--          ref="my-modal"-->
<!--          hide-backdrop-->
<!--          centered-->
<!--          hide-footer-->
<!--          size="lg"-->
<!--          v-model="modalShow"-->
<!--        >-->
<!--          <template #modal-title>-->
<!--            <div>-->
<!--              对 <i>{{ respondent }}</i> 回复-->
<!--            </div>-->
<!--          </template>-->
<!--          <form_editor-->
<!--            :form="form_comment"-->
<!--            @update_comment="update_comment"-->
<!--            :post_url="post_url"-->
<!--          ></form_editor>-->
<!--        </b-modal>-->
<div class="right_box">
            <span></span>
            <span></span>
            <span></span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from "@/mixins/page.js";
import list_message from "@/components/diy/list_message.vue";
import form_editor from "@/components/diy/form_editor.vue";

export default {
  mixins: [mixin],
  components: {
    list_message,
    form_editor,
  },
  data() {
    return {
      list: [],
      url_get_list: "~/api/message/get_list",
      query: {
        page: 1,
        size: 7,
        orderby: "create_time desc"
      },
    };
  },
  methods: {
    get_list_before(param){
      // let user_group = this.user.user_group;
      // if (!user_group || user_group === "游客"){
      //   this.url_get_list = "~/api/message/get_list?user_id=0";
      // }
      // if(user_group !== "管理员"){
      //   param.user_id = this.$store.state.user.user_id;
      // }
      return param;
    },
    goToPage(v){
      this.query.page = v;
      this.goToNew(v)
    }
  },
  computed: {},
};
</script>

<style scoped>
.flex_cc {
  display: flex;
  justify-content: center;
  align-items: center;
}

.item_message {
  background-color: #ffffff;
  margin-bottom: 1rem;
}
.user_info {
  text-align: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}
.time {
  font-size: 0.7rem;
  margin-top: 0.5rem;
}
.content {
  width: 100%;
  padding: 0.8rem;
}

.content rich-text {
  width: 100%;
  word-break: break-all;
}
</style>
