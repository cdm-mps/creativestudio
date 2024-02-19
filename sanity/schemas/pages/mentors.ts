export default {
  name: 'mentors',
  type: 'document',
  title: '[page] Mentors',
  fields: [
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
