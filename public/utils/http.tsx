import { API_BASE_URL } from "./types";

//    a function for http requests
// export const AJAX = async function (url: string, uploadData: any) {
//   try {
//     const fetchPro = uploadData
//       ? fetch(url, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(uploadData),
//         })
//       : fetch(url);

//     const data = await fetchPro.json();

//     if (!fetchPro.ok) throw new Error(`${data.message} (${fetchPro.status})`);
//     return data;
//   } catch (err) {
//     throw err;
//   }
// };

// export async function getData() {
//   return;
//   const response = await fetch(
//     "https://shoppingify-67482-default-rtdb.firebaseio.com/allItems.json",
//     {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(DUMMY_LIST),
//     }
//   );
//   const data = await response.json();
//   return data;
// }

// export async function getAllItems() {
//   const url = API_BASE_URL + "categories-items.json";

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     //   console.log(data);
//     return { success: true, message: data };
//   } catch (error) {
//     return { success: false, message: "an error occured" };
//   }
// }

// export async function getAllCategories() {
//   const url = API_BASE_URL + "categories.json";

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     //   console.log(data);
//     return { success: true, message: data };
//   } catch (error) {
//     return { success: false, message: "an error occured" };
//   }
// }
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
