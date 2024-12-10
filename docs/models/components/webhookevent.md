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
    domain: "sentimental-precedent.biz",
    key: "<key>",
    url: "https://selfish-epic.net",
    externalId: "<id>",
    expiresAt: "<value>",
    expiredUrl: "https://grounded-ghost.info",
    password: "v1t_HleNPnNR8ZW",
    title: "<value>",
    description: "oh conservation throughout shoulder",
    image: "https://picsum.photos/seed/B3pIeWG/3077/2148",
    video: "https://loremflickr.com/1151/3076?lock=8779987451976765",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "red",
      },
    ],
    webhookIds: [
      "<value>",
    ],
    comments:
      "amid jubilantly dark machine entice ah excepting inexperienced mothball oh helpful shakily nor per beside sweet majority wonderfully bah",
    shortLink: "https://classic-mainstream.name",
    qrCode: "https://outlying-vicinity.org",
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
      url: "https://measly-insolence.org",
      country: "Anguilla",
      city: "North Nikkiborough",
      region: "<value>",
      continent: "Europe",
      device: "Mobile",
      browser: "Firefox",
      os: "Chrome OS",
      referer: "punctual-tusk.name",
      refererUrl: "https://bitter-valentine.name",
      ip: "1955:bd90:ff40:beec:67da:2562:aee1:067b",
    },
    link: {
      id: "<id>",
      domain: "wide-eyed-government.net",
      key: "<key>",
      url: "https://silver-ownership.com",
      externalId: "<id>",
      expiresAt: "<value>",
      expiredUrl: "https://unwilling-courtroom.org/",
      password: "cCSTdRjG9Wv1XLK",
      title: "<value>",
      description:
        "on incidentally nasalise while broken puppet psst word huzzah",
      image: "https://picsum.photos/seed/8gq04etfSk/2502/2491",
      video: "https://loremflickr.com/3698/3899?lock=2045794510305791",
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
      webhookIds: [
        "<value>",
      ],
      comments:
        "founder yahoo coaxingly gah finally painfully politely boohoo delirious oh along solemnly suitcase smoothly affect louse abaft",
      shortLink: "https://merry-seagull.info",
      qrCode: "https://sick-technologist.info",
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
      url: "https://rowdy-approach.net",
      country: "Guinea",
      city: "Kozeycester",
      region: "<value>",
      continent: "North America",
      device: "Desktop",
      browser: "Firefox",
      os: "BeOS",
      referer: "esteemed-reward.name",
      refererUrl: "https://faraway-clamp.biz",
      ip: "193.187.171.55",
    },
    link: {
      id: "<id>",
      domain: "total-vanadyl.name",
      key: "<key>",
      url: "https://massive-ectoderm.biz",
      externalId: "<id>",
      expiresAt: "<value>",
      expiredUrl: "https://different-tennis.org/",
      password: "LCz6U3Z_XsiMpaR",
      title: "<value>",
      description: "throughout wrathful hastily investigate",
      image: "https://loremflickr.com/3905/3777?lock=7949627724845943",
      video: "https://loremflickr.com/321/2031?lock=3295663458974559",
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
      webhookIds: [
        "<value>",
      ],
      comments:
        "immediately phooey off metabolise impact worth shameful mount gradient oof even",
      shortLink: "https://qualified-label.name",
      qrCode: "https://pleasing-help.biz/",
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
      url: "https://hopeful-schnitzel.info",
      country: "Liberia",
      city: "Kingworth",
      region: "<value>",
      continent: "North America",
      device: "Mobile",
      browser: "Safari",
      os: "iOS",
      referer: "ornery-popularity.net",
      refererUrl: "https://formal-elver.org",
      ip: "4ca7:9caa:097d:b13e:acfa:2fdc:ce21:35dd",
    },
    link: {
      id: "<id>",
      domain: "entire-jump.info",
      key: "<key>",
      url: "https://stormy-instructor.net/",
      externalId: "<id>",
      expiresAt: "<value>",
      expiredUrl: "https://multicolored-smoke.biz/",
      password: "MZ2hzMJ_p40v2LJ",
      title: "<value>",
      description:
        "supposing however for suckle along although boohoo consequently aha where",
      image: "https://loremflickr.com/1311/2806?lock=8683400969558279",
      video: "https://loremflickr.com/3083/1426?lock=5922412711647966",
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
      comments: "hmph reckon drat fuzzy culture any",
      shortLink: "https://ordinary-grouper.name/",
      qrCode: "https://unused-rim.com/",
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
      amount: 7839.05,
      currency: "Rand",
      paymentProcessor: "<value>",
      invoiceId: "<id>",
    },
  },
};
```

