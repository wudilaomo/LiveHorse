<template>
    <div class="mb-4">
    <el-button type="primary plain" @click="goout">退出登录</el-button>
    </div>
</template>

<script>
export default {
    name: 'exit',
    methods: {
    goout() {
        this.$router.push('/'); // 返回首页
    }
    }
};
</script>

<style scoped>
</style>
