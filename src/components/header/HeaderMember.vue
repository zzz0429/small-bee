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
                <a href="#/cake/all/all/all">蛋糕</a>
                <a href="#/food">精选食材</a>
                <a href="#/activity">最新活动</a>
                <a href="#/company">企业专区</a>
                <a href="#/member" class="member">会员中心</a>
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
            })
        },
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
        top: 0;
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

    .member{
        color: #c8b49b !important;
    }
</style>