# WebhookEvent

Webhook event schema


## Supported Types

### `components.LinkWebhookEvent`

```typescript
const value: components.LinkWebhookEvent = {
  id: "<id>",
  event: "link.deleted",
  createdAt: "1723208002502",
  data: {
    id: "<id>",
    domain: "exalted-pinstripe.com",
    key: "<key>",
    url: "https://quick-lender.biz",
    trackConversion: false,
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    archived: true,
    expiresAt: "1766035738364",
    expiredUrl: "https://dim-pine.name/",
    password: "JCJcSX4FfG7ytmN",
    proxy: false,
    title: "<value>",
    description: "utter gah aside rag besides",
    image: "https://picsum.photos/seed/yeeobM5NIy/2915/1722",
    video: "https://picsum.videos/seed/CIED2tKc/1414/3938",
    rewrite: true,
    doIndex: true,
    ios: "<value>",
    android: "<id>",
    geo: {},
    publicStats: false,
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
      "<value 1>",
      "<value 2>",
    ],
    comments:
      "aw ice-cream perfectly potentially boohoo creator foolishly fully breakable jealously gee",
    shortLink: "https://spotless-newsstand.com",
    qrCode: "https://sore-solvency.net/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    testStartedAt: "<value>",
    testCompletedAt: "<value>",
    userId: null,
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1709630985791",
    updatedAt: "1735664931236",
    projectId: "<id>",
  },
};
```

### `components.LinkClickedEvent`

```typescript
const value: components.LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "1732781957758",
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
      qr: true,
      ip: "177.199.56.68",
    },
    link: {
      id: "<id>",
      domain: "menacing-tomography.biz",
      key: "<key>",
      url: "https://jealous-newsletter.info",
      trackConversion: false,
      externalId: "<id>",
      tenantId: "<id>",
      programId: null,
      partnerId: null,
      archived: false,
      expiresAt: "1755870867572",
      expiredUrl: "https://long-term-complication.biz/",
      password: "Q7NfAdxcJ8x1yhk",
      proxy: true,
      title: "<value>",
      description: null,
      image: null,
      video: "https://picsum.videos/seed/ixYla4N/99/1866",
      rewrite: false,
      doIndex: false,
      ios: "<value>",
      android: "<id>",
      geo: {},
      publicStats: false,
      tagId: "<id>",
      tags: [],
      folderId: "<id>",
      webhookIds: [],
      comments:
        "aside rout excluding hm merry colossal instead gut for apropos opera machine whether glittering gracious provided",
      shortLink: "https://burly-priesthood.biz/",
      qrCode: "https://unrealistic-density.name",
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
      createdAt: "1728921888377",
      updatedAt: "1735607800454",
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
  createdAt: "1731666610174",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1718158709687",
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
      qr: true,
      ip: "95.252.90.235",
    },
    link: {
      id: "<id>",
      domain: "standard-wilderness.net",
      key: "<key>",
      url: "https://tense-kiss.org/",
      trackConversion: false,
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      archived: false,
      expiresAt: "1763119226400",
      expiredUrl: "https://shimmering-traditionalism.biz/",
      password: null,
      proxy: false,
      title: null,
      description:
        "now lox meaty unhealthy volunteer prestigious liberalize heavily abandoned",
      image: "https://picsum.photos/seed/QnsdiB/591/3815",
      video: "https://loremflickr.com/3825/426?lock=3694907848251566",
      rewrite: false,
      doIndex: false,
      ios: "<value>",
      android: "<id>",
      geo: {},
      publicStats: true,
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
        "<value 1>",
      ],
      comments: null,
      shortLink: "https://nocturnal-lady.info",
      qrCode: "https://aware-ad.org",
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
      createdAt: "1735078024486",
      updatedAt: "1735677741810",
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
  createdAt: "1704417485275",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1732125211331",
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
      qr: true,
      ip: "186.246.170.22",
    },
    link: {
      id: "<id>",
      domain: "shy-pine.com",
      key: "<key>",
      url: "https://happy-equal.com",
      trackConversion: true,
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      archived: false,
      expiresAt: "1756923719786",
      expiredUrl: "https://petty-coordination.com",
      password: "Sj7cH2NhvdXcJx8",
      proxy: false,
      title: "<value>",
      description: "train exhaust lightly notwithstanding functional whether",
      image: "https://loremflickr.com/1807/250?lock=739641941719050",
      video: "https://picsum.videos/seed/kQQ8WyEpG/3044/1298",
      rewrite: true,
      doIndex: true,
      ios: "<value>",
      android: "<id>",
      geo: {},
      publicStats: true,
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "red",
        },
      ],
      folderId: "<id>",
      webhookIds: [],
      comments:
        "parody qua gosh consequently content explode but colorless squiggly boohoo impassioned",
      shortLink: "https://insidious-hyphenation.net",
      qrCode: "https://astonishing-charlatan.info",
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
      createdAt: "1721110001973",
      updatedAt: "1735605221193",
      projectId: "<id>",
    },
    sale: {
      amount: 5536.15,
      currency: "Metical",
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
  createdAt: "1710696633481",
  data: {
    id: "<id>",
    name: "<value>",
    email: "Lucile_Lebsack@hotmail.com",
    image: "https://picsum.photos/seed/pQJj2H4/1538/1429",
    country: "Switzerland",
    paypalEmail: "<value>",
    stripeConnectId: "<id>",
    payoutsEnabledAt: "<value>",
    partnerId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    createdAt: "1720109851453",
    status: "rejected",
    links: [],
  },
};
```

### `components.CommissionCreatedEvent`

```typescript
const value: components.CommissionCreatedEvent = {
  id: "<id>",
  event: "commission.created",
  createdAt: "1708661168082",
  data: {
    id: "cm_1JVR7XRCSR0EDBAF39FZ4PMYE",
    amount: 3818.04,
    earnings: 5362.14,
    currency: "Dobra",
    status: "pending",
    invoiceId: "<id>",
    description:
      "in unearth whose notwithstanding store worse reboot very buzzing",
    quantity: 3318.84,
    createdAt: "1717922655598",
    updatedAt: "1735647472347",
    partner: {
      id: "<id>",
      name: "<value>",
      email: "Tanner_Goodwin36@yahoo.com",
      image: "https://loremflickr.com/887/2527?lock=8475978227242498",
      payoutsEnabledAt: "<value>",
      country: "Vanuatu",
    },
  },
};
```

