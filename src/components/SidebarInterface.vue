<template>
    <ul class="sidebar-menu">
        <!-- а если при повторном нажатии требуется убрать класс? -->
        <li @click="isCurr = 1;" :class="{ curr: isCurr === 1 }">
            <div class="search-icon"></div>
            <div class="curr-item-arrow"></div>
        </li>
        <li @click="isCurr = 2;" :class="{ curr: isCurr === 2 }">
            <div class="rank-icon"></div>
            <div class="curr-item-arrow"></div>
        </li>
    </ul>
    <div class="page"></div>
</template>

<script>
export default {
    data() {
        return {
            isCurr: 1,
        }
    },
    // methods: {
        
    // }
}
</script>

<style scoped>
ul {
    padding: 0;
    text-decoration: none;
}

/* ul {
    border: 0;
    font-family: Open Sans,sans-serif;
    font-size: 100%;
    font-style: inherit;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    vertical-align: baseline;
} */

.sidebar-menu { /* изучить это правило */
    list-style: none;
    width: 85px;
    height: 100%;
    background: #99aab5;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
}

.sidebar-menu li {
    width: 100%;
    height: 85px;
    border-bottom: 2px white solid;
    position: relative; /* curr-item-arrow из-за была приклеена к первому квадрату. Изучи!!!*/
}

.curr {
    background: #7289da;
}

.curr:hover {
    background: #7289da;
}

li:hover {
    background: #a1aedd;
}

.page {
    width: 48%;
    background: #e8eeee;
    position: absolute;
    left: 85px;
    top: 0;
    /* padding: 70px; */
    text-align: left;
    z-index: 2;
    min-height: 100%;
    min-width: 624px;
}

.sidebar-menu li.curr .curr-item-arrow {
    display: block;
    width: 0;
    height: 0;
    border-top: 17px solid transparent;
    border-left: 13px solid #7289da;
    border-bottom: 17px solid transparent;
    position: absolute;
    top: 24px;
    right: -11px;
}

.search-icon, .rank-icon {
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-position: 50%;
    display: block;
    background-repeat: no-repeat;
}

.search-icon {
    background-image: url('../assets/loupe.png');  
}

.rank-icon {
    background-image: url('../assets/rank.png');
}



/* .page_bg {
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    right: 0;
    margin: auto;
    background: hsla(0,0%,100%,.59);
}  */

</style>