<script setup lang="ts">
import { shuffle as _shuffle } from "lodash";
import { ref } from "vue";

const items = ref([1, 2, 3, 4, 5]);
let id = items.value.length + 1;

function insert() {
  const i = Math.round(Math.random() * items.value.length);
  items.value.splice(i, 0, id++);
}

function reset() {
  items.value = [1, 2, 3, 4, 5];
}

function shuffle() {
  items.value = _shuffle(items.value);
}

function remove(item: number) {
  const i = items.value.indexOf(item);
  if (i > -1) {
    items.value.splice(i, 1);
  }
}
</script>

<template>
  <div class="transition-list">
    <button @click="insert">insert at random</button>
    <button @click="reset">Reset</button>
    <button @click="shuffle">Shuffle</button>
    <TransitionGroup tag="ul" name="fade" class="container">
      <div v-for="item in items" class="item" :key="item">
        {{ item }}
        <button @click="remove(item)">X</button>
      </div>
    </TransitionGroup>
  </div>
</template>
<style scoped>
.transition-list :deep(.container) {
  position: relative;
  padding: 0;
}

.transition-list :deep(.item) {
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
  border: 1px solid #666;
  box-sizing: border-box;
}

.transition-list :deep(.fade-move, .fade-enter-active, .fade-leave-active) {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.transition-list :deep(.fade-enter-from, .fade-leave-active) {
    opacity: 0;
    transform: scaleY(0.01) translate(30px, 0);
}

.transition-list :deep(.fade-leave-active) {
    position: absolute;
}
</style>
