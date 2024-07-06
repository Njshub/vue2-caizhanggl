<template>
  <div class="dashboard-container">
    <!-- 项目 -->
    <el-tabs type="border-card">
      <el-tab-pane label="发票列表">
        <!-- 头部 -->
        <toplnvoceList></toplnvoceList>

        <!-- 平台提取 -->
         <Buttongenduo />
         <!-- 表单 -->
         <formForm/>
      </el-tab-pane>
      <el-tab-pane label="货物明细">
                <!-- 头部 -->
        <toplnvoceList></toplnvoceList>
        
        <!-- 平台提取 -->
         <Buttongenduo />
               <!-- 表单 -->
         <formForm/>
      </el-tab-pane>
      <el-tab-pane label="销项分类统计">
           <!-- 头部 -->
        <toplnvoceList></toplnvoceList>
           <div class="tabetr">

             
           </div>
      </el-tab-pane>
      <el-tab-pane label="电票打印">定时任务补偿</el-tab-pane>
    </el-tabs>
    <!-- 开票日期 -->
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// // admin
// import adminDashboard from "./admin";
// // editor
// import editorDashboard from "./editor";
import toplnvoceList from "./InvoiceList/components/top-lnvoIceLi.vue";
import Buttongenduo from './InvoiceList/components/button-genduo.vue'
import formForm from './InvoiceList/components/formFo.vue'
export default {
  components: {toplnvoceList,Buttongenduo,formForm},
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "",
    };
  },
  computed: {
    ...mapGetters(["roles"]),
  },
  created() {
    if (!this.roles.includes("admin")) {
      this.currentRole = "editorDashboard";
    }
  },
  methods: {
    handleClick() {
      alert("button click");
    },
  },
};
</script>
<style lang="scss" scoped>
.faping {
  display: flex;
}
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
// 按钮
.extraction{
  margin: .625rem .625rem;
}


</style>
