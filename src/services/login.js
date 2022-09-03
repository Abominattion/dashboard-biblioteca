import {
    apiURL
} from "./config";

export default { 
    login: (email, password) => {
        return apiURL.post("/api/auth/login?"+"email="+email+"&password="+password)
    },

    getCategoria: () => {
        return apiURL.get("/api/v1/categorias")
    }
}
