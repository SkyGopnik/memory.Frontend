declare module "*.svg" {
  import React = require("react");
  const src: React.FC<React.SVGProps<SVGSVGElement>>;
  export default src;
}

declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";

declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}
