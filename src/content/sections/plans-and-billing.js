import { p, h2, table } from '../builders'

/** Section: Plans and billing */
export default {
  title: 'Plans and billing',
  icon: 'CreditCard',
  pages: [
    {
      id: 'plans',
      title: 'Plans and billing',
      intro: 'Reports Builder has three plans. You pay through your Shopify bill, every 30 days.',
      blocks: [
        p('Open **Select Plan** in *Settings > Account Details*, or the **Pricing** page, to compare plans and upgrade.'),
        table(
          ['', 'Free', 'Pro', 'Enterprise'],
          [
            ['Price', '$0', '$19 per 30 days', '$49 per 30 days'],
            ['Saved reports', '3', 'Unlimited', 'Unlimited'],
            ['CSV data sources', '1', '10', 'Unlimited'],
            ['CSV rows', '1,000', '50,000', 'Unlimited'],
            ['Data synced', 'Orders and Products', 'Orders, Products and Customers', 'Everything in Pro'],
            ['Filters', 'Basic filters', 'Advanced filters, joins and OR filters', 'Everything in Pro'],
            ['Calculated columns', 'No', 'Yes', 'Yes'],
            ['Export (CSV, Excel, PDF)', 'No', 'Yes', 'Yes'],
            ['Pivot tables', 'No', 'Yes', 'Yes'],
            ['API data sources', 'No', 'No', 'Yes'],
            ['Priority support', 'No', 'No', 'Yes'],
          ],
        ),
        h2('Subscription page'),
        p('The **Subscription** page (open it from the Settings menu) shows your current plan with its monthly price, and usage meters for **Saved Reports**, **CSV Data Sources** and **CSV Rows (total)**. Where a plan has no cap, the meter reads *No limit on this plan*. It also lets you manage your plan. If you move back to Free, Pro features turn off. Your saved reports stay, but new reports are limited to the Free limits.'),
        h2('Pricing page'),
        p('**Pricing** shows a card for each plan with its price and features. Your own plan is marked. On any other plan\'s card, select **Upgrade to [plan]**. Going to Free tells you that Pro features are now disabled. If the checkout fails, an error appears at the top.'),
      ],
    },
  ],
}
