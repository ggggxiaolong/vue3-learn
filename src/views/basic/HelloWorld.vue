<script setup lang="ts">
import {ref, type Ref} from 'vue';

const message: Ref<string> = ref("Hello world"); 
</script>

<template>
    <h1>{{message}}</h1>
</template>