// Importing instance
import instance from "./instance";

// Omporting AutoObservable
import { makeAutoObservable } from "mobx";

// Importing jwt decode
import decode from "jwt-decode";

class SalonAuth {
  salon = null;
  loading = true;
  salons = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchSalons = async () => {
    this.loading = true;
    const res = await instance.get(`/salons`);
    this.salons = res.data;
    this.loading = false;
    try {
    } catch (error) {
      console.log(error);
    }
  };

  checkForToken = () => {
    const token = localStorage.getItem("Salon Token");
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.exp >= currentTime) {
        this.setSalon(token);
      } else {
        this.signout();
      }
    }
  };

  setSalon = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.salon = decode(token);
    localStorage.setItem("Salon Token", token);
  };

  signout = () => {
    delete instance.defaults.headers.common.Authorization;
    localStorage.removeItem("Salon Token");
    this.salon = null;
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/salons/signin", userData);
      this.setSalon(res.data.token);
    } catch (error) {
      alert("Incorrect password or username");
      //   console.error(error);
    }
  };

  updateSalon = async (updateSalon) => {
    try {
      this.loading = true;
      const formData = new FormData();
      for (const key in updateSalon) formData.append(key, updateSalon[key]);
      await instance.put(`/salons/${updateSalon.id}`, formData);
      const asalon = this.salons.find((asalon) => asalon.id === updateSalon.id);
      for (const key in asalon) asalon[key] = updateSalon[key];
      for (const key in this.salon) this.salon[key] = updateSalon[key];
      console.log("asalon", asalon);
      console.log("this.salon", this.salon);
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };
}

const salonAuth = new SalonAuth();
// salonAuth.signout();
salonAuth.checkForToken();
salonAuth.fetchSalons();

export default salonAuth;
