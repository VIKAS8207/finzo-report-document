import { p, h2, ol, table } from '../builders'

/** Section: FAQ and troubleshooting */
export default {
  title: 'FAQ and troubleshooting',
  icon: 'CircleHelp',
  pages: [
    {
      id: 'faq',
      title: 'FAQ',
      intro: 'Quick answers to common questions.',
      blocks: [
        h2('Reports'),
        p('**Why does Export show "Export (Pro)"?** Export needs a paid plan. On the Free plan the menu takes you to the pricing page.'),
        p("**Why can't I save another report?** The Free plan allows 3 saved reports. Delete one you no longer need, or upgrade."),
        p("**How do I get a PDF?** Choose Export, then PDF. Your browser's print dialog opens. Choose Save as PDF there."),
        h2('Schedules'),
        p('**Can I pause a schedule without deleting it?** Yes. On the Schedule page, select Pause schedule, and Resume schedule later.'),
        p('**Which file types can I schedule?** CSV and Excel in the wizard.'),
        h2('Data'),
        p('**How often does my data update?** Changes to orders, products and customers usually arrive within moments. A full check runs every hour, and a deeper check once a day.'),
        p("**Can I stop customer data from syncing?** Yes. Turn on *Don't Sync Customer records* in *Settings > Data Management*."),
        h2('Billing'),
        p('**How am I billed?** Through your Shopify bill, every 30 days.'),
        p('**Who do I contact for help?** *[Add your support email here.]*'),
      ],
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      intro: 'Find the cause of the most common problems.',
      blocks: [
        table(
          ['Problem', 'What to check'],
          [
            ['A report is empty or has fewer rows than expected', 'Check the date range and filters first. Then open *Settings > Data Sync* and confirm the sync finished. A brand-new install needs a few minutes to copy your data.'],
            ['Numbers do not match Shopify', 'Select **Sync Now**, or **Reconcile** to repair differences. Also check *Include Current Day* and your store time zone in Settings.'],
            ['Old orders are missing', 'Run a **Full Re-sync**. It downloads everything again and can take a while.'],
            ['Customer or shipping columns are blank', 'The matching option in *Settings > Data Management* may be turned off.'],
            ['A scheduled report did not arrive', 'Open *Settings > Schedule Settings > Delivery history*. Select **Retry** on a failed delivery. Also check that the schedule is not paused, the email sender is verified, and your FTP server allows connections from the app.'],
            ['A CSV upload is refused', "You may be over your plan's CSV source or row limit."],
            ['A teammate cannot see a page', 'Check their role under *User Management*.'],
            ['You see a "data is stale" warning', 'No sync has succeeded for 24 hours. Select **Sync Now** and look at the last failed sync on the Data Sync page.'],
          ],
        ),
      ],
    },
    {
      id: 'support',
      title: 'Support (terms and conditions)',
      intro: "The Support page currently holds the app's Terms and Conditions.",
      blocks: [
        p('The terms come in six numbered parts:'),
        ol([
          'Use of the app',
          'Data and privacy',
          'Subscription and billing',
          'Limitation of liability',
          'Changes to the terms',
          'Contact',
        ]),
      ],
    },
  ],
}
