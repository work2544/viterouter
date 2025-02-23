import axios, { type AxiosResponse } from "axios";

export async function UserLogin(formdata: any) {
  try {
    const result: AxiosResponse = await axios.request({
      method: "POST",
      url: `/auth/Login`,
      headers: {
        accept: "*/*",
      },
      data: formdata,
    });
    return result.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log(err.status);
      console.error(err.response);
    } else {
      console.error(err);
    }
    throw new Error(String(err));
  }
}
