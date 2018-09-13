<template>
    <div class="nav_box">
        <div class="box">
            <div class="logo">
                <a href="">
                    <img src="http://www.ebeecake.com/dist/images/header_logo_text.png" alt="">
                </a>
            </div>
            <div class="nav">
                <a href="#/home">首页</a>
                <a href="#/cake/all/all/all" class="cake">蛋糕</a>
                <a href="#/food">精选食材</a>
                <a href="#/activity">最新活动</a>
                <a href="#/company">企业专区</a>
                <a href="#/member">会员中心</a>
            </div>
            <div class="login_and_register">
                <div>
                    <a href="#/member" class="login">登录</a>
                    <a href="#/register">注册</a>
                </div>
                <div class="shopping_car">
                    <a href="">
                        <img src="http://www.ebeecake.com/dist/images/shop_bag.png" alt="">
                    </a>
                    <a href="" class="shopping_quantity">0</a>
                </div>
            </div>
        </div>

        <div class="baidu_reputation">
            <div class="message_box">
                <div class="message_logo"></div>
                <div class="cutting_line"></div>

                <div class="message_shop">
                    <div class="message_shop_top">
                        <span>易贝可(北京)食品有限公司</span>
                        <span></span>
                    </div>
                    <div class="message_shop_bottom">BDV-249410411</div>
                </div>
                <div class="cutting_line"></div>

                <div class="message_evaluate">
                    <div class="message_evaluate_top">
                        <span>累计时间：103个月</span>
                    </div>
                    <div class="message_evaluate_bottom">
                        <span>暂无好评率</span>
                        <span>
                            <a href="">评价</a>
                            <span>|</span>
                            <a href="">举报</a>
                        </span>
                    </div>
                </div>
                <div class="cutting_line"></div>

                <div class="message_attestation">
                    <span>认证</span>
                    <span class="dot"></span>
                    <span>实名认证</span>
                </div>
                <div class="icon"></div>
                <div class="input_box">
                    <input type="text" value="易贝可北京食品有限公司@v">
                    <span></span>
                </div>

                <div class="put_away" @click="awayClick()">
                    <a href="#">
                        <span>收起</span>
                        <span></span>
                    </a>
                </div>
            </div>
        </div>
        <div class="unfold_box">
            <div class="unfold" @click="unfoldClick()">
                <a href="#">
                    <span></span>
                    <span>
                        <i></i>
                        <span>百度信誉</span>
                    </span>
                </a>
            </div>
        </div>
        <!-- 储存标签 -->
        <div class="reserve">

        </div>

    </div>
</template>

<script>
    export default {
        mounted() {
            (window.onscroll = function (e) {
                // console.log(document.documentElement.scrollTop);
                if (document.documentElement.scrollTop > 0) {
                    $(".nav_box").css({ "box-shadow": "0 0 10px -3px #6e6e6e" });
                } else {
                    $(".nav_box").css({ "box-shadow": "" });
                }
            }),

            $("input").focus(function () {
                $("input").css({ border: "1px solid #48b5ff" });
            });
            $("input").blur(function () {
                $("input").css({ border: "1px solid #e0e0e0" });
            });

            setTimeout(function () {
                $(".baidu_reputation").animate(
                    { width: "124px", height: "41px" },
                    400,
                    function () {
                        $(".reserve").html($(".message_box"));
                        $(".baidu_reputation").html($(".unfold"));
                        $(".unfold").css({ display: "block" });
                    }
                );
            }, 5000)
        },

        methods: {
            awayClick() {
                console.log($(".unfold_box"));
                $(".baidu_reputation").animate(
                    { width: "124px", height: "41px" },
                    400,
                    function () {
                        $(".reserve").html($(".message_box"));
                        $(".baidu_reputation").html($(".unfold"));
                        $(".unfold").css({ display: "block" });
                    }
                );
            },
            unfoldClick() {
                $(".unfold_box").html($(".unfold"));
                $(".baidu_reputation").html($(".message_box"));
                $(".unfold").css({ display: "none" });
                $(".baidu_reputation").animate({ width: "100%", height: "70px" }, 400);
            },
        }
    };
</script>

<style scoped>
    .nav_box {
        width: 100%;
        height: 70px;
        position: relative;
        border-bottom: 1px solid #e7e7e7;
        position: fixed;
        z-index: 1000;
        background-color: #fff;
    }

    a {
        font-size: 14px;
        text-decoration: none;
        color: #3c2314;
    }

    a:hover {
        color: #c8b49b;
    }

    .box {
        height: 70px;
        display: flex;
        justify-content: space-between;
    }

    .logo {
        width: 175px;
        height: 100%;
        line-height: 80px;
    }

    .nav {
        width: 585px;
        height: 100%;
        line-height: 70px;
    }

    .nav>a {
        margin-right: 40px;
    }

    .login_and_register {
        width: 180px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .login::after {
        content: "|";
        margin-left: 10px;
        margin-right: 10px;
    }


    .shopping_quantity {
        display: inline-block;
        width: 18px;
        height: 18px;
        border-radius: 9px;
        background-color: #3c2314;
        color: #fbf5dd;
        text-align: center;
        line-height: 18px;
        font-size: 12px;
    }

    .shopping_quantity:hover {
        color: #fbf5dd;
    }

    .shopping_car {
        width: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .baidu_reputation {
        width: 100%;
        height: 70px;
        background-color: rgb(234, 230, 227, 0.8);
        position: absolute;
        top: 0;
        overflow: hidden;
    }

    .message_box {
        width: 1000px;
        height: 70px;
        margin: 0 auto;
        background-color: #eae6e3;
        display: flex;
        align-items: center;
        padding: 15px 30px;
        box-sizing: border-box;
    }

    .message_logo {
        width: 60px;
        height: 40px;
        background-image: url("https://tag.baidu.com/views/showsite/creditPop.png?20170227");
        background-position: 0 -175px;
        margin-right: 10px;
    }

    .cutting_line {
        width: 1px;
        height: 36px;
        background-color: white;
        opacity: 0.3;
    }

    .message_shop,
    .message_evaluate {
        width: 180px;
        height: 41px;
        margin-left: 13px;
    }

    .message_shop_top>span:first-child {
        display: inline-block;
        width: 157px;
        height: 20px;
        font-size: 15px;
        color: white;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .message_shop_top>span:last-child {
        display: inline-block;
        width: 14px;
        height: 16px;
        background-image: url("https://tag.baidu.com/views/showsite/creditPop.gif?20170227");
        background-position: -70px -40px;
    }

    .message_shop_bottom {
        width: 180px;
        height: 15px;
        font-size: 12px;
        color: white;
    }

    .message_evaluate {
        width: 135px;
        height: 38px;
        font-size: 12px;
        color: white;
        margin-left: 15px;
    }

    .message_evaluate_top {
        width: 100%;
        height: 17px;
    }

    .message_evaluate_bottom {
        width: 100%;
        height: 17px;
        margin-top: 5px;
    }

    .message_evaluate_bottom * {
        font-size: 12px;
        color: white;
    }

    .message_evaluate_bottom>span:last-child {
        margin-left: 10px;
    }

    .message_attestation {
        width: 120px;
        height: 39px;
        font-size: 14px;
        color: white;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-left: 10px;
    }

    .dot {
        display: inline-block;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: white;
    }

    .icon {
        width: 9px;
        height: 16px;
        background-image: url("https://tag.baidu.com/views/showsite/creditPop.png?20170227");
        background-position: -23px -40px;
        margin: 0 10px;
    }

    .input_box {
        position: relative;
    }

    input {
        width: 160px;
        height: 28px;
        border: 1px solid #e0e0e0;
        font-size: 14px;
        color: #7a7a7a;
        padding-right: 28px;
    }

    .input_box>span {
        display: inline-block;
        width: 13px;
        height: 14px;
        background-image: url("https://tag.baidu.com/views/showsite/creditPop.png?20170227");
        background-position: 0 -61px;
        position: absolute;
        top: 10px;
        right: 10px;
    }

    .put_away {
        margin-left: 140px;
        display: flex;
        align-items: center;
    }

    .put_away>a {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: white;
        text-decoration: none;
    }

    .put_away span:last-child {
        width: 0;
        height: 0;
        display: inline-block;
        border: 5px solid transparent;
        border-right: 5px solid #fff;
    }

    .unfold {
        width: 124px;
        height: 41px;
        background-color: #eae6e3;
        display: none;
    }

    .unfold>a {
        width: 124px;
        height: 41px;
        display: flex;
        align-items: center;
    }

    .unfold>a>span:first-child {
        border: 5px solid transparent;
        border-left: 5px solid #fff;
        margin-left: 10px;
    }

    .unfold>a>span:last-child {
        display: flex;
        width: 110px;
        height: 17px;
        justify-content: space-around;
        border-left: 1px solid #cfcfcf;
    }

    .unfold>a>span:last-child>i {
        display: inline-block;
        width: 26px;
        height: 20px;
        background-image: url("https://tag.baidu.com/views/showsite/creditPop.png?20170227");
        background-position: -89px -69px;
    }

    .unfold>a>span:last-child>span {
        display: inline-block;
        width: 56px;
        height: 19px;
        font-size: 14px;
        color: white;
    }

    .reserve {
        display: none;
    }

    .cake {
        color: #c8b49b;
    }
</style>