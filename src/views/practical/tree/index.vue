<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import TreeItem from "./TreeItem.vue";
import type { Item } from "./model";

const treeData: Ref<Item> = ref({
  name: "My Tree",
  children: [
    { name: "hello" },
    { name: "wold" },
    {
      name: "child folder",
      children: [
        {
          name: "child folder",
          children: [
            { name: "hello" },
            { name: "wold" },
            {
              name: "child folder",
              children: [{ name: "hello" }, { name: "wold" }],
            },
          ],
        },
      ],
    },
  ],
});
</script>

<template>
  <ul>
    <TreeItem class="item" :model="treeData"></TreeItem>
  </ul>
</template>

<style scoped>
.item {
  cursor: pointer;
  line-height: 1.5;
}
.bold {
  font-weight: bold;
}
</style>
