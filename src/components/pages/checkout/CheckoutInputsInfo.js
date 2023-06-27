export const checkoutInputsInfo = [
  {
    sectionName: "billing details",
    inputs: [
      {
        inputName: "name",
        type: "text",
      },
      {
        inputName: "email address",
        type: "email",
      },
      {
        inputName: "phone number",
        type: "text",
      },
    ],
  },
  {
    sectionName: "shipping info",
    inputs: [
      {
        inputName: "adress",
        type: "text",
      },
      {
        inputName: "zip code",
        type: "text",
      },
      {
        inputName: "city",
        type: "text",
      },
      {
        inputName: "country",
        type: "text",
      },
    ],
  },
  {
    sectionName: "payment details",
    inputs: [
      {
        inputName: "payment method",
        type: "radio",
        options: ["e-Money", "Cash on Delivery"],
        subInputs: [
          [
            {
              inputName: "e-Money Number",
              type: "text",
            },
            {
              inputName: "e-Money PIN",
              type: "text",
            },
          ],
        ],
      },
    ],
  },
];
