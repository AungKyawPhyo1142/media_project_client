import axios from "axios";

export default {
    name: "NewsDetails",
    data() {
        return {
            newsID: 0,
            posts: {}
        }
    },
    methods: {
        loadPost(id) {
            axios.post('http://localhost:8000/api/detailsPost', { news_id: id })
                .then((response) => {
                    if (response.data.post.image != null) {
                        response.data.post.image = 'http://localhost:8000/postImage/' + response.data.post.image;
                    } else {
                        response.data.post.image = 'http://localhost:8000/defaultImage/default_post_image.png';
                    }
                    this.posts = response.data.post;
                })
        },
        goBack() {
            history.back();
        },
    },
    mounted() {
        this.newsID = this.$route.params.news_id;
        this.loadPost(this.newsID);
    }
};