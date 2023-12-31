import axios from "axios";
import { Products } from "../interfaces/products";

export const cms_api = axios.create({
  baseURL: process.env.CMS_API_URL,
});

export const get_products = async (name: string) => {
  try {
    const { data }: { data: Products } = await cms_api.get(
      `/products?filters[category][name][$eq]=${name}&sort=createdAt:asc&populate=*`,
    );

    return data;
  } catch (e) {
    console.error(e);
  }
};
