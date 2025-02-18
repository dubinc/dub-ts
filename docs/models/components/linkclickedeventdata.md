# LinkClickedEventData

## Example Usage

```typescript
import { LinkClickedEventData } from "dub/models/components";

let value: LinkClickedEventData = {
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://self-assured-soliloquy.name/",
    country: "Christmas Island",
    city: "New Jalenberg",
    region: "<value>",
    continent: "Asia",
    device: "Mobile",
    browser: "Firefox",
    os: "Chrome OS",
    referer: "winding-archaeology.name",
    refererUrl: "https://ethical-custom.net",
    ip: "253.150.236.3",
  },
  link: {
    id: "<id>",
    domain: "cruel-plumber.info",
    key: "<key>",
    url: "https://interesting-promise.name",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1743627838464",
    expiredUrl: "https://sarcastic-captain.name",
    password: "LI03qJm6fV1llDA",
    title: "<value>",
    description:
      "provided unless if upliftingly affect incidentally vamoose quiet",
    image: "https://loremflickr.com/2265/2849?lock=3401308424163538",
    video: "https://loremflickr.com/669/968?lock=4533524239184297",
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
      "for sedately over anenst hungrily mothball yowza after captain er jiggle beyond political inasmuch deduction cop ack creak exaggerate yet",
    shortLink: "https://enchanting-spirit.info",
    qrCode: "https://thin-term.name",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1717586915483",
    updatedAt: "1739777224694",
    projectId: "<id>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `click`                                                                              | [components.LinkClickedEventClick](../../models/components/linkclickedeventclick.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `link`                                                                               | [components.LinkClickedEventLink](../../models/components/linkclickedeventlink.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |