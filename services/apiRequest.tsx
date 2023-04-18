import axios, { Method, AxiosHeaders, AxiosResponse, AxiosError } from "axios";

interface IFetchData<T> {
  url: string;
  method: Method;
  data?: T;
  headers?: AxiosHeaders;
}

interface IErrorResponse {
  error: string;
}

const fetchData = async <T,>({
  url,
  method,
  data,
  headers,
}: IFetchData<T>): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios({
      method,
      url,
      data,
      headers,
    });

    // Return the response data
    return response.data;
  } catch (err) {
    const error = err as AxiosError<IErrorResponse>;
    if (error.response) {
      console.log("Error response:", error.response.data);
    } else if (error.request) {
      console.log("No response received:", error.request);
    } else {
      console.log("Error:", error.message);
    }
    throw new Error("Failed to fetch data");
  }
};

export default fetchData;
