<script setup lang="ts">
import { ref } from "vue";
const isShow = ref(true);
const list = ref([1, 2, 3]);
</script>
<template>
  <button @click="isShow = !isShow">Toggle List</button>
  <button @click="list.push(list.length + 1)">Push Number</button>
  <button @click="list.pop()">Pop Number</button>
  <button @click="list.reverse()">Reverse List</button>
  <ul v-if="isShow && list.length">
    <li v-for="item of list">{{item}}</li>
  </ul>
  <p v-else-if="list.length">List is not empty, but hidden.</p>
  <p v-else>List is empty</p>
</template>
