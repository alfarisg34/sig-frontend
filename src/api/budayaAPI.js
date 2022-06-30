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
  },
  getBudayaPage(limit, page) {
    return API.get(`/kebudayaan/all?limit=${limit}&page=${page}`, {withCredentials: true});
  },
  addData(data) {
    return API.post(`/kebudayaan/create`, data)
  },
  deleteBudaya(idBudaya) {
    return API.delete(`/kebudayaan/delete/${idBudaya}`)
  },
};

export default budayaAPI;