import { p, h2, ul, ol, table, shot } from '../builders'

/** Section: Schedules */
export default {
  title: 'Schedules',
  icon: 'CalendarClock',
  pages: [
    {
      id: 'schedule-page',
      title: 'The Schedule page',
      intro:
        'A schedule runs a saved report on a timetable and delivers the file for you, as CSV or Excel.',
      blocks: [
        p('You manage schedules in three places: the **Schedule** page, the schedule wizard, and *Settings > Schedule Settings* for destinations and defaults. Use the Schedule page to check what is going out and when.'),
        shot('Schedule page'),
        h2('The list'),
        p('At the top, a filter shows **All reports**, **Scheduled** or **Not scheduled**. Reports that have no schedule yet appear in the list too, so you can set one up from the same row.'),
        table(
          ['Column', 'What it shows'],
          [
            ['Report', "The report's name"],
            ['Frequency', 'Hourly, Daily, Weekly or Monthly, with the time or day'],
            ['Recipients', 'The email address or destination that receives the file'],
            ['Format', 'CSV or Excel'],
            ['Next run', 'The date and time of the next delivery, or *Paused*'],
            ['Actions', 'Pause or resume, and delete'],
          ],
        ),
        p('Two messages can appear instead of the list:'),
        ul([
          '**No schedules yet.** *Set up recurring email deliveries for your reports here.*',
          '**No reports match this filter.** Select **Clear filter** to see everything again.',
        ]),
        p('Each row has two actions: **Pause schedule** (which becomes **Resume schedule**) and **Delete schedule**. Deleting shows *Delete this schedule?* and warns that any customized delivery chain you set up will break. Select **Delete forever** to confirm.'),
      ],
    },
    {
      id: 'create-schedule',
      title: 'Create a schedule',
      intro: 'A step-by-step wizard sets up delivery.',
      blocks: [
        p('Select **Schedule a report** from the Dashboard, open the Schedule page, or choose **Schedule** on a saved report. The wizard shows a progress bar with its steps along the top. Every screen has **Back** and **Continue** buttons. The last one says **Create schedule**.'),
        h2('The schedule wizard, screen by screen'),
        table(
          ['Screen', 'What you do'],
          [
            ['Report', 'Choose one of your saved reports. If you have none, it says *No reports yet*. This screen is skipped when you start from a report.'],
            ['Frequency', 'Choose a card: **Hourly** (run every hour or right after data syncs), **Daily** (every morning with fresh daily metrics), **Weekly** (a weekly digest on your preferred day) or **Monthly** (a wrap-up on the 1st, 15th or last day).'],
            ['Timing', 'Set the time and, for weekly or monthly, the day. Hourly has a **Start immediately** switch.'],
            ['Delivery', 'Enter the recipient email, optional Cc and Bcc, the **Export format** (CSV or Excel) and the **Delivery destination**. Below it, a **Schedule summary** lets you review the details before creating the schedule.'],
          ],
        ),
        p('The summary lists the report, the frequency, who it is delivered to, the format and the next run. If you have not entered an email address, it says *Email address not entered yet*.'),
        p('When you finish, the wizard shows **Schedule set**. It repeats the first delivery time, the recipients and the format. From there you can go back to the Schedule page or choose **Schedule another**.'),
        h2('Timing options'),
        table(
          ['Frequency', 'Timing options'],
          [
            ['Hourly', '**Start immediately** sends the first report right after you save, then every hour. Turn it off to choose a **First run time**.'],
            ['Daily', 'A delivery time'],
            ['Weekly', 'A day of the week and a delivery time'],
            ['Monthly', 'A day of the month (1st, 15th, last day, or a specific day) and a delivery time'],
          ],
        ),
        p('If you pick a day such as the 31st, months that are shorter run on their last day.'),
      ],
    },
    {
      id: 'delivery-options',
      title: 'Delivery options',
      intro: 'Choose who gets the file, in what format, and where.',
      blocks: [
        ul([
          '**Recipients.** Enter a primary email address. Select **Add Cc / Bcc** to copy other people.',
          '**Format.** CSV opens in any spreadsheet app. Excel gives a native workbook with one worksheet.',
          '**Delivery destination.** Email is the default. If you connected other destinations, they appear here as choices.',
        ]),
      ],
    },
    {
      id: 'delivery-destinations',
      title: 'Delivery destinations',
      intro: 'Connect destinations in Settings > Schedule Settings.',
      blocks: [
        p('Once connected, a destination is available in the wizard. You can connect more than one account of the same type.'),
        table(
          ['Destination', 'What you provide'],
          [
            ['Email sender', 'A sender name, sender email address and optional reply-to address, which you verify'],
            ['FTP', 'Connection type (Secure FTP is recommended, or FTP), host, port, username, password and folder path. Your server must allow connections from the app.'],
            ['Google Drive', 'Your Google account, a destination folder and a file name pattern'],
            ['OneDrive', 'Your Microsoft account, a destination folder and a file name pattern'],
            ['BigQuery', 'Project ID, dataset, table, and whether new data replaces the table or is added to it'],
            ['Slack', 'Workspace, channel, and whether to post the report file or a summary message'],
            ['Power BI', 'Account, workspace, dataset and refresh frequency'],
          ],
        ),
      ],
    },
    {
      id: 'connect-destinations',
      title: 'Connect and manage destinations',
      intro: 'The Destinations tab in Schedule Settings controls where scheduled reports go.',
      blocks: [
        p('Schedule Settings has three tabs: **Destinations**, **Defaults** and **Delivery history**. If a connected destination stops working, a dark banner appears at the top with a **Reconnect** button.'),
        h2('Destinations tab'),
        p('Search destinations by name in the **Search destinations** box, or tick **Show connected only** to hide the ones you have not set up. Below the box, a line tells you which destination new schedules use by default, with a **Manage defaults** link.'),
        p('Each destination is a card with three parts: a status label, the name, and how many schedules use it, or *No schedules yet*. The status is one of:'),
        table(
          ['Status', 'Meaning'],
          [
            ['Not connected', 'You have not set it up'],
            ['Connected', 'It is ready to use in the schedule wizard'],
            ['Needs attention', 'A delivery failed. Select **Reconnect** to fix it.'],
          ],
        ),
        p('Select a card to open its window. The cards are Email sender, FTP, Google Drive, BigQuery, Slack, OneDrive and Power BI.'),
        h2('Connect a destination'),
        ol([
          'Select the card. The window shows a short note on what you need, such as your server details or your Google account.',
          'Fill in the form. The fields for each destination are listed in Delivery destinations.',
          'Select **Connect [name]**.',
        ]),
        p('For **FTP**, the form also shows an address that your IT team may need to allow through a firewall. Use **Copy address**, or **Copy message for IT** to send them the details.'),
        h2('Manage a connected destination'),
        p('Once connected, the window lists your **Connected accounts**. Each account shows when it was connected, how many schedules use it, and its last result: **Delivered**, **Failed** or **Never tested**. Select **+ Add another** to connect a second account of the same type. Each account has these actions:'),
        table(
          ['Action', 'What it does'],
          [
            ['Test connection', 'Checks the connection and reports the result'],
            ['Send test file', 'Sends a small test file to the destination'],
            ['Edit, then **Save changes**', 'Updates the saved details. A pop-up says *Connection updated*.'],
            ['Remove', 'Disconnects the account. If schedules use it, you choose another destination to move them to.'],
          ],
        ),
        h2('The Email sender'),
        p('Choose where scheduled emails come from. Enter a **Sender name** (for example *Acme Reports*), a **Sender email** (for example *reports@yourdomain.com*) and an optional **Reply-to** address. A **Preview** shows how the sender will look. Then send the verification email. Once you confirm it, the card changes to **Connected**. You can send a test email to yourself before you rely on it.'),
      ],
    },
    {
      id: 'schedule-defaults',
      title: 'Schedule defaults',
      intro: 'These choices are the starting point for every new schedule.',
      blocks: [
        p('On the **Defaults** tab, change the fields, then select **Save**. Select **Reset** to undo unsaved changes.'),
        table(
          ['Field', 'Choices'],
          [
            ['Default destination', 'None, Email sender, FTP, Google Drive, BigQuery, Slack, OneDrive or Power BI'],
            ['Backup destination', 'The same list. Used if the first destination fails.'],
            ['File type', 'CSV, Excel or PDF'],
            ['Time zone', 'Store timezone, UTC, America/New_York or Europe/London'],
            ['File name pattern', 'Text with `{report name}` and `{date}`. An example below the box shows the result.'],
          ],
        ),
        p('For example, `Sales report - {date}` produces *Sales report - 2026-09-28*.'),
      ],
    },
    {
      id: 'delivery-history',
      title: 'Delivery history',
      intro: 'See every delivery attempt and retry the ones that failed.',
      blocks: [
        p('Every delivery attempt is listed with the report, the destination, the time, the status and the file size.'),
        p('Use the two filters, **All destinations** and **All statuses**, to narrow it. Statuses are **Delivered**, **Failed** and **Pending**. For a failed delivery, hover over the report name to read the error and select **Retry**.'),
      ],
    },
  ],
}
