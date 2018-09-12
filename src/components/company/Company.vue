<template>
    <div>
        <header-company></header-company>

        <div class="box">
            <div class="img_box">
                <a href="">
                    <img src="http://images.ebeecake.com/img_c/%E4%BC%81%E4%B8%9A%E8%AF%95%E5%90%83.jpg" alt="">
                </a>
                <a href="">
                    <img src="http://images.ebeecake.com/img_c/%E4%B8%93%E5%B1%9E%E5%AE%9A%E5%88%B6.jpg" alt="">
                </a>
                <a href="">
                    <img src="http://images.ebeecake.com/img_c/%E4%BC%81%E4%B8%9A%E9%87%87%E8%B4%AD.jpg" alt="">
                </a>
            </div>

            <div class="company_box">
                <div class="foretaste">
                    <span>企业试吃</span>
                    <a href="">预约</a>
                </div>
                <h3>企业免费试吃通道，为您的办公室增加甜蜜</h3>
                <p>小蜜蜂企业团队已陆续为地产行业、地产、医院、滴滴打车、猫眼电影、国美电器、国家广播电影电视总局、世纪佳缘等等品牌提供企业试吃服务。</p>
            </div>

            <div class="company_box">
                <div class="foretaste">
                    <span>企业采购</span>
                    <a href="">预约</a>
                </div>
                <h3>企业员工福利／客户礼品馈赠／企业定制福利券</h3>
                <p>如有意进行企业采购合作，想了解更多详细信息，请您填写以下基本信息，我们会及时与您联系。</p>
            </div>

            <div class="company_box">
                <div class="foretaste">
                    <span>合作兑换</span>
                    <a href="">兑换</a>
                </div>
                <h3>业务或市场部门与其他企业资源置换活动兑换的蛋糕，验证电子券密码进行兑换</h3>
            </div>

            <div class="company_box">
                <div class="foretaste">
                    <span>企业定制蛋糕</span>
                    <a href="">预约</a>
                </div>
                <h3>企业员工福利／客户礼品馈赠／企业定制福利券</h3>
                <p>可定制企业专属蛋糕、添加企业元素、企业庆典、商务宴会、发布会等。如需定制，请留言告诉我们，收到留言后我们会及时与您联系。</p>
            </div>

            <div class="company_box">
                <div class="foretaste">
                    <span>市场合作</span>
                    <a href="">预约</a>
                </div>
                <h3>合作户推／企业赞助／线下活动赞助／资源置换／广告投放合作</h3>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderCompany from '../header/HeaderCompany'

    export default {
        components: {
            HeaderCompany,
        }
    }
</script>

<style scoped>
    .box {
        margin-top: 100px;
    }

    .img_box {
        width: 1200px;
        height: 280px;
        display: flex;
        justify-content: space-between;
    }

    .img_box img {
        width: 380px;
        height: 280px;
    }

    .company_box {
        width: 1200px;
        height: 137px;
        margin-top: 100px;
        padding-bottom: 30px;
    }

    .foretaste {
        width: 1200px;
        height: 70px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e7e7e7;
    }

    .foretaste>span {
        font-size: 22px;
        color: #AA8764;
        margin-right: 100px;
    }

    .foretaste>a {
        display: inline-block;
        width: 100px;
        height: 30px;
        font-size: 14px;
        background-color: #3C2314;
        color: #FBF5DD;
        text-decoration: none;
        text-align: center;
        line-height: 30px;
    }

    .company_box>h3 {
        font-size: 18px;
        color: #3C2314;
        font-weight: 400;
        letter-spacing: 1.5px;
        line-height: 32px;
        margin-bottom: 0;
    }

    .company_box>p {
        font-size: 12px;
        color: #3C2314;
        margin: 0;
        letter-spacing: 1.5px;
    }
</style>