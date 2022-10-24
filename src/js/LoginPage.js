import axios from "axios"

export default {
    name: 'LoginPage',
    data() {
        return {
            userData: {
                email: null,
                password: null
            },
            tokenStatus: false,
            userStatus: false
        }
    },
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
        },

        loginToken() {

            axios.post('http://localhost:8000/api/user/login', this.userData)
                .then((response) => {
                    if (response.data.token != null) {
                        this.userStatus = false;
                        this.storeUserData(response);
                        this.userData.email = null;
                        this.userData.password = null;
                        this.goHomePage()
                    } else {
                        this.userStatus = true;
                    }
                })
                .catch((e) => {
                    console.log(e);
                })

        },

        storeUserData(response) {
            this.$store.dispatch("setToken", response.data.token);
            this.$store.dispatch("setUserData", response.data.user);
        },
    }
}