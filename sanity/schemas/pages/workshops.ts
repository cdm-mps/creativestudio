export default {
  name: 'workshops',
  type: 'document',
  title: '[page] Workshops',
  fields: [
    {
      title: 'On-Site Workshops',
      name: 'onSiteWorkshops',
      type: 'object',
      fields: [
        {
          title: 'Label',
          description:'Tab label',
          name: 'label',
          type: 'object',
          fields: [
            {name: 'pt', type: 'string', title: 'PT'},
            {name: 'en', type: 'string', title: 'EN'},
          ],
        },
        {
          title: 'Highlight',
          description:'Italic sentence above the description',
          name: 'heighlight',
          type: 'object',
          fields: [
            {name: 'pt', type: 'string', title: 'PT'},
            {name: 'en', type: 'string', title: 'EN'},
          ],
        },
        {
          title: 'Description',
          name: 'description',
          type: 'object',
          fields: [
            {name: 'pt', type: 'text', title: 'PT'},
            {name: 'en', type: 'text', title: 'EN'},
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Short Duration Workshops',
      name: 'shortDurationWorkshops',
      type: 'object',
      fields: [
        {
          title: 'Label',
          description:'Tab label',
          name: 'label',
          type: 'object',
          fields: [
            {name: 'pt', type: 'string', title: 'PT'},
            {name: 'en', type: 'string', title: 'EN'},
          ],
        },
        {
          title: 'Highlight',
          name: 'highlight',
          description:'Italic sentence above the description',
          type: 'object',
          fields: [
            {name: 'pt', type: 'string', title: 'PT'},
            {name: 'en', type: 'string', title: 'EN'},
          ],
        },
        {
          title: 'Description',
          name: 'description',
          type: 'object',
          fields: [
            {name: 'pt', type: 'text', title: 'PT'},
            {name: 'en', type: 'text', title: 'EN'},
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Advanced Workshops',
      name: 'advancedWorkshops',
      type: 'object',
      fields: [
        {
          title: 'Label',
          name: 'label',
          description:'Tab label',
          type: 'object',
          fields: [
            {name: 'pt', type: 'string', title: 'PT'},
            {name: 'en', type: 'string', title: 'EN'},
          ],
        },
        {
          title: 'Highlight',
          name: 'highlight',
          description:'Italic sentence above the description',
          type: 'object',
          fields: [
            {name: 'pt', type: 'string', title: 'PT'},
            {name: 'en', type: 'string', title: 'EN'},
          ],
        },
        {
          title: 'Description',
          name: 'description',
          type: 'object',
          fields: [
            {name: 'pt', type: 'text', title: 'PT'},
            {name: 'en', type: 'text', title: 'EN'},
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
