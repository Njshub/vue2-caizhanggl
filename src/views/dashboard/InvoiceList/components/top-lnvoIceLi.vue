<template>
  <div class="app">
    <!-- 日期 -->
    <div class="counter">
      <div class="block">
        <span class="demonstration">开票日期</span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </div>
      <!-- 搜索 -->
      <div class="search-box" style="width: 319px; margin: 0px 10px">
        <el-input
          v-model="searchQuery"
          placeholder="请输入搜索内容"
          class="search-input"
          @keyup.enter="handleSearch"
        />
        <el-button type="text" @click="openDialog" class="chaXun">查询更多</el-button>
        <CustomDialog ref="customDialog" />
      </div>
    </div>
  </div>
</template>

<script>
import CustomDialog from "./CustomDialog.vue";
export default {
  components: {
    CustomDialog,
  },
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
      value1: "",
      value2: "",
      searchQuery: "", //搜索数据
    };
  },
  methods: {
    handleSearch() {
      if (this.searchQuery.trim() !== "") {
        // 执行搜索操作
        console.log("搜索内容:", this.searchQuery);
        // 这里可以调用API进行搜索或者触发其他搜索逻辑
      }
    },
    // 打开弹框
    openDialog() {
      this.$nextTick(() => {
        console.log(this.$refs.customDialog); // 打印引用，检查是否为undefined
        if (this.$refs.customDialog) {
          this.$refs.customDialog.open();
        } else {
          console.error("customDialog 组件未找到");
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.demonstration {
  font-size: 1rem;
  color: rgb(76, 78, 80);
  margin-right: 0.3125rem;
}
// 搜索框样式
.search-box {
  display: flex;
  align-items: center;
}

.search-input {
  margin-right: 10px;
  flex: 1;
}
.counter {
  display: flex;
}
.chaXun:hover {
  color: rgb(228, 156, 74);
  border-bottom: 1px solid rgb(228, 156, 74);
}
</style>
