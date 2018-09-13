<template>
    <div>
        <header-home></header-home>
        <Carousel/>

        <div class="box">
            <div class="recommend_box">
                <div class="recommend">
                    <div>
                        <span>人气推荐</span>
                        <img src="http://www.ebeecake.com/dist/images/row_tit1.png" alt="">
                    </div>
                    <a href="#/cake/classify/all">更多</a>
                </div>
                <div class="recommend_cake">
                    <a href="" v-for="item in list" class="goods_box" :key="item.name">
                        <div class="goods">
                            <img v-lazy="item.src" alt="" class="img_show" />
                        </div>
                        <div @mouseenter="img_largen($event)" @mouseleave="img_lessen($event)">
                            <img v-lazy="item.bigImgUrl" alt="" class="img_big">
                            <div class="goods_message">
                                <div class="goods_name">{{item.name}}</div>
                                <div class="goods_price">{{item.price}}</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="birthday_box">
                <div class="birthday">
                    <div>
                        <img src="http://www.ebeecake.com/dist/images/row_tit2.png" alt="">
                        <span>庆生蛋糕</span>
                    </div>
                    <a href="#/cake/classify/all">更多</a>
                </div>
                <div class="birthday_cake">
                    <a href="" v-for="item in list_birthday" class="goods_box" :key="item.name">
                        <div class="goods">
                            <img v-lazy="item.src" alt="" class="img_show" />
                        </div>
                        <div @mouseenter="img_largen($event)" @mouseleave="img_lessen($event)">
                            <img v-lazy="item.bigImgUrl" alt="" class="img_big">
                            <div class="goods_message">
                                <div class="goods_name">{{item.name}}</div>
                                <div class="goods_price">{{item.price}}</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>


            <div class="food_box">
                <div class="food">
                    <div>
                        <img src="http://www.ebeecake.com/dist/images/row_tit2.png" alt="">
                        <span>精选食材</span>
                    </div>
                    <a href="#">更多</a>
                </div>
                <div class="foods">
                    <a href="" v-for="item in list_food" class="goods_box" :key="item.name">
                        <div class="goods">
                            <img v-lazy="item.src" alt="" class="img_show" />
                        </div>
                        <div @mouseenter="img_largen($event)" @mouseleave="img_lessen($event)">
                            <img v-lazy="item.bigImgUrl" alt="" class="food_img_big img_big">
                            <div class="goods_message">
                                <div class="goods_name">{{item.name}}</div>
                                <div class="goods_price">{{item.price}}</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="time_box">
                <div class="time">
                    <div>
                        <img src="http://www.ebeecake.com/dist/images/row_tit1.png" alt="">
                        <span>瞬间</span>
                    </div>
                    <a href="#">更多</a>
                </div>
                <div class="festival">
                    <div @click="video_open">
                        <a href="###">
                            <img src="http://images.ebeecake.com/img_c/indexVideo.jpg" alt="">
                        </a>
                    </div>
                    <div>
                        <img src="http://images.ebeecake.com/images/hd/180828/w_sj.jpg" alt="">
                        <div class="recharge">
                            <span>中秋节充值领蛋糕</span>
                            <a href="">查看详情</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="video_box">
            <video autoplay poster="http://images.ebeecake.com/img_c/indexVideo.jpg" src="http://images.ebeecake.com/vidio/new_vidio_1.mp4"
                width="640px" height="368px" controls class="video"></video>
            <div @click="video_close">
                <a href="###" class="video_close"></a>
            </div>

        </div>
    </div>
</template>

<script>
    import HeaderHome from '../header/HeaderHome'
    import Carousel from '../carousel/Carousel2'
    export default {
        data() {
            return {
                list: [
                    {
                        src: "http://images.ebeecake.com/img_w/3489.jpg",
                        name: "桃芝|樱桃芝士",
                        price: "¥265起",
                        bigImgUrl: "http://images.ebeecake.com/img_w/3523.jpg"
                    },
                    {
                        src: "http://images.ebeecake.com/img_w/3481.jpg",
                        name: "回归|90",
                        price: "¥225起",
                        bigImgUrl: "http://images.ebeecake.com/img_w/3515.jpg"
                    },
                    {
                        src: "http://images.ebeecake.com/img_w/3473.jpg",
                        name: "初心|牛油果低脂蛋糕",
                        price: "¥335起",
                        bigImgUrl: "http://images.ebeecake.com/img_w/3507.jpg"
                    },
                    {
                        src: "http://images.ebeecake.com/img_w/3477.jpg",
                        name: "向往|酸樱桃椰蓉",
                        price: "¥225起",
                        bigImgUrl: "http://images.ebeecake.com/img_w/3511.jpg"
                    }

                ],
                list_birthday: [
                    {
                        src: "http://images.ebeecake.com/img_w/3488.jpg",
                        name: "星空|黑森林",
                        price: "¥225起",
                        bigImgUrl: "http://images.ebeecake.com/img_w/3522.jpg"
                    },
                    {
                        src: "http://images.ebeecake.com/img_w/4029.jpg",
                        name: "我愿意|玫瑰荔枝慕斯",
                        price: "¥335起",
                        bigImgUrl: "http://images.ebeecake.com/img_w/4028.jpg"
                    },
                    {
                        src: "http://images.ebeecake.com/img_w/3484.jpg",
                        name: "思念|缤纷乐园",
                        price: "¥295起",
                        bigImgUrl: "http://images.ebeecake.com/img_w/3518.jpg"
                    },
                    {
                        src: "http://images.ebeecake.com/img_w/3498.jpg",
                        name: "简单|蜂蜜",
                        price: "¥355起",
                        bigImgUrl: "http://images.ebeecake.com/img_w/3532.jpg"
                    },
                ],
                list_food: [
                    {
                        src: "http://images.ebeecake.com/img/2815.jpg",
                        name: "巧克力",
                        price: "法国法芙娜巧克力",
                        bigImgUrl: "http://images.ebeecake.com/img/2815.jpg"
                    },
                    {
                        src: "http://images.ebeecake.com/img/2816.jpg",
                        name: "松露油",
                        price: "意大利Alba松露油",
                        bigImgUrl: "http://images.ebeecake.com/img/2816.jpg"
                    },
                    {
                        src: "http://images.ebeecake.com/img/2817.jpg",
                        name: "枫糖",
                        price: "加拿大枫糖",
                        bigImgUrl: "http://images.ebeecake.com/img/2817.jpg"
                    },
                    {
                        src: "http://images.ebeecake.com/img/2818.jpg",
                        name: "蜂蜜",
                        price: "健康密码-蜂蜜",
                        bigImgUrl: "http://images.ebeecake.com/img/2818.jpg"
                    },
                ],
            }
        },
        components: {
            HeaderHome,
            Carousel,
        },
        methods: {
            img_largen(e) {
                // console.log(e.target)
                $(e.target).find('.img_big').stop().removeClass("img_lessen");
                $(e.target).find('.img_big').stop().addClass("img_largen");
            },

            img_lessen(e) {
                console.log(e.target)
                $(e.target).find('.img_big').stop().removeClass("img_largen");
                $(e.target).find('.img_big').stop().addClass("img_lessen");
            },

            video_open(){
                $('.video_box').css({'display':'block'});
                $('.video').attr('src',"http://images.ebeecake.com/vidio/new_vidio_1.mp4");
                
            },

            video_close(){
                $('.video_box').css({'display':'none'});
                $(".video").removeAttr('src');     
            }
        },
    }
</script>

<style scoped>
    .box {
        margin-top: -160px;
    }

    .recommend,
    .birthday,
    .food,
    .time {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .recommend>div:first-child,
    .birthday>div:first-child,
    .food>div:first-child {
        width: 157px;
        height: 53px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .time>div:first-child {
        width: 100px;
        height: 53px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .recommend>div:first-child>span,
    .birthday>div:first-child>span,
    .food>div:first-child>span {
        font-size: 22px;
        color: #3C2314;
    }

    .recommend>a,
    .birthday>a,
    .food>a,
    .time>a {
        display: inline-block;
        text-decoration: none;
        color: #3C2314;
        font-size: 14px;
    }

    .recommend>a:hover,
    .birthday>a:hover,
    .food>a:hover {
        color: #c8b49b;
    }

    .goods_box {
        margin: 28px 5px;
        position: relative;
        display: inline-block;
        overflow: hidden;
    }

    .goods_message {
        width: 250px;
        height: 60px;
        border: 1px solid #e7e7e7;
        position: absolute;
        bottom: 20px;
        left: 14px;
        background-color: rgba(255, 255, 255, 0.7);
        font-size: 14px;
        /* z-index: 100; */
    }

    .goods_name {
        height: 22px;
        line-height: 22px;
        color: #3C2314;
        text-align: center;
        margin-top: 8px;
    }

    .goods_price {
        height: 22px;
        line-height: 22px;
        color: #AA8764;
        text-align: center;
    }

    .img_show {
        width: 280px;
        height: 280px;
    }

    .img_big {
        opacity: 0;
        margin-top: -260px;
        width: 280px;
        height: 280px;
    }

    .goods_box>div:last-child {
        position: relative;
    }

    .food_img_big {
        width: 280px;
        height: 280px;
        opacity: 0;
        position: absolute;
        bottom: 20px;
    }

    .img_largen {
        animation: img_largen 0.4s linear forwards;
    }

    .img_lessen {
        animation: img_lessen 0.5s linear forwards;
    }

    @keyframes img_largen {
        from {
            transform: scale(1);
            opacity: 0;
        }
        to {
            transform: scale(1.3);
            opacity: 1;
        }
    }

    @keyframes img_lessen {
        from {
            transform: scale(1.3);
            opacity: 1;
        }
        to {
            transform: scale(1);
            opacity: 0;
        }
    }

    .festival {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
    }

    .festival>div:last-child {
        position: relative;
    }

    .recharge {
        width: 546px;
        height: 60px;
        background-color: white;
        border: 1px solid #e7e7e7;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        box-sizing: border-box;
        font-size: 14px;
        color: #3C2314;
        position: absolute;
        bottom: 20px;
        margin-left: 15px;
    }

    .recharge>a {
        color: #3C2314;
        text-decoration: none;
    }

    .recharge>a:hover {
        color: #C8B49B;
    }

    .video_box {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(0, 0, 0, 0.7);
        display: none;
    }

    .video {
        position: absolute;
        top: 220px;
        left: 630px;
    }
    .video_box>div{
        width: 21px;
        height: 20px;
        background-color: white;
        opacity: 0.3;
        text-align: center;
        line-height: 15px;
        position: absolute;
        top: 220px;
        left: 1249px;
    }

    .video_close {
        display: inline-block;
        width: 12px;
        height: 11px;
        background-image: url('http://www.ebeecake.com/dist/images/icon-sprite.png');
        background-position: -216px -256px;
    }
</style>