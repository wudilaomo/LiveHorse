<template>
    <div>
        <router-view></router-view>
        <div class="botton"><sign v-if="$route.name === 'home'"></sign ></div>
    </div>
</template>

<script lang="js">
import Menu from './pages/demo/menu_dish.vue';
import sign from './pages/demo/sign.vue';
export default {
    name: 'App',
    components: {
        Menu,
        sign
    },
    data() {
        return {};
    },
    created() {
        document.addEventListener('backbutton', this.goBack); // 监听移动端设备的后退按钮
    },
    mounted() {},
    updated() {},
    unmounted() {
        document.removeEventListener('backbutton', this.goBack); // 页面销毁时移除监听
    },
    methods: {
        // 用户在移动端设备点击后退按钮时，返回上一条路由
        goBack() {
            this.$router.go(-1);
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
</style>
