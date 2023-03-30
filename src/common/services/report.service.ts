
import http from "@/common/api/axios.service";

class ReportService {
    getReport(params: any) {
        console.log('Service', params)
        return http.get(`/daily_report`, { params })
            .then((res) => res.data)
            .catch(error => { throw error })
    }

    addPromo(params: any) {
        return http.post(`/example`, params)
            .then(response => response.data.data)
            .catch(error => { throw error })
    }

    updatePromo(params: any) {
        return http.put(`/example`, { params })
            .then((res) => res.data.data[0])
            .catch(error => { throw error })
    }

    deletePromo(id: any) {
        return http.delete(`/example/${id}`)
    }
}
export default new ReportService();