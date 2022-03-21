<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { Item } from "./model";
import TodoItem from "./TodoItem.vue";

const list: Ref<Array<Item>> = ref([
  { id: 0, text: "Vegetables" },
  { id: 1, text: "Cheese" },
  { id: 2, text: "Whatever else humans are supposed to eate" },
]);
</script>
<template>
  <ol>
    <TodoItem v-for="item of list" :todo="item" :key="item.id"></TodoItem>
  </ol>
</template>
