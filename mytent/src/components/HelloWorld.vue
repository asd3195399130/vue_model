<!--  -->
<template>
  <div class="header">
    <el-button type="primary" @click="dialoglistVisible = true">打开评论</el-button>

    <el-dialog title="我的评论" :visible.sync="dialoglistVisible">
      <el-list :model="list">
        <el-list-item label="活动名称" :label-width="listLabelWidth">
          <el-radio v-model="list.radio" label="想看">想看</el-radio>
          <el-radio v-model="list.radio" label="看过">看过</el-radio>
        </el-list-item>
        <br>
        <el-list-item label="标签" :label-width="listLabelWidth">
          <el-input v-model="list.input" placeholder="请输入内容"></el-input>
        </el-list-item>
        <br>
        <el-list-item label="输入评论" :label-width="listLabelWidth">
          <el-input type="textarea" placeholder="请输入内容" v-model="list.textarea" maxlength="30" show-word-limit></el-input>
        </el-list-item>
      </el-list>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialoglistVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>

export default {
  data() {
    return {
      list: {
        input: "",
        radio: "",
        textarea: ''
      },
      dialoglistVisible: false,
      listLabelWidth: '120px'
    }
  },
  methods: {
    submit() {
      // alert("6666")
      if (this.list.input == "" || this.list.radio == "" || this.list.textarea == "") {
        this.$notify.error({
          title: '提示',
          message: '不能为空'
        })

      } else {
        this.$emit('submit', this.list)
        this.list = {
          input: "",
          radio: "",
          textarea: ''
        }
      }
      this.$message({
        type: "success",
        message: "success"
      })
      this.dialoglistVisible = false
    }
  },
  created() {

  },
  mounted() {

  }
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header {
  width: 1200px;
  height: 300px;
  background: red;
  margin: auto;
}

.el-input {
  width: 300px !important;
}

.el-textarea {
  width: 300px !important;
  // margin-left: -5px;
  margin-top: 15px;
}

.el-button {
  margin-top: 15px;
}
</style>