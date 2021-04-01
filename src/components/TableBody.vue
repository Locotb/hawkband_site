<template>
    <tr>        
        <td :class="{ greenLine: isNeed }">{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.tag }}</td>
        <td>{{ item.role }}</td>
        <td>{{ (item.totalTime/3600).toFixed(2) }}</td>
        <td>{{ (item.times1/3600).toFixed(2) }}</td>
        <td>
            {{ (item.times2/3600).toFixed(2) }}
            <div v-if="isNeed" class="promotion" @click="upd">↑</div>
        </td>    
    </tr>        
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
        isNeed() {
            let param = false;
            if (this.item.role === 'Ополченец' || this.item.role === 'Ратник' || this.item.role === 'Гридень') {
                    param = true;
            }
            return param;
        }
    },
    methods: {
        upd() {
            let rolesArray = [
            { roleId: '685130173154066480', roleName: 'Ополченец'},
            { roleId: '685130172047163490', roleName: 'Ратник'},
            { roleId: '685130171040268414', roleName: 'Гридень'},
            { roleId: '685130169195036700', roleName: 'Дружинник'},
            ];
            let a = rolesArray.findIndex(elem => elem.roleName === this.item.role);
            if (a >= 0 && a < 3) {
                let config = require('../../config.json'); 
                let token = config.token;
                let xml = new XMLHttpRequest();
                xml.open('POST', `https://discord.com/api/webhooks/819259202664529950/${token}`);
                xml.setRequestHeader('Content-type', 'application/json');
                let params = {
                    content: `${this.item.id}#${rolesArray[a+1].roleId}`
                }
                xml.send(JSON.stringify(params));
            }
        }
    }
}
</script>

<style scoped>
.greenLine { 
    border-left: 3px #8CFF7F solid;
}
.promotion {
    display: inline-block;
    cursor: pointer;
    margin-left: 7px;
    width: 20px; 
    height: 20px;
    background: #8CFF7F;
    color: #000;
}
</style>