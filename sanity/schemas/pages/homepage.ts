export default {
  name: 'homepage',
  type: 'document',
  title: '[page] Home',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Banner text',
      type: 'object',
      fields: [
        {name: 'pt', type: 'string', title: 'PT'},
        {name: 'en', type: 'string', title: 'EN'},
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'News',
      name: 'news',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'event'}],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Comments',
      name: 'comments',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'comment'}],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'end_title',
      title: 'End Title',
      description: 'Sentence at the bottom of the homepage',
      type: 'object',
      fields: [
        {name: 'pt', type: 'string', title: 'PT'},
        {name: 'en', type: 'string', title: 'EN'},
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Sponsors',
      name: 'sponsors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'sponsor'}],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
