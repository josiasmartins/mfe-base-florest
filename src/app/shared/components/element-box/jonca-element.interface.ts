export class IJoncaElement {
  id: string;
  tag: string;
  path: string;
  host: string;
  config: unknown;
  files?: string[];
  port: string;
  deeplink?: DeepLink[]
}
export class DeepLink {
  url: string;
  title: string;
  route: string;
  home?: boolean;
}
