import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

const singletonTypes = new Set([
  'homepage',
  'aboutUs',
  'artisticResidence',
  'contacts',
  'creativeTalks',
  'creativeWorkshops',
  'editions',
  'enrollForm',
  'masterclasses',
  'mentors',
  'workshops',
])

export default defineConfig({
  name: 'default',
  title: 'Creative Studio',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('[page] Homepage')
              .id('homepage')
              .child(S.document().schemaType('homepage').documentId('homepage')),
            S.listItem()
              .title('[page] About Us')
              .id('aboutUs')
              .child(S.document().schemaType('aboutUs').documentId('aboutUs')),
            S.listItem()
              .title('[page] Artistic Residence')
              .id('artisticResidence')
              .child(S.document().schemaType('artisticResidence').documentId('artisticResidence')),
            S.listItem()
              .title('[page] Contacts')
              .id('contacts')
              .child(S.document().schemaType('contacts').documentId('contacts')),
            S.listItem()
              .title('[page] Creative talks')
              .id('creativeTalks')
              .child(S.document().schemaType('creativeTalks').documentId('creativeTalks')),
            S.listItem()
              .title('[page] Creative Workshops')
              .id('creativeWorkshops')
              .child(S.document().schemaType('creativeWorkshops').documentId('creativeWorkshops')),
            S.listItem()
              .title('[page] Editions')
              .id('editions')
              .child(S.document().schemaType('editions').documentId('editions')),
            S.listItem()
              .title('[page] Enroll Form')
              .id('enrollForm')
              .child(S.document().schemaType('enrollForm').documentId('enrollForm')),
            S.listItem()
              .title('[page] Masterclasses')
              .id('masterclasses')
              .child(S.document().schemaType('masterclasses').documentId('masterclasses')),
            S.listItem()
              .title('[page] Mentors')
              .id('mentors')
              .child(S.document().schemaType('mentors').documentId('mentors')),
            S.listItem()
              .title('[page] Workshops')
              .id('workshops')
              .child(S.document().schemaType('workshops').documentId('workshops')),

            S.documentTypeListItem('comment').title('Comment'),
            S.documentTypeListItem('event').title('Event'),
            S.documentTypeListItem('imageElement').title('Image Element'),
            S.documentTypeListItem('levels').title('Event levels'),
            S.documentTypeListItem('mentor').title('Mentor'),
            S.documentTypeListItem('sponsor').title('Sponsor'),
            S.documentTypeListItem('teamElement').title('Team Element'),
          ]),
    }),
    visionTool(),
    media(),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
