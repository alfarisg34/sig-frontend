import Api from './api';

const authAPI = {
  login(data) {
    return Api.post('/auth/login', data);
  },
  logout() {
    return Api.post('/auth/logout');
  }
};

export default authAPI;
