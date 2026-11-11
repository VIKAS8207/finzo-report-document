import { p, h2, ul, ol, table, shot } from '../builders'

/** Section: Data */
export default {
  title: 'Data',
  icon: 'Database',
  pages: [
    {
      id: 'what-syncs',
      title: 'What Reports Builder syncs',
      intro:
        'Reports Builder keeps its own copy of your store data, so reports open fast and do not slow your store.',
      blocks: [
        p('These are the data types it copies from Shopify:'),
        table(
          ['Data', 'What it includes'],
          [
            ['Orders', 'Orders, line items and payment transactions'],
            ['Products', 'Products, variants, prices and inventory'],
            ['Customers', 'Names, emails, tags and purchase history'],
            ['Abandoned carts', 'Checkouts that were started but not completed'],
            ['Customer journey', 'First and last visit, source, landing page and touchpoints before purchase'],
            ['Metafields', 'Custom fields on orders, products, variants and customers'],
            ['Payouts', 'Shopify Payments payouts and balance transactions'],
          ],
        ),
        p('When you install the app, it asks Shopify for permission to read orders (including orders older than 60 days), products, customers and Shopify Payments payouts.'),
      ],
    },
    {
      id: 'how-syncing-works',
      title: 'How syncing works',
      intro: 'Install-time, hourly, live and daily syncs keep data fresh.',
      blocks: [
        ul([
          '**First sync.** It starts by itself when you install the app.',
          '**Hourly sync.** The app checks Shopify for new data every hour.',
          '**Live updates.** Shopify tells the app when orders, products or customers are created, changed or deleted, so most changes appear within moments.',
          '**Daily reconciliation.** Once a day, the app compares every record with Shopify and repairs anything missing, out of date or deleted.',
          '**Stale data alert.** If no sync succeeds for 24 hours, the app warns you.',
        ]),
        p('To take action yourself, open the Data Sync page. See Data Sync page for the buttons and what the page shows.'),
      ],
    },
    {
      id: 'data-sync-page',
      title: 'Data Sync page',
      intro: 'The Data Sync page gives you full control of syncing. It has its own page in Settings.',
      blocks: [
        p('Its status line reads **Syncing...**, **Synced successfully** or **Never synced**.'),
        shot('Data Sync page'),
        h2('Buttons'),
        table(
          ['Button', 'What it does', 'Asks you to confirm?'],
          [
            ['Sync Now', 'Fetches only what changed since the last sync', 'No'],
            ['Full Re-sync', 'Downloads all your data again. It may take a while.', 'Yes: *Run a full re-sync?*'],
            ['Reconcile', 'Checks every record against Shopify and repairs missing, stale or deleted data', 'Yes: *Queue a reconciliation?*'],
          ],
        ),
        p('After you choose one, a pop-up says *Queued - running in the background*. The page refreshes by itself while it runs. If an identical request is already waiting, you see *Request merged*.'),
        h2('What the page shows'),
        ul([
          '**Totals.** The number of Orders, Products, Customers, Transactions, Abandoned carts, Metafields and Payouts stored.',
          '**Current run.** Each data type with its status and count: Orders, Transactions, Products, Customers, Abandoned Carts, Customer Journey, Metafields and Payouts.',
          '**Health.** Last successful sync, last failed sync, last reconciliation and next reconciliation.',
          '**History.** Your most recent 20 runs, with what started each one: automatic, **Sync Now**, or **Full Re-sync**.',
          '**Background jobs.** Queued work, where a failed job can be re-queued (*Job re-queued*) or cancelled (*Job cancelled*).',
        ]),
        p('A new store shows *No sync runs yet. Click Sync Now to start your first sync.*'),
      ],
    },
    {
      id: 'data-sync-history',
      title: 'Data Sync History',
      intro: 'This screen in Settings records what has been synced from Shopify.',
      blocks: [
        p('Its **Force Sync** button starts a sync and changes to **Syncing...** while it runs. A blue banner says *Sync in progress... this page refreshes automatically.*'),
        p('The table has two columns: **Resource** and **Status**. Each row is a type of data (Orders, Products, Customers and so on), with the text *Last updated* and a time, or *Never synced*.'),
        p('Before your first sync, the page reads *No sync runs yet. Click Force Sync to pull your Shopify data.* For more actions, such as a full re-sync, use the Data Sync page.'),
      ],
    },
    {
      id: 'data-management',
      title: 'Data Management options',
      intro: 'Choose what is synced and how detailed your reports are.',
      blocks: [
        p('These options decide what Reports Builder copies from Shopify. Turning a data type off means it will not appear in any report. Turning it back on brings it back at the next sync. Each switch saves at once and shows a message. Find them in *Settings > Data Management*.'),
        table(
          ['Option', 'Default', 'When it is on', 'Message you see'],
          [
            ["Don't Sync Customer records", 'Off', 'Names, emails, phone numbers, purchase history and tags are not synced', '*Customer records excluded* or *included*'],
            ['Metafields', 'All four selected', 'Choose which resources (**Orders**, **Products**, **Variants**, **Customers**) sync their custom fields. Clear all four to stop syncing metafields.', '*Metafields sync disabled*, or your choice saved'],
            ['Shipping Label Sync', 'Off', 'Adds carrier, tracking number, shipping class and cost', '*Shipping label sync enabled* or *disabled*'],
            ["Don't Sync Customer Journey", 'Off', 'First and last visit, source, landing page, days to conversion and touchpoints are not synced', '*Customer journey excluded* or *included*'],
            ['Include Presentment Fields', 'On', 'Adds the currency, language and formatting shoppers saw in a multi-currency store', '*Presentment fields included* or *excluded*'],
            ['Abandoned Cart Sync', 'On', 'Syncs shoppers who added items but did not check out', '*Abandoned cart sync enabled* or *disabled*'],
          ],
        ),
        p('If you turn on Shipping Label Sync and the label columns look empty, wait for the next sync or start **Sync Now** from the Data Sync page.'),
      ],
    },
    {
      id: 'csv-data-sources',
      title: 'CSV data sources',
      intro: 'Upload your own CSV file to use it in a report beside, or instead of, Shopify data.',
      blocks: [
        ol([
          'Open **Data Sources** from the Settings menu and select **Upload CSV**.',
          'Drop a `.csv` file onto the upload area, or click to browse, then select **Upload**.',
          'Open the source to see its columns and a preview of the first 20 rows. Delete it from the same page.',
          'In the report designer, choose your file in the **Use data from** list.',
        ]),
        table(
          ['Plan', 'CSV data sources', 'CSV rows'],
          [
            ['Free', '1', '1,000'],
            ['Pro', '10', '50,000'],
            ['Enterprise', 'Unlimited', 'Unlimited'],
          ],
        ),
        h2('The Data Sources page'),
        p('This page, headed **Data Sources**, says *Upload CSV files to combine with your Shopify data in reports.*'),
        ul([
          'The **Upload CSV** button takes you to the upload area, which reads *Drop a CSV file here or click to browse*. Select a `.csv` file, then **Upload**.',
          'On the Free plan, a line shows your usage, such as *1/1 data sources used* and *400/1,000 rows used*.',
          '**Uploaded sources** lists each file with its name and upload date.',
          'Open a file to see its columns and a **Preview (first 20 rows)**. The **Delete** button asks *Delete data source?* and cannot be undone.',
          'If you go over a limit, a red banner appears with an **Upgrade Plan** button.',
        ]),
      ],
    },
  ],
}
