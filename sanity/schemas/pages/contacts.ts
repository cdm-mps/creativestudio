export default {
  name: 'contacts',
  type: 'document',
  title: '[page] Contacts',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
