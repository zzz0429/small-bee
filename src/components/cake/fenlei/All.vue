<template>
    <div>
        <div class="cake_all">
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
        <div class="cake_nation">
            <div class="nation">送全国</div>

            <a href="" v-for="item in list_nation" class="goods_box" :key="item.name">
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
        },
        {
          src: "http://images.ebeecake.com/img_w/3471.jpg",
          name: "倾慕|抹茶慕斯",
          price: "¥295起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3505.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3498.jpg",
          name: "简单|蜂蜜",
          price: "¥355起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3532.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3495.jpg",
          name: "热恋|玫瑰慕斯",
          price: "¥315起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3529.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3477.jpg",
          name: "向往|酸樱桃椰蓉",
          price: "¥225起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3511.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3496.jpg",
          name: "珍贵|芒果慕斯",
          price: "¥335起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3530.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3501.jpg",
          name: "迷恋|提拉米苏",
          price: "¥265起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3535.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3500.jpg",
          name: "菩提|香浓巧克力",
          price: "¥185起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3534.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3499.jpg",
          name: "经典|坚果巧克力",
          price: "¥335起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3533.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3478.jpg",
          name: "回味|枫糖威士忌坚果巧克力",
          price: "¥495起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3512.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3491.jpg",
          name: "榛爱|黑巧克力榛子",
          price: "¥265起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3525.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3479.jpg",
          name: "回归|70",
          price: "¥225起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3513.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3480.jpg",
          name: "回归|80",
          price: "¥225起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3514.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3481.jpg",
          name: "回归|90",
          price: "¥225起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3515.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/4029.jpg",
          name: "我愿意|玫瑰荔枝慕斯",
          price: "¥335起",
          bigImgUrl: "http://images.ebeecake.com/img_w/4028.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3893.jpg",
          name: "珍味|沙棘任小米蛋糕",
          price: "¥335起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3894.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3807.jpg",
          name: "皓月|浓情凝聚(四种口味)",
          price: "¥315起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3808.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3493.jpg",
          name: "淡然|原味芝士",
          price: "¥225起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3527.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3474.jpg",
          name: "北海道原味双层芝士",
          price: "¥168起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3508.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3476.jpg",
          name: "北海道抹茶双层芝士",
          price: "¥188起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3510.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3475.jpg",
          name: "北海道巧克力双层芝士",
          price: "¥188起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3509.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3489.jpg",
          name: "桃芝|樱桃芝士",
          price: "¥265起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3523.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3472.jpg",
          name: "分享|蔓越莓芝士",
          price: "¥335起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3506.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3488.jpg",
          name: "星空|黑森林",
          price: "¥225起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3522.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3490.jpg",
          name: "梦幻|松露巧克力",
          price: "¥315起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3524.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3484.jpg",
          name: "思念|缤纷乐园",
          price: "¥295起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3518.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3492.jpg",
          name: "流连|榴莲慕斯",
          price: "¥315起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3526.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3497.jpg",
          name: "相伴|奶油杏仁",
          price: "¥225起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3531.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3494.jpg",
          name: "深爱|巧克力冰激凌蛋糕",
          price: "¥265起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3528.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3487.jpg",
          name: "感恩|朗姆冰激凌蛋糕",
          price: "¥225起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3521.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3485.jpg",
          name: "恋香|香草冰激凌蛋糕",
          price: "¥265起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3519.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3502.jpg",
          name: "遇见|榴莲冰激凌蛋糕",
          price: "¥295起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3536.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3755.jpg",
          name: "夏至|薄荷冰激凌蛋糕",
          price: "¥335起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3756.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3715.jpg",
          name: "嫣然|抹茶冰激凌蛋糕",
          price: "¥265起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3716.jpg"
        }
      ],
      list_nation: [
        {
          src: cake,
          name: "北海道原味双层芝士",
          price: "¥168起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3508.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3476.jpg",
          name: "北海道抹茶双层芝士",
          price: "¥188起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3510.jpg"
        },
        {
          src: "http://images.ebeecake.com/img_w/3475.jpg",
          name: "北海道巧克力双层芝士",
          price: "¥188起",
          bigImgUrl: "http://images.ebeecake.com/img_w/3509.jpg"
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