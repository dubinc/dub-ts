# WebhookEvent

Webhook event schema


## Supported Types

### `components.LinkWebhookEvent`

```typescript
const value: components.LinkWebhookEvent = {
  id: "<id>",
  event: "link.deleted",
  createdAt: "<value>",
  data: {
    id: "<id>",
    domain: "powerless-term.net",
    key: "<key>",
    url: "https://tasty-duster.name",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://wiggly-decryption.com/",
    password: "PVtcoZOZnAkgtUN",
    title: "<value>",
    description: "likewise pace fall ick incidentally",
    image: "https://picsum.photos/seed/RBlcpw29/1817/3460",
    video: "https://picsum.videos/seed/65W78R/2401/900",
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
      "replicate jell black till transcend before rarely apud given fairly consequently celsius warmly fort likewise",
    shortLink: "https://selfish-iridescence.name",
    qrCode: "https://stupendous-interior.name",
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
      url: "https://pessimistic-euphonium.name/",
      continent: "Antarctica",
      country: "Canada",
      city: "Herthaboro",
      device: "Desktop",
      browser: "Chrome",
      os: "Windows",
      referer: "firm-independence.net",
      refererUrl: "https://unsung-amnesty.biz/",
      ip: "147.218.89.68",
    },
    link: {
      id: "<id>",
      domain: "beloved-slime.info",
      key: "<key>",
      url: "https://worthless-suv.com",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://strange-runway.name",
      password: "FZGe7zbjy9h9hSF",
      title: "<value>",
      description: "whereas healthily to indeed monasticism ugh",
      image: "https://picsum.photos/seed/pm2bebKxFO/3898/2721",
      video: "https://picsum.videos/seed/1qUpkZD/923/1304",
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
      comments: "for over worse dishearten tender hm",
      shortLink: "https://afraid-nun.net",
      qrCode: "https://winged-stranger.org/",
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
      email: "Kevon_Stanton53@gmail.com",
      avatar: "https://picsum.photos/seed/XXEvsT17/2161/2527",
    },
    click: {
      id: "<id>",
      url: "https://slushy-flat.name/",
      continent: "Europe",
      country: "Haiti",
      city: "Lulashire",
      device: "Mobile",
      browser: "Firefox",
      os: "Windows",
      referer: "well-groomed-litter.net",
      refererUrl: "https://innocent-discourse.biz/",
      ip: "d90f:f40b:eec6:7da2:562a:ee10:67bf:8ffa",
    },
    link: {
      id: "<id>",
      domain: "prime-bidet.biz",
      key: "<key>",
      url: "https://distinct-stall.net",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://muddy-majority.net/",
      password: "RjG9Wv1XLKnxNbm",
      title: "<value>",
      description:
        "louse ferret commonly talkative liberalize excepting flight",
      image: "https://picsum.photos/seed/6mT5aCCPW/761/3962",
      video: "https://loremflickr.com/568/1038?lock=8136072673818",
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
      comments: "knotty so indeed sour jovially forceful synergy not",
      shortLink: "https://awesome-morning.net/",
      qrCode: "https://amused-halt.com",
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
      email: "Clay.Hayes@gmail.com",
      avatar: "https://picsum.photos/seed/s0OW2/3576/724",
    },
    click: {
      id: "<id>",
      url: "https://sore-formula.org",
      continent: "Asia",
      country: "Hungary",
      city: "Lake Alethamouth",
      device: "Mobile",
      browser: "Safari",
      os: "MacOS",
      referer: "slimy-pulse.name",
      refererUrl: "https://brown-nerve.info",
      ip: "6c9d:51a9:c0ed:d08f:e3af:b0d5:28c0:cbb9",
    },
    link: {
      id: "<id>",
      domain: "nice-remark.org",
      key: "<key>",
      url: "https://perfumed-populist.com/",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://humble-pillbox.info",
      password: "ce3_q7i99hf5rSP",
      title: "<value>",
      description: "concerning petticoat cloudy stunt toward",
      image: "https://picsum.photos/seed/t0HRfjv4/1425/3028",
      video: "https://loremflickr.com/359/1685?lock=3657258888770195",
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
      comments:
        "indeed stingy boyfriend providence until gracious yuck married regularly whose recovery furthermore glaring huddle well-lit gently excluding notwithstanding whack versus",
      shortLink: "https://blind-clamp.biz/",
      qrCode: "https://pleasant-department.info",
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
      amount: 4820.62,
      currency: "Comoro Franc",
      paymentProcessor: "<value>",
      invoiceId: "<id>",
    },
  },
};
```

