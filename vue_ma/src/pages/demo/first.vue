<template>
    <div class="main-container">
        
        <div class="info-text">
            <h1>网络协会（NA）</h1>
                <p>
                网络协会成立于2003年，
                是一个由电脑爱好者组成
                的关于计算机网络的学术科
                技类社团。曾拿过五星社团
                及十佳社团的荣誉称号，以
                提升同学们的计算机应用水
                平为宗旨，为同学们提供一
                个学习、交流电脑网络技术
                的平台。
                </p>
            </div>
        <div class="image-container">
            <img src="/public/ma.png" alt="描述文字" />
        </div>
    </div>
    <!-- HTML -->
<div class="color-block"></div>
    </template>
    
    <script lang="ts" setup>
    import {
    Star
    } from '@element-plus/icons-vue'
    </script>
    
    <style>
.info-text {
  text-align: center; /* 文本水平居中 */
  margin-top: 80px; /* 与按钮的间隔 */
  margin-bottom:50%;
  margin-left: 3px;
  width: 80%;
}

/* 根据需要调整.button-row的样式 */
.button-row {
  display: flex;
  justify-content: center;
  margin-bottom:10%; /* 按钮与文本的间隔，您可以根据需要调整这个值 */
  /* 移除不必要的样式 */
  margin-left: 260px; /* 移除左边距 */
  gap: 10px; /* 子元素间隔，根据实际情况调整 */
  margin-top: 0px; /* 根据您的布局调整 */
}
.button-row button {
  padding: 2px 6px; /* 按钮的内边距 */
  font-size: 16px; /* 按钮内的字体大小 */
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* 视口高度 */
  margin-top: 0%;
}

.image-container img {
  max-width: 80%;
  height: auto; /* 保持图片比例 */
  margin-left: 0px;
  margin-top: -200px;
}

@media (max-height: 740px) and (max-width: 360px) and (orientation: portrait) {
    .main-container {
      margin-top: 0; /* 根据需要调整垂直边距 */
      margin-bottom: 0;
    }
  }
  /* CSS */

    </style>