# GetQRCodeRequest

## Example Usage

```typescript
import { GetQRCodeRequest } from "dub/models/operations";

let value: GetQRCodeRequest = {
  url: "https://quarrelsome-kinase.com/",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `url`                                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | The URL to generate a QR code for.                                                             |
| `logo`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | The logo to include in the QR code. Can only be used with a paid plan on Dub.co.               |
| `size`                                                                                         | *number*                                                                                       | :heavy_minus_sign:                                                                             | The size of the QR code in pixels. Defaults to `600` if not provided.                          |
| `level`                                                                                        | [operations.Level](../../models/operations/level.md)                                           | :heavy_minus_sign:                                                                             | The level of error correction to use for the QR code. Defaults to `L` if not provided.         |
| `fgColor`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | The foreground color of the QR code in hex format. Defaults to `#000000` if not provided.      |
| `bgColor`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | The background color of the QR code in hex format. Defaults to `#ffffff` if not provided.      |
| `hideLogo`                                                                                     | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Whether to hide the logo in the QR code. Can only be used with a paid plan on Dub.co.          |
| `margin`                                                                                       | *number*                                                                                       | :heavy_minus_sign:                                                                             | The size of the margin around the QR code. Defaults to 2 if not provided.                      |
| `includeMargin`                                                                                | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | DEPRECATED: Margin is included by default. Use the `margin` prop to customize the margin size. |