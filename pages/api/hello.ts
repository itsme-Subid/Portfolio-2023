import { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";

export default async function myRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ ip: requestIp.getClientIp(req) });
}
