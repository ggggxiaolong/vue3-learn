<script setup lang="ts">
import Modal from './Modal.vue';
import { ref } from 'vue';
const isShow = ref(false)
</script>

<template>
    <button id="show-modal" @click="isShow = true">Show Modal</button>
    <Teleport to="body">
        <Modal :show="isShow" @on-close="isShow = false">
            <template #header>
                <h3>Custom header</h3>
            </template>
        </Modal>
    </Teleport>
</template>