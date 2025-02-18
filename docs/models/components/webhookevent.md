# WebhookEvent

Webhook event schema


## Supported Types

### `components.LinkWebhookEvent`

```typescript
const value: components.LinkWebhookEvent = {
  id: "<id>",
  event: "link.created",
  createdAt: "1734941778954",
  data: {
    id: "<id>",
    domain: "some-makeover.org",
    key: "<key>",
    url: "https://snoopy-doorpost.info/",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1746761753824",
    expiredUrl: "https://courageous-spring.name",
    password: "nvhVpT6PVtcoZOZ",
    title: "<value>",
    description:
      "sushi straw ha nudge er after well-off license cheerfully repeatedly",
    image: "https://picsum.photos/seed/6yIN1IPKv/3267/2429",
    video: "https://picsum.videos/seed/CTH4vhhmjz/1832/2198",
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
    comments: "luck yahoo phooey yuck playfully commonly huzzah after pupil",
    shortLink: "https://scared-rawhide.info/",
    qrCode: "https://hateful-obligation.org/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1713772380090",
    updatedAt: "1739835774737",
    projectId: "<id>",
  },
};
```

### `components.LinkClickedEvent`

```typescript
const value: components.LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "1709182628283",
  data: {
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://inexperienced-scratch.net",
      country: "Republic of Korea",
      city: "Kuvalisfield",
      region: "<value>",
      continent: "Australia",
      device: "Mobile",
      browser: "Chrome",
      os: "Windows Phone",
      referer: "front-minority.biz",
      refererUrl: "https://inferior-hoof.biz/",
      ip: "10.6.69.118",
    },
    link: {
      id: "<id>",
      domain: "severe-intent.org",
      key: "<key>",
      url: "https://delicious-flame.name/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1766738445998",
      expiredUrl: "https://feline-bar.net/",
      password: "EWkmjTFZGe7zbjy",
      title: "<value>",
      description: "aha coincide oh correctly sedately",
      image: "https://loremflickr.com/1463/1582?lock=3098568197745689",
      video: "https://loremflickr.com/3793/1170?lock=5252439965120578",
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
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments:
        "respectful geez fathom brr up sin astride acidic range whoever gee outfit",
      shortLink: "https://thin-outset.name/",
      qrCode: "https://naughty-outrun.org/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1726760726476",
      updatedAt: "1739843740841",
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
  createdAt: "1738635767901",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1728815275542",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://lighthearted-tail.com",
      country: "Bosnia and Herzegovina",
      city: "Port Eunafurt",
      region: "<value>",
      continent: "Europe",
      device: "Desktop",
      browser: "Firefox",
      os: "Blackberry",
      referer: "wasteful-minister.name",
      refererUrl: "https://well-groomed-litter.net/",
      ip: "107.65.68.202",
    },
    link: {
      id: "<id>",
      domain: "posh-hunger.com",
      key: "<key>",
      url: "https://white-daddy.com",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1756566926002",
      expiredUrl: "https://unusual-monocle.biz",
      password: "vO8LxCjEbgw4qcC",
      title: "<value>",
      description: "willfully dwell rudely aware within reckless in",
      image: "https://picsum.photos/seed/YfIvt/2483/3332",
      video: "https://loremflickr.com/976/2888?lock=8921210309936519",
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
        "deployment circa trolley from deduction yummy pish cluttered whose manipulate sweet for badly",
      shortLink: "https://digital-cutover.info/",
      qrCode: "https://white-forage.org/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1714019888431",
      updatedAt: "1739826145426",
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
  createdAt: "1710245151224",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1722904196133",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://stunning-unit.com/",
      country: "Ukraine",
      city: "Herzogside",
      region: "<value>",
      continent: "Asia",
      device: "Desktop",
      browser: "Chrome",
      os: "Blackberry",
      referer: "ample-jellyfish.net",
      refererUrl: "https://creative-responsibility.net",
      ip: "c2d8:d6c9:d51a:9c0e:dd08:fe3a:fb0d:528c",
    },
    link: {
      id: "<id>",
      domain: "agile-meadow.name",
      key: "<key>",
      url: "https://insignificant-marksman.net",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1768138950790",
      expiredUrl: "https://perfumed-populist.com/",
      password: "mDMce3_q7i99hf5",
      title: "<value>",
      description:
        "happily elementary summer inside clean solidly athwart home naturally",
      image: "https://picsum.photos/seed/OIWxNkl/656/1464",
      video: "https://loremflickr.com/1602/1644?lock=4675627579486801",
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
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments:
        "yowza toward to numeric positively rosemary shaft barring happily obesity lamp ill-fated vastly yippee save in cinch meh moor",
      shortLink: "https://definite-injunction.name",
      qrCode: "https://slushy-bidet.org/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1723076391065",
      updatedAt: "1739789199190",
      projectId: "<id>",
    },
    sale: {
      amount: 1168.07,
      currency: "Kenyan Shilling",
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
  createdAt: "1729118137706",
  data: {
    id: "<id>",
    name: "<value>",
    email: "Elmore16@gmail.com",
    image: "https://picsum.photos/seed/7sqV85/1148/718",
    country: "Benin",
    payoutsEnabled: false,
    createdAt: "1736828167114",
    status: "pending",
    programId: "<id>",
    tenantId: "<id>",
    links: [
      {
        id: "<id>",
        domain: "criminal-muscat.name",
        key: "<key>",
        shortLink: "https://personal-fledgling.biz/",
        url: "https://fragrant-decision.org",
      },
    ],
  },
};
```

