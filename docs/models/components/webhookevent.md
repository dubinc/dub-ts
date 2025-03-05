# WebhookEvent

Webhook event schema


## Supported Types

### `components.LinkWebhookEvent`

```typescript
const value: components.LinkWebhookEvent = {
  id: "<id>",
  event: "link.updated",
  createdAt: "1720607297348",
  data: {
    id: "<id>",
    domain: "dim-haversack.name",
    key: "<key>",
    url: "https://courteous-nerve.biz/",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1767540404043",
    expiredUrl: "https://caring-blight.org/",
    password: "r9nZdVemeogQLUc",
    title: "<value>",
    description:
      "however across wherever yowza ick moralise which whenever exasperation cap",
    image: "https://loremflickr.com/2888/2792?lock=8482459130979346",
    video: "https://picsum.videos/seed/lnmCTaS1E/2884/1192",
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
    folderId: "<id>",
    webhookIds: [
      "<value>",
    ],
    comments:
      "nicely heating for perfectly midwife loyalty descent and provided mash out throughout with ick enlightened wide solemnly",
    shortLink: "https://raw-slide.biz",
    qrCode: "https://scaly-grandson.com/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1723315226652",
    updatedAt: "1741126553187",
    projectId: "<id>",
  },
};
```

### `components.LinkClickedEvent`

```typescript
const value: components.LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "1722497381281",
  data: {
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://wrong-parade.info/",
      country: "Bhutan",
      city: "Quigleyshire",
      region: "<value>",
      continent: "Antarctica",
      device: "Desktop",
      browser: "Safari",
      os: "Linux",
      referer: "deficient-fat.net",
      refererUrl: "https://astonishing-information.net",
      ip: "c4cc:ff9d:00c6:567a:cbcc:99ee:1b7f:0df6",
    },
    link: {
      id: "<id>",
      domain: "winged-stranger.org",
      key: "<key>",
      url: "https://official-emergent.org/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1761092026458",
      expiredUrl: "https://classic-mainstream.name",
      password: "XQMuhAZESzWSmH9",
      title: "<value>",
      description: "delight inasmuch lovingly strictly boiling",
      image: "https://loremflickr.com/1293/3653?lock=7598386455352326",
      video: "https://picsum.videos/seed/Iw8LpXhg/2785/1465",
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
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments:
        "uh-huh on incidentally nasalise while broken puppet psst word huzzah knowledgeably inasmuch drive frankly",
      shortLink: "https://calculating-fort.org/",
      qrCode: "https://honorable-unblinking.net/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1725894350917",
      updatedAt: "1741115227998",
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
  createdAt: "1713483072608",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1724246646640",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://equatorial-characterization.info/",
      country: "Guyana",
      city: "East Lansing",
      region: "<value>",
      continent: "Australia",
      device: "Mobile",
      browser: "Safari",
      os: "WebOS",
      referer: "forceful-kick.biz",
      refererUrl: "https://jam-packed-recovery.name/",
      ip: "c0cd:f0b4:1cab:0805:4476:f7d3:a1a0:be0e",
    },
    link: {
      id: "<id>",
      domain: "sore-formula.org",
      key: "<key>",
      url: "https://incomparable-boyfriend.name/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1742067972038",
      expiredUrl: "https://rich-slime.com/",
      password: "heVXZEsWIt9hHXt",
      title: "<value>",
      description: "wisely mathematics rival gift spirit expostulate vice",
      image: "https://picsum.photos/seed/hjbTRs/2126/2597",
      video: "https://loremflickr.com/1469/3756?lock=4985862724777244",
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
      comments: "light flame yawningly limp as uncover sleepily glorious",
      shortLink: "https://impolite-handle.com/",
      qrCode: "https://bustling-tackle.com",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1723780042452",
      updatedAt: "1741072676630",
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
  createdAt: "1714482441086",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1734317552449",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://courteous-outset.net",
      country: "Samoa",
      city: "Lake Michelehaven",
      region: "<value>",
      continent: "Australia",
      device: "Desktop",
      browser: "Safari",
      os: "WebOS",
      referer: "normal-final.org",
      refererUrl: "https://bruised-illusion.org/",
      ip: "3.156.254.209",
    },
    link: {
      id: "<id>",
      domain: "pointless-toaster.net",
      key: "<key>",
      url: "https://palatable-rawhide.org/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1742969131324",
      expiredUrl: "https://kaleidoscopic-perp.net",
      password: "T0GblFXTg9_54yP",
      title: "<value>",
      description: "schnitzel supportive formal forager hopelessly eek mallard",
      image: "https://loremflickr.com/3756/517?lock=1388164053158186",
      video: "https://picsum.videos/seed/utsNtL/980/2372",
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
        "blah boo enfold whoever supposing however for suckle along although boohoo consequently aha",
      shortLink: "https://cluttered-skyline.info",
      qrCode: "https://pale-seagull.biz/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1731720236036",
      updatedAt: "1741085045976",
      projectId: "<id>",
    },
    sale: {
      amount: 9640.52,
      currency: "Saint Helena Pound",
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
  createdAt: "1720836361078",
  data: {
    id: "<id>",
    name: "<value>",
    email: "Madyson_Cartwright99@gmail.com",
    image: "https://loremflickr.com/1207/660?lock=7798827268314684",
    country: "Peru",
    payoutsEnabled: false,
    createdAt: "1736288390544",
    status: "approved",
    programId: "<id>",
    tenantId: "<id>",
    links: [
      {
        id: "<id>",
        domain: "shallow-tool.biz",
        key: "<key>",
        shortLink: "https://impolite-elevator.org",
        url: "https://celebrated-gown.info/",
      },
    ],
  },
};
```

