<script setup lang="ts">
import { ref, watchEffect, type Ref } from "vue";
import type { Commit } from "./model";
const API_URL =
  "https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=";
const branches = ["main", "v2-compat"];

const currentBrach = ref(branches[0]);
const commits: Ref<Array<Commit>> = ref([]);

watchEffect(async () => {
  const url = `${API_URL}${currentBrach.value}`;
  commits.value = await (await fetch(url)).json();
});

function truncate(v: string): string {
  const newLine = v.indexOf("\n");
  return newLine > 0 ? v.slice(0, newLine) : v;
}

function formatDate(d: string): string {
  return d.replace(/T|Z/g, " ");
}
</script>
<template>
  <h1>Latest Vuew Core Commits</h1>
  <template v-for="branch in branches">
    <input
      type="radio"
      :id="branch"
      :value="branch"
      name="branch"
      v-model="currentBrach"
    />
    <label :for="branch">{{ branch }}</label>
  </template>
  <p>vuejs/@vue{{ currentBrach }}</p>
  <ul>
    <li v-for="{ commit, author, html_url, sha } of commits">
      <a :href="html_url" target="_blank" class="commit">{{
        sha.slice(0, 7)
      }}</a>
      - <span class="message">{{ truncate(commit.message) }}</span> <br />
      by
      <span class="author">
        <a :href="author.html_url" target="_blank">{{ commit.author.name }}</a>
      </span>
      at <span class="date">{{ formatDate(commit.author.date) }}</span>
    </li>
  </ul>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #42b883;
}
li {
  line-height: 1.5rem;
  margin-bottom: 20px;
}
.author,
.date {
  font-weight: bold;
}
</style>
