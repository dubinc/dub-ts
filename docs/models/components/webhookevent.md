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
    expiresAt: "1764304535711",
    expiredUrl: "https://red-mobility.biz/",
    disabledAt: "<value>",
    password: "CJcSX4FfG7ytmNw",
    proxy: true,
    title: "<value>",
    description: "far-off reluctantly however consequently how dicker meander",
    image: "https://picsum.photos/seed/CIED2tKc/1414/3938",
    video: "https://loremflickr.com/94/2074?lock=4301890640176151",
    rewrite: false,
    doIndex: true,
    ios: "<value>",
    android: "<id>",
    geo: {
      "key": "https://jam-packed-pacemaker.info/",
      "key1": "https://poor-makeover.biz/",
    },
    publicStats: false,
    tags: [],
    folderId: null,
    comments:
      "repeatedly confusion gestate dish a daughter ick oof newsstand however remand afore against",
    shortLink: "https://robust-thorn.org",
    qrCode: "https://querulous-taxicab.net",
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
    createdAt: "1726755003688",
    updatedAt: "1735638431801",
    tagId: "<id>",
    projectId: "<id>",
    webhookIds: [],
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
      expiresAt: "1748510661544",
      expiredUrl: "https://defensive-completion.info/",
      disabledAt: "<value>",
      password: "NfAdxcJ8x1yhk1V",
      proxy: true,
      title: null,
      description: "grown of excitedly",
      image: "https://loremflickr.com/2867/1856?lock=5419092239830524",
      video: null,
      rewrite: true,
      doIndex: true,
      ios: "<value>",
      android: "<id>",
      geo: null,
      publicStats: true,
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "gray",
        },
      ],
      folderId: "<id>",
      comments:
        "concerning ingratiate peninsula suddenly devil cluttered whereas which slipper cow pfft",
      shortLink: "https://fatherly-suspension.name",
      qrCode: "https://normal-department.name/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      testStartedAt: "<value>",
      testCompletedAt: null,
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1729687608845",
      updatedAt: "1735648996941",
      tagId: "<id>",
      projectId: "<id>",
      webhookIds: [],
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
      expiresAt: "1765732568841",
      expiredUrl: "https://vague-countess.com",
      disabledAt: "<value>",
      password: null,
      proxy: false,
      title: "<value>",
      description: null,
      image: "https://loremflickr.com/3765/1801?lock=3854912832820743",
      video: "https://loremflickr.com/921/3490?lock=5933009536348657",
      rewrite: false,
      doIndex: true,
      ios: "<value>",
      android: "<id>",
      geo: {
        "key": "https://intelligent-wilderness.name",
      },
      publicStats: false,
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "gray",
        },
      ],
      folderId: "<id>",
      comments:
        "owlishly subtle pace dandelion private unabashedly well-to-do final lowball banish lobotomise faithfully than spirit",
      shortLink: "https://posh-technician.com",
      qrCode: "https://stiff-icebreaker.com",
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
      createdAt: "1704331087084",
      updatedAt: "1735654004218",
      tagId: "<id>",
      projectId: "<id>",
      webhookIds: [
        "<value 1>",
      ],
    },
    metadata: null,
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
      expiresAt: "1751272046232",
      expiredUrl: "https://determined-attraction.name",
      disabledAt: "<value>",
      password: "7cH2NhvdXcJx8oD",
      proxy: true,
      title: "<value>",
      description: "wearily lest however modulo duh inure victoriously since",
      image: "https://loremflickr.com/1652/2737?lock=2556335483984583",
      video: "https://loremflickr.com/1614/1497?lock=3783715632725390",
      rewrite: true,
      doIndex: false,
      ios: "<value>",
      android: null,
      geo: {
        "key": "https://last-lyre.biz/",
      },
      publicStats: true,
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "gray",
        },
      ],
      folderId: "<id>",
      comments:
        "gah whenever aha inasmuch phooey develop eek irritably hmph meanwhile neaten luck swill sandy",
      shortLink: "https://untried-solvency.biz",
      qrCode: "https://light-interior.net",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      testStartedAt: "<value>",
      testCompletedAt: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: null,
      createdAt: "1710144087859",
      updatedAt: "1735605370430",
      tagId: "<id>",
      projectId: "<id>",
      webhookIds: [],
    },
    sale: {
      amount: 5853.24,
      currency: "Cordoba Oro",
      paymentProcessor: "<value>",
      invoiceId: "<id>",
    },
    metadata: {
      "key": "<value>",
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
    username: "Reed_Jacobs",
    email: "Gerda41@gmail.com",
    image: "https://picsum.photos/seed/8RrOo/1283/193",
    country: "Lesotho",
    companyName: "Kassulke - Renner",
    networkStatus: "trusted",
    defaultPayoutMethod: "connect",
    paypalEmail: "<value>",
    stripeConnectId: "<id>",
    payoutsEnabledAt: "<value>",
    identityVerifiedAt: "<value>",
    programId: "<id>",
    partnerId: "<id>",
    tenantId: "<id>",
    createdAt: "1709378397355",
    status: "deactivated",
    links: [
      {
        id: "<id>",
        domain: "worthwhile-pop.org",
        key: "<key>",
        shortLink: "https://colossal-extent.name",
        url: "https://cooperative-netsuke.com/",
      },
    ],
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
    link: {
      id: "<id>",
      shortLink: "https://infamous-boyfriend.net",
      domain: "bad-contractor.org",
      key: "<key>",
    },
  },
};
```

### `components.DiscountCodeWebhookEvent`

```typescript
const value: components.DiscountCodeWebhookEvent = {
  id: "<id>",
  event: "discount_code.created",
  createdAt: "1718465391393",
  data: {
    id: "dcode_1JVR7XRCSR0EDBAF39FZ4PMYE",
    code: "PARTNER10OFF",
    partnerId: "<id>",
    linkId: "<id>",
    discount: null,
  },
};
```

