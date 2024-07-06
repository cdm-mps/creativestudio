import createClient from '@sanity/client'

export default createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!, // find this at manage.sanity.io or in your sanity.json
  dataset: process.env.SANITY_STUDIO_DATASET!, // this is from those question during 'sanity init'
  useCdn: false,
})
