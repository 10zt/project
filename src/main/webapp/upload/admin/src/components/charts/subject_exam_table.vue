<template>
  <div>
    <h3 style="text-align: center">考试成绩统计</h3>
    <el-table
        :data="tableData"
        stripe
        style="width: 100%;margin-top: 10px">
      <el-table-column
          prop="exam"
          label="考试科目">
      </el-table-column>
      <el-table-column
          prop="examName"
          label="试卷名称">
      </el-table-column>
      <el-table-column
          prop="number"
          label="考试人数"
          align="center">
      </el-table-column>
      <el-table-column
          prop="max"
          label="最高分"
          align="center">
      </el-table-column>
      <el-table-column
          prop="min"
          label="最低分"
          align="center">
      </el-table-column>
      <el-table-column
          prop="avg"
          label="平均分"
          align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props:{
    vm: {
      type: Array
    }
  },
  data() {
    return {
      tableData: []
    }
  },
  created() {

    for (let i = 0; i < this.vm.length; i++) {
      for (let j = 0; j < this.vm[i].examNames.length; j++) {
        console.log(this.vm[i].examNames[j])
        this.tableData.push({
          exam: this.vm[i].name,
          examName: this.vm[i].examNames[j],
          number: this.vm[i].userList[j].length,
          max: this.vm[i].max[j],
          avg: this.vm[i].avg[j],
          min: this.vm[i].min[j]
        })
      }
    }

  },
  methods:{

  }
}
</script>

<style scoped>

</style>