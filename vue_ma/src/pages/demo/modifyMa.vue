<template>
    <div class="content_body">
        <h1>修改码</h1>
        <div class="maImage" style="height: 25%">
            <div class="tui" style="margin-left: 90px"><img id="qrcode" /></div>
        </div>
        <div class="no1" style="margin-left: 10px">
            <p>1.描述</p>
            <el-input v-model="describle" class="inputUrl" size="middle" placeholder="请输入描述" />
        </div>
        <div class="no2" style="margin-left: 10px">
            <p>2.URL地址</p>
            <el-input v-model="url" class="inputUrl" size="middle" placeholder="请输入URL" />
        </div>
        <div class="no3" style="margin-left: 10px">
            <p>3.时间</p>
            <el-input v-model="time" class="inputUrl" size="middle" placeholder="请输入时间" />
        </div>
        <div class="footer">
            <div class="backMenu" style="margin-left: 10px"><vs-button @click="backMenu()">Back返回主页</vs-button></div>
            <div class="identifyModify" style="margin-left: 10px"><vs-button @click="creatMa()">确认修改√</vs-button></div>
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
            url: 'https://baidu.com',
            time: '',
            describle: ''
        };
    },
    created() {
        this.creatMa();
    },
    methods: {
        backMenu() {
            this.$emit('closePage');
        },
        creatMa() {
            QRCode.toDataURL(this.url, {
                margin: 1,
                width: 150,
                height: 150
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
    height: 45%;
}
.footer {
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
