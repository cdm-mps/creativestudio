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
    },
    {
      name: 'occupation',
      type: 'string',
      title: 'Occupation',
      description: "Mentor's occupation",
      options: {
        list: [
          {title: 'Ator', value: 'actor'},
          {title: 'Atriz', value: 'actress'},
          {title: 'Locutor', value: 'male-radio-host'},
          {title: 'Locutora', value: 'female-radio-host'},
          {title: 'Comentador de TV', value: 'tv-commentator'},
          {title: 'Cantor', value: 'male-singer'},
          {title: 'Cantora', value: 'female-singer'},
          {title: 'Realizador', value: 'male-director'},
          {title: 'Realizadora', value: 'female-director'},
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      description: "Mentor's bio",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'event',
      title: 'Event',
      type: 'object',
      fields: [
        {
          title: "Mentor's event",
          name: 'mentor_event',
          type: 'reference',
          to: [{type: 'event'}],
        },
      ],
    },
  ],
}
