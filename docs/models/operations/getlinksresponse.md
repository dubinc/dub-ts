# GetLinksResponse

## Example Usage

```typescript
import { GetLinksResponse } from "dub/models/operations";

let value: GetLinksResponse = {
    result: [
        {
            id: "<id>",
            domain: "terrible-nutrient.org",
            key: "<key>",
            externalId: "<value>",
            url: "https://that-hellcat.name",
            expiresAt: "<value>",
            expiredUrl: "https://high-hound.biz",
            password: "uENlnSNVFxpACpj",
            title: "<value>",
            description: "Customizable systemic strategy",
            image: "https://loremflickr.com/640/480",
            video: "<value>",
            ios: "<value>",
            android: "<value>",
            geo: {},
            tagId: "<value>",
            tags: [
                {
                    id: "<id>",
                    name: "<value>",
                    color: "brown",
                },
            ],
            comments: "<value>",
            shortLink: "http://starchy-shorts.info",
            qrCode: "https://soulful-poppy.com",
            utmSource: "<value>",
            utmMedium: "<value>",
            utmCampaign: "<value>",
            utmTerm: "<value>",
            utmContent: "<value>",
            userId: "<value>",
            workspaceId: "<value>",
            lastClicked: "<value>",
            createdAt: "<value>",
            updatedAt: "<value>",
            projectId: "<value>",
        },
    ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `result`                                                         | [components.LinkSchema](../../models/components/linkschema.md)[] | :heavy_check_mark:                                               | N/A                                                              |