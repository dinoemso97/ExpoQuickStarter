import axios, { AxiosRequestConfig } from "axios";
import { Platform } from "react-native";
//import { API_URL } from '@utils/constants'

/**
 * @description Base function for making any API calls.
 * baseURL and accessToken are optional based on the circumstance.
 */

export default async (
  request: AxiosRequestConfig,
  config: {
    baseURL?: string;
    params?: any;
    body?: any;
    contentType?: any;
  } = {}
) => {
  const { baseURL, params, body, contentType } = config;
  request.method = request.method || "get";
  request.withCredentials = true;
  const URL = baseURL ? baseURL : "SOME_URL";
  // If request.url is specified, append it to the baseURL, otherwise just use the baseURL
  request.url ? (request.url = `${URL}/${request.url}`) : (request.url = URL);
  if (Platform.OS === "android") {
    request.data = request.data || {};
  }
  if (request.data && request.method === "get") {
    // If data is set the get request won't be made
    request.data = null;
  }
  request.headers = {
    ...request.headers,
    "Content-Type": contentType ? contentType : "application/json",
    "X-Device": "mobile",
  };

  if (params) {
    request.params = params;
  }

  if (body) {
    request.data = body;
  }

  return axios(request);
};

/***** ⬇️⬇️⬇️ HOW TO USE ⬇️⬇️⬇️ ******/

//EXAMPLE 1 - GET REQUEST ⬇️⬇️⬇️
// export const fetchRandomData = async (randomParams: string) => {
//     try {
//         const res = await apiRequest(
//             {
//                 method: 'get',
//                 url: `random_request/${randomParams}/`,
//                 headers: {
//                     random_id: 'random_id',
//                 }
//             },
//             { baseURL: RANDOM_API_URL }
//         )
//         return res.data
//     } catch (e) {
//         console.log(
//             'Error fetching random data: ',
//             e
//         )
//     }
// }

//EXAMPLE 2 - POST REQUEST ⬇️⬇️⬇️
// export const addRandomData = async (
//     randomParams: string,
//     randomBody: RandomBodyTypes
// ) => {
//     try {

//             const res = await apiRequest(
//                 {
//                     method: 'post',
//                     url: `random_request/?random_params=${randomParams}`,
//                     headers: {
//                         random_id: 'random_id',
//                     }
//                 },
//                 { baseURL: RANDOM_API_URL, randomBody }
//             )
//             return res.data

//     } catch (e) {
//         console.log('Error adding random data', e)
//     }
// }
