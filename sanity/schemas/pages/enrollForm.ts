export default {
  name: 'enrollForm',
  type: 'document',
  title: '[page] Enroll Form',
  fields: [
    {
      name: 'regultation',
      title: 'Regulation',
      description: 'Group of regulations',
      type: 'array',
      of: [
        {
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
      title: 'Payment Proprieties',
      name: 'paymentProps',
      type: 'object',
      fields: [
        {name: 'entity', type: 'string', title: 'Entity'},
        {name: 'reference', type: 'number', title: 'Reference'},
      ],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
