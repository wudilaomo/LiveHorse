<template>
    <div class="navigate"><h1 style="color: white">二维码生成</h1></div>
    <div class="botton"><exit1 v-if="$route.name === 'Menu'"></exit1 ></div>
    <div class="container">
        <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
            <li v-for="i in count" :key="i" class="infinite-list-item">
                <div style="margin-left: 4px">
                    {{ i }}
                </div>
                <div class="content">
                    <div class="ma" @click="HaveCheck"><img src="../../../public/ma.png" /></div>
                    <div class="information">
                        描述:NA
                        <br />
                        上传时间:2024/7/1
                    </div>
                    <div class="content-change">
                        <button class="delete"><a class="shanchu" style="margin: 3px" @click="deleteIdentify()">删除</a></button>
                        <button class="modify"><a class="fixed" style="font-size: 15px" @click="modifyUrl()">修改</a></button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="feet">
        <div class="buttons" style="display: flex; margin-left: 20px">
            <vs-button @click="creatMa()">新增+</vs-button>
            <vs-button style="margin-left: 10px" @click="active = 0">确认修改√</vs-button>
        </div>
    </div>
    <div v-if="showMa" class="check" @click="backMenu">
        <div class="checkMa"><img src="../../../public/ma.png" style="width: 90%" /></div>
    </div>
    <div v-if="showDelete" class="deleteIdentify"><Delete @close-page="showDelete = false"></Delete></div>
    <div v-if="creatNew" class="creatMa"><creatNew @close-page="creatNew = false"></creatNew></div>
    <div v-if="modifyMa" class="modifyUrl"><modifyErWeiMa @close-page="modifyMa = false"></modifyErWeiMa></div>
</template>

<script>
import { ref, onMounted, onUpdated } from 'vue';
import exit1 from './exit.vue';
import { ArrowLeft, ArrowRight, Edit } from '@element-plus/icons-vue';
import { focusableStack } from 'vuesax-alpha/es/components/focus-trap/src/utils';
import Delete from './deleteMa.vue';
import creatNew from './creatNew.vue';
import modifyErWeiMa from './modifyMa.vue';
export default {
    components: {
        Delete,
        creatNew,
        modifyErWeiMa,
        exit1
    },

    setup() {
        const count = ref(0);

        const load = () => {
            count.value += 2;
        };

        onMounted(() => {
            // 在组件挂载后执行的代码
        });

        onUpdated(() => {
            // 在组件更新后执行的代码
        });

        const active = ref(0);

        return {
            count,
            load,
            active
        };
    },
    data() {
        return {
            showMa: false,
            showDelete: false,
            creatNew: false,
            modifyMa: false
        };
    },

    methods: {
        HaveCheck() {
            console.log('have a check');
            this.showMa = true;
        },
        backMenu() {
            console.log('backMenu');
            this.showMa = false;
        },
        deleteIdentify() {
            console.log('deleteIdentify');
            this.showDelete = true;
        },
        creatMa() {
            console.log('creatMa');
            this.creatNew = true;
        },
        modifyUrl() {
            console.log('modifyUrl');
            this.modifyMa = true;
        }
    }
};
</script>

<style scoped>
.botton {
    position: absolute;
    top: 0;
    right: 0;
    }
.container {
    margin-top: 10px;
    height: 500px;
}

.navigate {
    display: flex;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: #195bff;
}

.infinite-list {
    height: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
}
.infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    background: var(--el-color-primary-light-9);
    margin: 10px;
    color: var(--el-color-primary);
    background-color: white;
}
.infinite-list .infinite-list-item + .list-item {
    margin-top: 10px;
}

.feet {
    height: 80px;
    display: flex;
    box-shadow: 0px -5px 5px -5px rgba(0, 0, 0, 0.4);
    align-items: center;
}
.ma {
    width: 15.5%;
    height: 80%;
    background-color: brown;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.content {
    display: flex;
    align-items: center;
    width: 90%;
    height: 80%;
    margin-left: 10px;
}
.information {
    margin-left: 10px;
    width: 60%;
}
.delete {
    color: red;
    border-color: red;
    border-radius: 5px;
    font-size: small;
    border-width: 1px;
    background-color: white;
}
.content-change {
    width: 25%;
    display: flex;
    justify-content: space-between;
}

.modify {
    background-color: #0040ff;
    border-width: 0px;
    border-radius: 5px;
    color: white;
    padding: 2px 3px;
}
.checkMa {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(8px);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.deleteIdentify {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(8px);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.creatMa {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(8px);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modifyUrl {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(8px);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
