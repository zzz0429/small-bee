<template>
    <div>
        <header-member></header-member>
        <div class="box">
            <div class="register_box">
                <div class="new_register">新会员注册</div>
                <div class="register_message">
                    <div class="input_box">
                        <span>手机号码:</span>
                        <input type="text" placeholder="请输入手机号码" style="widows: 130px;height: 30px;">
                    </div>
                    <div class="input_box">
                        <span>验证码:</span>
                        <input type="text" placeholder="请输入图片验证码" style="widows: 130px;height: 30px;">
                        <div class="code" @click="refreshCode">
                            <verification-code :identifyCode="identifyCode" :contentWidth="contentWidth" :contentHeight="contentHeight"></verification-code>
                        </div>
                    </div>
                    <div class="input_box">
                        <span>手机验证码:</span>
                        <input type="text" placeholder="请输入短信验证码" style="widows: 130px;height: 30px;">
                        <a href="#" class="note">获取短信验证码</a>
                    </div>
                </div>
                <div class="coupon">
                    <span>注册即可获得20元优惠券</span>
                    <a href="#">会员权益>></a>
                </div>
                <a href="#" class="register">注册</a>
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
                contentWidth: 102,
                contentHeight: 32,
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
    }
</script>

<style scoped>
    .register_box {
        width: 400px;
        height: 325px;
        margin: 0 auto;
        margin-top: 200px;
        text-align: center;
        letter-spacing: 1.5px;
    }

    .new_register {
        font-size: 18px;
        color: #3C2314;
        padding-bottom: 20px;
        border-bottom: 3px solid #C8B49B;
    }

    .register_message {
        margin-top: 20px;
    }

    .input_box {
        width: 400px;
        height: 51px;
        margin: 0 auto;
        border-bottom: 1px solid #e7e7e7;
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #3C2314;
        padding: 0 10px;
        box-sizing: border-box;
        position: relative;
    }

    .input_box>span {
        display: inline-block;
        width: 83px;
        height: 50px;
        line-height: 50px;
        text-align: left;
        margin-right: 20px;
    }

    .input_box input {
        border: none;
    }

    ::-webkit-input-placeholder {
        /* WebKit, Blink, Edge */
        color: rgb(218, 218, 218);
        font-size: 14px;
    }

    :-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: rgb(218, 218, 218);
        font-size: 14px;
    }

    ::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: rgb(218, 218, 218);
        font-size: 14px;
    }

    :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: rgb(218, 218, 218);
        font-size: 14px;
    }

    .code {
        width: 102px;
        height: 32px;
        display: inline-block;
        position: absolute;
        right: 10px;
    }

    .note {
        display: inline-block;
        width: 105px;
        height: 38px;
        text-decoration: none;
        letter-spacing: 0.5px;
        font-size: 14px;
        color: #3c2314;
        text-align: center;
        line-height: 38px;
        position: absolute;
        right: 8px;
    }
    .note:hover {
        color: #aa8764;
    }
    .coupon{
        width: 400px;
        height: 21px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #d5d5d5;
        padding: 0 10px;
        box-sizing: border-box;
        margin-top: 10px;
    }
    .coupon>a{
        color: #AA8764;
        text-decoration: none;
    }

    .register{
        display: inline-block;
        width: 154px;
        height: 41px;
        background-color: #3C2314;
        color: white;
        text-decoration: none;
        line-height: 41px;
        font-size: 14px;
        margin-top: 30px;
    }
</style>