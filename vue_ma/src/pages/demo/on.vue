<template>
    <div class="content">
        <transition name="fade">
            <div v-if="!showRegistrationForm" class="container" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <h1>你好</h1>
            <form @submit.prevent="login">
                <input type="text" class="tbx" label="学号" v-model="user.account">
                <input type="password" class="tbx" v-model="user.password" label="密码" :type="showPassword ? 'text' : 'password'" :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'" @click:append-inner="showPassword = !showPassword">
                <input type="submit" class="sub" value="登录">
                <div class="text-itemq"></div>
                <button class="left" @click="goout">返回首页</button>
            </form>
            </div>
        </transition>
    </div>
<div class="custom-background"></div>
</template>

<script>
export default {
    name: 'on',
    components: {},
    data() {
    return {
        user: {
                account: null,
                password: null
            },
            showPassword: false
    };
    },
    created() {},
    mounted() {},
    updated() {},
    methods: {

        async login() {
            const result = await this.$api.auth.login({
                account: this.user.account,
                password: this.user.password
            });
            if (result) {
                localStorage.setItem('account', this.user.account);
                this.$router.push('/menu_dish');
            }
        },
    goout() {
        this.$router.push('/');  // 跳转到首页路由
    },
    }
};
</script>

<style scoped>
.content {
    margin: 0 auto;
    text-align: center;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(125deg, #4e8dcb, #7ec19a, #2980b9, #e74c3c, #8e44ad);
    background-size: 500%;
    animation: bgAnimation 15s linear infinite;
}
@keyframes bgAnimation {
    0% {
    background-position: 0% 50%;
    }
    50% {
    background-position: 100% 50%;
    }
    100% {
    background-position: 0% 50%;
    }
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 350px;
  height: 450px;
  border-radius: 20px;
  background-color:  rgba(255, 255, 255, 0.2);
  box-shadow: 15px 15px 10px rgba(33, 45, 58, 0.3);
  overflow: hidden;
  position: relative;
  transition: background-color 0.5s ease;
}
.container:hover {
  background: rgba(255, 255, 255, 0.2); /* 背景颜色和透明度 */
}
form {
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    z-index: 1;
}
.tbx {
    width: 250px;
    height: 40px;
    border: none;
    border-bottom: 1px solid #fff;
    background: none;
    color: #fff;
    font-size: 15px;
    outline: none;
}
.tbx::placeholder {
    color: #fff;
    font-size: 15px;
}
.sub {
    width: 250px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 20px;
    color: #fff;
    background: none;
    cursor: pointer;
    margin-top: 20px;
    outline: none;
}
h1 {
    color: #ecf0f1;
    font-size: 50px;
    letter-spacing: 5px;
    font-weight: 100;
    text-shadow: 5px 5px 5px rgba(33, 45, 58, 0.3);
    z-index: 1;
}
.left {
    width: auto;
    height: auto;
    border: none;
    background: none;
    color: #fff;
    outline: none;
    cursor: pointer;
}
.text-itemq a {
    text-decoration: none;
    font-size: 18px;
    color: #f6f6f6;
    cursor: pointer;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
.custom-background {
  background: none !important; /* 覆盖背景 */
  background-color: #abcdef !important; /* 新背景颜色 */
}
</style>

