# WebhookEvent

Webhook event schema


## Supported Types

### `components.LinkWebhookEvent`

```typescript
const value: components.LinkWebhookEvent = {
  id: "<id>",
  event: "link.deleted",
  createdAt: "1732720581467",
  data: {
    id: "<id>",
    domain: "exalted-pinstripe.com",
    key: "<key>",
    url: "https://quick-lender.biz",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1764565596797",
    expiredUrl: "https://illustrious-jungle.org/",
    password: "DwH3aXJCJcSX4Ff",
    title: "<value>",
    description: "whoever ick sonnet closed patiently behind",
    image: "https://picsum.photos/seed/K1DjfJqP/2666/578",
    video: "https://loremflickr.com/3665/2212?lock=2163421381126998",
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
    comments: "founder probable inside crowded gee maul a repeatedly",
    shortLink: "https://immediate-napkin.net/",
    qrCode: "https://defensive-makeover.info/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    testStartedAt: "<value>",
    testCompletedAt: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1723758853261",
    updatedAt: "1745132493852",
    projectId: "<id>",
  },
};
```

### `components.LinkClickedEvent`

```typescript
const value: components.LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "1742294536757",
  data: {
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://assured-agreement.biz",
      country: "Tuvalu",
      city: "Felixshire",
      region: "<value>",
      continent: "South America",
      device: "Mobile",
      browser: "Safari",
      os: "MacOS",
      referer: "small-newsstand.name",
      refererUrl: "https://unwritten-essence.info",
      ip: "8.177.199.56",
    },
    link: {
      id: "<id>",
      domain: "fine-larva.org",
      key: "<key>",
      url: "https://rotten-humor.name/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1759677753579",
      expiredUrl: "https://delectable-quart.com",
      password: "yG3N11IQ7NfAdxc",
      title: "<value>",
      description: "trench attribute aw yippee but part",
      image: "https://loremflickr.com/48/317?lock=1914070864509776",
      video: "https://loremflickr.com/2827/269?lock=6522022044074067",
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
        "unblinking deflate ownership probable whenever past usefully devoted ugh until however misfire pliers thankfully swing beyond but before",
      shortLink: "https://tall-creature.biz/",
      qrCode: "https://firsthand-rim.com",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      testStartedAt: "<value>",
      testCompletedAt: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1734595199546",
      updatedAt: "1745120514476",
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
  createdAt: "1741179189243",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1727671288758",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://optimistic-collectivization.org",
      country: "Trinidad and Tobago",
      city: "St. George",
      region: "<value>",
      continent: "Antarctica",
      device: "Desktop",
      browser: "Safari",
      os: "Windows Phone",
      referer: "parallel-violin.biz",
      refererUrl: "https://appropriate-worth.biz/",
      ip: "91.95.252.90",
    },
    link: {
      id: "<id>",
      domain: "useless-secrecy.org",
      key: "<key>",
      url: "https://easy-stall.info",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1771708752427",
      expiredUrl: "https://hoarse-help.name",
      password: "gsfx4xnq8zKCIO6",
      title: "<value>",
      description:
        "apropos putrid sweetly expensive so hasty triumphantly colour furthermore",
      image: "https://picsum.photos/seed/6spMxqkQ4k/1192/2425",
      video: "https://picsum.videos/seed/3Zyvqx3/2295/3963",
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
        "kaleidoscopic so cosset posh that lustrous spectacles fearless ah until if underneath and save rectangular jaggedly amongst than gee",
      shortLink: "https://acclaimed-fax.org",
      qrCode: "https://rural-precedent.biz",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      testStartedAt: "<value>",
      testCompletedAt: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1733131331733",
      updatedAt: "1745143562212",
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
  createdAt: "1713930064384",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1741637790442",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://windy-simple.info",
      country: "Turkey",
      city: "Youngstown",
      region: "<value>",
      continent: "Africa",
      device: "Desktop",
      browser: "Firefox",
      os: "Android",
      referer: "black-and-white-fireplace.com",
      refererUrl: "https://realistic-birth.name",
      ip: "72.186.246.170",
    },
    link: {
      id: "<id>",
      domain: "bright-release.net",
      key: "<key>",
      url: "https://superior-forgery.biz/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1746341663950",
      expiredUrl: "https://obedient-strategy.name/",
      password: "eXOXZ2USj7cH2Nh",
      title: "<value>",
      description:
        "approximate instead pull obedience chasuble between hateful off blah times",
      image: "https://picsum.photos/seed/EpGjhqpn/3404/572",
      video: "https://loremflickr.com/1238/1680?lock=7383708883536312",
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
      comments: "covenant as outfit loudly qua whenever",
      shortLink: "https://general-fellow.biz/",
      qrCode: "https://royal-swanling.com/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      testStartedAt: "<value>",
      testCompletedAt: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1724449743075",
      updatedAt: "1745188287797",
      projectId: "<id>",
    },
    sale: {
      amount: 9047.67,
      currency: "Dominican Peso",
      paymentProcessor: "<value>",
      invoiceId: "<id>",
    },
  },
};
```

### `components.PartnerEnrolledEvent`

```typescript
const value: components.PartnerEnrolledEvent = {
  id: "<id>",
  event: "partner.enrolled",
  createdAt: "1720209212627",
  data: {
    id: "<id>",
    name: "<value>",
    email: "Reed_Jacobs@yahoo.com",
    image: "https://loremflickr.com/1614/897?lock=3218436465907020",
    country: "Maldives",
    payoutsEnabledAt: "<value>",
    createdAt: "1724990867010",
    status: "rejected",
    programId: "<id>",
    tenantId: "<id>",
    links: [
      {
        id: "<id>",
        domain: "thorough-receptor.biz",
        key: "<key>",
        shortLink: "https://rural-bathhouse.com/",
        url: "https://jaunty-slime.info",
      },
    ],
  },
};
```

