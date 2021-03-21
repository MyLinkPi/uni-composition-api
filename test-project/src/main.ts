/*
 * @Author: Mr.Mao
 * @Date: 2021-03-21 15:08:38
 * @LastEditTime: 2021-03-21 15:22:40
 * @Description: 
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import Vue from 'vue'
import App from './App.vue'

import UniCompositionAPI from 'uni-composition-api';
Vue.use(UniCompositionAPI);
Vue.config.productionTip = false
new App().$mount()
