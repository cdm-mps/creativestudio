export default {
  name: 'sponsor',
  type: 'document',
  title: 'Sponsor',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Name of the Sponsor',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'Image of the Sponsor',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
