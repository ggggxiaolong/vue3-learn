<script setup lang="ts">
import { ref } from "vue";

const text = ref("edit me");
const checked = ref(false);
const checkedNames = ref(["Jack"]);
const picked = ref("One")
const selected = ref("A");
const multiSelected = ref(["A"]);
</script>

<template>
    <h2>Text Input</h2>
    <input v-model="text"/> {{text}}
    <h2>CheckBox</h2>
    <input type="checkbox" id="checkbox1" v-model="checked"/>
    <label for="checkbox1">Checked: {{checked}}</label>
    <h2>Multi CheckBox</h2>
    <input v-model="checkedNames" id="jack" type="checkbox" value="Jack"/>
    <label for="jack">Jack</label>
    <input v-model="checkedNames" id="john" type="checkbox" value="John"/>
    <label for="john">John</label>
    <input v-model="checkedNames" id="mike" type="checkbox" value="Mike"/>
    <label for="mike">Mike</label>
    <p> Checked Names: <pre>{{checkedNames}}</pre></p>
    <h2>Radio</h2>
    <input type="radio" id="one" value="One" v-model="picked"/>
    <label for="one">One</label>
    <input type="radio" id="two" value="Two" v-model="picked"/>
    <label for="two">Two</label>
    <p>Picked: {{picked}}</p>
    <h2>Select</h2>
    <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
    </select>
    <span>Selected: {{selected}}</span>
    <h2>Multi Select</h2>
    <select v-model="multiSelected" multiple style="width: 100px;">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
    </select>
    <span>Multi Selected:<pre>{{multiSelected}}</pre></span>
</template>
