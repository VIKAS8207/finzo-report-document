/**
 * Integration detail pages
 * ------------------------
 * Integrations listed in src/content/integrations.js get a short generic page by default.
 * To give one a full write-up, add an entry here keyed by its id:
 *
 *   'google-analytics': { intro: '...', blocks: [ ... ] }
 *
 * `intro` replaces the one-line intro; `blocks` replaces the generic body.
 * Screenshot slots (`shot('...')`) fill in when an image named after the label is added to
 * src/assets/media/images (lowercase, hyphens), e.g. 'Select a Google account' -> select-a-google-account.png
 */
import { p, h2, ul, note, shot } from './builders'

export const INTEGRATION_DETAILS = {
  'google-analytics': {
    intro: 'Learn more about how to connect your Google Analytics account to Reports Builder.',
    blocks: [
      note('**Note:** To gather GA4 data, your Google Analytics account should be integrated with your Shopify store.'),
      h2('Why You Should Use the Google Analytics Report'),
      p("Google Analytics reports let you track your marketing funnel's performance over time. You can examine each stage of your customer's journey, from visitor arrival to order completion. Analyzing this data with Shopify's revenue figures gives a comprehensive view of your store's health."),
      ul([
        'Analyze top marketing channels, compare them to your leading sales channels for effective budget allocation.',
        'Track metrics for both new and returning shop visitors, noting checkout process drop-offs at billing, payment, or confirmation stages.',
        'Review Google Analytics for your daily ad spend, cost per click, sessions, bounces, hits, user types, and accurate order count. Also, learn about cart and checkout abandonments.',
      ]),
      p('So, the Google Analytics report is your key to unlocking your marketing and overall business potential.'),
      h2('Steps to Integrate Google Analytics'),
      p('1. Navigate to the **Integrations** page using the navigation bar at the top.'),
      shot('Google Analytics on the Integrations page'),
      p('2. Select **Google Analytics** and click on **Sign in with Google.**'),
      p("3. Select the Google account to be integrated. If it isn't on the list, click on **Use another account** and enter the account details."),
      shot('Select a Google account'),
      p("4. You'll see a message asking for permission to grant access to Reports Builder. Simply click the **Continue** button to proceed."),
      shot('Grant access to Reports Builder'),
      p('5. Your Google account has been successfully integrated. Finally, select the appropriate Account & Property option and click **Save.**'),
      shot('Google Analytics connected'),
      p('Reports Builder has pre-created visitor metrics reports such as *Google User type*, *Google Source*, *Google Medium*, and *Google Campaign*. Additionally, you can create a custom report from the Reports Dashboard.'),
      note("Great job! You're all done."),
    ],
  },

  /* ------------------------------ Advertising ------------------------------ */

  'facebook-ads': {
    intro: 'Learn how to connect your Facebook (Meta) account to Reports Builder to see ad performance next to your store data.',
    blocks: [
      p('The integration shows performance for each ad in each of your Facebook campaigns: clicks, reach, impressions, conversion value and video watch time.'),
      p('Connecting also brings in your Facebook marketing cost, so you can see CPM, CPC, CPP, CTR, impressions, reach, social spend and total spend in your reports.'),
      h2('Steps to connect your Facebook account'),
      p('1. Open the **Integrations** page using the navigation bar at the top, then select **Facebook Ads**.'),
      shot('Facebook Ads on the Integrations page'),
      p('2. Click **Connect**.'),
      p('3. A screen asks what Reports Builder is allowed to do. Choose the settings you want to allow and click **Done**.'),
      shot('Facebook permissions screen'),
      p("4. On the last screen, click **OK** on the message that confirms Reports Builder is now linked to Facebook."),
      note('**Note:** After connecting, run a sync so the Facebook data comes in: open *Settings > Data Sync* and select **Sync Now**. It takes a few minutes for the Facebook data to arrive.'),
      note("Great job! You're all done."),
    ],
  },

  'tiktok-ads': {
    intro: 'Learn how to connect TikTok Business to Reports Builder to bring your TikTok ad campaign data into your reports.',
    blocks: [
      p('TikTok Business uses the popularity of short-form video to help online merchants run ad campaigns that get a brand and its products noticed and grow a Shopify business.'),
      p('TikTok is a fast-growing platform, and its short videos make it a strong channel for eCommerce marketing. Reports Builder connects to TikTok Business so you can see how those campaigns perform.'),
      p('The integration brings accurate campaign data into your reports, including user data, ad clicks, conversion rates and more.'),
      h2('How to integrate TikTok Ads with Reports Builder'),
      p('Here are the steps:'),
      p('1. Click **Integrations** in the navigation bar.'),
      p('2. Find the **TikTok Ads** option. If you cannot see it, scroll until you find it.'),
      p('3. Click its card to show the **Connect** button.'),
      p('4. Click **Connect** and follow the on-screen instructions to link the two apps.'),
      shot('Connecting TikTok Ads'),
      note('Your TikTok account is now integrated with Reports Builder.'),
    ],
  },

  'amazon-ads': {
    intro: 'Learn how to connect Amazon Ads to Reports Builder to bring your ad performance into your Shopify reports.',
    blocks: [
      p('Amazon Ads gives registered sellers a wide range of advertising products for use on Amazon and other channels.'),
      p('The Amazon Ads integration brings your ad performance data straight into your reports, so you can see how campaigns perform across your ad channels, including Amazon.'),
      p('You can drill into individual campaigns, such as a special sale period, to learn about strategy, target audience, ad spend and brand value.'),
      h2('How to integrate Amazon Ads with Reports Builder'),
      p('Here are the steps:'),
      p('1. Click **Integrations** in the navigation bar.'),
      p('2. Find the **Amazon Ads** option. If you cannot see it, scroll until you find it.'),
      p('3. Click it, then click the **Connect** button.'),
      p('4. Follow the on-screen instructions to log in to your Amazon seller account and link the two apps.'),
      shot('Connecting Amazon Ads'),
      note("Once confirmed, you're ready to get reports that contain Amazon Ads data."),
    ],
  },

  'google-ads': {
    intro: 'Learn how to connect Google Ads to Reports Builder to see how well your ad campaigns perform.',
    blocks: [
      p('Google Ads shows how well your ad campaigns perform. It provides metrics such as CTR, cost per conversion and conversion value, which you can use to judge how efficient and profitable your campaigns are.'),
      h2('Steps to integrate Google Ads'),
      p('1. Open the **Integrations** page using the navigation bar and select **Google Ads**.'),
      shot('Google Ads on the Integrations page'),
      p('2. Select the Google account you want to integrate.'),
      shot('Select a Google account for Google Ads'),
      p("3. A message asks for permission to give Reports Builder access. Click the **Continue** button to proceed."),
      shot('Grant Google Ads access to Reports Builder'),
      p('4. Your Google Ads account is now integrated.'),
      shot('Google Ads connected'),
      p('Now you can start creating reports. If you have questions, contact our team for help.'),
    ],
  },

  'microsoft-ads': {
    intro: 'Learn how to connect Microsoft / Bing Ads to Reports Builder for data-driven ad campaign management.',
    blocks: [
      p('Microsoft Ads (Bing Ads) is Microsoft\'s digital advertising platform. It helps brands increase their visibility and reach. Reports Builder connects to it so you can manage ad campaigns with real data.'),
      p("With Microsoft Ads you control campaigns across Microsoft's Search Network, which includes the Bing, Yahoo and MSN search engines and Microsoft's partner sites."),
      p('Connecting it to Reports Builder gives you deep insight into your pay-per-click campaigns, so you can fine-tune ads, understand your audience better, and adjust budget and messaging for a better return on ad spend.'),
      h2('How to integrate Microsoft / Bing Ads with Reports Builder'),
      p('Here are the steps:'),
      p('1. Click **Integrations** in the navigation bar.'),
      p('2. Find the **Microsoft / Bing Ads** option. If you cannot see it, scroll until you find it.'),
      p('3. Click it, then click the **Connect** button.'),
      p('4. Follow the on-screen instructions to log in to your Microsoft account and link the two apps.'),
      shot('Connecting Microsoft Bing Ads'),
      note("Once confirmed, you're ready to get reports that contain Bing Ads data."),
    ],
  },

  /* ------------------------------ Payments ------------------------------ */

  stripe: {
    intro: 'Stripe provides payment processing software and an API for online stores. Connect it to see your Stripe payments in your reports.',
    blocks: [
      h2('Steps to integrate Stripe with Reports Builder'),
      p('1. Go to the **Integrations** page from the navigation bar at the top, then click **Stripe** in the list.'),
      shot('Stripe on the Integrations page'),
      p('2. Enter your Stripe **Account Name** and **Secret Key**, then click **Connect**.'),
      shot('Enter your Stripe account name and secret key'),
      h2('Where can you find the Secret Key?'),
      p('Your Secret Key is in your Stripe dashboard, on the **API keys** page of your account.'),
      shot('Finding the Stripe secret key'),
      note("That's it! You're all done."),
    ],
  },

  paypal: {
    intro: 'Learn how to connect a PayPal account to Reports Builder to see your PayPal payments in your reports.',
    blocks: [
      note('**Note:** To connect PayPal you need your PayPal **Client ID** and **Secret Key**. The steps below show how to get them.'),
      h2('How to get your PayPal login details (Client ID and Secret Key)'),
      p('1. Log in to your PayPal developer account.'),
      p('2. On the left side, click **My apps and credentials**.'),
      shot('PayPal My apps and credentials'),
      p('3. Under **My apps & credentials**, switch on the **Live** option.'),
      p('4. Click the **Create App** button.'),
      shot('PayPal Create App'),
      p('5. Enter **Reports Builder** as the app name and click **Create App**.'),
      p('6. PayPal now generates a **Client ID** and a **Secret Key**.'),
      p('7. Find the Client ID and Secret Key under your new app.'),
      shot('PayPal Client ID and Secret Key'),
      p('8. Tick the app features **Accept payments**, **Invoicing**, **Payouts**, **Customer Disputes** and **Transaction Search**, then save the settings.'),
      shot('PayPal app features'),
      p('You now have your Client ID and Secret Key. Add them to the PayPal integration on the **Integrations** page.'),
    ],
  },

  /* ------------------------------ Shipping ------------------------------ */

  shipstation: {
    intro: 'Learn how to connect ShipStation to Reports Builder to bring your fulfillment and shipping data into your reports.',
    blocks: [
      h2('Steps to integrate ShipStation with Reports Builder'),
      p('1. Go to the **Integrations** page from the navigation bar at the top.'),
      p('2. Select **ShipStation** from the list of integrations.'),
      shot('ShipStation on the Integrations page'),
      p('3. Complete the setup with your API credentials. Copy the **API Key** and **API Secret** from ShipStation, paste them into the fields in the ShipStation integration window, and click **Connect** to save them.'),
      shot('Enter your ShipStation API key and secret'),
      h2('How do I get my API Key and API Secret?'),
      p('1. Log in to ShipStation. If you do not have an account yet, click **Try ShipStation** to create one.'),
      shot('ShipStation login'),
      p('2. At the top right, click your **Profile** icon, then select **My Profile & API settings**.'),
      shot('ShipStation My Profile and API settings'),
      p('3. Click **Generate API keys**. Your API Key and API Secret appear. Copy them into the ShipStation integration in Reports Builder.'),
      p('4. Click **Connect** to link Reports Builder with ShipStation.'),
    ],
  },

  shiphero: {
    intro: 'Learn how to connect your ShipHero account to Reports Builder to bring your fulfillment data into your reports.',
    blocks: [
      h2('Steps to integrate your ShipHero account with Reports Builder'),
      p('1. Go to the **Integrations** page from the navigation bar at the top.'),
      p('2. Select **ShipHero** from the list of integrations.'),
      shot('ShipHero on the Integrations page'),
      p('3. Enter your ShipHero **Username** and **Password**.'),
      shot('Enter your ShipHero username and password'),
      p('4. Click **Connect**.'),
    ],
  },

  shippo: {
    intro: 'Learn how to connect Shippo to Reports Builder to bring your shipping data into your reports.',
    blocks: [
      h2('Steps to integrate Shippo with Reports Builder'),
      p('1. Go to the **Integrations** page from the navigation bar at the top, then click **Shippo** in the list of integrations.'),
      shot('Shippo on the Integrations page'),
      p('2. Enter your **API Token**, then click **Connect**.'),
      shot('Enter your Shippo API token'),
      h2('How can I find the API Token?'),
      p('1. **Go to the API page.** In your Shippo dashboard, click **Settings** in the left navigation, then **API**. Both your Live and Test tokens are on this page.'),
      p('2. **Generate a token.** Use the **Generate Token** button in the Live Tokens section for a live token, or in the Test Tokens section for a test token. Live tokens are for real use. Test tokens are for trying the API end to end and buying test shipping labels, and your carrier accounts must also be in test mode.'),
      shot('Generate a Shippo token'),
      p('3. **Save the token.** Tokens are masked and cannot be shown again later. You can see a token only once, when you generate it, so copy and save it then. If you lose it, generate a new one.'),
      shot('Shippo token shown once'),
      note("That's it! You're all done."),
    ],
  },

  printful: {
    intro: 'Learn how to connect Printful to Reports Builder to bring your production costs into your reports.',
    blocks: [
      p('Printful is a print-on-demand service for dropshipping custom-printed products. Merchants can use it to gather data for better business decisions.'),
      p('Printful ships to many locations worldwide, which makes selling internationally simple for Shopify merchants. Connecting Shopify to Printful lets Printful print, package and ship your orders with little effort.'),
      p('Connecting Printful to Reports Builder gives you full visibility of your costs. Reports Builder fetches the data you need and presents it in a custom report.'),
      h2('How to integrate Printful with Reports Builder'),
      p('Here are the steps:'),
      p('1. Click **Integrations** in the navigation bar.'),
      p('2. Find the **Printful** option. If you cannot see it, scroll until you find it.'),
      p('3. Click its card, then click the **Connect** button.'),
      p('4. Follow the on-screen instructions to log in to your Printful account and link the two apps.'),
      shot('Connecting Printful'),
      note("Once confirmed, you're ready to get reports with your Printful data."),
    ],
  },
}
