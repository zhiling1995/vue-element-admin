<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="menu 1-1" type="success">
       <!-- 三层嵌套 -->
      <router-view />
    </el-alert>
  </div>
</template>