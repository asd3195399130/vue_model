<!--  -->
import { truncate } from 'fs/promises';
<template>
    <div class="">
        <div class="text">
            <img src="../assets/微信截图_20231102210859.png" alt="">
            <div class="text_lect">
                <img src="http://www.chinawanda.com/static/images/rw_banner.jpg" alt="">
            </div>
            <div class="slide-in-left ">
                <h1>
                    中国的万达 世界的万达
                </h1>
            </div>
            <p class="slide-in-left">
                汇聚科技精华，缔造百年万达。在30多年的发展中，万达集团励精图治，开拓进取，走过了“科技促腾飞、品牌创优势、合作促发展”三部曲，形成了“以创新为先导，聚焦石化橡胶一体化，形成龙头产业突出、相关多元发展和专业化经营的发展格局”......
            </p>
            <span class="span">
                <a href="#">
                    多人观看
                </a>
            </span>
        </div>
        <!-- {{ myArray }} -->
        <div class="header">
            <div class="header-left">
                <img class="pas_border-img_rD0-q" alt=""
                    src="https://bd-s.tripcdn.cn/modules/nfes/pc-home/groupBorder.c89afe410e3f0fcd6f8731e61f6bfaa5.png">
                <div class="header_left-list">
                    <img class="pas_image_OHFwg" alt=""
                        src="https://bd-s.tripcdn.cn/modules/nfes/pc-home/group.912b559b491ae7f4c9feddabdabec74f.png">
                    <a href="#">当季热卖·跟团游<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"
                            class="pas_arrow_ZIWax">
                            <path
                                d="M8 1C4.131 1 1 4.131 1 8s3.131 7 7 7 7-3.131 7-7-3.131-7-7-7zm2.394 7.362-.019.019-3.256 3.107a.668.668 0 0 1-.938-.019.67.67 0 0 1 .019-.944l2.643-2.531-2.605-2.481a.664.664 0 0 1-.019-.944.662.662 0 0 1 .937-.019l3.238 3.088c.2.2.2.525 0 .725z"
                                fill="#34475e" class="arrow_svg__transform-group"></path>
                        </svg>
                    </a>
                </div>
                <ul>
                    <li v-for="(item, index) in myArray" :key="index" class="myselect">
                        <div class="pas">
                            <div class="img_pas">
                                <img :src="item.src" alt="" class="pas_image">
                                <div class="pas_rank pas_link">{{ item.id }}</div>
                            </div>
                            <div class="pas_content">
                                <div class="pas_flex">
                                    <span class="pas_name">{{ item.group }}</span>
                                    <span class="pas_price">
                                        ￥<span class="pas_num">{{ item.price }}</span>起
                                    </span>
                                </div>
                                <div class="pas_T4">
                                    <span class="pas_small ">{{ item.score }} 分</span>
                                    <span class="pas_score">|</span>
                                    <span class="pas_score">
                                        {{ item.number }}人出游
                                    </span>
                                </div>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>
            <div class="header-right">
                <img class="pas_border-img_rD0-q"
                    src="https://bd-s.tripcdn.cn/modules/nfes/pc-home/flightBorder.275bf2a7fe3d83306f3526f92f234cc6.png"
                    alt="">
                <div class="pas_r_header">
                    <img class="pas_image_OHFwg" alt=""
                        src="https://bd-s.tripcdn.cn/modules/nfes/pc-home/flight.3f9b3de3d7f758268b54ffe8b14b9660.png">
                    <a href="#">周末畅游·特价机票
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" class="pas_arrow_ZIWax">
                            <path
                                d="M8 1C4.131 1 1 4.131 1 8s3.131 7 7 7 7-3.131 7-7-3.131-7-7-7zm2.394 7.362-.019.019-3.256 3.107a.668.668 0 0 1-.938-.019.67.67 0 0 1 .019-.944l2.643-2.531-2.605-2.481a.664.664 0 0 1-.019-.944.662.662 0 0 1 .937-.019l3.238 3.088c.2.2.2.525 0 .725z"
                                fill="#34475e" class="arrow_svg__transform-group"></path>
                        </svg>
                    </a>
                </div>
                <ul>
                    <li v-for="(item, index) in myArray" :key="index" class="myselect">
                        <div class="pas">
                            <div class="img_pas">
                                <img :src="item.img" alt="" class="pas_image">
                                <div class="pas_rank pas_link">{{ item.id }}</div>
                            </div>
                            <div class="pas_content">
                                <div class="pas_flex">
                                    <span class="pas_name">
                                        {{ item.zero }}
                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"
                                            class="pas_arrow_ZIWax">
                                            <path
                                                d="M13.087 9a.625.625 0 0 1 .064 1.246l-.064.004H6.213l-.001 1.625c0 .49-.531.777-.935.543l-.079-.053-2.835-2.25c-.437-.347-.232-1.029.287-1.108L2.752 9h10.335zM10.56 3.583l.078.053 2.836 2.25c.436.347.232 1.028-.287 1.107l-.101.008H2.75a.625.625 0 0 1-.064-1.246l.064-.003h6.874l.001-1.625c0-.491.53-.778.935-.544z"
                                                fill="#34475e" class="flight_svg__transform-group"></path>

                                        </svg>
                                        {{ item.End }}
                                    </span>
                                    <span class="pas_price">
                                        ￥
                                        <span class="pas_num">
                                            {{ item.ticket }}起
                                        </span>
                                    </span>
                                </div>
                                <div class="pas_flex_centent">
                                    <span class="pas_select">携程精选</span>
                                    <span class="pas_score">
                                        {{ item.discount }}
                                        折
                                    </span>
                                </div>
                            </div>

                        </div>

                        <div class="pas_T4">
                            <span class="pas_score">
                                {{ item.startDate }}去
                                {{ item.EndDate }}回
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <transition enter-active-class="animate__animated animate__tada"
            leave-active-class="animate__animated animate__bounce" v-if="show">
            <img src="https://img2.baidu.com/it/u=2904352544,891855650&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500" alt="">
            <button @click="toggle">
                展开
            </button>
        </transition>
        <button @click="toggle" class="btn">展开</button>



        <transition name="drawer" @after-leave="afterLeave">
            <div v-show="isDrawerOpen" class="drawer">
                <!-- 抽屉的内容 -->
                <p>这是抽屉的内容</p>
            </div>
        </transition>
        <button @click="toggleDrawer" class="btn " id="btns">切换抽屉</button>
    </div>
</template>

<script>
export default {
    props: {
        // item: Array,
        myArray: {
            type: Array,
        }
    },
    data() {
        return {
            show: true,
            isDrawerOpen: false
        }
    },
    methods: {
        toggle() {
            this.show = !this.show
        },
        toggleDrawer() {
            this.isDrawerOpen = !this.isDrawerOpen
        }
    },
    created() {

    },
    mounted() {

    }
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
* {
    margin: 0;
    padding: 0;

}

.drawer {
    /* 抽屉的样式 */
    width: 1200px;
    height: 200px;
    background: url("https://img0.baidu.com/it/u=3663508195,2907650417&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1699117200&t=ee9eeccc7c2f29c93c81e48f948d64fc") no-repeat;
    background-size: cover;
    transition: transform 0.3s ease-in-out;
}

.drawer-enter-active,
.drawer-leave-active {
    /* 进入和离开过渡活动状态的样式 */
    transition: transform 0.3s ease-in-out;
}

.drawer-enter,
.drawer-leave-to {
    /* 进入和离开过渡的起始和结束状态的样式 */
    transform: translateX(-100%);
}

p {
    font-size: 18px;
    line-height: 36px;
    margin-bottom: 10%;
    max-width: 720px;
    color: #ffffff;
    margin-top: 150px
}

h1 {
    color: #ffffff;
    position: absolute;
    top: 100%;
    left: 250px;

}

.span {
    font-size: 21px;
    border: 1px solid #fff;
    display: inline-block;
    padding: 10px 25px;
    cursor: pointer;
    color: red
}

#btns {
    position: absolute;
    left: 0;
}

.btn {
    --color: #00A97F;
    --color2: rgb(10, 25, 30);
    padding: 0.8em 1.75em;
    background-color: transparent;
    border-radius: 6px;
    border: .3px solid var(--color);
    transition: .5s;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    z-index: 1;
    font-weight: 300;
    font-size: 17px;
    font-family: 'Roboto', 'Segoe UI', sans-serif;
    text-transform: uppercase;
    color: var(--color);
}

.btn::after,
.btn::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    transform: skew(90deg) translate(-50%, -50%);
    position: absolute;
    inset: 50%;
    left: 25%;
    z-index: -1;
    transition: .5s ease-out;
    background-color: var(--color);
}

.btn::before {
    top: -50%;
    left: -25%;
    transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
}

.btn:hover::before {
    transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
}

.btn:hover::after {
    transform: skew(45deg) translate(-50%, -50%);
}

.btn:hover {
    color: var(--color2);
}

.btn:active {
    filter: brightness(.7);
    transform: scale(.98);
}

.slide-in-left {
    position: absolute;
    top: 20%;
    z-index: 999;
    color: #fff;
    margin-left: 9.7%;
    width: 60%;
    // text-align: left;
    // transform: translate(-50%, -50%);
    -webkit-animation: slide-in-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes slide-in-left {
    0% {
        -webkit-transform: translateX(-1000px);
        transform: translateX(-1000px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slide-in-left {
    0% {
        -webkit-transform: translateX(-1000px);
        transform: translateX(-1000px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
}

.text {
    margin-top: 15px;
}

.text_lect img {
    width: 100%;
}

.text_lect {
    width: 100%;
    height: 500px;
    margin: auto;
    -webkit-animation: kenburns-top 25s ease-out both;
    animation: kenburns-top 25s ease-out both;
}

@-webkit-keyframes kenburns-top {
    0% {
        -webkit-transform: scale(1) translateY(0);
        transform: scale(1) translateY(0);
        -webkit-transform-origin: 50% 16%;
        transform-origin: 50% 16%;
    }

    100% {
        -webkit-transform: scale(1.25) translateY(-15px);
        transform: scale(1.25) translateY(-15px);
        -webkit-transform-origin: top;
        transform-origin: top;
    }
}

@keyframes kenburns-top {
    0% {
        -webkit-transform: scale(1) translateY(0);
        transform: scale(1) translateY(0);
        -webkit-transform-origin: 50% 16%;
        transform-origin: 50% 16%;
    }

    100% {
        -webkit-transform: scale(1.25) translateY(-15px);
        transform: scale(1.25) translateY(-15px);
        -webkit-transform-origin: top;
        transform-origin: top;
    }
}

ul {
    list-style: none;
    height: 477px;
    position: relative;
    background: #ffffff;
    border-radius: 8px 8px 8px 8px;
    margin-left: 4px;
    margin-right: 4px;
    padding: 9px 8px 0 8px;
}

.myselect:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.header {
    width: 728px;
    height: 548px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    margin-top: 25%
}

.header-left {
    background: linear-gradient(228deg, #f4fafd 0%, #e2f2fb 100%);
    margin-right: 12px;
    position: relative;
    border-radius: 8px;
    height: 548px;
    width: 50%;
    color: #333;
    margin-left: 12px;
}

.pas_border-img_rD0-q {
    width: 100%;
    position: absolute;
    top: 0;
    right: -1px;
}

.header_left-list {
    color: #336788;
    height: 56px;
    line-height: 56px;
    position: relative;
    font-size: 16px;
    font-weight: 600;
    -ms-flex-pack: center;
    justify-content: center;
    overflow: hidden;
    display: flex;
}

.pas_image_OHFwg {
    position: absolute;
    width: 96px;
    top: 0;
    left: 0;
}

a {
    text-decoration: none;
    // color: #333333;
}

.header_left-list a {
    color: #333333;
}

.pas {
    display: flex
}

.img_pas {
    position: relative;
    top: 2px
}

.pas_image {
    width: 80px;
    height: 80px;
    border-radius: 4px;
    -o-object-fit: cover;
    object-fit: cover;
    overflow-clip-margin: content-box;
    overflow: clip;
    border: none;
}

li:nth-child(1) .pas_link {
    background: #f63b2e;
}

li:nth-child(2) .pas_link {
    background: #FF8B26;
}

li:nth-child(3) .pas_link {
    background: #FFB63E;
}

li:nth-child(4) .pas_link {
    background: #99AECA;
}

li:nth-child(5) .pas_link {
    background: #99AECA;
}

.pas_rank {
    position: absolute;
    border-radius: 0px 100px 100px 0px;
    height: 18px;
    width: 14.34px;
    top: 4px;
    color: #ffffff;
    font-size: 12px;
    padding-left: 4px;
    line-height: 18px;
}

.pas_content {
    flex: 1;
    padding: 4px 16px 0 16px;

}

.pas_flex {
    display: flex;
    justify-content: space-between;
}

.pas_name {
    font-size: 16px;
    font-weight: bold;
    width: calc(100% - 65px);
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.pas_price {
    color: #0086f6;
    font-size: 12px;
    cursor: pointer;
}

.pas_num {
    font-size: 16px;
    font-weight: 600;
    color: #0086f6;
}

.pas_small {
    color: #0086f6;
    margin-right: 4px;
}

.pas_score {
    color: #666;
    font-size: 12px;
}

.pas_T4 {
    text-align: left
}

.header-right {
    background: linear-gradient(26.57deg, #e6ecfc 0%, #f4f6fd 100%);
    position: relative;
    border-radius: 8px;
    height: 548px;
    width: 50%
}

.pas_r_header {
    height: 56px;
    line-height: 56px;
    position: relative;
    font-size: 16px;
    font-weight: 600;
    -ms-flex-pack: center;
    justify-content: center;
    overflow: hidden;
}

.pas_r_header a {
    color: #333333;
    z-index: 10;
    text-align: center;
}

.pas_flex_centent {
    display: flex;
    justify-content: space-between;
}

.pas_select {
    color: #00b87a;
    font-size: 12px;
    border-radius: 2px;
    border: 1px solid #bfeddd;
    padding: 2px 4px;
}
</style>