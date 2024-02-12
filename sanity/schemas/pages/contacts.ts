export default {
  name: 'contacts',
  type: 'document',
  title: '[page] Contacts',
  fields: [
    {
      name: 'contacts',
      title: 'contacts',
      description:
        'List of contacts (e.g. email "hello@creativestudionofilters.io" and phone number "+351 910 000 000")',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
