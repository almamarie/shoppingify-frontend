import { CurrentCartUploadType } from "../../store/cart-slice";
import { PUT_AJAX } from "./http";

export async function updateCart(data: CurrentCartUploadType) {
  // I was called
  console.log("I was called");
  const response = await PUT_AJAX("/current-cart", data);
  console.log(response);
  return response;
}
