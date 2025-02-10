# WebhookEvent

Webhook event schema


## Supported Types

### `components.LinkWebhookEvent`

```typescript
const value: components.LinkWebhookEvent = {
  id: "<id>",
  event: "link.deleted",
  createdAt: "1713301305274",
  data: {
    id: "<id>",
    domain: "decent-hose.biz",
    key: "<key>",
    url: "https://tepid-safe.name/",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1770101538769",
    expiredUrl: "https://snoopy-doorpost.info/",
    password: "5kp_nvhVpT6PVtc",
    title: "<value>",
    description: "eek oof if deserted meh failing up",
    image: "https://loremflickr.com/325/1923?lock=1887933543334354",
    video: "https://picsum.videos/seed/wRBlcpw29B/1390/1817",
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
      "unimpressively chubby rout unhappy yum finally drat after sheepishly bah um mid bloom redound grounded about mature minority",
    shortLink: "https://curly-heating.info/",
    qrCode: "https://competent-antelope.com/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1716245169830",
    updatedAt: "1739171063833",
    projectId: "<id>",
  },
};
```

### `components.LinkClickedEvent`

```typescript
const value: components.LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "1730584367551",
  data: {
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://unsung-amnesty.biz/",
      country: "Ghana",
      city: "Roycebury",
      region: "<value>",
      continent: "Antarctica",
      device: "Desktop",
      browser: "Safari",
      os: "iOS",
      referer: "old-whale.com",
      refererUrl: "https://sparkling-shark.net/",
      ip: "f8d1:9f5e:f6a1:f1e5:a05a:b288:ceca:83bf",
    },
    link: {
      id: "<id>",
      domain: "inborn-legend.name",
      key: "<key>",
      url: "https://amazing-farm.name/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1754563170374",
      expiredUrl: "https://sudden-juggernaut.com",
      password: "qWgcdCF6A8X9Mp6",
      title: "<value>",
      description: "inexperienced mothball oh helpful shakily nor",
      image: "https://picsum.photos/seed/QyIYqS/2736/2153",
      video: "https://picsum.videos/seed/fhjJzM/30/134",
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
        "hm stranger lest veg certainly punctual sermon insist whose among bell pocket-watch for mindless honestly meanwhile free abaft",
      shortLink: "https://serene-juggernaut.org/",
      qrCode: "https://good-slime.name/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1729199410498",
      updatedAt: "1739200772060",
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
  createdAt: "1728855698607",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1721002602518",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://ornery-technologist.info/",
      country: "Tunisia",
      city: "Lillianhaven",
      region: "<value>",
      continent: "Australia",
      device: "Desktop",
      browser: "Safari",
      os: "Linux",
      referer: "scary-labourer.info",
      refererUrl: "https://sentimental-cantaloupe.org/",
      ip: "b96b:d6b5:74fc:a28d:13dd:ce35:9014:a5d7",
    },
    link: {
      id: "<id>",
      domain: "vain-wafer.info",
      key: "<key>",
      url: "https://fragrant-sanity.biz/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1751219622135",
      expiredUrl: "https://optimistic-yin.biz/",
      password: "B9CCuDzfRjM7CEz",
      title: "<value>",
      description: "easily angelic and hence zowie",
      image: "https://loremflickr.com/724/3055?lock=4168182601199276",
      video: "https://picsum.videos/seed/VLmUi/23/3241",
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
      comments: "solemnly suitcase smoothly affect louse abaft",
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
      createdAt: "1726654673540",
      updatedAt: "1739191173907",
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
  createdAt: "1709046144232",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1732934342819",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://recent-instructor.net/",
      country: "Qatar",
      city: "Lake Roxaneburgh",
      region: "<value>",
      continent: "North America",
      device: "Mobile",
      browser: "Safari",
      os: "Linux",
      referer: "cruel-extension.biz",
      refererUrl: "https://shimmering-pile.biz",
      ip: "fbeb:6664:dca8:e4c1:4dec:dfaa:c2fb:3f7d",
    },
    link: {
      id: "<id>",
      domain: "unaware-lace.com",
      key: "<key>",
      url: "https://handy-whale.org",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1766131938571",
      expiredUrl: "https://small-wilderness.name/",
      password: "Mcr8PI9GLztQ0Cg",
      title: "<value>",
      description: "immediately phooey off metabolise impact worth",
      image: "https://picsum.photos/seed/uAJQ3MrEL/3269/2469",
      video: "https://loremflickr.com/2158/634?lock=692410372036144",
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
        "recovery furthermore glaring huddle well-lit gently excluding notwithstanding whack versus geez dazzling when gadzooks until woot daily including before indeed",
      shortLink: "https://hollow-outset.name",
      qrCode: "https://pushy-stool.com/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1731449614812",
      updatedAt: "1739190793840",
      projectId: "<id>",
    },
    sale: {
      amount: 8666.61,
      currency: "Bermudian Dollar (customarily known as Bermuda Dollar)",
      paymentProcessor: "<value>",
      invoiceId: "<id>",
    },
  },
};
```

