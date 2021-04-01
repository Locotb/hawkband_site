<template>
  <div id="app">
    <h1>hi</h1>
    <hr>
    <MainPart />
    <!-- <SidebarInterface /> -->
  </div>
</template>

<script>
import MainPart from '@/components/MainPart'
// import SidebarInterface from '@/components/SidebarInterface'
import { mapActions } from 'vuex';

export default {
    name: 'App',
    components: {
        MainPart,
        // SidebarInterface
    },
    async mounted() {
        this.fetchInfo();
    },
    methods: {
        ...mapActions(['fetchInfo']),
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
    /* position: relative; */
    /* height: 1px; */
}

body {
    background: #2c2f33;
}

div {
    display: block;
}
</style>
