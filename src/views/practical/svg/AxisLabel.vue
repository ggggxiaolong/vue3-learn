<script setup lang="ts">
import { computed } from 'vue';
import { value2Point } from './model';
import type { Item } from './model';

const props = defineProps<{
    stat: Item,
    index: number,
    total: number,
}>()

const point = computed(() =>
    value2Point(props.stat.value + 10, props.index, props.total)
)
</script>

<template>
    <text :x="point[0]" :y="point[1]">{{stat.label}}</text>
</template>