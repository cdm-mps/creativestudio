import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'

const singletonActions = new Set(['publish', 'discardChanges', 'restore', 'delete'])

const singletonTypes = new Set([
  'homepage',
  'aboutUs',
  'artisticResidences',
  'contacts',
  'creativeTalks',
  'creativeWorkshops',
  'businessWorkshops',
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
              .child(S.document().schemaType('homepage').documentId('homepage').title('Homepage')),
            S.listItem()
              .title('[page] About Us')
              .id('aboutUs')
              .child(S.document().schemaType('aboutUs').documentId('aboutUs').title('About Us')),
            S.listItem()
              .title('[page] Artistic Residences')
              .id('artisticResidences')
              .child(
                S.document()
                  .schemaType('artisticResidences')
                  .documentId('artisticResidences')
                  .title('Artistic Residences'),
              ),
            S.listItem()
              .title('[page] Contacts')
              .id('contacts')
              .child(S.document().schemaType('contacts').documentId('contacts').title('Contacts')),
            S.listItem()
              .title('[page] Creative talks')
              .id('creativeTalks')
              .child(
                S.document()
                  .schemaType('creativeTalks')
                  .documentId('creativeTalks')
                  .title('Creative talks'),
              ),
            S.listItem()
              .title('[page] Creative Workshops')
              .id('creativeWorkshops')
              .child(
                S.document()
                  .schemaType('creativeWorkshops')
                  .documentId('creativeWorkshops')
                  .title('Creative Workshops'),
              ),
            S.listItem()
              .title('[page] Business Workshops')
              .id('businessWorkshops')
              .child(
                S.document()
                  .schemaType('businessWorkshops')
                  .documentId('businessWorkshops')
                  .title('Business Workshops'),
              ),
            S.listItem()
              .title('[page] Editions')
              .id('editions')
              .child(S.document().schemaType('editions').documentId('editions').title('Editions')),
            S.listItem()
              .title('[page] Enroll Form')
              .id('enrollForm')
              .child(
                S.document().schemaType('enrollForm').documentId('enrollForm').title('Enroll Form'),
              ),
            S.listItem()
              .title('[page] Masterclasses')
              .id('masterclasses')
              .child(
                S.document()
                  .schemaType('masterclasses')
                  .documentId('masterclasses')
                  .title('Masterclasses'),
              ),
            S.listItem()
              .title('[page] Mentors')
              .id('mentors')
              .child(S.document().schemaType('mentors').documentId('mentors').title('Mentors')),
            S.listItem()
              .title('[page] Workshops')
              .id('workshops')
              .child(
                S.document().schemaType('workshops').documentId('workshops').title('Workshops'),
              ),
            S.listItem()
              .title('Event levels')
              .id('levels')
              .child(S.document().schemaType('levels').documentId('levels').title('Event levels')),

            S.documentTypeListItem('comment').title('Comment'),
            S.documentTypeListItem('event').title('Event'),
            S.documentTypeListItem('imageElement').title('Image Element'),
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
