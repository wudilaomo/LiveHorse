<template>
    <div class="content_body">
        <h1>创建码</h1>
        <div class="no1" style="margin-left: 10px">
            <p>1.输入目标URL</p>
            <el-input v-model="url" class="inputUrl" size="large" placeholder="请输入URL" />
        </div>
        <div class="no2" style="margin-left: 10px">
            <p>2.设置生成时间</p>
            <el-input v-model="time" class="inputTime" size="large" placeholder="时间Time" />
        </div>
        <div class="creatMa">
            <p style="margin-left: 10px">生成:</p>
            <div class="middleMa" style="margin-left: 65px">
                <img id="qrcode" />
            </div>
        </div>
        <div class="footer1">
            <div class="backMenu" style="margin-left: 10px"><vs-button @click="backMenu()">Back返回主页</vs-button></div>
            <div class="identifyModify" style="margin-left: 10px"><vs-button @click="creatMa()">确认创建√</vs-button></div>
        </div>
    </div>
</template>

<script>
import { VsNotification } from 'vuesax-alpha';
import QRCode from 'qrcode';

export default {
    emits: ['closePage'],
    data() {
        return {
            url: '',
            time: ''
        };
    },
    methods: {
        backMenu() {
            this.$emit('closePage');
        },
        creatMa() {
            QRCode.toDataURL(this.url, {
                margin: 1,
                width: 200,
                height: 200
            }).then((url) => {
                const qrcode = document.getElementById('qrcode');
                qrcode.src = url;
            });
        }
    }
};
</script>

<style>
.content_body {
    width: 90%;
    height: 90%;
    background-color: white;
    border-radius: 10px;
}
.inputUrl {
    width: 80%;
    margin-left: 10px;
}
.inputTime {
    width: 80%;
    margin-left: 10px;
}
.creatMa {
    height: 40%;
}
.footer1 {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
