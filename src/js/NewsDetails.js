import axios from "axios";
import { mapGetters } from "vuex";

export default {
    name: "NewsDetails",
    data() {
        return {
            newsID: 0,
            posts: {},
            viewCount: 0
        }
    },
    computed: {
        ...mapGetters(["getToken", "getUserData"])
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
        viewCountLoad() {
            let data = {
                'user_id': this.getUserData.id,
                'post_id': this.$route.params.news_id
            };
            axios.post('http://localhost:8000/api/actionLogs', data)
                .then((response) => {
                    this.viewCount = response.data.posts.length;
                })

        }
    },
    mounted() {
        this.viewCountLoad();
        this.newsID = this.$route.params.news_id;
        this.loadPost(this.newsID);
    }
};