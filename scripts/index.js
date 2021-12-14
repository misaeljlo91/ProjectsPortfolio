const app = Vue.createApp({
    methods:{
        momentDate(date){
            return moment(date).format("YYYY")
        }
    }
})
app.mount("#app")