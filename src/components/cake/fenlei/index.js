import Vue from 'vue'
import Router from 'vue-router'

import Cake from '@/components/cake/Cake'
import All from '@/components/cake/fenlei/All'
import NewAll from '@/components/cake/fenlei/NewAll'
import BirthdayAll from '@/components/cake/fenlei/BirthdayAll'
import MarriageAll from '@/components/cake/fenlei/MarriageAll'
import NationalAll from '@/components/cake/fenlei/NationalAll'
import PartyAll from '@/components/cake/fenlei/PartyAll'
import TeaAll from '@/components/cake/fenlei/TeaAll'

import AllChocolate from '@/components/cake/fenlei/AllChocolate'
import AllCheese from '@/components/cake/fenlei/AllCheese'
import AllCoffee from '@/components/cake/fenlei/AllCoffee'
import AllCream from '@/components/cake/fenlei/AllCream'
import AllFruits from '@/components/cake/fenlei/AllFruits'
import AllIceCream from '@/components/cake/fenlei/AllIceCream'
import AllMousse from '@/components/cake/fenlei/AllMousse'
import AllNut from '@/components/cake/fenlei/AllNut'
import AllWine from '@/components/cake/fenlei/AllWine'

import NewChocolateAll from '@/components/cake/fenlei/NewChocolateAll'
import NewCheeseAll from '@/components/cake/fenlei/NewCheeseAll'
import NewCoffeeAll from '@/components/cake/fenlei/NewCoffeeAll'
import NewCreamAll from '@/components/cake/fenlei/NewCreamAll'
import NewFruitsAll from '@/components/cake/fenlei/NewFruitsAll'
import NewIceCreamAll from '@/components/cake/fenlei/NewIceCreamAll'
import NewMousseAll from '@/components/cake/fenlei/NewMousseAll'
import NewNutAll from '@/components/cake/fenlei/NewNutAll'
import NewWineAll from '@/components/cake/fenlei/NewWineAll'

import BirthdayChocolateAll from '@/components/cake/fenlei/BirthdayChocolateAll'
import BirthdayCheeseAll from '@/components/cake/fenlei/BirthdayCheeseAll'
import BirthdayCoffeeAll from '@/components/cake/fenlei/BirthdayCoffeeAll'
import BirthdayCreamAll from '@/components/cake/fenlei/BirthdayCreamAll'
import BirthdayFruitsAll from '@/components/cake/fenlei/BirthdayFruitsAll'
import BirthdayIceCreamAll from '@/components/cake/fenlei/BirthdayIceCreamAll'
import BirthdayMousseAll from '@/components/cake/fenlei/BirthdayMousseAll'
import BirthdayNutAll from '@/components/cake/fenlei/BirthdayNutAll'
import BirthdayWineAll from '@/components/cake/fenlei/BirthdayWineAll'

import PartyChocolateAll from '@/components/cake/fenlei/PartyChocolateAll'
import PartyCheeseAll from '@/components/cake/fenlei/PartyCheeseAll'
import PartyCoffeeAll from '@/components/cake/fenlei/PartyCoffeeAll'
import PartyCreamAll from '@/components/cake/fenlei/PartyCreamAll'
import PartyFruitsAll from '@/components/cake/fenlei/PartyFruitsAll'
import PartyIceCreamAll from '@/components/cake/fenlei/PartyIceCreamAll'
import PartyMousseAll from '@/components/cake/fenlei/PartyMousseAll'
import PartyNutAll from '@/components/cake/fenlei/PartyNutAll'
import PartyWineAll from '@/components/cake/fenlei/PartyWineAll'

import TeaChocolateAll from '@/components/cake/fenlei/TeaChocolateAll'
import TeaCheeseAll from '@/components/cake/fenlei/TeaCheeseAll'
import TeaCoffeeAll from '@/components/cake/fenlei/TeaCoffeeAll'
import TeaCreamAll from '@/components/cake/fenlei/TeaCreamAll'
import TeaFruitsAll from '@/components/cake/fenlei/TeaFruitsAll'
import TeaIceCreamAll from '@/components/cake/fenlei/TeaIceCreamAll'
import TeaMousseAll from '@/components/cake/fenlei/TeaMousseAll'
import TeaNutAll from '@/components/cake/fenlei/TeaNutAll'
import TeaWineAll from '@/components/cake/fenlei/TeaWineAll'

import NationalChocolateAll from '@/components/cake/fenlei/NationalChocolateAll'
import NationalCheeseAll from '@/components/cake/fenlei/NationalCheeseAll'
import NationalCoffeeAll from '@/components/cake/fenlei/NationalCoffeeAll'
import NationalCreamAll from '@/components/cake/fenlei/NationalCreamAll'
import NationalFruitsAll from '@/components/cake/fenlei/NationalFruitsAll'
import NationalIceCreamAll from '@/components/cake/fenlei/NationalIceCreamAll'
import NationalMousseAll from '@/components/cake/fenlei/NationalMousseAll'
import NationalNutAll from '@/components/cake/fenlei/NationalNutAll'
import NationalWineAll from '@/components/cake/fenlei/NationalWineAll'

import NewChocolateOld from '@/components/cake/fenlei/NewChocolateOld'
import NewChocolateChildren from '@/components/cake/fenlei/NewChocolateChildren'
import NewChocolateGravida from '@/components/cake/fenlei/NewChocolateGravida'
import NewChocolateLovers from '@/components/cake/fenlei/NewChocolateLovers'

import NewCheeseOld from '@/components/cake/fenlei/NewCheeseOld'
import NewCheeseChildren from '@/components/cake/fenlei/NewCheeseChildren'
import NewCheeseGravida from '@/components/cake/fenlei/NewCheeseGravida'
import NewCheeseLovers from '@/components/cake/fenlei/NewCheeseLovers'

import NewMousseOld from '@/components/cake/fenlei/NewMousseOld'
import NewMousseChildren from '@/components/cake/fenlei/NewMousseChildren'
import NewMousseGravida from '@/components/cake/fenlei/NewMousseGravida'
import NewMousseLovers from '@/components/cake/fenlei/NewMousseLovers'

import NewIceCreamOld from '@/components/cake/fenlei/NewIceCreamOld'
import NewIceCreamChildren from '@/components/cake/fenlei/NewIceCreamChildren'
import NewIceCreamGravida from '@/components/cake/fenlei/NewIceCreamGravida'
import NewIceCreamLovers from '@/components/cake/fenlei/NewIceCreamLovers'

import Home from '@/components/home/Home'
import Food from '@/components/food/Food'
import Activity from '@/components/activity/Activity'
import Company from '@/components/company/Company'
import Member from '@/components/member/Member'
import Register from '@/components/member/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/cake/all/all/all'
    }, {
      path: '/cake',
      name: 'Cake',
      component: Cake,
      children: [
        {
          path: '/cake/all/all/all',
          name: 'All',
          component: All,
        },
        {
          path: '/cake/new/all/all',
          name: 'NewAll',
          component: NewAll,
        },
        {
          path: '/cake/birthday/all/all',
          name: 'BirthdayAll',
          component: BirthdayAll,
        },
        {
          path: '/cake/marriage/all/all',
          name: 'MarriageAll',
          component: MarriageAll,
        },
        {
          path: '/cake/national/all/all',
          name: 'NationalAll',
          component: NationalAll,
        },
        {
          path: '/cake/party/all/all',
          name: 'PartyAll',
          component: PartyAll,
        },
        {
          path: '/cake/tea/all/all',
          name: 'TeaAll',
          component: TeaAll,
        },
        {
          path: '/cake/all/chocolate/all',
          name: 'AllChocolate',
          component: AllChocolate,
        },
        {
          path: '/cake/all/cheese/all',
          name: 'AllCheese',
          component: AllCheese,
        },
        {
          path: '/cake/all/coffee/all',
          name: 'AllCoffee',
          component: AllCoffee,
        },
        {
          path: '/cake/all/cream/all',
          name: 'AllCream',
          component: AllCream,
        },
        {
          path: '/cake/all/fruits/all',
          name: 'AllFruits',
          component: AllFruits,
        },
        {
          path: '/cake/all/iceCream/all',
          name: 'AllIceCream',
          component: AllIceCream,
        },
        {
          path: '/cake/all/mousse/all',
          name: 'AllMousse',
          component: AllMousse,
        },
        {
          path: '/cake/all/nut/all',
          name: 'AllNut',
          component: AllNut,
        },
        {
          path: '/cake/all/wine/all',
          name: 'AllWine',
          component: AllWine,
        },
        {
          path: '/cake/new/chocolate/all',
          name: 'NewChocolateAll',
          component: NewChocolateAll,
        },
        {
          path: '/cake/new/cheese/all',
          name: 'NewCheeseAll',
          component: NewCheeseAll,
        },
        {
          path: '/cake/new/coffee/all',
          name: 'NewCoffeeAll',
          component: NewCoffeeAll,
        },
        {
          path: '/cake/new/cream/all',
          name: 'NewCreamAll',
          component: NewCreamAll,
        },
        {
          path: '/cake/new/fruits/all',
          name: 'NewFruitsAll',
          component: NewFruitsAll,
        },
        {
          path: '/cake/new/iceCream/all',
          name: 'NewIceCreamAll',
          component: NewIceCreamAll,
        },
        {
          path: '/cake/new/mousse/all',
          name: 'NewMousseAll',
          component: NewMousseAll,
        },
        {
          path: '/cake/new/nut/all',
          name: 'NewNutAll',
          component: NewNutAll,
        },
        {
          path: '/cake/new/wine/all',
          name: 'NewWineAll',
          component: NewWineAll,
        },
        {
          path: '/cake/birthday/chocolate/all',
          name: 'BirthdayChocolateAll',
          component: BirthdayChocolateAll,
        },
        {
          path: '/cake/birthday/cheese/all',
          name: 'BirthdayCheeseAll',
          component: BirthdayCheeseAll,
        },
        {
          path: '/cake/birthday/coffee/all',
          name: 'BirthdayCoffeeAll',
          component: BirthdayCoffeeAll,
        },
        {
          path: '/cake/birthday/cream/all',
          name: 'BirthdayCreamAll',
          component: BirthdayCreamAll,
        },
        {
          path: '/cake/birthday/fruits/all',
          name: 'BirthdayFruitsAll',
          component: BirthdayFruitsAll,
        },
        {
          path: '/cake/birthday/iceCream/all',
          name: 'BirthdayIceCreamAll',
          component: BirthdayIceCreamAll,
        },
        {
          path: '/cake/birthday/mousse/all',
          name: 'BirthdayMousseAll',
          component: BirthdayMousseAll,
        },
        {
          path: '/cake/birthday/nut/all',
          name: 'BirthdayNutAll',
          component: BirthdayNutAll,
        },
        {
          path: '/cake/birthday/wine/all',
          name: 'BirthdayWineAll',
          component: BirthdayWineAll,
        },
        {
          path: '/cake/party/chocolate/all',
          name: 'PartyChocolateAll',
          component: PartyChocolateAll,
        },
        {
          path: '/cake/party/cheese/all',
          name: 'PartyCheeseAll',
          component: PartyCheeseAll,
        },
        {
          path: '/cake/party/coffee/all',
          name: 'PartyCoffeeAll',
          component: PartyCoffeeAll,
        },
        {
          path: '/cake/party/cream/all',
          name: 'PartyCreamAll',
          component: PartyCreamAll,
        },
        {
          path: '/cake/party/fruits/all',
          name: 'PartyFruitsAll',
          component: PartyFruitsAll,
        },
        {
          path: '/cake/party/iceCream/all',
          name: 'PartyIceCreamAll',
          component: PartyIceCreamAll,
        },
        {
          path: '/cake/party/mousse/all',
          name: 'PartyMousseAll',
          component: PartyMousseAll,
        },
        {
          path: '/cake/party/nut/all',
          name: 'PartyNutAll',
          component: PartyNutAll,
        },
        {
          path: '/cake/party/wine/all',
          name: 'PartyWineAll',
          component: PartyWineAll,
        },
        {
          path: '/cake/tea/chocolate/all',
          name: 'TeaChocolateAll',
          component: TeaChocolateAll,
        },
        {
          path: '/cake/tea/cheese/all',
          name: 'TeaCheeseAll',
          component: TeaCheeseAll,
        },
        {
          path: '/cake/tea/coffee/all',
          name: 'TeaCoffeeAll',
          component: TeaCoffeeAll,
        },
        {
          path: '/cake/tea/cream/all',
          name: 'TeaCreamAll',
          component: TeaCreamAll,
        },
        {
          path: '/cake/tea/fruits/all',
          name: 'TeaFruitsAll',
          component: TeaFruitsAll,
        },
        {
          path: '/cake/tea/iceCream/all',
          name: 'TeaIceCreamAll',
          component: TeaIceCreamAll,
        },
        {
          path: '/cake/tea/mousse/all',
          name: 'TeaMousseAll',
          component: TeaMousseAll,
        },
        {
          path: '/cake/tea/nut/all',
          name: 'TeaNutAll',
          component: TeaNutAll,
        },
        {
          path: '/cake/tea/wine/all',
          name: 'TeaWineAll',
          component: TeaWineAll,
        },
        {
          path: '/cake/national/chocolate/all',
          name: 'NationalChocolateAll',
          component: NationalChocolateAll,
        },
        {
          path: '/cake/national/cheese/all',
          name: 'NationalCheeseAll',
          component: NationalCheeseAll,
        },
        {
          path: '/cake/national/coffee/all',
          name: 'NationalCoffeeAll',
          component: NationalCoffeeAll,
        },
        {
          path: '/cake/national/cream/all',
          name: 'NationalCreamAll',
          component: NationalCreamAll,
        },
        {
          path: '/cake/national/fruits/all',
          name: 'NationalFruitsAll',
          component: NationalFruitsAll,
        },
        {
          path: '/cake/national/iceCream/all',
          name: 'NationalIceCreamAll',
          component: NationalIceCreamAll,
        },
        {
          path: '/cake/national/mousse/all',
          name: 'NationalMousseAll',
          component: NationalMousseAll,
        },
        {
          path: '/cake/national/nut/all',
          name: 'NationalNutAll',
          component: NationalNutAll,
        },
        {
          path: '/cake/national/wine/all',
          name: 'NationalWineAll',
          component: NationalWineAll,
        },
        {
          path: '/cake/new/chocolate/old',
          name: 'NewChocolateOld',
          component: NewChocolateOld,
        },
        {
          path: '/cake/new/chocolate/children',
          name: 'NewChocolateChildren',
          component: NewChocolateChildren,
        },
        {
          path: '/cake/new/chocolate/gravida',
          name: 'NewChocolateGravida',
          component: NewChocolateGravida,
        },
        {
          path: '/cake/new/chocolate/lovers',
          name: 'NewChocolateLovers',
          component: NewChocolateLovers,
        },
        {
          path: '/cake/new/cheese/old',
          name: 'NewCheeseOld',
          component: NewCheeseOld,
        },
        {
          path: '/cake/new/cheese/children',
          name: 'NewCheeseChildren',
          component: NewCheeseChildren,
        },
        {
          path: '/cake/new/cheese/gravida',
          name: 'NewCheeseGravida',
          component: NewCheeseGravida,
        },
        {
          path: '/cake/new/cheese/lovers',
          name: 'NewCheeseLovers',
          component: NewCheeseLovers,
        },
        {
          path: '/cake/new/mousse/old',
          name: 'NewMousseOld',
          component: NewMousseOld,
        },
        {
          path: '/cake/new/mousse/children',
          name: 'NewMousseChildren',
          component: NewMousseChildren,
        },
        {
          path: '/cake/new/mousse/gravida',
          name: 'NewMousseGravida',
          component: NewMousseGravida,
        },
        {
          path: '/cake/new/mousse/lovers',
          name: 'NewMousseLovers',
          component: NewMousseLovers,
        },


        {
          path: '/cake/new/iceCream/old',
          name: 'NewIceCreamOld',
          component: NewIceCreamOld,
        },
        {
          path: '/cake/new/iceCream/children',
          name: 'NewIceCreamChildren',
          component: NewIceCreamChildren,
        },
        {
          path: '/cake/new/iceCream/gravida',
          name: 'NewIceCreamGravida',
          component: NewIceCreamGravida,
        },
        {
          path: '/cake/new/iceCream/lovers',
          name: 'NewIceCreamLovers',
          component: NewIceCreamLovers,
        },







      ]
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
    }, {
      path: '/food',
      name: 'Food',
      component: Food,
    }, {
      path: '/activity',
      name: 'Activity',
      component: Activity,
    }, {
      path: '/company',
      name: 'Company',
      component: Company,
    }, {
      path: '/member',
      name: 'Member',
      component: Member,
    }, {
      path: '/register',
      name: 'Register',
      component: Register,
    }
  ]
})
