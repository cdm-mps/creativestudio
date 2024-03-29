import { FieldType, FormStructure } from "@/app/api/models/GetForm.models";
export const form: FormStructure = {
  personalData: [
    {
      key: "name",
      label: { pt: "Nome Completo", en: "Name" },
      type: FieldType.Input,
      required: true,
    },
    {
      key: "age",
      label: { pt: "Idade", en: "Age" },
      type: FieldType.Input,
      required: true,
    },
    {
      key: "city",
      label: { pt: "Cidade de Residência", en: "City" },
      type: FieldType.Input,
      required: true,
    },
    {
      key: "email",
      label: { pt: "Email", en: "Email" },
      type: FieldType.Input,
      required: true,
    },
    {
      key: "phone",
      label: { pt: "Contacto Telefónico", en: "Phone" },
      type: FieldType.Input,
      required: true,
    },
  ],
  form: [
    {
      key: "reasonsForEnrolment",
      label: {
        pt: "Razões pelas quais te estás a increver",
        en: "Reasons why you're signing up",
      },
      type: FieldType.TextArea,
    },
    {
      key: "expectations",
      label: {
        pt: "O que esperas desta sessão? O que gostavas que acontecesse?",
        en: "What do you expect from this session? What would you like to see happen?",
      },
      type: FieldType.TextArea,
    },
    {
      key: "experience",
      label: {
        pt: "Experiência na área, o teu background",
        en: "Experience in the field, your background",
      },
      type: FieldType.TextArea,
      required: true,
    },
    {
      key: "accessToSessions",
      label: { pt: "Acesso às sessões", en: "Access to sessions" },
      type: FieldType.Check,
      options: [
        {
          label: {
            pt: "Quero ser adicionado ao grupo de Whatsapp e assim receber os acessos para as sessões",
            en: "I want to be added to the Whatsapp group so I can receive access to the sessions",
          },
          value: "whatsapp",
        },
        {
          label: {
            pt: "Quero receber as informações de acesso às sessões apenas por e-mail",
            en: "I only want to receive access information to the sessions by e-mail",
          },
          value: "email",
        },
      ],
      required: true,
    },
  ],
  paymentDetails: [
    {
      key: "paymentMethod",
      label: { pt: "Forma de Pagamento", en: "Payment method" },
      description: {
        pt: "Ao selecionar pagamento Faseado o Inscrito compromete-se a pagar o valor total da formação a que se propôs. Não são feitas devoluções ou reembolsos.",
        en: "By selecting a phased payment, the enrollee undertakes to pay the full amount of the training programme. No returns or refunds are made.",
      },
      type: FieldType.Radio,
      options: [
        {
          label: {
            pt: "A pronto (Pagamento único)",
            en: "Prompt Payment",
          },
          value: "promptPayment",
        },
        {
          label: {
            pt: "Faseado (Prestações)",
            en: "Phased (instalments)",
          },
          value: "instalments",
        },
      ],
      required: true,
    },
  ],
};
