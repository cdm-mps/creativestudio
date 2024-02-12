export default {
  name: 'editions',
  type: 'document',
  title: '[page] Editions',
  fields: [
    {
      name: 'subtitle',
      title: 'Subtitle',
      description: 'Text below page name',
      type: 'object',
      fields: [
        {name: 'pt', type: 'string', title: 'PT'},
        {name: 'en', type: 'string', title: 'EN'},
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Edições Foco',
      name: 'foco',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'foco_title',
          type: 'object',
          fields: [
            {name: 'pt', type: 'string', title: 'PT'},
            {name: 'en', type: 'string', title: 'EN'},
          ],
        },
        {
          title: 'Description',
          name: 'foco_description',
          type: 'object',
          fields: [
            {name: 'pt', type: 'text', title: 'PT'},
            {name: 'en', type: 'text', title: 'EN'},
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Edições All In One',
      name: 'allInOne',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'allInOne_title',
          type: 'object',
          fields: [
            {name: 'pt', type: 'string', title: 'PT'},
            {name: 'en', type: 'string', title: 'EN'},
          ],
        },
        {
          title: 'Description',
          name: 'allInOneo_description',
          type: 'object',
          fields: [
            {name: 'pt', type: 'text', title: 'PT'},
            {name: 'en', type: 'text', title: 'EN'},
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
