export default {
  name: 'levels',
  type: 'document',
  title: 'Event levels',
  fields: [
    {
      name: 'title',
      title: 'Tooltip Title',
      type: 'object',
      fields: [
        {name: 'pt', type: 'string', title: 'PT'},
        {name: 'en', type: 'string', title: 'EN'},
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'beginner',
      title: 'Beginner',
      type: 'object',
      fields: [
        {
          name: 'level_title',
          title: 'Level name',
          type: 'object',
          fields: [
            {name: 'pt', type: 'string', title: 'PT'},
            {name: 'en', type: 'string', title: 'EN'},
          ],
        },
        {
          name: 'level_description',
          title: 'Level description',
          type: 'object',
          fields: [
            {name: 'pt', type: 'text', title: 'PT'},
            {name: 'en', type: 'text', title: 'EN'},
          ],
        },
      ],
    },
    {
      name: 'intermediate',
      title: 'Intermediate',
      type: 'object',
      fields: [
        {
          name: 'level_title',
          title: 'Level name',
          type: 'object',
          fields: [
            {name: 'pt', type: 'string', title: 'PT'},
            {name: 'en', type: 'string', title: 'EN'},
          ],
        },
        {
          name: 'level_description',
          title: 'Level description',
          type: 'object',
          fields: [
            {name: 'pt', type: 'text', title: 'PT'},
            {name: 'en', type: 'text', title: 'EN'},
          ],
        },
      ],
    },
  ],
}
