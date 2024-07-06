<template>
  <div class="app">
    <el-tabs class="navtop" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="数电企业" name="first">
        <div class="counter">
          <div class="counter-left">
            <!-- 日期 -->
            <span class="demonstration">日期</span>
            <el-date-picker
              v-model="value1"
              type="monthrange"
              range-separator="至"
              start-placeholder="开始月份"
              end-placeholder="结束月份">
            </el-date-picker>
            <!--下拉菜单 -->
            <el-dropdown style="margin-left: 5px">
              <el-button type="primary">
                查看其他人<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>双皮奶</el-dropdown-item>
                <el-dropdown-item>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown style="margin-left: 5px">
              <el-button type="primary">
                查看其他人<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>双皮奶</el-dropdown-item>
                <el-dropdown-item>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown style="margin-left: 5px">
              <el-button type="primary">
                查看其他人<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>双皮奶</el-dropdown-item>
                <el-dropdown-item>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-input
              style="width: 300px; margin-left: 5px"
              placeholder="请输入内容"
              v-model="input3"
              class="input-with-select"
            >
              <el-button slot="append" class="shoukuang" icon="el-icon-search" />
            </el-input>
          </div>
          <div class="counter-rigth">
            <el-button>批量打印</el-button>
          </div>
        </div>
        <!-- 表格 -->
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="托管企业" name="second">配置管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'Faipingku',
  data() {
    return {
      activeName: 'first',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  .navtop {
    width: 100%;
    height: 50px;
    background: #fff;
    margin-left: 20px;
    margin-bottom: 10px;
    .counter{
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      .block{
        display: flex;
      }
    }
  }
}
</style>
