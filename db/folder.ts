import { Db } from 'mongodb'
import { nanoid } from 'nanoid'

export const createFolder = async (db: Db, folder: { createdBy: string; name: string }) => {}

export const getFolders = async (db: Db, userId: string) => {}
