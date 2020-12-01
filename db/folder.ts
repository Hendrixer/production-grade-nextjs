import { Db } from 'mongodb'
import { nanoid } from 'nanoid'

export const createFolder = async (db: Db, folder: { createdBy: string; name: string }) => {
  const newFolder = await db
    .collection('folders')
    .insertOne({
      _id: nanoid(),
      ...folder,
      createdAt: new Date().toDateString(),
    })
    .then(({ ops }) => ops[0])

  return newFolder
}

export const getFolders = async (db: Db, userId: string) => {
  return db.collection('folders').find({ createdBy: userId }).toArray()
}
