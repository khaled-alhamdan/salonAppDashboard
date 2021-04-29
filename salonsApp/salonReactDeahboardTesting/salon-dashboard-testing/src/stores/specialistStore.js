// Importing instance
import instance from "./instance";
import { makeAutoObservable } from "mobx";

class SpecialistStore {
  specialists = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchSpecialists = async () => {
    try {
      const response = await instance.get(`/specialists`);
      this.specialists = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  createSpecialistForSalon = async (newSpecialist) => {
    try {
      this.loading = true;
      const formData = new FormData();
      for (const key in newSpecialist) formData.append(key, newSpecialist[key]);
      const res = await instance.post(`/specialists`, formData);
      this.specialists.push(res.data);
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  // updateSpecialist = async (updateSpecialist) => {
  //   try {
  //     const formData = new FormData();
  //     for (const key in updateSpecialist)
  //       formData.append(key, updateSpecialist[key]);
  //     await instance.put(`/users/${updateSpecialist.id}`, formData);
  //     const specialist = this.specialists.find(
  //       (specialist) => specialist.id === updateSpecialist.id
  //     );
  //     for (const key in specialist) specialist[key] = updateSpecialist[key];
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  deleteSpecialist = async (specialistId) => {
    await instance.delete(`/specialists/${specialistId}`);
    this.specialists = this.specialists.filter(
      (specialist) => specialist.id !== +specialistId
    );
    try {
    } catch (error) {
      console.log(error);
    }
  };
}

const specialistStore = new SpecialistStore();
specialistStore.fetchSpecialists();

export default specialistStore;
