export default {
  name: 'businessWorkshops',
  type: 'document',
  title: '[page] Business Workshops',
  fields: [
    {
      name: 'isWIP',
      type: 'boolean',
      title: 'Is in work in progress',
      description:
        'Indicates whether the Page is on work in progress.',
    },
    {
      name: 'highlight',
      title: 'Highlight',
      description: 'Italic sentence above the description',
      type: 'object',
      fields: [
        {name: 'pt', type: 'string', title: 'PT'},
        {name: 'en', type: 'string', title: 'EN'},
      ],
      validation: (Rule: any) => Rule.required(),
    },
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
    {
      name: 'workshops',
      title: 'Workshops',
      description: 'List category workshops',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              description: 'The description',
              type: 'object',
              fields: [
                {name: 'pt', type: 'string', title: 'PT'},
                {name: 'en', type: 'string', title: 'EN'},
              ],
            },
            {
              name: 'description',
              title: 'Description',
              description: 'The description',
              type: 'object',
              fields: [
                {name: 'pt', type: 'text', title: 'PT'},
                {name: 'en', type: 'text', title: 'EN'},
              ],
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              description: 'Image to be displayed',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'subcategories',
              title: 'Subcategories',
              description: 'List of Subcategories',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {name: 'pt', type: 'string', title: 'PT'},
                    {name: 'en', type: 'string', title: 'EN'},
                  ],
                },
              ],
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
