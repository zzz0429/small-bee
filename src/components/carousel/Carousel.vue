<template>
    <!-- <div id="body">
        <div id="carousel1" class="carousel-content">
            <ul class="carousel">
                <li><img src="http://images.ebeecake.com/images/hd/180828/wb.jpg">
                    <h3 class="demo-title">Demo1</h3>
                </li>
                <li><img src="http://images.ebeecake.com/images/hd/180831/wb.jpg"></li>
                <li><img src="http://images.ebeecake.com/images/hd/180906/wb.jpg"></li>
                <li><img src="http://images.ebeecake.com/images/hd/180615/wb.jpg"></li>
                <li><img src="http://images.ebeecake.com/img_w/4080.jpg"></li>
                <li><img src="http://images.ebeecake.com/images/hd/180802/wb.jpg"></li>
            </ul>
            <ul class="carousel-index">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
            </ul>
        </div>
    </div> -->
    <div id="box">
        <div class="roy_carousel">
            <ul>
                <li>
                    <a href="">
                        <img src="http://images.ebeecake.com/images/hd/180828/wb.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="http://images.ebeecake.com/images/hd/180831/wb.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="http://images.ebeecake.com/images/hd/180906/wb.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="http://images.ebeecake.com/images/hd/180615/wb.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="http://images.ebeecake.com/img_w/4080.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="http://images.ebeecake.com/images/hd/180802/wb.jpg" alt="">
                    </a>
                </li>
            </ul>

            <!-- 左右控制按钮 -->
            <!-- <div class="roy_carousel_prev">
                <img src="imgs/prev.png" alt="">
            </div>
            <div class="roy_carousel_next">
                <img src="imgs/next.png" alt="">
            </div> -->

            <!-- 轮播图指示灯 -->
            <div class="roy_carousel_indicators">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div>
        </div>
    </div>

</template>

<script>
    import Carousel from '@/assets/js/Carousel'
    export default {
        mounted: {

        }
    }
</script>

<style scoped>
    #box {
        width: 100%;
        height: 650px;
        /* background-color: cornflowerblue; */
        margin-top: -175px;
    }

    /* 以下为自定义轮播图的css样式代码 */
    .roy_carousel {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }

    .roy_carousel ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        position: relative;

    }

    .roy_carousel li {
        width: 100%;
        flex-shrink: 0;
    }

    .roy_carousel>ul img {
        width: 100%;
    }

    .roy_carousel_indicators {
        width: 300px;
        height: 30px;
        /* background-color: lightgray; */
        position: absolute;
        left: 380px;
        bottom: 35px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .roy_carousel_indicators>div {
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 50%;
        margin: 0 5px;
        border: 1px solid #AA8764;
        font-size: 14px;
        text-align: center;
        color: #AA8764;
    }
</style>