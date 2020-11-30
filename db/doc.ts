import { Db } from 'mongodb'
import { nanoid } from 'nanoid'

export const getOneDoc = async (db: Db, id: string) => {
  return db.collection('docs').findOne({ _id: id })
}

export const getDocsByFolder = async (db: Db, folderId: string) => {
  return db.collection('docs').find({ folder: folderId }).toArray()
}

export const createDoc = async (db: Db, doc: { createdBy: string; folder: string; name: string; content?: any }) => {
  return db
    .collection('docs')
    .insertOne({
      _id: nanoid(12),
      ...doc,
      createdAt: new Date().toDateString(),
    })
    .then(({ ops }) => ops[0])
}

export const updateOne = async (db: Db, id: string, updates: any) => {
  const operation = await db.collection('docs').updateOne(
    {
      _id: id,
    },
    { $set: updates },
  )

  if (!operation.result.ok) {
    throw new Error('Could not update document')
  }

  const updated = await db.collection('docs').findOne({ _id: id })
  return updated
}
