import Api from "./api";

const budayaAPI = {
  getAllBudaya() {
    return Api.get('/kebudayaan/reads');
  },
  getListBudaya(provinceId) {
    return Api.get(`/kebudayaan/readsbyprovince/${provinceId}`);
  },
  getDetailBudaya(idBudaya) {
    return Api.get(`/kebudayaan/read/${idBudaya}`)
  }
};

export default budayaAPI;