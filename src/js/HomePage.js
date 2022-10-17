import axios from "axios"

export default {
    name: "HomePage",
    data() {
        return {
            'posts': ''
        }
    },
    mounted() {
        let data = axios.get('http://localhost:8000/api/allPost')
            .then((response) => {
                console.log(response.data);
            })
    }
}