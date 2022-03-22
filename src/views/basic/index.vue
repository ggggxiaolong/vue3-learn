<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { PATH } from "../../router/path";
</script>
<template>
  <nav>
    <RouterLink :to="PATH.BASIC_HELLO">你好，世界</RouterLink>
    <RouterLink :to="PATH.BASIC_INPUT">处理用户输入</RouterLink>
    <RouterLink :to="PATH.BASIC_ATTRIBUTE">Attribute 绑定</RouterLink>
    <RouterLink :to="PATH.BASIC_SWITCH">条件与循环</RouterLink>
    <RouterLink :to="PATH.BASIC_BIND">表单绑定</RouterLink>
    <RouterLink :to="PATH.BASIC_COMPONENT">简单组件</RouterLink>
  </nav>
  <RouterView></RouterView>
</template>
