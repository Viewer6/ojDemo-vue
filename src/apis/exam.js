import service from "@/utils/request";

export function getExamListService(params){
    return service({
        url: "/exam/getList", 
        method: "get", 
        params: params
    });
}

export function examAddService(params = {}) {
    return service({
      url: "/exam/add",
      method: "post",
      data: params,
    });
  }
  
