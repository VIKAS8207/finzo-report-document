import { p, h2, ul, ol, table, shot, image } from '../builders'

/** Section: Reports */
export default {
  title: 'Reports',
  icon: 'ChartColumn',
  pages: [
    {
      id: 'library',
      title: 'The Library',
      intro:
        'The Library is where you find a ready-made report. It holds 137 templates in 16 categories.',
      blocks: [
        p('Its title is **Report Library**, and the subtitle reads *Search hundreds of prebuilt reports, or browse by category below.* A **Create new report** card at the top lets you build your own instead.'),
        shot('Library with categories'),
        table(
          ['Category', 'Reports', 'Examples'],
          [
            ['Sales and Order', '35', 'Sales Over Time, Sales by Product, Refund Report, Commission Report, COGS Report'],
            ['Inventory', '15', 'Inventory on Hand, Low Stock Products, ABC Analysis, Re-Order Point Report'],
            ['Product and Variant', '14', 'Best Selling Products, Never Sold Products, Product Return Rate'],
            ['Taxes', '11', 'Tax Report, VAT Tax Report, GST Tax Report, IOSS Tax Report'],
            ['Customers', '10', 'Most Valuable Customers, Customers by Location, Customer Store Credit'],
            ['Fulfillment and Shipping', '7', 'Unfulfilled Orders, Shipping Report, Partially Shipped Orders'],
            ['Transaction and Billing', '8', 'Successful Transactions, Failed Transactions, Payment Gateway Report'],
            ['Custom Properties', '8', 'Line Item Properties, Note Attributes, Product Metafields Report'],
            ['Import Feeds and Templates', '5', 'Xero Sales Invoice Feed, QuickBooks Product Feed'],
            ['Payout Reconciliation', '5', 'Shopify Payout Report, Bank Reconciliation'],
            ['Customer Journey', '4', 'Path to Purchase, First Time Order Customers'],
            ['Gift Cards', '4', 'Gift Card Redemption by Customer'],
            ['Collections', '3', 'Sales by Collections, Best Selling Collections'],
            ['Tags', '3', 'Sales by Product Tag Group'],
            ['Disputes', '3', 'Chargeback Overview, Chargeback Won Report'],
            ['Abandoned Cart', '2', 'Abandoned Checkout Report'],
          ],
        ),
        h2('The search box'),
        p('Type in the **Search reports...** box to find a report by name. Use the cross at the right end to clear it. When you click into an empty box, a panel opens with three groups:'),
        table(
          ['Group', 'What it holds'],
          [
            ['Search for', 'Quick topics you can select: Financial, Sales, Inventory and Marketing'],
            ['Recent', 'Reports you opened recently, so you can jump back in'],
            ['Recommended', 'Suggested templates'],
          ],
        ),
        p('Select an item to open it, or press Enter on a highlighted one.'),
        shot('Library with search dropdown open', { width: 340, center: true }),
        h2('Results and categories'),
        p('Below the search box you see a count such as *137 reports found*, and a row of category buttons. Select a category to show only its reports. The results are grouped under category headings, and you can expand or collapse each group. Every row shows the report\'s name and a short description. Select a row to start that report.'),
        p('If nothing matches, the page says **No reports found** and gives you a button to clear your search.'),
        h2('Starting a report from the Library'),
        p('Selecting a template opens **Name your report** with the name already filled in. You can change it, then continue to the report page. The **Create new report** card at the top starts from your own choices instead. The full steps are in Create a report.'),
        h2('The first-visit tour'),
        p('The **Guide** button runs a short tour. On the Library it points out the search bar, the Create new report button, and each menu item in turn.'),
      ],
    },
    {
      id: 'create-report',
      title: 'Create a report',
      intro: 'There are several ways to start a report. This page walks through the main one: the Create new report button.',
      blocks: [
        h2('Step 1: Select Create new report'),
        p('The **+ Create new report** button sits at the right end of the navigation pill at the top of every normal page.'),
        image('create-new-report-button.png', 'The Create new report button'),
        h2('Step 2: Name the report and choose how to build it'),
        p('The **Name your report** screen opens. Type a name in **Report name**, for example *Monthly Profit Overview*. Then, under **How would you like to build this report?**, choose one of two options:'),
        image('name-your-report.png', 'The Name your report screen', { width: 620, center: true }),
        ul([
          '**Generate with AI** (*Use AI Assistant*): describe what you want and AI assembles the report for you.',
          '**Build from Scratch** (*Open Builder*): start blank and pick the columns, charts and tables yourself.',
        ]),
        h2('Step 3: Select Continue'),
        p('Select **Continue** to move on. The button stays greyed out until you have typed a report name.'),
        h2('Step 4: Pick a report type and create it'),
        ol([
          'Pick a **report type**. Reports Builder shows the fields the report will start with. Every field is ticked by default, so untick any you do not need. You can add or remove columns later.',
          'Select **Create report**. The report page opens with your data.',
        ]),
        h2('Other ways to start'),
        ul([
          'In the **Library**, select a template. The report name is filled in for you.',
          'Choose **New report** on the Dashboard, or the **Create new report** card at the top of the Library.',
        ]),
      ],
    },
    {
      id: 'report-page',
      title: 'The report page',
      intro: 'The toolbar above the table holds the tools you use to shape a report.',
      blocks: [
        p('Changes show right away. Select **Save report** to keep them.'),
        table(
          ['Tool', 'What it does'],
          [
            ['Date range', 'Limits the report to a period'],
            ['Columns', 'Chooses which columns appear and in what order'],
            ['Filters', 'Keeps only the rows that match your conditions'],
            ['Sort', 'Orders rows by one or more columns'],
            ['Group by', 'Groups rows by one of your columns'],
            ['Formatting', 'Totals, currency, decimals and print options'],
            ['Export', 'Downloads the report'],
            ['Schedule', 'Sends the report automatically (save it first)'],
          ],
        ),
        h2('Date range'),
        p('The date picker has five tabs: **Date range**, **Custom**, **Month**, **Quarterly** and **Yearly**. The Date range tab offers presets:'),
        ul([
          'Today and Yesterday',
          'This week and Last week',
          'Last 7 days and Last 30 days',
          'This month and Last month',
          'This year and Last year',
        ]),
        p('Turn on **Show time** to include hours and minutes. Two settings change how ranges behave: which day a week starts on, and whether "last N days" includes today. Both live in *Settings > Report Formatting*.'),
      ],
    },
    {
      id: 'columns-filters',
      title: 'Columns, filters, sort and group',
      intro: 'Shape what the table shows.',
      blocks: [
        h2('Columns'),
        p('Open **Columns** to search the available fields. Filter the list by type (All types, Text, Numeric or Currency), tick the ones you want, and use the up and down arrows to reorder them. Remove a column with the cross beside it.'),
        h2('Filters'),
        p('A filter has three parts: a column, an operator and a value. The operators you see depend on the column type.'),
        table(
          ['Column type', 'Operators'],
          [
            ['Text', 'Contains, Is equal to, Is not equal to'],
            ['Number or currency', 'Is equal to, Is not equal to, Greater than, Greater than or equal to, Less than, Less than or equal to'],
          ],
        ),
        p('With more than one filter, choose whether rows must match **all** conditions or **any** of them. Greater-than and less-than filters, and the *any* (OR) option, need the Pro plan.'),
        h2('Sort and Group by'),
        p('**Sort** lets you add several rules. Pick a column, choose Ascending or Descending, and apply. Rules run in the order you add them. **Group by** lists *None* plus the columns you have selected; pick one to group rows under it.'),
      ],
    },
    {
      id: 'formatting',
      title: 'Formatting',
      intro: 'Control totals, currency, decimals and print options.',
      blocks: [
        table(
          ['Option', 'Effect'],
          [
            ['Currency and Decimal Format', 'Choose USD, INR, EUR, GBP or JPY, and how many decimals to show'],
            ['Show Grand Total / Sub Total', 'Adds total rows'],
            ['Show Grand Total on Top', 'Moves the grand total above the data'],
            ['Show % in Column', 'Adds a percentage for numeric columns'],
            ['Show Column Grouping', 'Shows grouping headers'],
            ['Wrap Primary Records', 'Wraps long values in the first column'],
            ['Switch to Detailed Report', 'Shows the detailed rows'],
            ['Report Name for PDF Header', 'Prints the report name at the top of a PDF'],
            ['Export Without Header', 'Leaves the header row out of exports'],
          ],
        ),
      ],
    },
    {
      id: 'export',
      title: 'Export',
      intro: 'Download a report as CSV, Excel, PDF or Google Sheets.',
      blocks: [
        p('Choose **Export** and pick **CSV**, **Excel**, **PDF** or **Google Sheets**.'),
        ul([
          "PDF opens your browser's print dialog, where you choose *Save as PDF*.",
          'CSV files use the encoding you set in *Settings > Report Formatting*.',
          'On the Free plan the menu shows *Export (Pro)* and takes you to the pricing page.',
        ]),
      ],
    },
    {
      id: 'save-schedule',
      title: 'Save and Schedule',
      intro: 'Keep a report and send it automatically.',
      blocks: [
        p('Select **Save report** to store the report in **My Reports**. The button then shows **Saved**.'),
        p('Select **Schedule** to automate delivery; if the report has unsaved changes, you are asked to save first. See the Schedules section.'),
      ],
    },
    {
      id: 'calculated-columns',
      title: 'Calculated columns and CSV data (Pro)',
      intro: 'The advanced designer adds two Pro features.',
      blocks: [
        p('**Calculated columns** let you create a new column from a formula that uses field names, plus, minus, multiply, divide and parentheses. For example, `item_quantity * item_price` gives a line total.'),
        p('**CSV data sources** let you choose an uploaded CSV file instead of Shopify records in the **Use data from** list. See CSV data sources for how to upload one.'),
      ],
    },
    {
      id: 'my-reports',
      title: 'My Reports',
      intro: 'My Reports lists every report you saved. The header shows the page title and a count such as *12 reports*.',
      blocks: [
        shot('My Reports table'),
        h2('The table'),
        table(
          ['Column', 'What it shows'],
          [
            ['Star', 'Click to add or remove the report from your favorites. A pop-up confirms *Added to favorites* or *Removed from favorites*.'],
            ['Report', 'The report name. Select it to open the report.'],
            ['Created on', 'The date you saved it'],
            ['Scheduled on', 'The schedule, such as how often it runs, or *Paused* if it is switched off. Empty if the report has no schedule.'],
            ['Actions', 'Three icon buttons, described below'],
          ],
        ),
        h2('The action buttons'),
        table(
          ['Button', 'What it does'],
          [
            ['Open report (eye)', 'Opens the report so you can view or change it'],
            ['Schedule report (calendar)', 'Opens the schedule wizard with this report already chosen'],
            ['Delete report (bin)', 'Asks *Delete this report?* Choose **Delete forever** to confirm. This cannot be undone.'],
          ],
        ),
        p('Long lists are split into pages, with controls at the bottom to move between them.'),
        h2('When you have no reports'),
        p('The page says **No reports yet** and *Reports you save will show up here.* A **Create your first report** button starts the setup.'),
        h2('Tips'),
        ul([
          'Star the reports you use every week. They also appear under **Favorite Reports** on the Dashboard.',
          'A report only appears here after you select **Save report** on the report page.',
          'On the Free plan you can keep three reports. Delete one to make room, or upgrade.',
        ]),
      ],
    },
  ],
}
