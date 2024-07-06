<template>
  <div class="app">
    <div class="extraction">
      <el-button type="warning" style="
      width: 80px;
      height: 30px;
      " size="mini">提交订单</el-button>
      <el-dropdown split-button size="mini" style="margin:0px 10px" type="primary" @click="handleClick">
        补全明细
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button size="mini" style="margin:0px 10px">获取数电原件</el-button>
      <!-- 1-1 -->
      <el-dropdown>
        <el-button type="none" size="mini">
          更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- 1-2 -->
      <el-dropdown>
        <el-button type="none" size="mini" style="margin:0px 10px">
          更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- 刷新 -->
      <button class="shuxIng">刷新</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.el-button--warning{
    color: #fff;
    width: 100px;
    height: 40px;
    background: rgb(226, 165, 33);
    margin-right: 10px;
}
.extraction{
    margin-top: 10px;
}
.shuxIng{
    border: none;
    background: none;
}
</style>
