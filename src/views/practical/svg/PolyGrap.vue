<script setup lang="ts">
import AxisLabelVue from './AxisLabel.vue';
import { computed } from 'vue';
import { value2Point } from './model';
import type { Item } from './model';


const props = defineProps<{
    stats: Array<Item>
}>()

const points = computed(() => {
    const total = props.stats.length
    return props.stats.map((state, index) => {
        const point = value2Point(state.value, index, total);
        return point.join(',')
    }).join(' ')
})
</script>
<template>
    <g>
        <polygon :points="points"></polygon>
        <circle cx="100" cy="100" r="80"></circle>
        <AxisLabelVue
            v-for="(stat, index) in stats"
            :stat="stat"
            :index="index"
            :total="stats.length"
        ></AxisLabelVue>
    </g>
</template>