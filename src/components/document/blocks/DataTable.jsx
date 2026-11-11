import Inline from '../Inline'

/**
 * A responsive table. The first column is emphasised.
 * @param {{ head: string[], rows: string[][] }} props
 */
export default function DataTable({ head, rows }) {
  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-slate-200">
      <table className="w-full border-collapse text-left text-[13px] sm:text-sm">
        <thead className="bg-slate-50 text-slate-600">
          <tr>
            {head.map((title, i) => (
              <th key={i} className="border-b border-slate-200 px-3 py-2 font-medium sm:px-4 sm:py-2.5">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-100 last:border-0">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-3 py-2 align-top text-slate-700 sm:px-4 sm:py-2.5 ${j === 0 ? 'font-medium text-slate-900' : ''}`}
                >
                  <Inline text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
