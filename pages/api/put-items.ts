import type { NextApiRequest, NextApiResponse } from "next";
import { AJAX } from "../../public/utils/http";
import { API_BASE_URL } from "../../public/utils/types";
import { DUMMY_ITEMS } from "../../store/items";

type Data = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ success: true, message: "working" });

  const url = API_BASE_URL + "items.json";
  try {
    const data = await AJAX(url, DUMMY_ITEMS);
    res.status(200).json({ success: true, message: data });
  } catch (error) {
    console.log("AN ERROR OCCURED: ", error);
    res.status(400).json({ success: false, message: "an error occured" });
  }
}
