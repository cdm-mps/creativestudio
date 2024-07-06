export default {
  name: 'event',
  type: 'document',
  title: 'Event',
  fields: [
    {
      name: 'nameToDisplay',
      type: 'string',
      title: 'Name To Display',
      description: 'Name to display on sanity',
      validation: (Rule: any) => Rule.required(),
    },
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
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'object',
      fields: [
        {
          title: 'Thumbnail of the Event',
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
          {title: 'Edições', value: 'editions'},
          {title: 'Workshops', value: 'workshops'},
          {title: 'Masterclasses', value: 'masterclasses'},
          {title: 'Creative Talks', value: 'creativeTalks'},
          {title: 'Business Workshops', value: 'businessWorkshops'},
          {title: 'Residências Artísticas', value: 'artisticResidences'},
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
          {title: 'Edições Foco', value: 'focusEditions'},
          {title: 'Edições All In One', value: 'allInOneEditions'},
          {title: 'Presenciais', value: 'onSiteWorkshops'},
          {title: 'Curta Duração', value: 'shortDurationWorkshops'},
          {title: 'Advanced Worshops', value: 'advancedWorkshops'},
        ],
      },
    },
    {
      title: 'Date of the Event',
      name: 'date',
      type: 'array',
      of: [
        {
          type: 'date',
          options: {
            dateFormat: 'YYYY-MM-DD',
            timeStep: 15,
            calendarTodayLabel: 'Today',
          },
        },
      ],

      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mentors',
      title: 'Mentors',
      type: 'array',
      of: [
        {
          title: 'Mentor of the Event',
          name: 'mentor',
          type: 'reference',
          to: [{type: 'mentor'}],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Description',
      type: 'object',
      fields: [
        {
          title: 'PT',
          name: 'pt',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                {title: 'Text', value: 'normal'},
                {title: 'Title', value: 'h1'},
                {title: 'Subtitle', value: 'h3'},
              ],
              lists: [{title: 'Bullet', value: 'bullet'}],
              marks: {
                decorators: [
                  {title: 'Emphasis', value: 'em'},
                  {title: 'Underline', value: 'underline'},
                ],
                annotations: [
                  {
                    name: 'link',
                    type: 'object',
                    title: 'Link',
                    fields: [
                      {
                        title: 'Link',
                        name: 'href',
                        type: 'url',
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
        {
          title: 'EN',
          name: 'en',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                {title: 'Text', value: 'normal'},
                {title: 'Title', value: 'h1'},
                {title: 'Subtitle', value: 'h3'},
              ],
              lists: [{title: 'Bullet', value: 'bullet'}],
              marks: {
                decorators: [
                  {title: 'Emphasis', value: 'em'},
                  {title: 'Underline', value: 'underline'},
                ],
                annotations: [
                  {
                    name: 'link',
                    type: 'object',
                    title: 'Link',
                    fields: [
                      {
                        title: 'Link',
                        name: 'href',
                        type: 'url',
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
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
    //TODO: When file submission is implemented
    // {
    //   name: 'hasSubmitVideo',
    //   type: 'boolean',
    //   title: 'Has Submit Video',
    //   initialValue: false,
    //   description:
    //     'Indicates whether participants are expected to share content through video submissions. Enable if yes, disable if no.',
    // },
    {
      name: 'isSoldOut',
      type: 'boolean',
      title: 'Is sold out',
      initialValue: false,
      description: 'Indicates if an event is sold out',
    },
  ],
}
