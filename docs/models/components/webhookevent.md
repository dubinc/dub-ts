# WebhookEvent

Webhook event schema


## Supported Types

### `components.LinkWebhookEvent`

```typescript
const value: components.LinkWebhookEvent = {
  id: "<id>",
  event: "link.created",
  createdAt: "<value>",
  data: {
    id: "<id>",
    domain: "appropriate-airman.biz",
    key: "<key>",
    url: "https://severe-intent.org/",
    externalId: "<id>",
    expiresAt: "<value>",
    expiredUrl: "https://delicious-flame.name/",
    password: "rBoEWkmjTFZGe7z",
    title: "<value>",
    description:
      "dispense aha coincide oh correctly sedately pfft notwithstanding",
    image: "https://picsum.photos/seed/Xpm2bebKx/2182/3898",
    video: "https://loremflickr.com/2670/3282?lock=2935661867862455",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "purple",
      },
    ],
    webhookIds: [
      "<value>",
    ],
    comments:
      "onto closely arcade offend poorly square boring engage whether override ambitious",
    shortLink: "https://carefree-retention.info/",
    qrCode: "https://personal-goodwill.name",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "<value>",
    updatedAt: "<value>",
    projectId: "<id>",
    programId: "<id>",
  },
};
```

### `components.LinkClickedEvent`

```typescript
const value: components.LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "<value>",
  data: {
    click: {
      id: "<id>",
      url: "https://wasteful-minister.name",
      country: "Bahamas",
      city: "Maple Grove",
      region: "<value>",
      continent: "North America",
      device: "Desktop",
      browser: "Firefox",
      os: "Linux",
      referer: "fearless-scratch.name",
      refererUrl: "https://adolescent-viability.org/",
      ip: "10.135.243.233",
    },
    link: {
      id: "<id>",
      domain: "outlandish-event.biz",
      key: "<key>",
      url: "https://mad-ceramic.biz",
      externalId: "<id>",
      expiresAt: "<value>",
      expiredUrl: "https://cluttered-information.org/",
      password: "CjEbgw4qcCSTdRj",
      title: "<value>",
      description: "deficient long unselfish meh strange vaguely",
      image: "https://picsum.photos/seed/5YfIvtfI/2014/2483",
      video: "https://picsum.videos/seed/qhvShvek/452/3961",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "yellow",
        },
      ],
      webhookIds: [
        "<value>",
      ],
      comments:
        "huzzah knowledgeably inasmuch drive frankly unblinking furthermore sightseeing drat than sailor eventually phew violently quaff plus extent except instead aboard",
      shortLink: "https://firm-bracelet.info",
      qrCode: "https://agile-meadow.name",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "<value>",
      updatedAt: "<value>",
      projectId: "<id>",
      programId: "<id>",
    },
  },
};
```

### `components.LeadCreatedEvent`

```typescript
const value: components.LeadCreatedEvent = {
  id: "<id>",
  event: "lead.created",
  createdAt: "<value>",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "<value>",
    },
    click: {
      id: "<id>",
      url: "https://insignificant-marksman.net",
      country: "Tokelau",
      city: "New Maude",
      region: "<value>",
      continent: "Africa",
      device: "Mobile",
      browser: "Firefox",
      os: "Blackberry",
      referer: "limping-premium.net",
      refererUrl: "https://quixotic-step-mother.biz/",
      ip: "df53:65aa:e4cf:beb6:664d:ca8e:4c14:decd",
    },
    link: {
      id: "<id>",
      domain: "yellowish-role.info",
      key: "<key>",
      url: "https://cloudy-plugin.name",
      externalId: "<id>",
      expiresAt: "<value>",
      expiredUrl: "https://windy-flame.name/",
      password: "tQnBtrBhSMcr8PI",
      title: "<value>",
      description: "after plus lest generally save",
      image: "https://picsum.photos/seed/vsXNykQs5s/370/2742",
      video: "https://loremflickr.com/3488/1793?lock=5507770153865479",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "brown",
        },
      ],
      webhookIds: [
        "<value>",
      ],
      comments:
        "that condense playfully out viciously dally kaleidoscopic round doting when co-producer over dearly nor concentration nor truly worth",
      shortLink: "https://coarse-independence.info/",
      qrCode: "https://concerned-bookend.com",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "<value>",
      updatedAt: "<value>",
      projectId: "<id>",
      programId: "<id>",
    },
  },
};
```

### `components.SaleCreatedEvent`

```typescript
const value: components.SaleCreatedEvent = {
  id: "<id>",
  event: "sale.created",
  createdAt: "<value>",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "<value>",
    },
    click: {
      id: "<id>",
      url: "https://knotty-cinder.name",
      country: "Malawi",
      city: "New Eusebioburgh",
      region: "<value>",
      continent: "Australia",
      device: "Desktop",
      browser: "Chrome",
      os: "BeOS",
      referer: "crushing-e-mail.info",
      refererUrl: "https://dutiful-safe.biz/",
      ip: "138.32.91.225",
    },
    link: {
      id: "<id>",
      domain: "hollow-outset.name",
      key: "<key>",
      url: "https://pushy-stool.com/",
      externalId: "<id>",
      expiresAt: "<value>",
      expiredUrl: "https://rotating-substitution.com",
      password: "bfrLJ2sCvcFUnP7",
      title: "<value>",
      description: "hard-to-find before astride oof throughout postbox hence",
      image: "https://picsum.photos/seed/4zoDg/1327/1372",
      video: "https://loremflickr.com/3638/3044?lock=7060792830789141",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "brown",
        },
      ],
      webhookIds: [
        "<value>",
      ],
      comments:
        "pike highlight meaningfully airman toothpick hydrocarbon soliloquy yowza whose brr above tenderly igloo past generously ha tremendously likewise vanadyl broadly",
      shortLink: "https://unsung-jury.net",
      qrCode: "https://elderly-chow.name/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "<value>",
      updatedAt: "<value>",
      projectId: "<id>",
      programId: "<id>",
    },
    sale: {
      amount: 1975.40,
      currency: "Azerbaijanian Manat",
      paymentProcessor: "<value>",
      invoiceId: "<id>",
    },
  },
};
```

