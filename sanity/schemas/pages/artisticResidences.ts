export default {
  name: 'artisticResidences',
  type: 'document',
  title: '[page] Artistic Residences',
  fields: [
    {
      title: 'Artistic Residences',
      name: 'artisticResidences',
      type: 'object',
      fields: [
        {
          title: 'Highlight',
          name: 'highlight',
          description:'Italic sentence above the description',
          type: 'object',
          fields: [
            {name: 'pt', type: 'string', title: 'PT'},
            {name: 'en', type: 'string', title: 'EN'},
          ],
        },
        {
          title: 'Description',
          name: 'description',
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
