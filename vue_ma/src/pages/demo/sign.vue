<template>
    <div class="mb-4" >
    <el-button type="primary" @click="goon">登入</el-button>
    </div>
</template>
<script>
import on from './on.vue';
export default {
    name: 'sign',
    components: {
        on
    },
    methods: {
    goon() {
        this.$router.push('/on');  // 确保路径正确
    }
    }
};
</script>

<style scoped>
.mb-4 {
    padding: 8px 16px; /* 按钮的内边距 */
    font-size: 16px; /* 按钮内的字体大小 */
  }
</style>

