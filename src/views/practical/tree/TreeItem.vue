<script setup lang="ts">
import { ref, computed } from "vue";
import type { Item } from "./model";
const props = defineProps<{
  model: Item;
}>();

const isOpen = ref(false);
const isFolder = computed(
  () => props.model.children && props.model.children.length
);

function toggle() {
  isOpen.value = !isOpen.value;
}

function changeType() {
  if (!isFolder.value) {
    addChild();
    isOpen.value = true;
  }
}

function addChild() {
  if (!props.model.children) {
    props.model.children = [];
  }
  props.model.children.push({ name: "new stuff" });
}
</script>

<template>
  <li>
    <div :class="{ bold: isFolder }" @click="toggle" @dblclick="changeType">
      {{ model.name }}
      <span v-if="isFolder">[{{ isOpen ? "-" : "+" }}]</span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <TreeItem
        class="item"
        v-for="item in model.children"
        :model="item"
      ></TreeItem>
      <li class="add" @click="addChild">+</li>
    </ul>
  </li>
</template>
