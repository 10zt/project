<template>
<!--    后台登录的首页-->
    <div class="page_root" id="root_index">
        <div class="warp">
            <div class="container-fluid">
                <el-row>
                    <!--					<el-col :span="4">-->
                    <!--						<div_label bg_color="bg_red" icon="el-icon-message" :url="url_message_count" unit="条"-->
                    <!--								  title="留言信息"></div_label>-->
                    <!--					</el-col>-->
                    <el-col :span="4">
                        <div_label bg_color="bg_purple" icon="el-icon-user-solid"
                                   :url="url_user_count" unit="人" title="用户数量"></div_label>
                    </el-col>
                    <!--					<el-col :span="4">-->
                    <!--						<div_label bg_color="bg_green" icon="el-icon-view" :url="url_article_hits" unit="次"-->
                    <!--								  title="文章浏览量"></div_label>-->
                    <!--					</el-col>-->
                </el-row>

                <el-row>
                    <el-col v-if="user_group != '管理员' && !$check_option('/subject_exam/table','teacher') && $check_figure('/subject_exam/table')"
                            :span="8">
                        <div class="card chart">
                            <subjectExamCharts v-if="bar_obj_subject_exam.values.length >　0"
                                               id="line_obj_data_account_statistics"
                                               :title="'用户考试科目数据统计'" :vm="bar_obj_subject_exam"
                                               @changeTab="get_url_subject_exam_list">
                            </subjectExamCharts>
                            <div v-if="!bar_obj_subject_exam.values.length">数据分析没有符合条件的数据</div>
                        </div>
                    </el-col>
                    <el-col v-if="user_group == '管理员' && $check_figure('/subject_exam/table')" :span="8">
                        <div class="card chart">
                            <subjectExamCharts v-if="bar_obj_subject_exam_avg.values.length >　0"
                                               id="line_obj_data_account_avg" :title="'试卷平均分统计'"
                                               :vm="bar_obj_subject_exam_avg" avg
                                               @changeTab="get_subject_average">
                            </subjectExamCharts>
                            <div v-if="!bar_obj_subject_exam_avg.values.length">数据分析没有符合条件的数据</div>
                        </div>
                    </el-col>
                    <el-col v-if="user_group == '管理员' && $check_figure('/subject_exam/table')" :span="8">
                        <div class="card chart" style="min-height: 400px;height: auto">
                            <subjectExamTable v-if="subject_name_list.length > 0"
                                              :vm="subject_name_list"></subjectExamTable>
                            <div v-if="!subject_name_list.length">数据总览没有符合条件的数据</div>
                        </div>
                    </el-col>
                </el-row>


            </div>
        </div>
    </div>
</template>
<script>
    import mixin from "@/mixins/page.js";
    import subjectExamCharts from "@/components/charts/subject_exam_charts.vue";
    import subjectExamTable from "@/components/charts/subject_exam_table.vue";
    import div_label from "@/components/div_label.vue";

    export default {
        mixins: [mixin],
        name: "Home",
        components: {
            subjectExamCharts,
            subjectExamTable,
            div_label
        },
        data() {
            return {
                activeName: "third",
                url_message_count: "~/api/message/count?",
                url_user_count: "~/api/user/count?",
                url_article_hits: "~/api/article/sum?field=hits",
                bar_obj_subject_exam: {
                    names: [],
                    xAxis: [],
                    values: [],
                    tabs: []
                },
                bar_obj_subject_exam_avg: {
                    names: [],
                    xAxis: [],
                    values: [],
                    tabs: []
                },
                subject_name_list: [],
            };
        },
        created() {
            this.get_url_subject_list()
        },
        mounted() {
        },
        methods: {
            async get_nickname(list, flag) {
                if (flag) {
                    for (let i = 0; i < list.length; i++) {
                        await this.$get(
                            "~/api/user/get_obj?user_id=" + list[i],
                            null,
                            (json) => {
                                if (json.result) {
                                    list[i] = json.result.obj.nickname;
                                }
                            });
                    }
                } else {
                    for (let i = 0; i < list.length; i++) {
                        await this.$get(
                            "~/api/user/get_obj?user_id=" + list[i].name,
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
                    this.bar_obj_subject_exam_avg.tabs.push(result.result.list[i].name)
                }
                await this.get_url_subject_exam_list(this.bar_obj_subject_exam.tabs[0])
                await this.get_subject_average(this.bar_obj_subject_exam.tabs[0])
                this.bar_obj_subject_exam.names = [this.bar_obj_subject_exam.tabs[0]]
            },
            async get_url_subject_exam_list(e) {
                let url = "~/api/subject_exam/get_list?subject_name=" + e;
                if (this.user_group !== '管理员' && this.$check_option("/subject_exam/table", "teacher")) {
                    url = "~/api/subject_exam/get_list?subject_name=" + e + "&user_id=" + this.$store.state.user.user_id;
                }
                const json = await this.$get(url)
                const allResult = []
                this.bar_obj_subject_exam.xAxis = []
                for (let j = 0; j < json.result.list.length; j++) {
                    this.bar_obj_subject_exam.xAxis.push(json.result.list[j].name)
                    let params = {
                        exam_id: json.result.list[j].exam_id,
                        user_id: this.$store.state.user.user_id,
                    }
                    if (this.user_group !== '管理员' && this.$check_option("/subject_exam/table", "teacher")) {
                        params = {
                            exam_id: json.result.list[j].exam_id,
                        }
                    }
                    const value = await this.$get("~/api/subject_user_answer/get_list", params);
                    for (let k = 0; k < value.result.list.length; k++) {
                        allResult.push([value.result.list[k].score])
                    }
                }
                this.bar_obj_subject_exam.values = allResult
                this.bar_obj_subject_exam.names = [e]
            },
            async get_subject_average(e) {
                const subject_name_list = []
                let url = "~/api/subject_exam/get_list";
                if (this.user_group !== '管理员' && this.$check_option("/subject_exam/table", "teacher")) {
                    url = "~/api/subject_exam/get_list?user_id=" + this.$store.state.user.user_id;
                }
                const json = await this.$get(url);
                for (let i = 0; i < json.result.list.length; i++) {
                    const value = json.result.list[i].subject_name
                    const index = this.find_subject_item(subject_name_list, "name", value)
                    if (index === -1) {
                        subject_name_list.push({
                            name: json.result.list[i].subject_name,
                            exam: [json.result.list[i].exam_id],
                            examNames: [json.result.list[i].name],
                            score: [],
                            userList: [],
                            min: [],
                            max: [],
                            avg: []
                        })
                    } else {
                        subject_name_list[index].exam.push(json.result.list[i].exam_id)
                        subject_name_list[index].examNames.push(json.result.list[i].name)
                    }
                }

                const result = await this.$get("~/api/subject_user_answer/get_list")
                for (let i = 0; i < result.result.list.length; i++) {
                    for (let j = 0; j < subject_name_list.length; j++) {
                        const exam_index = subject_name_list[j].exam.indexOf(result.result.list[i].exam_id)
                        if (exam_index > -1) {
                            if (!subject_name_list[j].score[exam_index]) {
                                subject_name_list[j].score[exam_index] = []
                                subject_name_list[j].userList[exam_index] = []
                            }
                            const user_index = subject_name_list[j].userList[exam_index].indexOf(result.result.list[i].user_id)
                            if (user_index === -1) {
                                subject_name_list[j].userList[exam_index].push(result.result.list[i].user_id)
                            }
                            subject_name_list[j].score[exam_index].push(result.result.list[i].score)
                        }
                    }
                }

                this.bar_obj_subject_exam_avg.names = ["平均分", "最高分", "最低分"]
                this.bar_obj_subject_exam_avg.values = [[], [], []]

                for (let i = 0; i < subject_name_list.length; i++) {
                    for (let j = 0; j < subject_name_list[i].score.length; j++) {
                        const max = Math.max.apply(Math, subject_name_list[i].score[j])
                        const min = Math.min.apply(Math, subject_name_list[i].score[j])
                        const avg = subject_name_list[i].score[j].reduce(function (a, b) {
                            return a + b
                        }) / subject_name_list[i].score[j].length
                        if (subject_name_list[i].name === e) {
                            this.bar_obj_subject_exam_avg.xAxis = subject_name_list[i].examNames
                            this.bar_obj_subject_exam_avg.values[0].push(avg)
                            this.bar_obj_subject_exam_avg.values[1].push(max)
                            this.bar_obj_subject_exam_avg.values[2].push(min)
                        }
                        subject_name_list[i].avg.push(avg)
                        subject_name_list[i].max.push(max)
                        subject_name_list[i].min.push(min)
                    }
                }
                console.log(subject_name_list)
                this.subject_name_list = subject_name_list
            },
            find_subject_item(arr, key, val) {
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i][key] == val) {
                        return i
                    }
                }
                return -1
            }
        },
        computed: {
            recognitionHeight() {
                return "830px"
            },
            recognitionUrl() {
                return "https://www.faceplusplus.com.cn/${model.filter.recognitionType}/"
            }
        }
    };
</script>

<style scoped="scoped">
    .chart {
        display: block;
        width: 100%;
        height: 400px;
        padding: 1rem;
        position: relative;
    }

    .el-col {
        padding: 0.5rem;
    }

    .card {
        overflow: hidden;
    }

    .iframe_box, .iframe_box_change {
        width: 100%;
        height: 1180px;
        position: relative;
        margin-top: 25px;
    }

    .iframe_box_change {
        height: 580px;
        padding-top: 50px;
    }

    .iframe_box .iframe_box_content, .iframe_box_change .iframe_box_content {
        width: 100%;
        height: 100%;
    }

    .iframe_box_top {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        font-size: 25px;
        line-height: 100px;
        background: #fff;
        z-index: 99999999;
        padding-left: 50px;
    }

    #iframe_box_face div::before {
        content: '';
        width: 100px;
        position: absolute;
        top: 154px;
        right: 129px;
        z-index: 999;
        height: 20px;
        background-color: #FFFFFF;
    }

    #iframe_box_face > h1 {
        margin-top: 100px;
        margin-bottom: 20px;
    }
</style>
