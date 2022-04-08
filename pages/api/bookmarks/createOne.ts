import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../db/db'
import createBookmark from '../../../utils/createBookmark'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {title,image,url,owner} = req.body 

  const {success, bookmark} = await createBookmark(title, image, url, owner)

  res.json({success, bookmark})
}