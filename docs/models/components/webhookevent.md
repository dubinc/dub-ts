# WebhookEvent

Webhook event schema


## Supported Types

### `components.LinkWebhookEvent`

```typescript
const value: components.LinkWebhookEvent = {
  id: "<id>",
  event: "link.updated",
  createdAt: "1729257340516",
  data: {
    id: "<id>",
    domain: "early-interior.com",
    key: "<key>",
    url: "https://fond-hydrocarbon.org/",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1747282726576",
    expiredUrl: "https://plump-underpants.com/",
    password: "xNL4BLsRsZB3HRZ",
    title: "<value>",
    description: "clonk scaly wherever pointless",
    image: "https://loremflickr.com/3551/2805?lock=4511059299735888",
    video: "https://loremflickr.com/1146/1141?lock=2834860789405252",
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
    folderId: "<id>",
    webhookIds: [
      "<value>",
    ],
    comments:
      "transcend before rarely apud given fairly consequently celsius warmly fort likewise live even dredger hourly",
    shortLink: "https://those-foodstuffs.biz",
    qrCode: "https://sunny-glider.name/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1741047671483",
    updatedAt: "1741480006568",
    projectId: "<id>",
  },
};
```

### `components.LinkClickedEvent`

```typescript
const value: components.LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "1714617184293",
  data: {
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://strange-runway.name",
      country: "Virgin Islands, U.S.",
      city: "New Anibal",
      region: "<value>",
      continent: "Asia",
      device: "Mobile",
      browser: "Chrome",
      os: "Symbian",
      referer: "ripe-eggplant.net",
      refererUrl: "https://wise-asset.org/",
      ip: "194.0.65.191",
    },
    link: {
      id: "<id>",
      domain: "mundane-cappelletti.info",
      key: "<key>",
      url: "https://oddball-pigpen.org/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1757246958660",
      expiredUrl: "https://corrupt-shadowbox.net/",
      password: "GR0YObnOqWgcdCF",
      title: "<value>",
      description: "leap respectful geez fathom",
      image: "https://loremflickr.com/2833/1571?lock=3917728324664600",
      video: "https://loremflickr.com/3633/1636?lock=8912849589649967",
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
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments:
        "shakily nor per beside sweet majority wonderfully bah with amid",
      shortLink: "https://slushy-flat.name/",
      qrCode: "https://idolized-longboat.name",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1739704077524",
      updatedAt: "1741529603069",
      projectId: "<id>",
    },
  },
};
```

### `components.LeadCreatedEvent`

```typescript
const value: components.LeadCreatedEvent = {
  id: "<id>",
  event: "lead.created",
  createdAt: "1729404962102",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1712170169866",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://motionless-sermon.com",
      country: "Indonesia",
      city: "West Pauline",
      region: "<value>",
      continent: "Europe",
      device: "Desktop",
      browser: "Chrome",
      os: "Symbian",
      referer: "white-daddy.com",
      refererUrl: "https://well-documented-thread.name",
      ip: "84.229.125.33",
    },
    link: {
      id: "<id>",
      domain: "expert-dulcimer.com",
      key: "<key>",
      url: "https://upright-pigsty.com/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1741739554451",
      expiredUrl: "https://heavenly-sanity.org/",
      password: "Ebgw4qcCSTdRjG9",
      title: "<value>",
      description: "meanwhile free abaft throughout overfeed",
      image: "https://picsum.photos/seed/CPz5YfIv/3589/1676",
      video: "https://picsum.videos/seed/ZQxqh/1915/976",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "blue",
        },
      ],
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments:
        "so optimal abnormally er yahoo indeed respray coagulate submissive ridge veg save hourly as whenever antagonize obstruct overburden mountain",
      shortLink: "https://well-groomed-swanling.name/",
      qrCode: "https://humble-wasabi.net/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1715107181937",
      updatedAt: "1741519664002",
      projectId: "<id>",
    },
  },
};
```

### `components.SaleCreatedEvent`

```typescript
const value: components.SaleCreatedEvent = {
  id: "<id>",
  event: "sale.created",
  createdAt: "1740517309430",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1726892825361",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://polite-dredger.com/",
      country: "Hong Kong",
      city: "Agustinastad",
      region: "<value>",
      continent: "Australia",
      device: "Mobile",
      browser: "Firefox",
      os: "Windows Phone",
      referer: "sick-technologist.info",
      refererUrl: "https://rowdy-approach.net",
      ip: "171.120.179.185",
    },
    link: {
      id: "<id>",
      domain: "difficult-petticoat.org",
      key: "<key>",
      url: "https://smart-overcoat.org/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1749773405718",
      expiredUrl: "https://gentle-dish.net/",
      password: "f5rSP3vrLCz6U3Z",
      title: "<value>",
      description: "cloudy stunt toward ha heroine suffice the keenly",
      image: "https://picsum.photos/seed/T3rh9/1644/413",
      video: "https://loremflickr.com/3135/2860?lock=5699446210998463",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "pink",
        },
      ],
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments:
        "why nor ocelot baggy horn evince black though opposite wisely red middle accurate repeatedly supposing ferociously where",
      shortLink: "https://smart-collectivization.name/",
      qrCode: "https://definite-injunction.name",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1715857319745",
      updatedAt: "1741545252730",
      projectId: "<id>",
    },
    sale: {
      amount: 789.96,
      currency: "East Caribbean Dollar",
      paymentProcessor: "<value>",
      invoiceId: "<id>",
    },
  },
};
```

### `components.PartnerCreatedEvent`

```typescript
const value: components.PartnerCreatedEvent = {
  id: "<id>",
  event: "partner.created",
  createdAt: "1724796101514",
  data: {
    id: "<id>",
    name: "<value>",
    email: "Beverly30@yahoo.com",
    image: "https://loremflickr.com/2585/826?lock=8146876853921132",
    country: "Ethiopia",
    payoutsEnabled: false,
    createdAt: "1715690986089",
    status: "rejected",
    programId: "<id>",
    tenantId: "<id>",
    links: [
      {
        id: "<id>",
        domain: "fuzzy-cassava.info",
        key: "<key>",
        shortLink: "https://variable-chainstay.com/",
        url: "https://unsung-hyphenation.com/",
      },
    ],
  },
};
```

