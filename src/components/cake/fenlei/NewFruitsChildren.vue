<template>
    <div>
        <div class="cake_nation">
            <div class="nation">新品 水果 儿童</div>

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
</template>

<script>
import cake from "@/assets/img/001.jpg";
export default {
  data() {
    return {
      list: [
        {
          src: "http://images.ebeecake.com/img_w/3473.jpg",
          name: "初心|牛油果低脂蛋糕",
          price: "¥335起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3507.jpg"
        }
      ]
    };
  },

  methods: {
    img_largen(e) {
      // console.log(e.target)
      $(e.target)
        .find(".img_big")
        .stop()
        .removeClass("img_lessen");
      $(e.target)
        .find(".img_big")
        .stop()
        .addClass("img_largen");
    },

    img_lessen(e) {
      // console.log(e.target);
      $(e.target)
        .find(".img_big")
        .stop()
        .removeClass("img_largen");
      $(e.target)
        .find(".img_big")
        .stop()
        .addClass("img_lessen");
    }
  }
};
</script>

<style scoped>
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
  color: #3c2314;
  text-align: center;
  margin-top: 8px;
}

.goods_price {
  height: 22px;
  line-height: 22px;
  color: #aa8764;
  text-align: center;
}

.cake_all {
  padding-bottom: 40px;
  border-bottom: 1px solid #e9e9e9;
}

.cake_nation {
  margin-top: 30px;
}

.nation {
  color: #3c2314;
  font-size: 18px;
  margin-bottom: 20px;
}

.img_big {
  opacity: 0;
  margin-top: -260px;
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
</style>