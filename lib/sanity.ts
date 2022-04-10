import { createClient } from "next-sanity"

export const sanityConfig = {
  projectId: process.env.SANITY_PROJECT_ID,
  token: process.env.SANITY_TOKEN,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2021-03-25",
  useCdn: true,
}

export default createClient(sanityConfig)
