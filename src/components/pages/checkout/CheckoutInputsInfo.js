export const checkoutInputsInfo = [
  {
    sectionName: "billing details",
    inputs: [
      {
        name: "name",
        label: "Name",
        type: "text",
      },
      {
        name: "email address",
        label: "Email Address",
        type: "email",
      },
      {
        name: "phone number",
        label: "Phone Number",
        type: "text",
      },
    ],
  },
  {
    sectionName: "shipping info",
    inputs: [
      {
        name: "adress",
        label: "Adress",
        type: "text",
      },
      {
        name: "zip code",
        label: "Zip Code",
        type: "text",
      },
      {
        name: "city",
        label: "City",
        type: "text",
      },
      {
        name: "country",
        label: "Country",
        type: "text",
      },
    ],
  },
  {
    sectionName: "payment details",
    inputs: [
      {
        name: "payment method",
        type: "radio",
        options: ["e-Money", "Cash on Delivery"],
        subInputs: [
          [
            {
              name: "e-Money Number",
              label: "e-Money Number",
              type: "text",
            },
            {
              name: "e-Money PIN",
              label: "e-Money PIN",
              type: "text",
            },
          ],
        ],
      },
    ],
  },
];
