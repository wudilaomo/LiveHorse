<template>
    <div style="display: flex; justify-content: center">
        <vs-alert border style="width: 80%" color="danger">
            <template #title>是否删除？</template>
            <p>关于:NA</p>
            <p>时间:2024/7/1</p>
            <img src="../../../public/ma.png" />
            <p>Tips：若出现错误删除导致数据丢失，请联系管理员进行数据修改！</p>
            <template #footer>
                <vs-button color="danger" @click="cancel">Cancel</vs-button>
                <div style="width: 10%"></div>
                <vs-button @click="delete1">确认Accept√</vs-button>
            </template>
        </vs-alert>
    </div>
</template>

<script>
import { VsNotification } from 'vuesax-alpha';

export default {
    emits: ['closePage'],
    data() {
        return {};
    }, // 声明 closePage 事件
    methods: {
        identify(duration) {
            VsNotification({
                duration,
                progressAuto: true,
                title: '删除成功！',
                content: '若出现错误删除的情况，请联系数据库管理员进行恢复！👉 Moncia:)'
            });
        },
        cancel() {
            this.$emit('closePage');
        }
    }
};
</script>

<style></style>
