import Callout from './Callout'
import CardGrid from './CardGrid'
import DataTable from './DataTable'
import Heading from './Heading'
import List from './List'
import Paragraph from './Paragraph'
import MediaImage from './MediaImage'
import MediaImageRow from './MediaImageRow'
import MediaVideo from './MediaVideo'
import Screenshot from './Screenshot'

/**
 * Maps a content block type (see src/content/builders.js) to the component that draws it.
 * To support a new block type: add a builder, a component, and an entry here.
 */
const RENDERERS = {
  p: (b) => <Paragraph text={b.x} />,
  h2: (b) => <Heading level={2} text={b.x} />,
  h3: (b) => <Heading level={3} text={b.x} />,
  ul: (b) => <List items={b.items} />,
  ol: (b) => <List ordered items={b.items} />,
  table: (b) => <DataTable head={b.head} rows={b.rows} />,
  shot: (b) => <Screenshot label={b.x} width={b.width} center={b.center} />,
  image: (b) => <MediaImage file={b.file} alt={b.alt} width={b.width} center={b.center} />,
  imageRow: (b) => <MediaImageRow items={b.items} />,
  video: (b) => <MediaVideo file={b.file} caption={b.caption} />,
  note: (b) => <Callout text={b.x} />,
  cards: (b) => <CardGrid items={b.items} />,
}

/** Draws one content block. Unknown block types render nothing. */
export default function BlockRenderer({ block }) {
  const render = RENDERERS[block.t]
  return render ? render(block) : null
}
