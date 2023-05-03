import http from "@/common/api/axios.service";

class ReportService {
  getReport(params: any) {
    return http
      .get(`/daily_report`, { params })
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  }

  getStatsReport(id: any) {
    return http
      .get(`/daily_report/stats/${id}`)
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  }

  addReport(params: any) {
    return http
      .post(`/daily_report`, params)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }

  updatePromo(params: any) {
    return http
      .put(`/example`, { params })
      .then((res) => res.data.data[0])
      .catch((error) => {
        throw error;
      });
  }

  deletePromo(id: any) {
    return http.delete(`/example/${id}`);
  }
}
export default new ReportService();
