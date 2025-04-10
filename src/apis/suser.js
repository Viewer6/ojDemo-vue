import service from "@/utils/request"

export function loginService(userAccount, password){
    const payload = JSON.stringify({ userAccount, password });
    // console.log("发送的数据:", payload);
    
    return service({
        url: "/sysUser/login",
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        data: payload
    });
}

export function getUserInfoService(){
    return service({
        url: "/sysUser/getLoginIdentity", 
        method: "get"
    });
}

export function logoutService(){
    return service({
        url: "/sysUser/logout", 
        method: "delete"
    });
}

