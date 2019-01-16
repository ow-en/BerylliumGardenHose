import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import colors from 'vuetify/es5/util/colors';

/* tslint:disable */
Vue.use(Vuetify, {
  iconfont: 'md',
  theme:       {
    primary: colors.deepPurple.base,
    secondary: colors.blue.base,
    accent: colors.lime.base,
    error: colors.red.base,
    warning: colors.orange.base,
    info: colors.cyan.base,
    success: colors.lightGreen.base
    }
});
