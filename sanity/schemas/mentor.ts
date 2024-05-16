export default {
  name: 'mentor',
  type: 'document',
  title: 'Mentor',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: "Mentor's name",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'object',
      fields: [
        {
          title: "Mentor's image",
          name: 'mentor_image',
          type: 'reference',
          to: [{type: 'imageElement'}],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'occupation',
      title: 'Occupation',
      description: "Mentor's occupation",
      type: 'object',
      fields: [
        {name: 'pt', type: 'string', title: 'PT'},
        {name: 'en', type: 'string', title: 'EN'},
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'bio',
      title: 'Bio',
      description: "Mentor's bio",
      type: 'object',
      fields: [
        {name: 'pt', type: 'text', title: 'PT'},
        {name: 'en', type: 'text', title: 'EN'},
      ],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
