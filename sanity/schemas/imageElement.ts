export default {
  name: 'imageElement',
  type: 'document',
  title: 'Image Element',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the Image',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'Image to be displayed',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'objectPosition',
      type: 'string',
      title: 'Object Position',
      description:
        'Pick the better position for the image (for reference purposes, use the position of the face in the image)',
      options: {
        list: [
          {title: 'Bottom', value: 'bottom'},
          {title: 'Center', value: 'center'},
          {title: 'Center Top', value: 'center top'},
          {title: 'Left', value: 'left'},
          {title: 'Left Bottom', value: 'left bottom'},
          {title: 'Left Top', value: 'left top'},
          {title: 'Right', value: 'right'},
          {title: 'Right Bottom', value: 'right bottom'},
          {title: 'Right Top', value: 'right top'},
          {title: 'Top', value: 'top'},
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
