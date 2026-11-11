import { p, ol, table, note } from '../builders'

/** Section: Claude connector */
export default {
  title: 'Claude connector',
  icon: 'Bot',
  pages: [
    {
      id: 'claude-connector',
      title: 'Connect Reports Builder to Claude',
      intro: 'The connector lets you ask Claude questions about your saved reports instead of reading tables.',
      blocks: [
        ol([
          'Open *Settings > Account Details*.',
          'On the **MCP Access URL** row, select **Generate MCP Access URL**, then copy it.',
          'In Claude, add a custom connector and paste the URL.',
        ]),
        note('Treat the URL like a password: anyone who has it can read your reports. Generating a new one replaces the old address.'),
        p('Once connected, Claude can use two tools:'),
        table(
          ['Tool', 'What it does'],
          [
            ['list_reports', 'Lists your saved reports with their id, name, schedule status and last updated time'],
            ['run_report', 'Runs a saved report by its id and returns up to 100 rows by default, and at most 1,000'],
          ],
        ),
        p('Try asking: "List my saved reports", or "Run my Sales Over Time report and tell me which day was best."'),
      ],
    },
  ],
}
