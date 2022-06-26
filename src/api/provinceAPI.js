import API from "./API";

const provinceAPI = {
  getProvinces() {
    return API.get('/provinsi/reads');
  }
};

export default provinceAPI;