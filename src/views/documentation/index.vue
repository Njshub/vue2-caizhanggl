<template>
  <div class="app">
    <div class="Navigation-head">
      <div class="top-left">
        <el-dropdown>
          <el-button type="primary">
            更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown" v-for="(i, index) in btnListt" :key="index">
            <el-dropdown-item @click="Add(i)">{{ i.name }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- 搜索框 -->
        <el-input
          style="width: 300px"
          placeholder="请输入内容"
          v-model="input3"
          class="input-with-select"
        >
          <el-button slot="append" class="shoukuang" icon="el-icon-search" />
        </el-input>
        <!-- 复选 -->
        <el-checkbox v-model="checked">包含流失</el-checkbox>
      </div>
      <div class="top-rigth">
        <el-dropdown
          style="background: yellow; border: none"
          class="item-btn"
          size="small"
          split-button
          type="primary"
        >
          新增客户
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown class="item-btn" size="small" split-button type="primary">
          比量操作
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown class="item-btn" size="small" split-button type="primary">
          导入
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>oo
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <el-tabs style="margin-left: 20px"   ref="multipleTable"  tooltip-effect="dark" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部用户" name="first">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="index" :index="indexMethod"> </el-table-column>
          <el-table-column prop="date" label="用户简称" width="180"> </el-table-column>
          <el-table-column prop="name" label="客户编号" width="180"> </el-table-column>
          <el-table-column prop="address" label="客户类型"> </el-table-column>
          <el-table-column prop="address" label="客户经理"> </el-table-column>
          <el-table-column prop="address" label="服务顾问"> </el-table-column>
          <el-table-column prop="address" label="代账状态"> </el-table-column>
          <el-table-column prop="address" label="客户等级"> </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="代理记账报税" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="其他财税服务" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="人资社保" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="工商服务" name="third">定时任务补偿</el-tab-pane>
      <el-tab-pane label="更多业务" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        tag: '家'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333,
        tag: '公司'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333,
        tag: '家'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333,
        tag: '公司'
      }],

      activeName: 'first',
      btnListt: [
        {
          name: '螺蛳粉'
        },
        { name: '老友粉' }
      ],
      count: ''
    }
  },
  methods: {
    Add(e) {
      console.log(e)
      this.count = e.teager.value
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  .Navigation-head {
    display: flex;
    justify-content: space-between;
    .top-left {
      display: flex;
      // 复选框
      .el-checkbox {
        margin: 10px;
      }
      // 搜索框
      .shoukuang {
        height: 30px;
      }
    }
    .top-rigth {
      display: flex;
      margin: 10px;
      .item-btn {
        margin: 0px 10px;
      }
    }
  }
}
</style>
