# WebhookEvent

Webhook event schema


## Supported Types

### `components.LinkWebhookEvent`

```typescript
const value: components.LinkWebhookEvent = {
  id: "<id>",
  event: "link.deleted",
  createdAt: "1728151152161",
  data: {
    id: "<id>",
    domain: "tempting-mentor.info",
    key: "<key>",
    url: "https://motionless-institute.net",
    externalId: "<id>",
    tenantId: "<id>",
    expiresAt: "1743211725844",
    expiredUrl: "https://intrepid-fax.com/",
    password: "qjTiD5kp_nvhVpT",
    title: "<value>",
    description: "since phony daintily now nephew",
    image: "https://loremflickr.com/1721/3636?lock=6284578740569109",
    video: "https://loremflickr.com/3881/701?lock=6248504339084924",
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
      "failing up subsidy except fax hence optimistically militate rusty so after awkwardly",
    shortLink: "https://husky-swordfish.com/",
    qrCode: "https://aged-importance.name",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1707960107006",
    updatedAt: "1737558694609",
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
  createdAt: "1735838707154",
  data: {
    click: {
      id: "<id>",
      url: "https://shady-nudge.biz/",
      country: "Aland Islands",
      city: "New Twilafurt",
      region: "<value>",
      continent: "North America",
      device: "Desktop",
      browser: "Firefox",
      os: "MacOS",
      referer: "ugly-rim.org",
      refererUrl: "https://enchanted-castanet.org/",
      ip: "3c93:3f6e:1a20:c2ff:3ef6:fa78:7dd3:d0e9",
    },
    link: {
      id: "<id>",
      domain: "squiggly-pupil.info",
      key: "<key>",
      url: "https://mature-sightseeing.info",
      externalId: "<id>",
      tenantId: "<id>",
      expiresAt: "1754090227508",
      expiredUrl: "https://pessimistic-euphonium.name/",
      password: "10HILeNv2AWrBoE",
      title: "<value>",
      description: "loyalty descent and provided mash out throughout",
      image: "https://picsum.photos/seed/JHYiHmoe/1954/537",
      video: "https://loremflickr.com/1376/3793?lock=2215686402645453",
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
        "wise finally enlightened aha reiterate besides milestone suckle yum",
      shortLink: "https://official-scout.net",
      qrCode: "https://inexperienced-heroine.org",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1726925355801",
      updatedAt: "1737512532028",
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
  createdAt: "1723154386987",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1717283024330",
    },
    click: {
      id: "<id>",
      url: "https://afraid-nun.net",
      country: "Ethiopia",
      city: "St. Paul",
      region: "<value>",
      continent: "South America",
      device: "Desktop",
      browser: "Firefox",
      os: "Android",
      referer: "thin-outset.name",
      refererUrl: "https://naughty-outrun.org/",
      ip: "ffeb:ad02:2a7e:d8be:ecd1:ebb1:955b:d90f",
    },
    link: {
      id: "<id>",
      domain: "white-daddy.com",
      key: "<key>",
      url: "https://well-documented-thread.name",
      externalId: "<id>",
      tenantId: "<id>",
      expiresAt: "1747164697004",
      expiredUrl: "https://unpleasant-junior.com/",
      password: "8LxCjEbgw4qcCST",
      title: "<value>",
      description:
        "dividend investigate minty louse ferret commonly talkative liberalize",
      image: "https://loremflickr.com/976/2888?lock=8921210309936519",
      video: "https://loremflickr.com/3381/2138?lock=2580244024002172",
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
      createdAt: "1711132892805",
      updatedAt: "1737545374870",
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
  createdAt: "1736543020298",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1722918536228",
    },
    click: {
      id: "<id>",
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
      expiresAt: "1745799116583",
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
      createdAt: "1711883030605",
      updatedAt: "1737570963590",
      projectId: "<id>",
      programId: "<id>",
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

