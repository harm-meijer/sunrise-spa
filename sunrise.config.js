// eslint-disable-next-line no-console
console.log("using host:", process.env.VUE_APP_CT_API_HOST);
let localConfig = {};
if(process.env.VUE_APP_LOCAL_SUNRISE_CONFIG){
  localConfig = require(process.env.VUE_APP_LOCAL_SUNRISE_CONFIG).default;
}

export default {
  ct: {
    auth: {
      host:
        process.env.VUE_APP_CT_AUTH_HOST ||
        "https://auth.europe-west1.gcp.commercetools.com",
      projectKey:
        process.env.VUE_APP_CT_PROJECT_KEY || "sunrise-spa",
      credentials: {
        clientId:
          process.env.VUE_APP_CT_CLIENT_ID ||
          "jFVHj0-tO-THQt9evnGTJ2fD",
        clientSecret:
          process.env.VUE_APP_CT_CLIENT_SECRET ||
          "eUQgmtanysDpYxlOePOhcFklrwa5X8Sj",
      },
      scopes: [
        process.env.VUE_APP_CT_SCOPE ||
          "manage_my_profile:sunrise-spa create_anonymous_token:sunrise-spa" +
            " manage_my_payments:sunrise-spa view_products:sunrise-spa manage_my_orders:sunrise-spa" +
            " manage_my_shopping_lists:sunrise-spa",
      ],
    },
    api:
      process.env.VUE_APP_CT_API_HOST ||
      "https://api.europe-west1.gcp.commercetools.com",
  },
  languages: {
    "en-GB": "English",
    "de-DE": "Deutsch",
  },
  countries: {
    GB: "Great Britten",
    DE: "Deutschland",
    US: "United States",
  },
  formats: {
    number: {
      GB: {
        currency: {
          style: "currency",
          currency: "GBP",
        },
      },
      DE: {
        currency: {
          style: "currency",
          currency: "EUR",
          currencyDisplay: "symbol",
        },
      },
      US: {
        currency: {
          style: "currency",
          currency: "USD",
        },
      },
    },
    datetime: {
      GB: {
        short: {
          year: "numeric",
          month: "short",
          day: "numeric",
        },
      },
      US: {
        short: {
          year: "numeric",
          month: "short",
          day: "numeric",
        },
      },
      DE: {
        short: {
          year: "numeric",
          month: "short",
          day: "numeric",
        },
      },
    },
  },
  categories: {
    // salesExternalId: "6",
  },
  facetSearches: [
    {
      name: "Color",
      type: "text",
      label: {
        'de-DE': "Farbe",
        'en-GB': "Color",
      },
    },
    {
      name: "Size",
      type: "text",
      label: {
        'de-DE': "Größe",
        'en-GB': "Size",
      },
    }
  ],
  detailAttributes: [],
  variantSelector: [],
  variantInProductName: [],
  ...localConfig,
};
