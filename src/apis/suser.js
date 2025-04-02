import service from "@/utils/request"

export function loginService(userAccount, password){
    const payload = JSON.stringify({ userAccount, password });
    console.log("发送的数据:", payload);
    
    return service({
        url: "/sysUser/login",
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        data: payload
    });
}

