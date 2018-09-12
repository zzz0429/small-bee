<template>
    <div>
        <header-activity></header-activity>

        <div class="box">
            <a href="">
                <img src="http://images.ebeecake.com/images/hd/180831/w570.jpg" alt="">
            </a>
            <a href="">
                <img src="http://images.ebeecake.com/images/hd/180828/w570.jpg" alt="">
            </a>
            <a href="">
                <img src="http://images.ebeecake.com/images/hd/180906/w570.jpg" alt="">
            </a>
            <a href="">
                <img src="http://images.ebeecake.com/images/hd/180802/w570.jpg" alt="">
            </a>
            <a href="">
                <img src="http://images.ebeecake.com/images/hd/180615/w570.jpg" alt="">
            </a>
            <a href="">
                <img src="http://images.ebeecake.com/images/hd/170811/w580.jpg" alt="">
            </a>
            <a href="">
                <img src="http://images.ebeecake.com/img_w/gg_04.jpg" alt="">
            </a>
            <a href="">
                <img src="http://images.ebeecake.com/img_w/gg_03.jpg" alt="">
            </a>
        </div>
    </div>
</template>

<script>
    import HeaderActivity from '../header/HeaderActivity'

    export default {
        components: {
            HeaderActivity,
        }
    }
</script>

<style scoped>
    .box{
        margin-top: 100px;
    }
    .box img{
        width: 570px;
        height: 375px;
        margin-right: 5px;
        margin-bottom: 5px;
    }
</style>