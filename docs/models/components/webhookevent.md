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
    domain: "genuine-laughter.biz",
    key: "<key>",
    url: "https://tepid-eyebrow.name",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://unused-cook.net/",
    password: "14bkOZ5NKy2GzxN",
    title: "<value>",
    description: "true amongst ick notwithstanding aboard same",
    image: "https://picsum.photos/seed/4vhhmjzGg/3691/2468",
    video: "https://picsum.videos/seed/0Vx5QY/519/236",
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
    webhookIds: [
      "<value>",
    ],
    comments: "loosely than providence epic likewise",
    shortLink: "https://damp-veto.biz/",
    qrCode: "https://blue-incandescence.com",
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
      url: "https://nice-cap.net/",
      continent: "Europe",
      country: "Chad",
      city: "Pueblo",
      device: "Desktop",
      browser: "Safari",
      os: "WebOS",
      referer: "grounded-ghost.info",
      refererUrl: "https://unruly-comparison.org",
      ip: "169.106.202.184",
    },
    link: {
      id: "<id>",
      domain: "lonely-papa.name",
      key: "<key>",
      url: "https://live-lid.biz",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://front-minority.biz",
      password: "0HILeNv2AWrBoEW",
      title: "<value>",
      description:
        "within versus upon amid jubilantly dark machine entice ah excepting",
      image: "https://picsum.photos/seed/JXpm2bebK/2442/2182",
      video: "https://picsum.videos/seed/kHo1qU/2143/2670",
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
        "up sin astride acidic range whoever gee outfit outrun lighthearted",
      shortLink: "https://ambitious-cap.com",
      qrCode: "https://gripping-pacemaker.name",
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
      externalId: "<id>",
      name: "<value>",
      createdAt: "<value>",
    },
    click: {
      id: "<id>",
      url: "https://multicolored-parsnip.org/",
      continent: "Europe",
      country: "Myanmar",
      city: "Fort Juliofield",
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
      identifier: "<value>",
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
      url: "https://insignificant-marksman.net",
      continent: "South America",
      country: "Guinea-Bissau",
      city: "Powlowskitown",
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
      identifier: "<value>",
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
    },
    sale: {
      amount: 9042.87,
      currency: "Comoro Franc",
      paymentProcessor: "<value>",
      invoiceId: "<id>",
    },
  },
};
```

