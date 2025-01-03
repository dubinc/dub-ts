# WebhookEvent

Webhook event schema


## Supported Types

### `components.LinkWebhookEvent`

```typescript
const value: components.LinkWebhookEvent = {
  id: "<id>",
  event: "link.created",
  createdAt: "1717047074953",
  data: {
    id: "<id>",
    domain: "plump-underpants.com",
    key: "<key>",
    url: "https://bossy-iridescence.info",
    externalId: "<id>",
    expiresAt: "1742534928060",
    expiredUrl: "https://lanky-subsidy.org/",
    password: "RsZB3HRZ6pzr9nZ",
    title: "<value>",
    description:
      "separately utter however across wherever yowza ick moralise which whenever",
    image: "https://loremflickr.com/666/2211?lock=1364464656615628",
    video: "https://loremflickr.com/649/3853?lock=8479731286439501",
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
      "boohoo concerning regularly stupendous anti oh conservation throughout shoulder lest blah pfft",
    shortLink: "https://mundane-cappelletti.info",
    qrCode: "https://oddball-pigpen.org/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1720069584463",
    updatedAt: "1735872365909",
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
  createdAt: "1708929339462",
  data: {
    click: {
      id: "<id>",
      url: "https://scornful-hammock.name",
      country: "Northern Mariana Islands",
      city: "North Emilianostead",
      region: "<value>",
      continent: "Australia",
      device: "Mobile",
      browser: "Safari",
      os: "Chrome OS",
      referer: "concerned-step.name",
      refererUrl: "https://same-video.biz",
      ip: "8857:e65c:5ac5:9dcf:eaf9:7045:4abe:c57f",
    },
    link: {
      id: "<id>",
      domain: "imaginative-allegation.info",
      key: "<key>",
      url: "https://incomparable-finer.org",
      externalId: "<id>",
      expiresAt: "1756247185224",
      expiredUrl: "https://carefree-scorn.net/",
      password: "x5e41nTMaTW6qVd",
      title: "<value>",
      description:
        "dishearten tender hm stranger lest veg certainly punctual sermon insist",
      image: "https://picsum.photos/seed/2wWUAi/43/3859",
      video: "https://loremflickr.com/1320/3591?lock=1180989999837323",
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
        "frightfully silver unless save unlawful vague override shakily rewarding",
      shortLink: "https://reckless-hexagon.com",
      qrCode: "https://unpleasant-hello.org",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1720268148471",
      updatedAt: "1735892135740",
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
  createdAt: "1730658019400",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1722194029537",
    },
    click: {
      id: "<id>",
      url: "https://worldly-developmental.net/",
      country: "Lesotho",
      city: "Deecester",
      region: "<value>",
      continent: "Africa",
      device: "Mobile",
      browser: "Safari",
      os: "Chrome OS",
      referer: "insistent-effector.name",
      refererUrl: "https://flashy-knickers.biz",
      ip: "48.253.146.187",
    },
    link: {
      id: "<id>",
      domain: "buttery-fun.org",
      key: "<key>",
      url: "https://darling-optimal.name/",
      externalId: "<id>",
      expiresAt: "1762359223895",
      expiredUrl: "https://coordinated-disposer.info",
      password: "6N8txK6jENW7B9C",
      title: "<value>",
      description: "mindless intently sizzling",
      image: "https://loremflickr.com/1152/1980?lock=1696952041202833",
      video: "https://picsum.videos/seed/P1zBX1wc3A/1743/2954",
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
        "hourly as whenever antagonize obstruct overburden mountain wrongly plan psst promptly ha that what massive gah newsstand",
      shortLink: "https://ornery-summer.org",
      qrCode: "https://light-soup.com",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1725936519674",
      updatedAt: "1735883279542",
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
  createdAt: "1710004381287",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1735071329259",
    },
    click: {
      id: "<id>",
      url: "https://plump-swath.name/",
      country: "Bosnia and Herzegovina",
      city: "Glenview",
      region: "<value>",
      continent: "South America",
      device: "Mobile",
      browser: "Safari",
      os: "Android",
      referer: "small-wilderness.name",
      refererUrl: "https://aged-premier.org/",
      ip: "80.128.18.22",
    },
    link: {
      id: "<id>",
      domain: "insecure-diver.info",
      key: "<key>",
      url: "https://wobbly-unblinking.com/",
      externalId: "<id>",
      expiresAt: "1763758127069",
      expiredUrl: "https://mediocre-coin.info/",
      password: "gImezSmAGHRuKkd",
      title: "<value>",
      description: "toward to numeric positively",
      image: "https://loremflickr.com/2925/3385?lock=6978812724792366",
      video: "https://picsum.videos/seed/9p4GXNoA/1790/2643",
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
        "accredit psst instead staid well-groomed rot woot ridge eek positively limping punctually before",
      shortLink: "https://quick-witted-bowler.biz/",
      qrCode: "https://puny-cricket.com",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1732912734579",
      updatedAt: "1735863293957",
      projectId: "<id>",
      programId: "<id>",
    },
    sale: {
      amount: 1795.00,
      currency: "Zimbabwe Dollar",
      paymentProcessor: "<value>",
      invoiceId: "<id>",
    },
  },
};
```

