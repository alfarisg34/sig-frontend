import Api from "./api";

const provinceAPI = {
  getProvinces() {
    return Api.get('/provinsi/reads');
  }
};

export default provinceAPI;