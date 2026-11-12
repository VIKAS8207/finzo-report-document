/**
 * Integrations data
 * -----------------
 * One entry per integration. The Integrations section builds an overview table and one page per
 * entry from this list, so adding or changing an integration is a one-place edit.
 *
 * Fields
 *   id           unique, lowercase, hyphens (page URL becomes /#/integration-<id>)
 *   name         display name
 *   category     Store | Analytics | Marketing   (leave out if unknown)
 *   status       'Live' | 'Coming soon' | 'Connected'
 *   description  one sentence shown in the overview and as the page intro
 *   introduced   when it was released, e.g. 'Mar 2026'      <-- fill in; shown in the right panel
 *   planned      the planned date, if any                   <-- fill in; shown in the right panel
 *
 * There are 15 integrations. Descriptions without a category come from the Integrations screen banner.
 */

export const INTEGRATIONS = [
  {
    id: 'shopify',
    name: 'Shopify',
    category: 'Store',
    status: 'Connected',
    description: 'Sync orders, products, and customer data from your Shopify store.',
    introduced: '',
    planned: '',
  },
  {
    id: 'google-analytics',
    name: 'Google Analytics',
    category: 'Analytics',
    status: 'Live',
    description: 'Track website traffic and conversion data alongside your reports.',
    introduced: '',
    planned: '',
  },
  {
    id: 'facebook-ads',
    name: 'Facebook Ads',
    category: 'Marketing',
    status: 'Live',
    description: 'Track ad spend and ROAS alongside your organic sales data.',
    introduced: '',
    planned: '',
  },
  {
    id: 'tiktok-ads',
    name: 'TikTok Ads',
    category: 'Marketing',
    status: 'Live',
    description: 'Bring TikTok ad spend into profit and ROAS reports.',
    introduced: '',
    planned: '',
  },
  {
    id: 'amazon-ads',
    name: 'Amazon Ads',
    status: 'Live',
    description: 'Pull ad spend into your reports.',
    introduced: '',
    planned: '',
  },
  {
    id: 'google-ads',
    name: 'Google Ads',
    category: 'Marketing',
    status: 'Live',
    description: 'Monitor ad performance and campaign metrics in one place.',
    introduced: '',
    planned: '',
  },
  {
    id: 'microsoft-ads',
    name: 'Microsoft / Bing Ads',
    status: 'Live',
    description: 'Pull ad spend into your reports.',
    introduced: '',
    planned: '',
  },
  {
    id: 'stripe',
    name: 'Stripe',
    status: 'Live',
    description: 'Pull payments and fees into your reports.',
    introduced: '',
    planned: '',
  },
  {
    id: 'paypal',
    name: 'PayPal',
    status: 'Live',
    description: 'Pull payments and fees into your reports.',
    introduced: '',
    planned: '',
  },
  {
    id: 'shipbob',
    name: 'ShipBob',
    status: 'Live',
    description: 'Pull fulfillment and shipping label data into your reports.',
    introduced: '',
    planned: '',
  },
  {
    id: 'shipstation',
    name: 'ShipStation',
    status: 'Live',
    description: 'Pull fulfillment and shipping label data into your reports.',
    introduced: '',
    planned: '',
  },
  {
    id: 'shiphero',
    name: 'ShipHero',
    status: 'Live',
    description: 'Pull fulfillment and shipping label data into your reports.',
    introduced: '',
    planned: '',
  },
  {
    id: 'shippo',
    name: 'Shippo',
    status: 'Live',
    description: 'Pull fulfillment and shipping label data into your reports.',
    introduced: '',
    planned: '',
  },
  {
    id: 'printful',
    name: 'Printful',
    status: 'Live',
    description: 'Pull production costs into your reports.',
    introduced: '',
    planned: '',
  },
  {
    id: 'klaviyo',
    name: 'Klaviyo',
    status: 'Live',
    description: 'Pull email and SMS campaign performance into your reports.',
    introduced: '',
    planned: '',
  },
]

/** Categories present in the list above (used for the "Filter by category" text). */
export const INTEGRATION_CATEGORIES = [...new Set(INTEGRATIONS.map((i) => i.category).filter(Boolean))]
