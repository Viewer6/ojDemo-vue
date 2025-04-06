import axios from "axios"
import { ElMessage } from "element-plus";
// import { el } from "element-plus/es/locale";

const service = axios.create({
    baseURL: "/dev-api", 
    timeout:5000, 
})

service.interceptors.response.use(
    (res) => {
        const code = res.data.code;
        const msg = res.data.errMeg;
        if(code != 1000){
            ElMessage.error(msg);
            return Promise.reject(new Error(msg));
        }else {
            return Promise.resolve(res.data);
        }
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default service
