export default {
  name: 'teamElement',
  type: 'document',
  title: 'Team Element',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Name of the Team Element',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'role',
      type: 'object',
      title: 'Role',
      description: 'Role of the Team Element',
      fields: [
        {name: 'pt', type: 'string', title: 'PT'},
        {name: 'en', type: 'string', title: 'EN'},
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      type: 'object',
      fields: [
        {
          title: 'Team Element Image',
          name: 'teamElement_image',
          description: 'Image of the Team Element',
          type: 'reference',
          to: [{type: 'imageElement'}],
        },
      ],
    },
  ],
}
