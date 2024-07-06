<template>
  <div class="app">
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleCancel">取消</el-button>
      <el-button type="primary" @click="handleConfirm">确定</el-button>
    </span>
  </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        email: '',
        name: '',
        phone: ''
      },
      emailRules: [
        { pattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/, message: '邮箱格式不正确', trigger: 'blur' }
      ],
      nameRules: [
        { required: true, message: '请输入姓名', trigger: 'blur' }
      ],
      phoneRules: [
        { required: true, message: '请输入电话', trigger: 'blur' }
      ]
    };
  },
  methods: {
    open() {
      this.dialogVisible = true;
    },
    handleCancel() {
      this.dialogVisible = false;
      this.$message({
        type: 'info',
        message: '取消输入'
      });
    },
    handleConfirm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.dialogVisible = false;
          this.$message({
            type: 'success',
            message: `你的信息是: 邮箱 - ${this.form.email}, 姓名 - ${this.form.name}, 电话 - ${this.form.phone}`
          });
        } else {
          console.log('表单验证失败');
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.dialog-footer {
  text-align: right;
}
</style>
