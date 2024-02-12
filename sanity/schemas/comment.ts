export default {
  name: 'comment',
  type: 'document',
  title: 'Comment',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      description: "Specific portion of text in a person's comment",
      type: 'object',
      fields: [
        {name: 'pt', type: 'text', title: 'PT'},
        {name: 'en', type: 'text', title: 'EN'},
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
      description: 'Who wrote or posted the comment (e.g first and last name or a cool nickname)',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
