<script setup lang="ts">
import type { Item } from "./model";
import { ref, computed } from "vue";

const props = defineProps<{
  data: Array<Item>;
  columns: Array<string>;
  filterKey: string;
}>();

const sortKey = ref(-1);
const sortOrders = ref(props.columns.map((_) => 1));

const filteredData = computed(() => {
  let { data, filterKey } = props;
  if (filterKey) {
    filterKey = filterKey.toLocaleLowerCase();
    data = data.filter((row) =>
      Object.values(row).some(
        (value) => String(value).toLocaleLowerCase().indexOf(filterKey) > -1
      )
    );
  }
  const key = sortKey.value;
  if (key !== -1) {
    const order = sortOrders.value[key];
    data = data.slice().sort((a, b) => {
      const valueA = Object.values(a)[key];
      const valueB = Object.values(b)[key];
      return (valueA === valueB ? 0 : valueA > valueB ? 1 : -1) * order;
    });
  }
  return data;
});

function sortBy(index: number) {
  sortKey.value = index;
  sortOrders.value[index] *= -1;
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>
<template>
  <table v-if="filteredData.length">
    <thead>
      <tr>
        <th
          v-for="(key, index) in columns"
          @click="sortBy(index)"
          :class="{ active: sortKey == index }"
        >
          {{ capitalize(key) }}
          <span
            class="arrow"
            :class="sortOrders[index] > 0 ? 'asc' : 'desc'"
          ></span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item of filteredData">
        <td v-for="value of Object.values(item)">{{ value }}</td>
      </tr>
    </tbody>
  </table>
  <p v-else>No matches found.</p>
</template>
<style scoped>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  user-select: none;
}
td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}
th.active {
  color: #fff;
}
th.active .arrow {
  opacity: 1;
}
.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.desc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
