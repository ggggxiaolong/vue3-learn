<script setup lang="ts">
import { ref } from 'vue';

const message = ref("Hello World");
function reverseMessage(){
    message.value = message.value.split('').reverse().join('');
}

function notify(){
    alert("navigation was prevented")
}
</script>

<template>
    <h1>{{message}}</h1>
    <input v-model="message"/>
    <button @click="reverseMessage">Reverse Message</button>
    <button @click="message += '!'">Append "!"</button>
    <a href="https://vuejs.org" @click.prevent="notify">A link with e.preventDefault()</a>
</template>
<style>
button, a, input {
    display: block;
    margin-bottom: 1rem;
}
</style>