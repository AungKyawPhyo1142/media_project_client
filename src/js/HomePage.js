import axios from "axios"

export default {
    name: "HomePage",
    data() {
        return {
            'postLists': []
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
                })
        }
    },
    mounted() {
        this.getAllPosts();
    }
}