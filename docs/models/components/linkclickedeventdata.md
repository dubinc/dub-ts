# LinkClickedEventData

## Example Usage

```typescript
import { LinkClickedEventData } from "dub/models/components";

let value: LinkClickedEventData = {
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://innocent-rawhide.biz/",
    country: "France",
    city: "Port Danial",
    region: "<value>",
    continent: "Australia",
    device: "Mobile",
    browser: "Safari",
    os: "Android",
    referer: "sniveling-validity.info",
    refererUrl: "https://blue-teammate.com",
    ip: "138.67.166.141",
  },
  link: {
    id: "<id>",
    domain: "secondary-forgery.name",
    key: "<key>",
    url: "https://stunning-providence.name",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1761415975297",
    expiredUrl: "https://limping-strategy.name/",
    password: "z9k9TnkPPgJHrmg",
    title: "<value>",
    description: "midwife unless separate",
    image: "https://loremflickr.com/1521/3448?lock=2845416063452535",
    video: "https://picsum.videos/seed/biSsdj/3094/1343",
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
      "etch scorpion hence woot saloon bah aw geez affectionate obvious nor anaesthetise option expostulate sanity till wholly",
    shortLink: "https://frivolous-obligation.biz",
    qrCode: "https://superficial-pick.name/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1713131576736",
    updatedAt: "1740130217917",
    projectId: "<id>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `click`                                                                              | [components.LinkClickedEventClick](../../models/components/linkclickedeventclick.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `link`                                                                               | [components.LinkClickedEventLink](../../models/components/linkclickedeventlink.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |