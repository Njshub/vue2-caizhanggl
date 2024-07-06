<template>
    <div class="app">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column sortable label="发票种类" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="发票号码" width="120"> </el-table-column>
        <el-table-column prop="address" label="开票日期" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="是否作废" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="补全状态" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="发票原件" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="凭证号" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="货物，因素" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="签收状态" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="购买名称" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="不含税金额" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="税里" show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
  data() {
    return {
      // tableData: [{
      //   date: '2016-05-02',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1518 弄'
      // }, {
      //   date: '2016-05-04',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1517 弄'
      // }, {
      //   date: '2016-05-01',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1519 弄'
      // }, {
      //   date: '2016-05-03',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1516 弄'
      // }]
    };
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
  },
};
</script>
