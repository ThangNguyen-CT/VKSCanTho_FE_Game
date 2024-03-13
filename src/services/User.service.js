import createHttp from "./http.service";
class Users {
  constructor() {
    this.http = createHttp("https://ultramarine-quail-hose.cyclic.app/", true);
  }
  async getAll() {
    return (await this.http.get("/")).data;
  }
  async create(data) {
    return (await this.http.post(`/add`, data)).data;
  }
}

export default new Users();
