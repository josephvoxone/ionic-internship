import http from "@/common/api/axios.service";

class KaryawanService {
  getKaryawan(params: any) {
    console.log("Service", params);
    return http
      .get(`/karyawan`, { params })
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  }

  updateName(name: any, id: number) {
    return http
      .put(`/karyawan/${id}`, { name })
      .then((res) => res.data.data[0])
      .catch((error) => {
        throw error;
      });
  }

  updatePassword(password: any, id: number) {
    return http
      .put(`/karyawan/${id}`, { password })
      .then((res) => res.data.data[0])
      .catch((error) => {
        throw error;
      });
  }
}
export default new KaryawanService();
