<template>
  <div class="app">
    <el-tabs style="margin-left: 20px" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="数电企业" name="first">
        <div class="counter">
          <div class="counter-left">
            <el-button>筛选</el-button>
            <el-dropdown style="margin-left:5px">
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
            <el-dropdown style="margin-left:5px">
              <el-button type="primary">
                企业类型<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
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
              <el-button slot="append" class="shoukuang" icon="el-icon-search" />
            </el-input>
            <!-- 开通状态 -->
            <el-dropdown style="margin-left:5px">
              <el-button type="primary">
                开通状态<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>双皮奶</el-dropdown-item>
                <el-dropdown-item>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <!-- 复选框 -->
            <el-checkbox style="margin-left:5px">只显示有开票员身份的客户</el-checkbox>
          </div>
          <div class="counter-rigth">
            <span class="czuosming">操作说明 任务栏</span>
            <el-dropdown style="margin-left:5px">
              <el-button type="primary">
                下载工具<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>双皮奶</el-dropdown-item>
                <el-dropdown-item>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown style="margin-left:5px">
              <el-button type="primary">
                导出企业<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>双皮奶</el-dropdown-item>
                <el-dropdown-item>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown style="margin-left:5px">
              <el-button type="primary">
                开通状态<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
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
        <!-- 表单 -->
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort="{ prop: 'date', order: 'descending' }"
        >
          <el-table-column prop="date" label="序号" sortable width="180">
          </el-table-column>
          <el-table-column prop="name" label="客户简称" sortable width="180">
          </el-table-column>
          <el-table-column prop="address" label="操作" :formatter="formatter">
          </el-table-column>
            <el-table-column prop="address" label="企业类型" :formatter="formatter">
          </el-table-column>
            <el-table-column prop="address" label="转数电标识" :formatter="formatter">
          </el-table-column>
            <el-table-column prop="address" label="可用发票额度" :formatter="formatter">
          </el-table-column>
            <el-table-column prop="address" label="本月开票金额" :formatter="formatter">
          </el-table-column>
                <el-table-column prop="address" label="授权到期时间" :formatter="formatter">
          </el-table-column>
                <el-table-column prop="address" label="本季开票金额" :formatter="formatter">
          </el-table-column>
                <el-table-column prop="address" label="本月开票金额" :formatter="formatter">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second"> </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
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
  .counter {
    display: flex;
    justify-content: space-between;
  }
}
</style>
