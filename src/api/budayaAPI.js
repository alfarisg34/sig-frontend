import API from "./API";

const budayaAPI = {
  getAllBudaya() {
    return API.get('/kebudayaan/reads');
  },
  getListBudaya(provinceId) {
    return API.get(`/kebudayaan/readsbyprovince/${provinceId}`);
  },
  getDetailBudaya(idBudaya) {
    return API.get(`/kebudayaan/read/${idBudaya}`)
  }
};

export default budayaAPI;