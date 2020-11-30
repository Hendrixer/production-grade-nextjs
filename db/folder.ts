import { Db } from 'mongodb'
import { nanoid } from 'nanoid'

export const createFolder = async (db: Db, folder: { createdBy: string; name: string }) => {
  return db
    .collection('folders')
    .insertOne({
      _id: nanoid(12),
      ...folder,
      createdAt: new Date().toDateString(),
    })
    .then(({ ops }) => ops[0])
}

export const getFolders = async (db: Db, userId: string) => {
  return db
    .collection('folders')
    .find({
      createdBy: userId,
    })
    .toArray()
}
