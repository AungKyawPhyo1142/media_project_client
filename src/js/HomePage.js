import axios from "axios"
import { mapGetters } from "vuex"

export default {
    name: "HomePage",
    data() {
        return {
            'postLists': [],
            'categoryLists': {},
            'searchKey': '',
            'tokenStatus': false
        }
    },
    computed: {
        ...mapGetters(["getToken", "getUserData"])
    },
    methods: {
        getAllPosts() {
            axios.get('http://localhost:8000/api/allPost')
                .then((response) => {
                    for (let i = 0; i < response.data.post.length; i++) {
                        if (response.data.post[i].image != null) {
                            response.data.post[i].image = 'http://localhost:8000/postImage/' + response.data.post[i].image;
                        } else {
                            response.data.post[i].image = 'http://localhost:8000/defaultImage/default_post_image.png';
                        }
                    }
                    this.postLists = response.data.post;
                }).catch((e) => {
                    console.log(e);
                })
        },
        getAllCategories() {
            axios.get('http://localhost:8000/api/allCategory')
                .then((response) => {
                    this.categoryLists = response.data.category;
                }).catch((e) => {
                    console.log(e);
                });
        },
        search() {
            let search = {
                key: this.searchKey
            };
            axios.post('http://localhost:8000/api/searchPost', search)
                .then((response) => {

                    for (let i = 0; i < response.data.searchData.length; i++) {
                        if (response.data.searchData[i].image != null) {
                            response.data.searchData[i].image = 'http://localhost:8000/postImage/' + response.data.searchData[i].image;
                        } else {
                            response.data.searchData[i].image = 'http://localhost:8000/defaultImage/default_post_image.png';
                        }
                    }

                    this.postLists = response.data.searchData;
                })
        },
        categorySearch(searchKey) {
            let search = {
                key: searchKey
            };
            axios.post('http://localhost:8000/api/searchWithCategory', search)
                .then((response) => {
                    console.log(response.data.result);
                    for (let i = 0; i < response.data.result.length; i++) {
                        if (response.data.result[i].image != null) {
                            response.data.result[i].image = 'http://localhost:8000/postImage/' + response.data.result[i].image;
                        } else {
                            response.data.result[i].image = 'http://localhost:8000/defaultImage/default_post_image.png';
                        }
                    }
                    this.postLists = response.data.result;

                })
                .catch((e) => {
                    console.log(e);
                })
        },

        newsDetails(id) {
            this.$router.push({
                name: 'newsDetails',
                params: {
                    news_id: id
                },
            })
        },

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

        logout() {
            this.$store.dispatch("setToken", null);
            this.goLoginPage();
        },

        checkToken() {
            if (this.getToken != null && this.getToken != undefined && this.getToken != '') {
                this.tokenStatus = true;
            } else {
                this.tokenStatus = false;
            }
        }
    },
    mounted() {
        this.checkToken();
        this.getAllPosts();
        this.getAllCategories();
    }
}