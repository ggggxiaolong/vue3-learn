<script setup lang="ts">
import { ref, computed, watchEffect, type Ref } from "vue";
import { Filter, filterTodo, type Item } from "./model";
const STORAGE_KEY = "vue-todomvc";

const visibility = ref(Filter.All);
const input = ref("");
const editTitle = ref("");

const todos: Ref<Array<Item>> = ref(
  JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
);

const editedToto: Ref<Item | null> = ref(null);
const remaining = computed(() => filterTodo(Filter.Active, todos.value).length);

watchEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos.value));
});

function toggleAll(e: Event) {
  const isChecked = (e.target as HTMLInputElement).checked;
  todos.value.forEach((todo) => (todo.completed = isChecked));
}

function addTodo(e: Event) {
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
  editedToto.value = todo;
  editTitle.value = todo.title;
}

function cancelEdit(){
  editTitle.value = ""
  editedToto.value = null
}

function doneEdit(todo: Item){
  if(editedToto.value){
    if(!editTitle.value) removeTodo(todo)
    editedToto.value = null
    editTitle.value = ""
  }
}
</script>
