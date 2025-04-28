import service from "@/utils/request";

export function getExamListService(params) {
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

export function addExamQuestionService(params = {}) {
  return service({
    url: "/exam/add/question",
    method: "post",
    data: params,
  });
}

export function getExamDetailService(examId) {
  return service({
    url: "/exam/detail",
    method: "get",
    params: { examId },
  });
}


