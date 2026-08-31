export const sitePolicy = {
  defaultLocale: 'en',
  supportedLocales: ['en'],
  contentOwners: {
    portfolio: 'Ookkaayy product stewardship',
    documentation: 'Owning product repository maintainers',
    releases: 'Release engineering',
    security: 'Security and privacy review',
  },
  performanceBudgets: {
    clientJavaScriptBytes: 420_000,
    clientCssBytes: 40_000,
    productScreenshotBytes: 100_000,
    socialImageBytes: 2_500_000,
  },
  screenshotDigests: {
    search: '9c4cdf251abaa422602191225103ed2f7d5c030a42c6b38552eb34db5949e689',
    version: '84b98fed154c9bb26a38af36dbe57c345d2f3e3c485c03a7b055d0331a787b94',
    wiki: '28784f95c13a1932a613ba75ded27593dba875efd468cb8bee5d775566a30b33',
  },
} as const;
