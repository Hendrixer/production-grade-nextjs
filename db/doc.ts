import { Db } from 'mongodb'
import { nanoid } from 'nanoid'

export const getOneDoc = async (db: Db, id: string) => {}

export const getDocsByFolder = async (db: Db, folderId: string) => {}

export const createDoc = async (db: Db, doc: { createdBy: string; folder: string; name: string; content?: any }) => {}

export const updateOne = async (db: Db, id: string, updates: any) => {}
