<template>
    <thead>
        <tr >
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Tag</th>
            <th scope="col">Role</th>
            <th scope="col">Total time <div @click="sort('totalTime')" class="d19"></div></th>
            <th scope="col">{{ currMonth }} <div @click="sort('times1')" class="d19"></div></th> 
            <th scope="col">{{ prevMonth }} <div @click="sort('times2')" class="d19"></div></th>

            <!-- <th scope="col">{{ $store.state.table.items[0].prevMonth }}</th>  -->
        </tr>
    </thead>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            flag: 0
        }
    },
    methods: {
        sort(param) {
            this.$data.flag++;
            this.$store.state.table.items.sort( (a, b) => {
                if (this.$data.flag === 1) return b[`${param}`] - a[`${param}`];
                if (this.$data.flag === 2) return a[`${param}`] - b[`${param}`];
                // if (this.$data.flag === 1) return a[`${param}`] > b[`${param}`] ? -1 : 1;
                // else if (this.$data.flag === 2) return a[`${param}`] > b[`${param}`] ? 1 : -1;
                // if (a[`${param}`] === b[`${param}`]) return 0;
            });
            if (this.$data.flag === 2) this.$data.flag = 0;
        }
    },
    computed: {
        ...mapGetters(['currMonth', 'prevMonth', 'allItems']),
    },
}
</script>

<style scoped>

th {
    background: #7289da;
}

.d19 {
    display: inline-block;
    cursor: pointer;
    margin-left: 7px;
    width: 0; 
    height: 0;
    border: 7px solid transparent;
    border-bottom-color: #fff;
    position: relative; 
    top: -7px;
}
.d19:after {
    content: "";
    width: 0; 
    height: 0;
    position: absolute; 
    left: -7px; 
    top: 10px;
    border: 7px solid transparent;
    border-top-color: #fff;
}
</style>