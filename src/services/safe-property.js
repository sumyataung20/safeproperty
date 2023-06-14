import http from "../http-common";

class SafePropertyServices {
  register(data) {
    return http.post("/register", data);
  }

  login(data) {
    return http.post("/login", data);
  }
}

export default new SafePropertyServices();
