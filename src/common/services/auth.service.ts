import http from "@/common/api/axios.service";

class AuthService {
  login(params: any) {
    return http
      .post(`/auth/login`, params)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }

  me() {
    return http
      .get(`/auth/me`)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
}
export default new AuthService();
