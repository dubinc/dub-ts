# PartnerMergedEvent

Triggered when two partner accounts are merged. Fired once per program the source partner was enrolled in.

## Example Usage

```typescript
import { PartnerMergedEvent } from "dub/models/components";

let value: PartnerMergedEvent = {
  id: "<id>",
  event: "partner.merged",
  createdAt: "1731607257009",
  data: {
    sourcePartner: {
      id: "<id>",
      tenantId: null,
      email: "Kim.Heathcote83@hotmail.com",
    },
    targetPartner: {
      id: "<id>",
      tenantId: "<id>",
      email: "Orrin_McLaughlin@hotmail.com",
    },
    targetAlreadyEnrolled: true,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `event`                                                                                  | [components.PartnerMergedEventEvent](../../models/components/partnermergedeventevent.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createdAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `data`                                                                                   | [components.PartnerMergedEventData](../../models/components/partnermergedeventdata.md)   | :heavy_check_mark:                                                                       | N/A                                                                                      |