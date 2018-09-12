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

import NewChocolateAll from '@/components/cake/fenlei/NewChocolateAll'

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
      redirect: '/cake/classify/all'
    }, {
      path: '/cake',
      name: 'Cake',
      component: Cake,
      children: [
        {
          path: '/cake/classify/all',
          name: 'All',
          component: All,
        },
        {
          path: '/cake/classify/newAll',
          name: 'NewAll',
          component: NewAll,
        },
        {
          path: '/cake/classify/birthdayAll',
          name: 'BirthdayAll',
          component: BirthdayAll,
        },
        {
          path: '/cake/classify/marriageAll',
          name: 'MarriageAll',
          component: MarriageAll,
        },
        {
          path: '/cake/classify/nationalAll',
          name: 'NationalAll',
          component: NationalAll,
        },
        {
          path: '/cake/classify/partyAll',
          name: 'PartyAll',
          component: PartyAll,
        },
        {
          path: '/cake/classify/teaAll',
          name: 'TeaAll',
          component: TeaAll,
        },
        {
          path: '/cake/classify/newChocolateAll',
          name: 'NewChocolateAll',
          component: NewChocolateAll,
        }
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
