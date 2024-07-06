<template>
  <div class="app">
    <div class="navtop">
      <div class="nav-left">
        <el-dropdown style="   margin-right: 5px;" size="mini" split-button type="primary">
          超小尺寸
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- 搜索框 -->
        <el-input
          style="width: 300px;margin-left:5px"
          placeholder="请输入内容"
          v-model="input3"
          class="input-with-select"
        >
          <el-button slot="append" @click="addinput" class="shoukuang" icon="el-icon-search" />
        </el-input>
        <!-- 复选框 -->
        <el-checkbox style="margin-left:5px">隐藏已分配</el-checkbox>
      </div>
      <div class="nav-rigth">
        <el-dropdown size="mini" split-button type="primary">
          批量分配
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <!-- 表格 -->
    <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-left:20px">
      <el-tab-pane label="全部用户" name="first">
        <el-table
          ref="singleTable"
          :data="tableData"
          highlight-current-row
          @current-change="handleCurrentChange"
          style="width: 100%">

          <el-table-column
            type="index"
            width="50">
          </el-table-column>

          <el-table-column
            property="date"
            label="客户简称"
            width="120">
          </el-table-column>

          <el-table-column
            property="name"
            label="客户编号"
            width="120">
          </el-table-column>

          <el-table-column
            property="address"
            label="客户经理">
          </el-table-column>
             <el-table-column
            property="address"
            label="收费负责任">
          </el-table-column>
             <el-table-column
            property="address"
            label="账务会计">
          </el-table-column>
             <el-table-column
            property="address"
            label="税务会计">
          </el-table-column>
             <el-table-column
            property="address"
            label="开票员">
          </el-table-column>
             <el-table-column
            property="address"
            label="审核会计">
          </el-table-column>
             <el-table-column
            property="address"
            label="其他服务人员">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="代账客户" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="其他客户" name="third">角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input3: '',
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
  },
  methods: {
    addinput() {
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  .navtop{
    display: flex;
    justify-content: space-between;
    .nav-left{
      margin: 10px;
    }
    .nav-rigth{
      margin: 10px;
    }
  }
}
</style>
