<template>
    <div>
        <header-cake></header-cake>

        <div class="box">
            <div class="cake_option">
                <div>
                    <span class="classify">分类</span>
                    <a href="#/cake/classify/all" class="option_click option_1" @click="fenlei($event)">全部</a>
                    <span class="option_1">|</span>
                    <a href="#/cake/classify/newAll" class="option_1" @click="fenlei($event)">新品</a>
                    <a href="#/cake/classify/birthdayAll" class="option_1" @click="fenlei($event)">生日</a>
                    <a href="#/cake/classify/partyAll" class="option_1" @click="fenlei($event)">聚会</a>
                    <a href="#/cake/classify/teaAll" class="option_1" @click="fenlei($event)">下午茶</a>
                    <a href="#/cake/classify/marriageAll" class="option_1" @click="fenlei($event)">婚礼</a>
                    <a href="#/cake/classify/nationalAll" class="option_1" @click="fenlei($event)">送全国</a>
                </div>
                <div>
                    <span class="classify">口味</span>
                    <a href="#" class="option_click option_2" @click="kouwei($event)">全部</a>
                    <span class="option_2">|</span>
                    <a href="#" class="option_2" @click="kouwei($event)">巧克力</a>
                    <a href="#" class="option_2" @click="kouwei($event)">芝士</a>
                    <a href="#" class="option_2" @click="kouwei($event)">慕斯</a>
                    <a href="#" class="option_2" @click="kouwei($event)">冰激凌</a>
                    <a href="#" class="option_2" @click="kouwei($event)">含酒</a>
                    <a href="#" class="option_2" @click="kouwei($event)">坚果</a>
                    <a href="#" class="option_2" @click="kouwei($event)">奶油</a>
                    <a href="#" class="option_2" @click="kouwei($event)">水果</a>
                    <a href="#" class="option_2" @click="kouwei($event)">咖啡</a>
                </div>
                <div>
                    <span class="classify">人群</span>
                    <a href="#" class="option_click option_3" @click="people($event)">全部</a>
                    <span class="option_3">|</span>
                    <a href="#" class="option_3" @click="people($event)">老人</a>
                    <a href="#" class="option_3" @click="people($event)">儿童</a>
                    <a href="#" class="option_3" @click="people($event)">孕妇</a>
                    <a href="#" class="option_3" @click="people($event)">情侣</a>
                </div>
            </div>

            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import HeaderCake from '../header/HeaderCake'
    export default {
        components: {
            HeaderCake,
        },
        methods: {
            fenlei(e) {
                $('.option_1').removeClass('option_click');
                $(e.currentTarget).addClass('option_click');
            },
            kouwei(e) {
                $('.option_2').removeClass('option_click');
                $(e.currentTarget).addClass('option_click');
            },
            people(e) {
                $('.option_3').removeClass('option_click');
                $(e.currentTarget).addClass('option_click');
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
    .option_all {
        margin-right: 30px;
    }

    .option_click {
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