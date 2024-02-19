export default {
  name: 'homepage',
  type: 'document',
  title: '[page] Home',
  fields: [
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
  ],
}
