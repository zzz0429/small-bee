<template>
    <div class="carousel_box">
        <div id="app" class="demo">
            <transition-group name="flip-list" tag="ul">
                <li v-for="curImg in currImgs" v-bind:key="curImg" class="list-item">
                    <img :src="curImg">
                </li>
            </transition-group>
        </div>
        <div class="led">
            <a href="#">
                <span class="led_0 led_color" @mouseenter="car($event)">1</span>
            </a>
            <a href="#">
                <span class="led_1" @mouseenter="car($event)">2</span>
            </a>
            <a href="#">
                <span class="led_2" @mouseenter="car($event)">3</span>
            </a>
            <a href="#">
                <span class="led_3" @mouseenter="car($event)">4</span>
            </a>
            <a href="#">
                <span class="led_4" @mouseenter="car($event)">5</span>
            </a>
            <a href="#">
                <span class="led_5" @mouseenter="car($event)">6</span>
            </a>
        </div>
        <div class="message_box">
            <div class="message col_0">
                <a href="#">北京</a>&#x3000;
                <span>六环内免费配送&#x3000;&#x3000;4006 106 798</span>
            </div>
            <div class="message col_1">
                <a href="#">北京</a>&#x3000;
                <span>六环内免费配送&#x3000;&#x3000;4006 106 798</span>
            </div>
            <div class="color col_2">
                <a href="#">北京</a>&#x3000;
                <span>六环内免费配送&#x3000;&#x3000;4006 106 798</span>
            </div>
            <div class="message col_3">
                <a href="#">北京</a>&#x3000;
                <span>六环内免费配送&#x3000;&#x3000;4006 106 798</span>
            </div>
            <div class="message col_4">
                <a href="#">北京</a>&#x3000;
                <span>六环内免费配送&#x3000;&#x3000;4006 106 798</span>
            </div>
            <div class="color col_5">
                <a href="#">北京</a>&#x3000;
                <span>六环内免费配送&#x3000;&#x3000;4006 106 798</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currImgs: [],
                imgs: [
                    "http://images.ebeecake.com/images/hd/180828/wb.jpg",
                    "http://images.ebeecake.com/images/hd/180831/wb.jpg",
                    "http://images.ebeecake.com/images/hd/180906/wb.jpg",
                    "http://images.ebeecake.com/images/hd/180615/wb.jpg",
                    "http://images.ebeecake.com/img_w/4080.jpg",
                    "http://images.ebeecake.com/images/hd/180802/wb.jpg",
                ],
                index: 0
            }
        },
        mounted() {
            this.currImgs = [this.imgs[0]];
            this.startChange();
        },
        methods: {
            startChange: function () {
                var that = this;
                setInterval(function () {
                    if (that.index < that.imgs.length - 1) {
                        that.index++;
                    } else {
                        that.index = 0;
                    }

                    var cla = '.led_' + that.index
                    // console.log($(cla))
                    $('.led span').removeClass('led_color')
                    $(cla).addClass('led_color')

                    that.currImgs.splice(0, 1, that.imgs[that.index]);

                    var col = '.col_' + that.index
                    console.log($(col))
                    $('.message_box>div').css({ "z-index": "1" });
                    $(col).css({ "z-index": "100" });
                }, 4000);
            },

            car(e) {
                console.log($(e.currentTarget).attr('class').substr(4, 1));
                $('.led span').removeClass('led_color');
                $(e.currentTarget).addClass('led_color');
                this.index = $(e.currentTarget).attr('class').substr(4, 1);
                this.currImgs = [this.imgs[$(e.currentTarget).attr('class').substr(4, 1)]];

                var col = '.col_' + this.index
                console.log($(col))
                $('.message_box>div').css({ "z-index": "1" });
                $(col).css({ "z-index": "100" });
            }
        }
    };
</script>

<style scoped>
    .carousel_box {
        height: 650px;
        position: relative;
        top: -190px;
    }

    img {
        width: 1903px;
        height: 650px;
    }

    .flip-list-enter-active,
    .flip-list-leave-active {
        transition: all 1s;
    }

    .flip-list-enter,
    .flip-list-leave-active {
        opacity: 0;
    }

    #app li {
        position: absolute;
        top: 0;
        left: 0;
    }

    .led {
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

    .led span {
        display: inline-block;
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

    .led_color {
        background-color: #3C2314;
        color: white !important;
    }

    .message_box {
        width: 300px;
        height: 76px;
        position: absolute;
        top: 40px;
        right: 380px;
    }

    .message_box>div {
        position: absolute;
        font-size: 14px;
        letter-spacing: 1.5px;
    }

    .message_box a {
        text-decoration: none;
    }

    .message_box a:hover {
        color: #AA8764;
    }

    .message {
        color: #3C2314;
    }

    .message>a {
        color: #3C2314;
    }

    .color {
        color: white;
    }

    .color>a {
        color: white;
    }

    .col_0 {
        z-index: 100;
    }
</style>