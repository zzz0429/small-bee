<template>
    <div>
        <header-cake></header-cake>

        <div class="box">
            <div class="cake_option">
                <div>
                    <span class="classify">分类</span>
                    <a href="" class="option_click_1 option_1" @click="fenlei($event)" :router="fl_router1">全部</a>
                    <span class="option_1">|</span>
                    <a href="" class="option_1" @click="fenlei($event)" :router="fl_router2">新品</a>
                    <a href="" class="option_1" @click="fenlei($event)" :router="fl_router3">生日</a>
                    <a href="" class="option_1" @click="fenlei($event)" :router="fl_router4">聚会</a>
                    <a href="" class="option_1" @click="fenlei($event)" :router="fl_router5">下午茶</a>
                    <a href="#/cake/marriage/all/all" class="option_1" :router="fl_router6">婚礼</a>
                    <a href="" class="option_1" @click="fenlei($event)" :router="fl_router7">送全国</a>
                </div>
                <div>
                    <span class="classify">口味</span>
                    <a href="#" class="option_click_2 option_2" @click="kouwei($event)" :router="kw_router1">全部</a>
                    <span class="option_2">|</span>
                    <a href="#" class="option_2" @click="kouwei($event)" :router="kw_router2">巧克力</a>
                    <a href="#" class="option_2" @click="kouwei($event)" :router="kw_router3">芝士</a>
                    <a href="#" class="option_2" @click="kouwei($event)" :router="kw_router4">慕斯</a>
                    <a href="#" class="option_2" @click="kouwei($event)" :router="kw_router5">冰激凌</a>
                    <a href="#" class="option_2" @click="kouwei($event)" :router="kw_router6">含酒</a>
                    <a href="#" class="option_2" @click="kouwei($event)" :router="kw_router7">坚果</a>
                    <a href="#" class="option_2" @click="kouwei($event)" :router="kw_router8">奶油</a>
                    <a href="#" class="option_2" @click="kouwei($event)" :router="kw_router9">水果</a>
                    <a href="#" class="option_2" @click="kouwei($event)" :router="kw_router10">咖啡</a>
                </div>
                <div>
                    <span class="classify">人群</span>
                    <a href="#" class="option_click_3 option_3" @click="people($event)" :router="rq_router1">全部</a>
                    <span class="option_3">|</span>
                    <a href="#" class="option_3" @click="people($event)" :router="rq_router2">老人</a>
                    <a href="#" class="option_3" @click="people($event)" :router="rq_router3">儿童</a>
                    <a href="#" class="option_3" @click="people($event)" :router="rq_router4">孕妇</a>
                    <a href="#" class="option_3" @click="people($event)" :router="rq_router5">情侣</a>
                </div>
            </div>

            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import HeaderCake from '../header/HeaderCake'
    export default {
        data() {
            return {
                fl_router1: "#/cake/all",
                fl_router2: "#/cake/new",
                fl_router3: "#/cake/birthday",
                fl_router4: "#/cake/party",
                fl_router5: "#/cake/tea",
                fl_router6: "#/cake/marriage",
                fl_router7: "#/cake/national",

                kw_router1: "/all",
                kw_router2: "/chocolate",
                kw_router3: "/cheese",
                kw_router4: "/mousse",
                kw_router5: "/iceCream",
                kw_router6: "/wine",
                kw_router7: "/nut",
                kw_router8: "/cream",
                kw_router9: "/fruits",
                kw_router10: "/coffee",

                rq_router1: "/all",
                rq_router2: "/old",
                rq_router3: "/children",
                rq_router4: "/gravida",
                rq_router5: "/lovers",
            }
        },
        components: {
            HeaderCake,
        },
        methods: {
            fenlei(e) {
                $('.option_1').removeClass('option_click_1');
                $(e.currentTarget).addClass('option_click_1');
                console.log($(e.currentTarget).attr('router') + $('.option_click_2').attr('router') + $('.option_click_3').attr('router'));
                $(e.currentTarget).attr('href', $(e.currentTarget).attr('router') + $('.option_click_2').attr('router') + $('.option_click_3').attr('router'));
            },
            kouwei(e) {
                $('.option_2').removeClass('option_click_2');
                $(e.currentTarget).addClass('option_click_2');
                // console.log($('.option_click_1').attr('router') + $(e.currentTarget).attr('router'));
                $(e.currentTarget).attr('href', $('.option_click_1').attr('router') + $(e.currentTarget).attr('router') + $('.option_click_3').attr('router'));
            },
            people(e) {
                $('.option_3').removeClass('option_click_3');
                $(e.currentTarget).addClass('option_click_3');
                $(e.currentTarget).attr('href', $('.option_click_1').attr('router') + $('.option_click_2').attr('router') + $(e.currentTarget).attr('router'));
            },
        }
    }
</script>

<style scoped>
    /* .box{
        padding-top: 50px;
    } */
    .cake_option {
        height: 144px;
        padding-top: 100px;
        padding-bottom: 20px;
        border-bottom: 1px solid #e7e7e7;
    }

    .cake_option>div {
        width: 100%;
        height: 48px;
        line-height: 48px;
        font-size: 14px;
    }

    .cake_option a {
        text-decoration: none;
    }

    .classify {
        margin-right: 60px;
        color: #aaa;
    }

    .option_1,
    .option_2,
    .option_3,
    .option_ {
        margin-right: 35px;
    }

    .option_click_1,
    .option_click_2,
    .option_click_3 {
        color: #C8B49B !important;
    }

    .option_1,
    .option_2,
    .option_3 {
        color: #3C2314;
    }

    .option_1:hover,
    .option_2:hover,
    .option_3:hover {
        color: #C8B49B;
    }
</style>