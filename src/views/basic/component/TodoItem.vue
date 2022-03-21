<script setup lang="ts">
import type { Item } from "./model";
defineProps<{todo: Item}>();
</script>
<template>
    <li>{{todo.text}}</li>
</template>
