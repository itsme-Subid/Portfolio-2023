import { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";

const getIp = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  res.status(200).json({ ip: requestIp.getClientIp(req) });
};

export default getIp;
