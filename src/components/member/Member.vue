<template>
    <div>
        <header-member></header-member>

        <div class="box">
            <div class="register_box">
                <div class="register">
                    <div class="login_type">
                        <div class="login" @click="phone($event)" @mouseenter="phoneEnter($event)" @mouseleave="phoneLeave($event)">
                            <a href="#" class="color" @click="phoneForm()">手机验证码登录
                                <div class="underline"></div>
                            </a>
                        </div>
                        <div class="login" @click="phone($event)" @mouseenter="phoneEnter($event)" @mouseleave="phoneLeave($event)">
                            <a href="#" @click="passwordForm()">账号密码登录
                                <div class="underline"></div>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <div class="login" @click="phone($event)" @mouseenter="phoneEnter($event)" @mouseleave="phoneLeave($event)">
                                    <a href="#" class="wechat_login"  @click="wechatBox()">
                                        <i class="WeChat"></i>
                                        <span>微信登录</span>
                                        <div class="underline"></div>
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="form_box">
                        <form action="" class="phone_form">
                            <div>
                                <span class="number">手机号码</span>
                                <input type="text" style="height: 32px; width: 255px;" class="phone_input">
                            </div>
                            <div>
                                <span class="number">验证码</span>
                                <div class="number_code">
                                    <input type="text" style="height: 32px; width: 112px" class="phone_input">
                                    <div class="code" @click="refreshCode">
                                        <verification-code :identifyCode="identifyCode" :contentWidth="contentWidth" :contentHeight="contentHeight"></verification-code>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span class="number">短信验证码</span>
                                <div class="number_code">
                                    <input type="text" style="height: 32px; width: 112px" class="phone_input">
                                    <a href="#" class="phone_button">获取短信验证码</a>
                                </div>
                            </div>
                            <a href="#">登录</a>
                            <p>
                                <a href="#" class="psw">忘记密码?</a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="#" class="psw">新会员注册领优惠券</a>
                            </p>
                        </form>
                        <form action="" class="password_form">
                            <div>
                                <span class="number">账号</span>
                                <input type="text" style="height: 32px; width: 255px;" class="phone_input" placeholder="登录名|手机号码">
                            </div>
                            <div>
                                <span class="number">密码</span>
                                <div class="number_code">
                                    <input type="password" style="height: 32px; width: 255px" class="phone_input">
                                </div>
                            </div>
                            <a href="#">登录</a>
                            <p>
                                <a href="#" class="psw">忘记密码?</a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="#" class="psw">新会员注册领优惠券</a>
                            </p>
                        </form>
                        <div class="wechat_box">
                            <div>微信登录</div>
                            <img src="../../assets/img/WeChat.jpg" alt="">
                            <div>请使用微信扫描二维码登录</div>
                            <div>“小蜜蜂蛋糕”</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderMember from "../header/HeaderMember";
    import VerificationCode from "@/components/verificationCode/VerificationCode";

    export default {
        data() {
            return {
                identifyCodes: "1234567890",
                identifyCode: "",
                contentWidth: 132,
                contentHeight: 42
            };
        },
        components: {
            HeaderMember,
            VerificationCode
        },
        mounted() {
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
        },
        methods: {
            phone(e) {
                $(".color").find(".underline").removeClass("underline_show");
                $(".color").find(".underline").addClass("underline_hidden");
                $(".color").removeClass("color");
                $(".login").find("a").css({ "color": "#3C2314", "background-color": "" });
                $(e.currentTarget).find("a").addClass("color");
                $(e.currentTarget).find(".underline").removeClass("underline_hidden");
                $(e.currentTarget).find(".underline").addClass("underline_show");
            },
            phoneEnter(e) {
                $(e.currentTarget).find("a").css({ "color": "white", "background-color": "#C8B49B" });
                $(e.currentTarget).find(".underline").removeClass("underline_hidden");
                $(e.currentTarget).find(".underline").addClass("underline_show");
            },
            phoneLeave(e) {
                if (
                    $(e.currentTarget).find("a").hasClass("color")
                ) {
                } else {
                    $(e.currentTarget).find("a").css({ "color": "#3C2314", "background-color": "" });
                    $(e.currentTarget).find(".underline").removeClass("underline_show");
                    $(e.currentTarget).find(".underline").addClass("underline_hidden");
                }
            },
            phoneForm() {
                $('.phone_form').css({ "display": "block" });
                $('.password_form').css({ "display": "none" });
                $('.wechat_box').css({ "display": "none" });
            },
            passwordForm() {
                $('.phone_form').css({ "display": "none" });
                $('.password_form').css({ "display": "block" });
                $('.wechat_box').css({ "display": "none" });
            },
            wechatBox(){
                $('.phone_form').css({ "display": "none" });
                $('.password_form').css({ "display": "none" });
                $('.wechat_box').css({ "display": "block" });
            },

            randomNum(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            },
            refreshCode() {
                this.identifyCode = "";
                this.makeCode(this.identifyCodes, 4);
            },
            makeCode(o, l) {
                for (let i = 0; i < l; i++) {
                    this.identifyCode += this.identifyCodes[
                        this.randomNum(0, this.identifyCodes.length)
                    ];
                }
                console.log(this.identifyCode);
            }
        }
    };
</script>

<style scoped>
    .box {
        margin-top: 150px;
    }

    .register_box {
        width: 382px;
        height: 378px;
        margin: 0 auto;
    }

    .register {
        width: 382px;
        height: 337px;
    }

    .login_type {
        width: 380px;
        height: 45px;
        display: flex;
        justify-content: space-between;
        border: 1px solid #e7e7e7;
    }

    .login_type>div>a {
        display: inline-block;
        width: 120px;
        height: 45px;
        text-decoration: none;
        color: #3c2314;
        letter-spacing: 1.5px;
        font-size: 14px;
        text-align: center;
        line-height: 45px;
        position: relative;
        letter-spacing: 1.5px;
        overflow: hidden;
    }

    .underline {
        width: 120px;
        height: 4px;
        background-color: #3c2314;
        position: absolute;
        bottom: -4px;
    }

    .wechat_login {
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-decoration: none;
        color: #3c2314;
    }

    .wechat_login>span {
        display: inline-block;
        height: 45px;
    }

    .WeChat {
        display: inline-block;
        width: 36px;
        height: 45px;
        background-image: url("http://www.ebeecake.com/dist/images/wx.png");
        background-size: 36px 36px;
        background-repeat: no-repeat;
        background-position: center;
    }

    .color {
        color: white !important;
        background-color: #c8b49b;
    }

    .color>div {
        position: absolute;
        bottom: 0;
    }

    .underline_show {
        animation: show 0.2s linear forwards;
    }

    .underline_hidden {
        animation: hidden 0.2s linear forwards;
    }

    @keyframes show {
        from {
            bottom: -4px;
        }
        to {
            bottom: 0px;
        }
    }

    @keyframes hidden {
        from {
            bottom: 0px;
        }
        to {
            bottom: -4px;
        }
    }

    .form_box {
        margin-top: 30px;
        position: relative;
    }

    .number {
        display: inline-block;
        width: 100px;
        height: 42px;
        color: #3c2314;
        letter-spacing: 1.5px;
        font-size: 14px;
        /* line-height: 42px; */
        padding-top: 10px;
        margin-top: 10px;
    }


    .password_form {
        position: absolute;
        top: 0;
        display: none;
    }

    .phone_form>div,
    .password_form>div {
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
    }

    .phone_input {
        border: 1px solid #e7e7e7;
        padding: 5px 15px;
        /* box-sizing: border-box; */
    }

    .phone_button {
        display: inline-block;
        width: 130px;
        height: 38px;
        text-decoration: none;
        letter-spacing: 0.5px;
        font-size: 14px;
        color: #3c2314;
        border: 1px solid #e7e7e7;
        text-align: center;
        line-height: 38px;
        /* margin-left: 22px; */
    }

    .phone_button:hover {
        color: #aa8764;
    }

    .code {
        width: 132px;
        height: 42px;
        display: inline-block;
    }

    .number_code {
        width: 285px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .phone_form>a,
    .password_form>a {
        display: inline-block;
        width: 382px;
        height: 40px;
        background-color: #3c2314;
        color: #fbf5dd;
        text-align: center;
        text-decoration: none;
        line-height: 40px;
        margin-top: 30px;
        font-size: 14px;
    }

    .phone_form>p,
    .password_form>p {
        margin-left: 148px;
    }

    .psw {
        font-size: 14px;
        color: #3c2314;
        text-decoration: none;
        letter-spacing: 1.5px;
    }

    .psw:hover {
        color: #aa8764;
    }

    ::-webkit-input-placeholder {
        /* WebKit, Blink, Edge */
        color: rgb(218, 218, 218);
    }

    :-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: rgb(218, 218, 218);
    }

    ::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: rgb(218, 218, 218);
    }

    :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: rgb(218, 218, 218);
    }

    .wechat_box {
        width: 370px;
        height: 420px;
        position: absolute;
        top: 20px;
        text-align: center;
        display: none;
    }

    .wechat_box>img {
        width: 282px;
        height: 282px;
        border: 1px solid #E2E2E2;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    .wechat_box>div:first-child {
        font-size: 20px;
        color: rgb(55, 55, 55);
    }

    .wechat_box>div:nth-child(3),
    .wechat_box>div:last-child {
        height: 21px;
        line-height: 21px;
        font-size: 13px;
        color: rgb(55, 55, 55);
    }
</style>