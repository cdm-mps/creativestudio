export default {
  name: 'creativeTalks',
  type: 'document',
  title: '[page] Creative Talks',
  fields: [
    {
      title: 'Creative Talks',
      name: 'creativeTalks',
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
