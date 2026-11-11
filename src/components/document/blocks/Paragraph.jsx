import Inline from '../Inline'

export default function Paragraph({ text }) {
  return (
    <p className="my-3 text-[15px] leading-7 text-slate-700 sm:my-4 sm:text-base">
      <Inline text={text} />
    </p>
  )
}
