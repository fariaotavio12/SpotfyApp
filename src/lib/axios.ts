import axios, { AxiosInstance } from "axios";
import getToken from "./getToken";

export async function getAPIClient() {
 
    const token = await getToken();

    const api = axios.create({
      baseURL: "https://api.spotify.com/v1/",
    });

    console.log(token);
    

    if (token) {
      api.defaults.headers["Authorization"] = `Bearer ${token}`;
    }

    return api;
  
}

export const api = await getAPIClient();
