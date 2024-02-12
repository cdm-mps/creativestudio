export default {
  name: 'event',
  type: 'document',
  title: 'Event',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the Event',
      type: 'object',
      fields: [
        {name: 'pt', type: 'string', title: 'PT'},
        {name: 'en', type: 'string', title: 'EN'},
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'object',
      fields: [
        {
          title: 'Image of the Event',
          name: 'image',
          type: 'reference',
          to: [{type: 'imageElement'}],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      description: 'Category of the Event',
      options: {
        list: [
          {title: 'Edições', value: 'edition'},
          {title: 'Workshops', value: 'workshop'},
          {title: 'Masterclasses', value: 'masterclass'},
          {title: 'Creative Talks', value: 'creative-talks'},
          {title: 'Business Workshops', value: 'business-workshop'},
          {title: 'Residências Artísticas', value: 'artistic-residence'},
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subcategory',
      type: 'string',
      title: 'Subcategory',
      description: 'Subcategory of the Event',
      options: {
        list: [
          {title: 'Edições Foco', value: 'focus-edition'},
          {title: 'Edições All In One', value: 'all-in-one-edition'},
          {title: 'Presenciais', value: 'face-to-face-workshop'},
          {title: 'Curta Duração', value: 'short-duration-workshop'},
          {title: 'Advanced Worshops', value: 'advanced-workshop'},
        ],
      },
    },
    {
      title: 'Date of the Event',
      name: 'date',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mentor',
      title: 'Mentor',
      type: 'object',
      fields: [
        {
          title: 'The Mentor associated with the Event',
          name:"mentor",
          type: 'reference',
          to: [{type: 'mentor'}],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'How long the Event is expected to last (e.g. 90min or 1h30min)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'programation',
      title: 'Programation',
      type: 'array',
      description: 'How long the Event is expected to last (e.g. 90min or 1h30min)',
      of: [
        {
          title: 'Elemento Programação',
          type: 'object',
          fields: [
            {
              name: 'description',
              type: 'object',
              fields: [
                {name: 'pt', type: 'string', title: 'PT'},
                {name: 'en', type: 'string', title: 'EN'},
              ],
              title: 'Descrição',
            },
            {
              name: 'duration',
              type: 'string',
              title: 'Duração',
              description: '(e.g. 90min or 1h30min)',
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {name: 'pt', type: 'text', title: 'PT'},
        {name: 'en', type: 'text', title: 'EN'},
      ],
      description:
        "A brief summary, providing key details about the Event's purpose, agenda, and highlights.",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'areasOfInterest',
      type: 'array',
      title: 'Areas of Interest',
      description: 'Specifies the main topics or themes covered by an Event',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Rádio', value: 'radio'},
          {title: 'Fotografia', value: 'photography'},
          {title: 'Comédia', value: 'comedy'},
          {title: 'Música', value: 'music'},
          {title: 'Produção Musical', value: 'music-production'},
          {title: 'Acting', value: 'acting'},
          {title: 'Televisão', value: 'television'},
          {title: 'Cinema / Realização', value: 'cinema-directing'},
          {title: 'Locução', value: 'voiceover'},
          {title: 'Edição de Vídeo', value: 'video-editing'},
          {title: 'Poesia', value: 'poetry'},
          {title: 'Guionismo', value: 'scriptwriting'},
          {title: 'Produção Audiovisual', value: 'audiovisual-production'},
          {title: 'Animação', value: 'animation'},
        ],
      },
    },
    {
      name: 'level',
      type: 'string',
      title: 'Level',
      description:
        'The proficiency expected, helping participants choose events suitable for their skill level',
      options: {
        list: [
          {title: 'Iniciante', value: 'beginner'},
          {title: 'Intermédio', value: 'intermediate'},
          {title: 'Avançado', value: 'advanced'},
        ],
      },
    },
    {
      name: 'hasSubmitVideo',
      type: 'boolean',
      title: 'Has Submit Video',
      initialValue: false,
      description:
        'Indicates whether participants are expected to share content through video submissions. Enable if yes, disable if no.',
    },
    {
      name: 'isNew',
      type: 'boolean',
      title: 'Is it new?',
      initialValue: false,
      description:
        'Indicates whether the Event is an upcoming Event. Enable if yes, disable if no.',
    },
    {
      name: 'tooltip_levels',
      title: 'Reference to tooltip describing the event levels',
      description: 'Reference to tooltip describing the Creative Workshops levels',
      type: 'reference',
      to: [{type: 'levels'}],
    },
  ],
}