<template>
    <div class="box">
        <p>MainPart.vue</p>
        <!-- <SidebarInterface /> -->
        <table class="table table-striped table-bordered table-dark">
            <TableHead />
            <tbody>
                <TableBody 
                    v-for="item of $store.state.table.items"
                    :item="item"
                    :key="item.id"
                />
            </tbody>
        </table>
    </div>
</template>

<script>
// import SidebarInterface from '@/components/SidebarInterface';
// import { mapActions } from 'vuex';
import TableHead from '@/components/TableHead'
import TableBody from '@/components/TableBody'


export default {
    components: {
        TableHead,
        TableBody
    },
    // computed: {
    //     ...mapGetters(['allItems']),
    //     allI() {
    //         return this.$store.state.table.items
    //     }
    // },
    
}
</script>

<style scoped>

.box {
    margin: 0 auto;
    max-width: 70%;
    text-align: center;
}

</style>


