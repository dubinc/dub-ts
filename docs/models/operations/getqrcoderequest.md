# GetQRCodeRequest

## Example Usage

```typescript
import { GetQRCodeRequest } from "dub/models/operations";

let value: GetQRCodeRequest = {
    url: "https://jolly-cowboy.name",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `url`                                                                                     | *string*                                                                                  | :heavy_check_mark:                                                                        | The URL to generate a QR code for.                                                        |
| `size`                                                                                    | *number*                                                                                  | :heavy_minus_sign:                                                                        | The size of the QR code in pixels. Defaults to `600` if not provided.                     |
| `level`                                                                                   | [operations.Level](../../models/operations/level.md)                                      | :heavy_minus_sign:                                                                        | The level of error correction to use for the QR code. Defaults to `L` if not provided.    |
| `fgColor`                                                                                 | *string*                                                                                  | :heavy_minus_sign:                                                                        | The foreground color of the QR code in hex format. Defaults to `#000000` if not provided. |
| `bgColor`                                                                                 | *string*                                                                                  | :heavy_minus_sign:                                                                        | The background color of the QR code in hex format. Defaults to `#ffffff` if not provided. |
| `includeMargin`                                                                           | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Whether to include a margin around the QR code. Defaults to `false` if not provided.      |