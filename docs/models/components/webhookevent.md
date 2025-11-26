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
    disabledAt: "<value>",
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
    geo: {
      "key": "https://idealistic-populist.com/",
      "key1": "https://grounded-hubris.name",
    },
    publicStats: true,
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "blue",
      },
    ],
    folderId: "<id>",
    webhookIds: [],
    comments:
      "drat airport replacement creak marketplace colorfully miserably testing adjudge procurement",
    shortLink: "https://pertinent-amendment.biz",
    qrCode: "https://surprised-procurement.com",
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
    createdAt: "1704389044965",
    updatedAt: "1735618206363",
    tagId: "<id>",
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
      disabledAt: "<value>",
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
      geo: {
        "key": "https://chilly-chainstay.info",
        "key1": "https://wretched-provision.info/",
        "key2": "https://perfumed-adrenalin.com/",
      },
      publicStats: true,
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "blue",
        },
      ],
      folderId: null,
      webhookIds: [],
      comments:
        "yum impartial phew rewarding always taro hastily whereas though shrilly lovingly pish ham for plain whether aboard",
      shortLink: "https://windy-cantaloupe.biz/",
      qrCode: "https://husky-cinder.com/",
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
      createdAt: "1728121349636",
      updatedAt: "1735614256942",
      tagId: "<id>",
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
      disabledAt: "<value>",
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
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "blue",
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
      createdAt: "1718277940029",
      updatedAt: "1735669799346",
      tagId: "<id>",
      projectId: "<id>",
    },
    metadata: {
      "key": "<value>",
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
      disabledAt: "<value>",
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
      geo: {
        "key": "https://little-skyscraper.info/",
      },
      publicStats: true,
      tags: [],
      folderId: "<id>",
      webhookIds: [
        "<value 1>",
      ],
      comments: "excepting restfully harvest sway stealthily duh punctuation",
      shortLink: "https://weird-catalyst.net/",
      qrCode: "https://physical-reward.org",
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
      createdAt: "1725341048612",
      updatedAt: "1735644237613",
      tagId: "<id>",
      projectId: "<id>",
    },
    sale: {
      amount: 4294.12,
      currency: "Solomon Islands Dollar",
      paymentProcessor: "<value>",
      invoiceId: "<id>",
    },
    metadata: {
      "key": "<value>",
      "key1": "<value>",
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
    companyName: "Nikolaus, Jacobs and Lebsack",
    email: "Guido.Hoppe@yahoo.com",
    image: "https://loremflickr.com/3404/2942?lock=434582497137521",
    country: "Bahamas",
    paypalEmail: "<value>",
    stripeConnectId: "<id>",
    payoutsEnabledAt: "<value>",
    trustedAt: "<value>",
    programId: "<id>",
    partnerId: "<id>",
    tenantId: "<id>",
    createdAt: "1717766268005",
    status: "declined",
    links: [],
  },
};
```

### `components.PartnerApplicationSubmittedEvent`

```typescript
const value: components.PartnerApplicationSubmittedEvent = {
  id: "<id>",
  event: "partner.application_submitted",
  createdAt: "1728987158922",
  data: {
    id: "<id>",
    createdAt: "1723110420262",
    partner: {
      id: "<id>",
      name: "<value>",
      companyName: "Gottlieb LLC",
      email: "Kraig17@hotmail.com",
      image: "https://picsum.photos/seed/9eRYaSj/2354/2034",
      country: "Sierra Leone",
      status: "approved",
    },
    applicationFormData: [
      {
        label: "<value>",
        value: null,
      },
    ],
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
      totalClicks: 4338.81,
      totalLeads: 9031.25,
      totalConversions: 7982.05,
      totalSales: 4176.67,
      totalSaleAmount: 6883.26,
      totalCommissions: 6180.26,
    },
  },
};
```

