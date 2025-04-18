import service from "@/utils/request"

export function getQuestionListService(params){
    return service({
        url: "/question/getList", 
        method: "get", 
        params: params
    });
}
