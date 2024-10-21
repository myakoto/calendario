/* eslint-disable @typescript-eslint/no-require-imports */
module.exports = {
  plugins: [
    require('postcss-sorting')({
      "order": [
        "custom-properties",
        "dollar-variables",
        "declarations",
        {
          "type": "at-rule",
          "name": "media"
        },
        "rules"
      ],
      "properties-order": [
        "display",
        "position",
        "top",
        "right",
        "bottom",
        "left",
        "z-index",
        "width",
        "height",
        "margin",
        "padding",
        "font-size",
        "color",
        "background",
        "border",
        "box-shadow"
      ],
      "unspecified-properties-position": "bottom"
    })
  ]
};
