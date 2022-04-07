import SanityClient from "@sanity/client"

export default SanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    token: process.env.SANITY_TOKEN,
    dataset: process.env.SANITY_DATASET,
    apiVersion: '2021-03-25',
    useCdn: true,
})