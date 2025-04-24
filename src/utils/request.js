import axios from "axios"
import router from '@/router';
import { getToken, removeToken } from "./cookie";
// import { el } from "element-plus/es/locale";

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";

const service = axios.create({
    baseURL: "/dev-api", 
    timeout:5000, 
})

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        if(getToken()){
            console.log(getToken());
            config.headers["Authorization"] = "Bearer " + getToken();
        }
        return config;
    },
    (error) => {
        console.log(error);
        Promise.reject(error);
    }
)

// 响应拦截器
service.interceptors.response.use(
    (res) => {
        const code = res.data.code;
        const msg = res.data.errMeg;
        if(code == 3001){
            ElMessage.error(msg);
            removeToken();
            router.push('/oj/login')
        } else if(code != 1000){
            ElMessage.error(msg)
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
