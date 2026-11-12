import { p, h2, ul, table, note, shot } from '../builders'
import { INTEGRATIONS } from '../integrations'
import { INTEGRATION_DETAILS } from '../integrationDetails'

/** What the status means, in a sentence. */
const AVAILABILITY = {
  Live: 'This integration is live. On the **Integrations** page, find its card and select **Connect**.',
  'Coming soon': 'This integration is coming soon. Its card shows a **Coming soon** label and the **Connect** button stays off until it is released.',
  Connected: 'This integration is connected automatically, because it is the store the app was installed from.',
}

/** One page per integration. The right panel shows its status, when it was introduced and when it is planned. */
const integrationPages = INTEGRATIONS.map((item) => {
  const detail = INTEGRATION_DETAILS[item.id] // optional full write-up, see ../integrationDetails.js
  return {
    id: `integration-${item.id}`,
    kind: 'integration', // makes the right panel show Status / Introduced / Planned
    title: item.name,
    intro: detail?.intro ?? item.description,
    status: item.status,
    introduced: item.introduced,
    planned: item.planned,
    blocks: detail?.blocks ?? [
      ...(item.category ? [p(`**Category:** ${item.category}`)] : []),
      h2('What it does'),
      p(item.description),
      h2('Availability'),
      p(AVAILABILITY[item.status]),
    ],
  }
})

const liveNames = INTEGRATIONS.filter((i) => i.status === 'Live').map((i) => i.name)

/** Section: Integrations */
export default {
  title: 'Integrations',
  icon: 'Plug',
  pages: [
    {
      id: 'integrations-overview',
      title: 'Integrations overview',
      intro: 'Connect the tools you already use to power your reports.',
      blocks: [
        p(`The **Integrations** page lists the ${INTEGRATIONS.length} apps you can connect to bring their data into your reports. Each integration below has its own page with its status and release dates.`),
        note(`**Shopify** is connected automatically. These integrations are live: ${liveNames.join(', ')}.`),
        shot('Integrations page'),
        h2('An integration card'),
        ul([
          "The app's icon and its name.",
          'A one-line description of what it brings into your reports.',
          'A status label: **Connected** or **Not connected**.',
          'A button: **Connect**, or **Disconnect** if it is already connected.',
        ]),
        h2('All integrations'),
        table(
          ['Integration', 'Category', 'What it does', 'Status'],
          INTEGRATIONS.map((i) => [i.name, i.category || '-', i.description, i.status]),
        ),
      ],
    },
    ...integrationPages,
  ],
}
