import { Db } from 'mongodb'
import { nanoid } from 'nanoid'

export const createFolder = async (db: Db, folder: { createdBy: string; name: string }) => {
  return db
    .collection('docs')
    .insertOne({
      _id: nanoid(12),
      ...folder,
      createdAt: new Date(),
    })
    .then(({ ops }) => ops[0])
}
