import axios from "axios"

export default {
    name: "HomePage",
    data() {
        return {
            'postLists': [],
            'categoryLists': {},
            'searchKey': ''
        }
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
        }
    },
    mounted() {
        this.getAllPosts();
        this.getAllCategories();
    }
}