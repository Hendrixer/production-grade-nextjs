import { Db } from 'mongodb'
import { nanoid } from 'nanoid'

export const getOneDoc = async (db: Db, id: string) => {
  return db.collection('docs').findOne({ _id: id })
}

export const getDocsByFolder = async (db: Db, folderId: string) => {
  return db.collection('docs').find({ _folder: folderId }).toArray()
}

export const createDoc = async (db: Db, doc: { createdBy: string; folder: string; name: string; content?: string }) => {
  return db.collection('docs').insertOne({
    _id: nanoid(12),
    ...doc,
    createdAt: new Date(),
  })
}
