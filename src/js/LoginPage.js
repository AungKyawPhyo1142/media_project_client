export default {
    name: 'LoginPage',
    methods: {
        goHomePage() {
            this.$router.push({
                name: 'home'
            })
        },

        goLoginPage() {
            this.$router.push({
                name: 'loginPage'
            })
        }
    }
}