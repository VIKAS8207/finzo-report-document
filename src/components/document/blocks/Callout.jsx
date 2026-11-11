import Inline from '../Inline'

/** A highlighted tip or note. */
export default function Callout({ text }) {
  return (
    <div className="my-4 rounded-lg border-l-4 border-blue-500 bg-blue-50 px-4 py-3 text-[15px] leading-7 text-slate-700 sm:my-5 sm:text-base">
      <Inline text={text} />
    </div>
  )
}
