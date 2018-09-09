import Vue from 'vue'
import axios from 'axios'
import lottie from 'lottie-web'
require('./data/demo3')

const app = new Vue({
    el: '#app',
    data: function() {
        return {
            anim: {},
            data: null,
            loaded: false,
            speed: 0.5,
        }
    },
    methods: {
        getData: function() {
            axios.get('/js/data.json').then(response => {
                this.data = response.data
                this.init()
            })
        },
        init: function() {
            this.anim = lottie.loadAnimation({
                container: this.$refs.anim,
                renderer: 'svg',
                loop: false,
                autoplay: false,
                animationData: this.data,
                name: 'DnaDataData',
                rendererSettings: {}
            })
            this.anim.setSpeed(this.speed)
            this.anim.play()
        }
    },
    mounted: function() {
        this.getData()
    }
});
