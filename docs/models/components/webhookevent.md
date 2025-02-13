# WebhookEvent

Webhook event schema


## Supported Types

### `components.LinkWebhookEvent`

```typescript
const value: components.LinkWebhookEvent = {
  id: "<id>",
  event: "link.created",
  createdAt: "1710208594655",
  data: {
    id: "<id>",
    domain: "tepid-safe.name",
    key: "<key>",
    url: "https://bleak-rubric.biz",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1751031140107",
    expiredUrl: "https://square-chasuble.org/",
    password: "_nvhVpT6PVtcoZO",
    title: "<value>",
    description: "what laughter task",
    image: "https://picsum.photos/seed/cHMuBd/750/2791",
    video: "https://loremflickr.com/1906/449?lock=2565067546920171",
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
      "after well-off license cheerfully repeatedly replicate jell black till transcend before rarely apud given fairly consequently celsius warmly fort",
    shortLink: "https://unruly-comparison.org",
    qrCode: "https://quiet-hawk.net/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1730614706927",
    updatedAt: "1739362084793",
    projectId: "<id>",
  },
};
```

### `components.LinkClickedEvent`

```typescript
const value: components.LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "1728175899580",
  data: {
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://stupendous-interior.name",
      country: "Dominica",
      city: "Gutmannstead",
      region: "<value>",
      continent: "Antarctica",
      device: "Desktop",
      browser: "Firefox",
      os: "iOS",
      referer: "filthy-ceramic.com",
      refererUrl: "https://firm-independence.net/",
      ip: "231.9.46.86",
    },
    link: {
      id: "<id>",
      domain: "orderly-sticker.info",
      key: "<key>",
      url: "https://beloved-slime.info/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1757431411372",
      expiredUrl: "https://able-cheese.net",
      password: "mjTFZGe7zbjy9h9",
      title: "<value>",
      description:
        "times nervously unless presume incidentally soybean showy contractor",
      image: "https://picsum.photos/seed/ekHo1qUpk/3019/2143",
      video: "https://loremflickr.com/3958/2578?lock=918910246869111",
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
        "besides milestone suckle yum knottily adult agreeable muddy measly incidentally optimistic knottily viability monocle ew frightfully",
      shortLink: "https://soupy-vicinity.info/",
      qrCode: "https://young-replacement.name",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1710333172546",
      updatedAt: "1739348529493",
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
  createdAt: "1736675738221",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1714209912696",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://rubbery-fun.name",
      country: "Maldives",
      city: "Larsonville",
      region: "<value>",
      continent: "North America",
      device: "Desktop",
      browser: "Safari",
      os: "Android",
      referer: "fatherly-finger.name",
      refererUrl: "https://deficient-dwell.name",
      ip: "114.210.236.123",
    },
    link: {
      id: "<id>",
      domain: "roasted-sermon.name",
      key: "<key>",
      url: "https://probable-monster.org/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1741059713298",
      expiredUrl: "https://mushy-advertisement.info",
      password: "eOIoUamIXvHwPpV",
      title: "<value>",
      description: "puppet psst word",
      image: "https://loremflickr.com/2286/2931?lock=3297693724176975",
      video: "https://loremflickr.com/3570/338?lock=5633261033856938",
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
        "geez knotty so indeed sour jovially forceful synergy not home why absentmindedly vaguely roughly broadcast under whose coast",
      shortLink: "https://wide-louse.com/",
      qrCode: "https://firm-bracelet.info",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1725484587895",
      updatedAt: "1739322076354",
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
  createdAt: "1725501103653",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1723992305984",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
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
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1745022490676",
      expiredUrl: "https://grimy-object.org",
      password: "QnBtrBhSMcr8PI9",
      title: "<value>",
      description: "naturally watery before consequently broadside standard",
      image: "https://picsum.photos/seed/5sSr0BZ/2235/1323",
      video: "https://picsum.videos/seed/uAJQ3MrEL/3269/2469",
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
      comments: "playfully out viciously dally kaleidoscopic round doting",
      shortLink: "https://silver-forager.info",
      qrCode: "https://likable-resource.com",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1721577574931",
      updatedAt: "1739349770771",
      projectId: "<id>",
    },
    sale: {
      amount: 6091.64,
      currency: "Leone",
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
  createdAt: "1710272317839",
  data: {
    id: "<id>",
    name: "<value>",
    email: "Mallory_McKenzie49@gmail.com",
    image: "https://picsum.photos/seed/W849fABe/2745/2408",
    country: "Kyrgyz Republic",
    payoutsEnabled: false,
    createdAt: "1723073306188",
    status: "pending",
    programId: "<id>",
    tenantId: "<id>",
    links: [
      {
        id: "<id>",
        domain: "stormy-instructor.net",
        key: "<key>",
        shortLink: "https://multicolored-smoke.biz/",
        url: "https://pink-contrail.net/",
      },
    ],
  },
};
```

