import { p, h2, ol, cards } from '../builders'

/** Section: Welcome */
export default {
  title: 'Welcome',
  icon: 'Sparkles',
  pages: [
    {
      id: 'welcome',
      title: 'Welcome to Reports Builder',
      intro:
        'Reports Builder turns your Shopify store data into reports you can open in a table, export to CSV, Excel or PDF, and send on a schedule.',
      blocks: [
        p('Start with the Library to pick a ready-made report, or build your own from scratch.'),
        h2('A good learning path'),
        ol([
          'Read **Getting Started** to learn the screens.',
          'Open **Reports** to learn filters, columns, sorting and exports.',
          'Open **Schedules** to automate delivery.',
          'Check **FAQ and troubleshooting** when something looks off.',
          'Press **Ctrl K** to search by keyword if you know what you are looking for.',
        ]),
        h2('Table of contents'),
        cards([
          { icon: 'Rocket', title: 'Getting Started', text: 'Set up the app and learn the screens.', to: 'first-time-setup' },
          { icon: 'ChartColumn', title: 'Reports', text: 'Library, filters, columns, sorting and exports.', to: 'library' },
          { icon: 'CalendarClock', title: 'Schedules', text: 'Send reports automatically by email, FTP and more.', to: 'schedule-page' },
          { icon: 'CircleHelp', title: 'FAQ', text: 'Quick answers and troubleshooting.', to: 'faq' },
        ]),
      ],
    },
  ],
}
