import { p, h2, ol, table, shot } from '../builders'

/** Section: Settings and team */
export default {
  title: 'Settings and team',
  icon: 'Settings',
  pages: [
    {
      id: 'settings-overview',
      title: 'Settings overview',
      intro: 'The Settings page has a menu on the left that lists everything you can change.',
      blocks: [
        p('On a phone, the menu runs across the top and scrolls sideways. Changes on most Settings screens save as soon as you make them, and a pop-up tells you what changed.'),
        shot('Settings menu'),
        h2('The Settings menu'),
        table(
          ['Menu item', 'Where it opens', 'What it is for'],
          [
            ['Account Details', 'Inside Settings', 'Your store, plan, email, keys and log out'],
            ['Data Management', 'Inside Settings', 'Choose which data is synced'],
            ['Report Formatting', 'Inside Settings', 'Week start, currency symbols and CSV encoding'],
            ['Schedule Settings', 'Inside Settings', 'Delivery destinations, defaults and delivery history'],
            ['Data Sync History', 'Inside Settings', 'The record of past syncs'],
            ['User Management', 'Inside Settings', 'Teammates and what they can do'],
            ['Staff Details', 'Inside Settings', 'Your list of sales staff'],
            ['Staff Assignment', 'Inside Settings', 'Match orders to staff'],
            ['Commission Setup', 'Inside Settings', 'Commission rates'],
            ['Data Sync', 'Its own page', 'Sync now, re-sync and reconcile'],
            ['Data Sources', 'Its own page', 'Upload and manage CSV files'],
            ['Subscription', 'Its own page', 'Your plan and usage'],
          ],
        ),
        p('A thin line in the menu separates the first nine items from the last three.'),
      ],
    },
    {
      id: 'account-details',
      title: 'Account Details',
      intro: 'Every row has a label on the left and its value or control on the right.',
      blocks: [
        table(
          ['Row', 'Value or control', 'Notes'],
          [
            ['Shop Name', 'Your store name', 'Read-only'],
            ['Reports Builder Plan', 'Your plan name, and a **Select Plan** button', 'If you are on a trial, the end date shows beside the plan name. The button opens the plans page.'],
            ['Shopify Plan', 'Your Shopify plan', 'Read-only'],
            ['Shop Time Zone', "Your store's time zone, for example *Asia/Kolkata*", 'Read from Shopify and updates with daylight saving. To change it, change it in your Shopify settings.'],
            ['Installer Email', 'A text box with an email address', 'Edit it and click away to save. An invalid address shows an error.'],
            ['Store Summary', 'A **Schedule Now** button', 'Opens the scheduling flow for a store summary'],
            ['Shop Key', 'A masked key with **Copy** and **Regenerate** buttons, or **Generate Shop Key** if you have none', 'A secret key for outside tools. Regenerating replaces the old key.'],
            ['MCP Access URL', 'A masked address with a **Copy** button, or **Generate MCP Access URL**', 'Connects AI tools such as Claude. Anyone with the URL can read your reports, so keep it private.'],
            ['Account', '**Log out**', 'Asks *Log out?* and returns you to your Shopify admin. Saved preferences in this browser are cleared.'],
          ],
        ),
      ],
    },
    {
      id: 'report-formatting',
      title: 'Report Formatting',
      intro: 'These four settings apply to every report, export and schedule in your store.',
      blocks: [
        table(
          ['Setting', 'Choices', 'Default', 'What it changes'],
          [
            ['Set Week Start Preferences', 'Sunday or Monday', 'Monday', 'The first day of a week in weekly data and in *This week* and *Last week*'],
            ['Include Current Day', 'On or off', 'On', 'Whether *Last 7 days*, *Last 30 days* and similar ranges include today'],
            ['Add Currency to Reports', 'On or off', 'On', 'Shows a currency symbol on money columns'],
            ['CSV Encoding Option', 'UTF-8, ISO-8859-1, Windows-1251, Windows-1252, GB2312 or GBK', 'UTF-8', 'The character set of exported CSV files'],
          ],
        ),
        p('Use **UTF-8** unless a program you open the file in shows garbled characters. Choose Windows-1252 or ISO-8859-1 for older Western European software, Windows-1251 for Cyrillic text, and GB2312 or GBK for Simplified Chinese text. Messages such as *Current day included* and *Currency symbol disabled* confirm each change.'),
      ],
    },
    {
      id: 'user-management',
      title: 'User Management',
      intro: 'User Management lists everyone who can open Reports Builder for your store.',
      blocks: [
        p('Select **Activity log** to see a list of changes, or *No changes yet*. Names and emails come from Shopify and cannot be edited here.'),
        h2('Finding people'),
        p('Type in **Search team members**, or use the two filters, **All roles** and **All statuses**. Select **Add team member** to invite someone.'),
        h2('The members table'),
        table(
          ['Column', 'What it shows'],
          [
            ['Person', 'Name and email. An expired invite also says *This invite has expired*.'],
            ['Role', 'Admin, Manager or Viewer'],
            ['Access', '**All reports**, or **Selected reports** when the role is limited to some'],
            ['Status', 'Active, Invited, Disabled or Expired'],
            ['Last active', 'When they last used the app'],
            ['Actions', 'A three-dot menu'],
          ],
        ),
        h2('The Actions menu'),
        table(
          ['Action', 'Shown for', 'What it does'],
          [
            ['Change role', 'Active members', 'Opens *Change role*. Pick a role and save.'],
            ['Disable or Enable', 'Active or disabled members', 'Blocks or restores access without deleting the member'],
            ['Remove', 'Any member', 'Deletes the member'],
            ['Cancel invite', 'Invited or expired members', 'Withdraws the invitation'],
          ],
        ),
        p('The store owner and the last admin are locked: their role cannot change, and they cannot be disabled or removed. Hover over the greyed-out action to see why.'),
        h2('Invite a person'),
        ol([
          'Select **Add team member**.',
          'Enter their **email address**.',
          'Choose a **role**. The window summarises what that role can do.',
          'Confirm. They show as **Invited** until they open the app.',
        ]),
        h2('Roles'),
        table(
          ['Area', 'Admin', 'Manager', 'Viewer'],
          [
            ['Reports', 'Edit', 'Edit', 'View'],
            ['Schedules', 'Edit', 'Edit', 'No access'],
            ['Data and integrations', 'Edit', 'View', 'No access'],
            ['Commission setup', 'Edit', 'View', 'No access'],
            ['Staff details', 'Edit', 'View', 'No access'],
            ['Team and roles', 'Edit', 'No access', 'No access'],
            ['Billing and account settings', 'Edit', 'No access', 'No access'],
          ],
        ),
      ],
    },
    {
      id: 'staff-details',
      title: 'Staff Details',
      intro: 'Staff Details is your list of people who make sales. The commission and staff reports use it.',
      blocks: [
        h2('The staff table'),
        p('Use **Search staff** to find someone. Tick one or more rows to enable **Remove**. Click a column title to sort.'),
        table(
          ['Column', 'What it shows'],
          [
            ['Staff', "The person's name"],
            ['Email', 'Their email address'],
            ['User type', 'Their user type'],
            ['Phone', 'Their phone number, if you gave one'],
            ['Account owner', 'Whether they own the Shopify account'],
            ['Commission', 'Their commission rule, if one applies'],
            ['Actions', '**Edit**'],
          ],
        ),
        h2('Add one person'),
        p('Select **Add staff manually**, fill in the first name, last name, email and phone, choose a **user type**, and save.'),
        h2('Import many people'),
        p('The import window has three steps: **Add**, **Review** and **Import**.'),
        ol([
          'Choose a tab. **Paste from Shopify** is quickest: in Shopify, open *Settings > Users and permissions*, select all staff rows, copy them including the header row, and paste them into the box. **Upload CSV file** suits larger teams: drag a file in, or click to browse. The columns are *Staff ID, First name, Last name, Email* and *Phone (optional)*.',
          'On **Review**, check the first five rows. Rows with problems are flagged. Tick **Skip rows that need attention and import the rest** if you want to continue anyway.',
          'Select **Import [number] staff**. If any rows failed, select **Download error report** to see why.',
        ]),
        p('If you do not have the staff list, the window offers a **Copy message** button with a ready-made request you can send to the person who does.'),
      ],
    },
    {
      id: 'staff-assignment',
      title: 'Staff Assignment',
      intro: 'Staff Assignment links orders to the staff member who made the sale. Reports such as *Retail Sales by Staff* use these links.',
      blocks: [
        ol([
          'Use the filter at the top to show **All**, **Unassigned** or **Assigned** orders.',
          'The table lists each order with its **Order** number, **Date** and **Total**, and an **Assigned to** control.',
          'To assign one order, choose a person in the **Assigned to** list on its row. Choose **Unassigned** to clear it.',
          'To assign many orders, tick them, choose a person in **Assign to...** at the top, and apply. A second button clears the assignment for all ticked orders.',
        ]),
        p('If an order carries a tag that matches a staff name, the row shows *tag: [name]* so you can spot it. The tag does not assign the order for you.'),
      ],
    },
    {
      id: 'commission-setup',
      title: 'Commission Setup',
      intro: 'Commission Setup is where you define commission rates.',
      blocks: [
        p('The page has a form on one side and your list of rules, headed **Commission rates**, on the other. When you have no rules, the list reads *Click below to add your commission rates!*'),
        h2('Add a rule'),
        table(
          ['Field', 'Choices', 'Notes'],
          [
            ['Commission on', 'Vendor, Staff member or Product type', 'What the rate is tied to'],
            ['Item', 'A list of your vendors, staff or product types', 'Vendors and product types show how many products they hold. Staff show their email. You can pick several.'],
            ['Rate type', 'Percentage (%) based, or Fixed amount ($)', 'A percentage of sales, or a set amount'],
            ['Rate', 'A number', ''],
            ['Basis', 'Net Sales, Gross Sales or Total Sales', 'The amount the rate is applied to'],
          ],
        ),
        p('Select to add the rule. Each rule in the list shows its item, its rate and its basis, for example *10% - Net Sales*.'),
        p('Once rules exist, commission values appear in reports such as the *Commission Report* and *Retail Sales Staff Commission*.'),
      ],
    },
  ],
}
