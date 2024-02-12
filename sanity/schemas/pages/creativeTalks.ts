export default {
  name: 'creativeTalks',
  type: 'document',
  title: '[page] Creative Talks',
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
      title: 'Description',
      name: 'description',
      type: 'object',
      fields: [
        {name: 'pt', type: 'text', title: 'PT'},
        {name: 'en', type: 'text', title: 'EN'},
      ],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
