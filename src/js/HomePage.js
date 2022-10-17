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
                    this.postLists = response.data.post;
                })
        }
    },
    mounted() {
        this.getAllPosts();
    }
}