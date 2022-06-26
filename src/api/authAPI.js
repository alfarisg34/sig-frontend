import API from './API';

const authAPI = {
  login(data) {
    return API.post('/auth/login', data);
  },
  logout() {
    return API.post('/auth/logout');
  }
};

export default authAPI;
