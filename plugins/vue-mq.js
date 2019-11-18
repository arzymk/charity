import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
    breakpoints: {
        mobileS: 415,
        mobile: 768,
        tablet: 1087,
        desktop: 1215,
        widescreen: 1407,
        fullhd: Infinity,
    }
})