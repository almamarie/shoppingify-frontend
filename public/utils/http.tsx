import { API_BASE_URL } from "./types";

export async function GET_AJAX(endpoint: string) {
  const url = API_BASE_URL + endpoint + ".json";

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) throw new Error(`${data.message} (${response.status})`);
    //   console.log(data);
    return { success: true, message: data };
  } catch (error) {
    console.log(error);
    return { success: false, message: "an error occured" };
  }
}

export async function POST_AJAX(
  endpoint: string,
  uploadData: any,
  contentType: string | undefined = undefined
) {
  const url = API_BASE_URL + endpoint + ".json";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": contentType || "application/json",
      },
      body: JSON.stringify(uploadData),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(`${data.message} (${response.status})`);
    return { success: true, message: data };
  } catch (error) {
    return { success: false, message: "an error occured" };
  }
}

export async function PUT_AJAX(
  endpoint: string,
  uploadData: any,
  contentType: string | undefined = undefined
) {
  const url = API_BASE_URL + endpoint + ".json";

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": contentType || "application/json",
      },
      body: JSON.stringify(uploadData),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(`${data.message} (${response.status})`);
    return { success: true, message: data };
  } catch (error) {
    return { success: false, message: "an error occured" };
  }
}
