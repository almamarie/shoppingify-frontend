import type { NextApiRequest, NextApiResponse } from "next";
import { API_BASE_URL } from "../../public/utils/types";

type Data = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = API_BASE_URL + "all-items.json";
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json({ success: true, message: data });
  } catch (error) {
    console.log("AN ERROR OCCURED: ", error);
    res.status(400).json({ success: false, message: "an error occured" });
  }
}
