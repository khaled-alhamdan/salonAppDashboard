// Importing instance
import instance from "./instance";
import { makeAutoObservable } from "mobx";

class CategoryStore {
  categories = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchCategories = async () => {
    try {
      const response = await instance.get(`/categories`);
      this.categories = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  createCategoryForSalon = async (newCategory) => {
    try {
      this.loading = true;
      const formData = new FormData();
      for (const key in newCategory) formData.append(key, newCategory[key]);
      const res = await instance.post(`/categories`, formData);
      this.categories.push(res.data);
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  updateCategory = async (updateCategory) => {
    try {
      this.loading = true;
      const formData = new FormData();
      for (const key in updateCategory)
        formData.append(key, updateCategory[key]);
      await instance.put(`/categories/${updateCategory.id}`, formData);
      const category = this.categories.find(
        (category) => category.id === updateCategory.id
      );
      for (const key in category) category[key] = updateCategory[key];
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  deleteCategory = async (categoryId) => {
    this.loading = true;
    await instance.delete(`/categories/${categoryId}`);
    this.categories = this.categories.filter(
      (category) => category.id !== +categoryId
    );
    this.loading = false;
    try {
    } catch (error) {
      console.log(error);
    }
  };
}

const categoryStore = new CategoryStore();
categoryStore.fetchCategories();

export default categoryStore;
