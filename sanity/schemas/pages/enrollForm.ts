export default {
  name: 'enrollForm',
  type: 'document',
  title: '[page] Enroll Form',
  fields: [
    {
      name: 'regulations',
      title: 'Regulations',
      description: 'Group of regulations',
      type: 'object',
      fields: [
        {name: 'pt', type: 'text', title: 'PT'},
        {name: 'en', type: 'text', title: 'EN'},
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'paymentDetails',
      title: 'PaymentDetails',
      description: 'Payment Details like reference, entity, etc...',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              type: 'object',
              fields: [
                {name: 'pt', type: 'string', title: 'PT'},
                {name: 'en', type: 'string', title: 'EN'},
              ],
            },
            {
              name: 'value',
              type: 'object',
              fields: [
                {name: 'pt', type: 'string', title: 'PT'},
                {name: 'en', type: 'string', title: 'EN'},
              ],
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
