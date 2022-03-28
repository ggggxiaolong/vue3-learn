<script setup lang="ts">
import { ref, computed, watchEffect, type Ref, type VNode } from "vue";
import { Filter, filterTodo, type Item } from "./model";
const STORAGE_KEY = "vue-todomvc";

const visibility = ref(Filter.All);
const input = ref("");

const todos: Ref<Array<Item>> = ref(
  JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
);

const seletedTodo: Ref<Item | null> = ref(null);
const remaining = computed(() => filterTodo(Filter.Active, todos.value).length);
const filteredTodos = computed(() => filterTodo(visibility.value, todos.value))

watchEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos.value));
});

function toggleAll(e: Event) {
  const isChecked = (e.target as HTMLInputElement).checked;
  todos.value.forEach((todo) => (todo.completed = isChecked));
}

function addTodo() {
  const value = input.value.trim();
  if (value) {
    todos.value.push({
      id: Date.now(),
      title: value,
      completed: false,
    });
    input.value = "";
  }
}

function removeTodo(todo: Item) {
  todos.value.splice(todos.value.indexOf(todo), 1);
}

function editTodo(todo: Item) {
  seletedTodo.value = todo;
}

function cancelEdit() {
  seletedTodo.value = null
}

function doneEdit(todo: Item) {
  if (seletedTodo.value) {
    if (!seletedTodo.value.title) { removeTodo(todo) } else {
      todos.value.splice(todos.value.indexOf(todo), 1, seletedTodo.value);
    }
    seletedTodo.value = null
  }
}

function removeCompleted() {
  todos.value = filterTodo(Filter.Active, todos.value)
}

function toogleCompleted(todo: Item){
  console.log(todo)
  todo.completed = !todo.completed
  todos.value.splice(todos.value.indexOf(todo), 1, todo);
}
</script>

<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" autofocus placeholder="What needs to be done?" @keyup.enter="addTodo" v-model="input" />
    </header>
    <section class="main" v-show="todos.length">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        :checked="remaining === 0"
        @change="toggleAll"
      />
      <label for="toggle-all">Mark all as completed</label>
      <ul class="todo-list">
        <li
          v-for="todo in filteredTodos"
          class="todo"
          :key="todo.id"
          :class="{ completed: todo.completed, editing: todo.id === seletedTodo?.id }"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed" />
            <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>
          <input
            v-if="todo.id === seletedTodo?.id"
            class="edit"
            type="text"
            v-model="seletedTodo!!.title"
            @vnode-mounted="({el}: VNode) => el?.focus()"
            @blur="doneEdit(todo)"
            @keyup.enter="doneEdit(todo)"
            @keyup.escape="cancelEdit()"
          />
        </li>
      </ul>
    </section>
    <footer class="footer" v-show="todos.length">
      <span class="todo-count">
        <strong>{{remaining}}</strong>
        <span>{{remaining === 1? 'item' : 'items'}} left</span>
      </span>
      <ul class="filters">
        <li>
          <a href="#/all" :class="{selected : visibility === Filter.All}" @click.prevent="visibility = Filter.All">All</a>
        </li>
        <li>
          <a href="#/active" :class="{selected : visibility === Filter.Active}" @click.prevent="visibility = Filter.Active">Active</a>
        </li>
        <li>
          <a href="#/completed" :class="{selected : visibility === Filter.Completed}" @click.prevent="visibility = Filter.Completed">Completed</a>
        </li>
      </ul>
      <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">Clear completed</button>
    </footer>
  </section>
</template>

<style scoped>
@import "https://unpkg.com/todomvc-app-css@2.4.1/index.css";
</style>