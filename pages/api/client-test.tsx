import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await client.user.create({
        data: {
            email: "moregorenine@gmail.com",
            name: "moregorenine"
        },
    });
    res.json({
        ok: true,
    });
}