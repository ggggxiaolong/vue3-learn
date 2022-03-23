<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { PATH } from "../../router/path";
</script>

<template>
  <nav>
    <RouterLink :to="PATH.PRACTICAL_MARKDOWN">Markdown 编辑器</RouterLink>
    <RouterLink :to="PATH.PRACTICAL_FETCH">获取数据</RouterLink>
    <RouterLink :to="PATH.PRACTICAL_SORT_GRID">带有排序和过滤器的网格</RouterLink>
    <RouterLink :to="PATH.PRACTICAL_TREE">树状视图</RouterLink>
    <RouterLink :to="PATH.PRACTICAL_SVG">SVG图像</RouterLink>
    <RouterLink :to="PATH.PRACTICAL_MODAL">带过渡动效的模态框</RouterLink>
    <RouterLink :to="PATH.PRACTICAL_TRANSITION">带过渡动效的列表</RouterLink>
    >
  </nav>
  <RouterView></RouterView>
</template>
