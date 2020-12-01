import { Db, MongoClient } from 'mongodb'

/**
 * We have to cache the DB connection
 * when used in a serverless environment otherwise
 * we may encounter performance loss due to
 * time to connect. Also, depending on your DB,
 * you might night be able to have many concurrent
 * DB connections. Most traditional DBs were not made for a stateless
 * environment like serverless. A serverless DB (HTTP based DB) whould work
 * better.
 */
global.mongo = global.mongo || {}

export const connectToDB = async () => {
  const db = {}

  return { db, dbClient: global.mongo.client }
}

// export const getDBUrl = (newParams: { [key: string]: any } = {}) => {
//   const dbUrl = process.env.DATABASE_URL
//   const [urlWithNoParams, paramsFromString = ''] = dbUrl.split('?')
//   const additionalParams =
//     Object.keys(newParams)
//       .map((p: string) => `${p}=${newParams[p]}`)
//       .join('&') || ''

//   return `${urlWithNoParams}?${paramsFromString}&${additionalParams}`
// }
