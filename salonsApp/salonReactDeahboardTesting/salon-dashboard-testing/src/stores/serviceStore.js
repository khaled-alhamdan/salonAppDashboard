// Importing instance
import instance from "./instance";
import { makeAutoObservable } from "mobx";

class ServiceStore {
  services = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchServices = async () => {
    try {
      const response = await instance.get(`/services`);
      this.services = response.data;
      this.loading = false;
      //   console.log(this.services);
    } catch (error) {
      console.error(error);
    }
  };

  createServiceForCategory = async (newService, categoryId) => {
    try {
      this.loading = true;
      const res = await instance.post(
        `/services/${categoryId.replace("category", "")}`,
        newService
      );
      this.services.push(res.data);
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  updateService = async (updateService) => {
    try {
      this.loading = true;
      const formData = new FormData();
      for (const key in updateService) formData.append(key, updateService[key]);
      await instance.put(`/services/${updateService.id}`, formData);
      const service = this.services.find(
        (service) => service.id === +updateService.id
      );
      for (const key in service) service[key] = updateService[key];
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  deleteService = async (serviceId) => {
    try {
      this.loading = true;
      await instance.delete(`/services/${serviceId}`);
      this.services = this.services.filter(
        (service) => service.id !== +serviceId
      );
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  assignServiceToSpecialist = async (assign, serviceId) => {
    try {
      const res = await instance.post(
        `/services/${serviceId}/${assign.specialistId}`,
        assign
      );
      this.services.push(res.data);
      this.loading = false;
    } catch (error) {
      console.log(error);
      alert("Action was not successful");
    }
  };

  removeServiceFromSpecialist = async (serviceId, specialistId) => {
    try {
      await instance.delete(`services/${serviceId}/${specialistId}`);
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };
}

const serviceStore = new ServiceStore();
serviceStore.fetchServices();

export default serviceStore;
