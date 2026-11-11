import { p, h2, ul, ol, table, shot, note, imageRow } from '../builders'

/** Section: Getting Started */
export default {
  title: 'Getting Started',
  icon: 'Rocket',
  pages: [
    {
      id: 'first-time-setup',
      title: 'First-time setup',
      intro:
        'After you install the app from your Shopify admin, it opens in an embedded window and guides you through two short steps.',
      blocks: [
        p('Your first data sync starts on its own in the background. These two screens appear once, the first time you open the app.'),
        table(
          ['Screen', 'What you do'],
          [
            ['Welcome', 'Enter your report email address (required) and phone number. The email becomes your *Installer Email* in Account Details. Social links to the community channels sit at the top.'],
            ['Business type', 'Select the kind of store you run, mark the apps you already use, and choose **Pin Reports Builder** to add it to your Shopify navigation. You can skip this screen.'],
          ],
        ),
        p('Store types you can pick: Fashion, Electronics, Home and Garden, Food and Beverage, Beauty, Health and Fitness, Toys and Games, Pet Supplies, or Other.'),
        p('You can skip either screen, and the app will not ask again on the same browser. You can change the email later in Settings, under Account Details.'),
        shot('Welcome page'),
        shot('Business type page'),
      ],
    },
    {
      id: 'navigation-bar',
      title: 'The top bar',
      intro:
        'The top bar stays at the top of every screen. It has three parts: a title area on the left, the navigation pill in the middle, and small controls on the right.',
      blocks: [
        p('On narrow windows, the left and right parts drop to a second row under the pill.'),
        shot('Top bar with labels'),
        h2('The navigation pill'),
        p('The dark pill in the middle holds the main menu. A round icon at its left changes to match the page you are on, and a white marker slides under the active link.'),
        table(
          ['Link', 'Opens', 'Use it to'],
          [
            ['Dashboard', 'Your home screen', 'See sales, refunds, orders and sync status at a glance'],
            ['Library', 'The template catalog', 'Find a ready-made report or start a new one'],
            ['My Reports', 'Your saved reports', 'Reopen, favorite, schedule or delete a report'],
            ['Schedule', 'The schedule list', 'Set up and manage automatic deliveries'],
            ['Settings', 'The settings area', 'Manage account, data, formatting, team and billing'],
          ],
        ),
        h2('The Create new report button'),
        p('The button at the right end of the pill changes with where you are.'),
        table(
          ['Where you are', 'The button says', 'What it does'],
          [
            ['Any normal page', '**+ Create new report**', 'Starts the report setup at *Name your report*'],
            ['Creating a report', '**Back**', 'Returns you to the Library'],
            ['On a report page', '**Cancel**', 'Returns you to the page you came from, or to My Reports if you opened the report directly'],
          ],
        ),
        h2('The left and right areas'),
        p('Some screens add their own title or buttons here. For example, a report page shows its name on the left, and **Export**, **Schedule** and **Save report** on the right.'),
      ],
    },
    {
      id: 'top-bar-controls',
      title: 'Round buttons and notifications',
      intro: 'The small controls in the corner of the top bar, and the messages the app shows you.',
      blocks: [
        h2('The round buttons in the corner'),
        imageRow([
          { file: 'guide-button.png', alt: 'The Guide button' },
          { file: 'round-buttons-corner.png', alt: 'Rate your experience, Switch language and Notifications' },
        ]),
        table(
          ['Control', 'What it does'],
          [
            ['Guide', 'Replays a short tour of the page you are on. It only appears on pages that have a tour.'],
            ['Notifications', "Opens a list of recent events. It reads *You're all caught up* when there is nothing new."],
            ['Rate your experience (star)', "Opens the app's page on the Shopify App Store so you can write a review"],
            ['Switch language', 'Opens the language list. English is the only language today.'],
          ],
        ),
        h2('What appears in Notifications'),
        p('Each notification has a title, a short message, a time and a colored dot for success, information, warning or error. The titles are:'),
        ul([
          '**Data Sync**: a sync finished or failed.',
          '**Report Created**: a new report was saved.',
          '**CSV Uploaded**: a data source was added.',
          '**Report Exported**: a file was downloaded.',
          '**Webhook**: Shopify sent an update, or one failed.',
          '**Alert**: something needs attention, such as stale data.',
          '**Team**: a teammate was invited, changed or removed.',
        ]),
        p('Notifications you have opened are marked as read for your store.'),
        h2('Messages you may see'),
        p('The app shows short pop-up messages at the bottom of the screen after actions such as saving, exporting or syncing. Warnings and confirmations, such as *Delete this report?*, appear in a dialog that you must answer. After you have used the app for a while, it may also ask whether you would like to leave a review. You can say no.'),
      ],
    },
    {
      id: 'dashboard',
      title: 'The Dashboard',
      intro: 'The Dashboard is the first screen after install. It shows how your store is doing and gets you to your reports quickly.',
      blocks: [
        shot('Dashboard with numbered callouts'),
        h2('1. Greeting and sync card'),
        p("At the top, you see a greeting that follows the time of day (*Good morning*, *Good afternoon* or *Good evening*), your store name, and the line *Here's how your store is doing today.* On the right, the **sync card** shows when your data last synced and whether a sync is running. Use its refresh button to start a sync now."),
        p('If you are on a trial or have not chosen a plan, a banner offers a link to choose one.'),
        h2('2. The four number cards'),
        p('Each card compares the **last 30 days** with the **30 days before that**. A small arrow and percentage show whether the number went up or down.'),
        table(
          ['Card', 'What it counts'],
          [
            ['Total Sales', 'The sum of order totals in the last 30 days'],
            ['Refunds', 'The total value of refunded orders in the last 30 days'],
            ['Order Count', 'The number of orders in the last 30 days'],
            ['Repeat Customer', 'The number of customers who have ordered more than once. The bar under it shows what share of all your customers that is.'],
          ],
        ),
        p('The Repeat Customer card shows no up or down arrow, because it counts all customers rather than a 30-day period.'),
        h2('3. Trend chart'),
        p('The chart under the cards shows your monthly sales for the last nine calendar months, so you can spot a busy or slow season.'),
        h2('4. The three lists'),
        table(
          ['List', 'What it shows', 'Link'],
          [
            ['Popular Reports', 'Six suggested templates to start from', '**View all** opens the Library'],
            ['Favorite Reports', 'The reports you starred, up to six, newest first', '**View all** opens My Reports'],
            ['Recent Activity', 'Your last ten events: syncs, new reports, exports, uploads and team changes', 'None'],
          ],
        ),
        p('Select any report in a list to open it. Star a report in My Reports to make it appear under Favorite Reports.'),
        h2('First visit'),
        p('The first time you open the app, the Dashboard sends you to the **Welcome** screen and then the **Business type** screen. You can skip both. See First-time setup.'),
      ],
    },
    {
      id: 'first-report',
      title: 'Build your first report in five minutes',
      intro: 'Go from the Library to a saved, exported report in a few steps.',
      blocks: [
        ol([
          'Open **Library** and search for a report, for example *Sales Over Time*.',
          'Select it to open the report. The table fills with your synced data.',
          'Pick a **date range** from the toolbar, such as *Last 30 days*.',
          'Add a **filter** or change the **columns** if you want a narrower view.',
          'Select **Save report**, give the report a name, and find it later in **My Reports**.',
          'Use **Export** to download it, or **Schedule** to have it sent automatically. A report must be saved before you can schedule it.',
        ]),
        note('The Free plan allows 3 saved reports and does not include export. See Plans and billing.'),
      ],
    },
  ],
}
