<template>
    <div class="footer_box">
        <div class="box">
            <div class="footer_option">
                <img src="http://www.ebeecake.com/dist/images/footer_log.png" alt="">
                <div class="option_box">
                    <a href="">关于我们</a>
                    <span class="dot"></span>
                    <a href="">最新活动</a>
                    <span class="dot"></span>
                    <a href="">企业专区</a>
                    <span class="dot"></span>
                    <a href="">公益合作</a>
                    <span class="dot"></span>
                    <a href="">招聘</a>
                </div>
            </div>
            <div class="foot">
                <span>Copyright © 2009-2018 ebeecake 易贝可（北京）食品有限公司 京ICP备09081733号 京公网安备110105014692</span>
                <br>
                <span>公司电话：4006106798&#x3000;
                    <a href="http://images.ebeecake.com/img_c/scxk.jpg">食品经营许可证：JY11105110232865&#x3000;</a>
                    <a href="http://images.ebeecake.com/img_c/QS.jpg">QS认证：SC12411051114584</a>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .footer_box {
        width: 100%;
        height: 280px;
        background-image: url('http://www.ebeecake.com/dist/images/footer.png');
        background-position: center;
        margin-top: 252px;
    }

    .footer_option {
        height: 69px;
        padding-top: 73px;
        margin-left: 155px;
        font-size: 14px;
    }
    .footer_option>img{
        margin-right: 40px;
    }
    .option_box{
        display: inline-block;
    }
    .option_box>*{
        margin-right: 42px;
    }
    .footer_option a{
        color: #AA8764;
        text-decoration: none;
    }
    .dot{
        display: inline-block;
        width: 6px;
        height: 6px;
        background-image: url('http://www.ebeecake.com/dist/images/footer_point.png');
    }
    .foot{
        height: 48px;
        margin-top: 80px;
        text-align: center;
    }
    .foot>span{
        font-size: 12px;
        color: #9B9B9B;
    }
    .foot a{
        color: #9B9B9B;
        text-decoration: none;
    }
</style>