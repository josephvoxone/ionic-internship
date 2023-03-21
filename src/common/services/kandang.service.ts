import http from "@/common/api/axios.service";

class PromoService {
    getPromos(params: any) {
        return http.get(`/kandang`, { params })
            .then((res) => res)
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
export default new PromoService();