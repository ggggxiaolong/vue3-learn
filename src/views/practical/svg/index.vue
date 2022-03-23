<script setup lang="ts">
import PolyGrap from "./PolyGrap.vue";
import { ref, reactive } from "vue";
import type { UnwrapNestedRefs } from "vue";
import type { Item } from "./model";

const newLabel = ref("");
const stats: UnwrapNestedRefs<Array<Item>> = reactive([
  { label: "A", value: 100 },
  { label: "B", value: 100 },
  { label: "C", value: 100 },
  { label: "D", value: 100 },
  { label: "E", value: 100 },
  { label: "F", value: 100 },
]);

function add(e: Event) {
  if (!newLabel.value) return;
  stats.push({
    label: newLabel.value,
    value: 100,
  });
  newLabel.value = "";
}

function remove(stat: Item) {
  if (stats.length > 3) {
    stats.splice(stats.indexOf(stat), 1);
  } else {
    alert("Can't delete more!");
  }
}
</script>

<template>
  <div class="svg">
    <svg width="200" height="200">
      <PolyGrap :stats="stats"></PolyGrap>
    </svg>
    <div v-for="stat in stats">
      <label>{{ stat.label }}</label>
      <input type="range" v-model.number="stat.value" min="0" max="100" />
      <span>{{ stat.value }}</span>
      <button @click.prevent="remove(stat)" class="remove">X</button>
    </div>
    <form id="add">
      <input name="newlabel" v-model="newLabel" />
      <button @click.prevent="add">Add A Stat</button>
    </form>
    <pre id="raw">{{ stats }}</pre>
  </div>
</template>
<style scoped>
.svg :deep(polygon) {
  fill: #42b983;
  opacity: 0.75;
}
.svg :deep(circle){
    fill: transparent;
    stroke: #999;
}

.svg :deep(text){
    font-size: 10px;
    fill: #666
}

.svg :deep(label) {
    display: inline-block;
    margin-left: 10px;
    width: 20px;
}

.svg :deep(#raw){
    position: absolute;
    top: 0;
    left: 300px;
}
</style>
