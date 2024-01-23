export default {
  name: 'comment',
  type: 'document',
  title: 'Comment',
  fields: [
    {
      name: 'quote',
      type: 'text',
      title: 'Quote',
      description: "Specific portion of text in a person's comment",
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
