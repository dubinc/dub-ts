# WebhookEvent

Webhook event schema


## Supported Types

### `components.LinkWebhookEvent`

```typescript
const value: components.LinkWebhookEvent = {
  id: "<id>",
  event: "link.updated",
  createdAt: "<value>",
  data: {
    id: "<id>",
    domain: "poor-litter.info",
    key: "<key>",
    url: "https://definitive-commodity.info",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://blond-starboard.net/",
    password: "TiD5kp_nvhVpT6P",
    title: "<value>",
    description: "superficial fluctuate candid",
    image: "https://picsum.photos/seed/RQjBqU/1934/1255",
    video: "https://picsum.videos/seed/cHMuBd/750/2791",
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
    comments: "of for physical next but vacation",
    shortLink: "https://chubby-mathematics.net",
    qrCode: "https://altruistic-publicity.net",
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
      url: "https://messy-impostor.name",
      continent: "Europe",
      country: "Turks and Caicos Islands",
      city: "Torphycester",
      device: "Desktop",
      browser: "Firefox",
      os: "Android",
      referer: "foolhardy-fork.biz",
      refererUrl: "https://rich-draft.com",
      ip: "147.47.2.237",
    },
    link: {
      id: "<id>",
      domain: "mysterious-boulevard.org",
      key: "<key>",
      url: "https://key-appliance.com",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://unfit-chops.net/",
      password: "Lz0fZ2SzdOXti6k",
      title: "<value>",
      description: "voluntarily plus mmm suspension",
      image: "https://loremflickr.com/111/2641?lock=7127230607558813",
      video: "https://picsum.videos/seed/OtwfBiza/2885/1920",
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
      comments:
        "for perfectly midwife loyalty descent and provided mash out throughout with",
      shortLink: "https://sandy-fuel.info/",
      qrCode: "https://grown-unibody.biz/",
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
      name: "<value>",
      email: "Kristy_Kozey@gmail.com",
      avatar: "https://picsum.photos/seed/JXpm2bebK/2442/2182",
    },
    click: {
      id: "<id>",
      url: "https://raw-slide.biz",
      continent: "Asia",
      country: "Pitcairn Islands",
      city: "North Howell",
      device: "Mobile",
      browser: "Firefox",
      os: "Android",
      referer: "wrong-parade.info",
      refererUrl: "https://splendid-procurement.org/",
      ip: "29.185.52.45",
    },
    link: {
      id: "<id>",
      domain: "gleaming-skean.name",
      key: "<key>",
      url: "https://left-plugin.name/",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://eminent-stay.name",
      password: "dItY8fWkoqHIx_T",
      title: "<value>",
      description: "stranger lest veg certainly punctual",
      image: "https://picsum.photos/seed/XwN3q/3763/2302",
      video: "https://picsum.videos/seed/r0XXd2wW/1028/1068",
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
      comments:
        "ew frightfully silver unless save unlawful vague override shakily rewarding woot yet amid sweatshop",
      shortLink: "https://massive-deployment.info/",
      qrCode: "https://wry-midwife.net/",
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
      name: "<value>",
      email: "Frederic.Boehm@gmail.com",
      avatar: "https://loremflickr.com/3353/3742?lock=2336231664935715",
    },
    click: {
      id: "<id>",
      url: "https://abandoned-battle.biz/",
      continent: "Australia",
      country: "Dominica",
      city: "Fort Wayne",
      device: "Mobile",
      browser: "Safari",
      os: "iOS",
      referer: "enchanted-elver.net",
      refererUrl: "https://hurtful-interviewer.name/",
      ip: "5757:27d6:8eab:b2a2:5378:e5ab:ba6a:449a",
    },
    link: {
      id: "<id>",
      domain: "monumental-synergy.net",
      key: "<key>",
      url: "https://oddball-nudge.org/",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://multicolored-creature.com/",
      password: "XjjG835ABu2iLmy",
      title: "<value>",
      description:
        "antagonize obstruct overburden mountain wrongly plan psst promptly ha",
      image: "https://picsum.photos/seed/eLDXg9jfKJ/2897/767",
      video: "https://picsum.videos/seed/wEvhhjbTRs/2679/866",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "green",
        },
      ],
      comments:
        "modulo plugin meaty frizz strait barring after plus lest generally save why nor ocelot baggy horn evince black though opposite",
      shortLink: "https://spirited-heartache.name/",
      qrCode: "https://kaleidoscopic-vibration.net",
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
    },
    sale: {
      amount: 8264.30,
      currency: "CFA Franc BCEAO",
      paymentProcessor: "<value>",
      invoiceId: "<id>",
    },
  },
};
```

