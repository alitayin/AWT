export const tokenId =
  "4d428e29ae4d098e9acd6e5a517fdc07aa4e061cd18a1981c935106dc7ab1bb0";

export const tokenIdShort = `${tokenId.slice(0, 8)}...${tokenId.slice(-8)}`;

export const awtTokenUrl = `https://cashtab.com/#/token/${tokenId}`;

export const agoraTokenUrl = `https://www.agora.cash/${tokenId}`;

export const contactUrl = "https://t.me/alitayin";

export const tokenFacts = [
  {
    label: "Token",
    value: "Alita Work Token",
  },
  {
    label: "Unit",
    value: "1 AWT = 1 hour",
  },
  {
    label: "Rate",
    value: "2.5M XEC / hour",
  },
  {
    label: "Current deal",
    value: "65% off my standard rate",
  },
  {
    label: "Minimum",
    value: "4 AWT",
  },
] as const;

export const serviceAreas = [
  "Design, UI, and UX services",
  "macOS, Windows, website, and iOS app development",
  "eCash product development",
  "AI and agent product development",
  "Asia-Pacific BD, fundraising, and investment consulting",
  "Social media operations consulting for fashion, aesthetics, lifestyle brands, and SaaS products",
  "Supply chain consulting for lifestyle categories such as shoes, apparel, and outdoor goods",
  "More service areas to be added",
] as const;

export const estimateExamples = [
  {
    title: "One month of Alita work time",
    detail:
      "The weekly consumption cap is 50 hours, so 200 AWT represents one working month.",
    value: "200 AWT",
  },
  {
    title: "Automated ecosystem backend and app",
    detail:
      "A constant-price backend service and app similar in scope to XECx or Firma.",
    value: "200 AWT",
  },
  {
    title: "Minimal modern web eCash wallet",
    detail: "A focused browser wallet with a refined modern interface.",
    value: "50 AWT",
  },
  {
    title: "Minimal modern multi-platform eCash wallet",
    detail: "A wallet experience spanning web and native platforms.",
    value: "200 AWT",
  },
] as const;
