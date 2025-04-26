import service from "@/utils/request";

export function getExamListService(params){
    return service({
        url: "/exam/getList", 
        method: "get", 
        params: params
    });
}
