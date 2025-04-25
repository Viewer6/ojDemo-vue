import service from "@/utils/request"

export function getQuestionListService(params){
    return service({
        url: "/question/getList", 
        method: "get", 
        params: params
    });
}

export function addQuestionService(params = {}) {
    return service({
        url: "/question/add", 
        method: "post",
        data: params, 
    })
}

export function getQuestionDetailService(queryQuestionId) {
    return service({
      url: "/question/getDetail",
      method: "get",
      params: { queryQuestionId },
    });
  }

export function editQuestionService(params = {}) {
    return service({
        url: "/question/edit", 
        method: "put",
        data: params, 
    })
}

export function deleteQuestionService(deleteQuestionId) {
    return service({
        url: "/question/delete", 
        method: "delete",
        params: { deleteQuestionId }, 
    })
}
