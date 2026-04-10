import { notices } from '../../data/notices';

export default function HomeNoticeTicker() {
  const message = notices.map(n => `📢 ${n.text} [${n.date}]`).join('\u00a0\u00a0|\u00a0\u00a0') + '\u00a0\u00a0|\u00a0\u00a0';

  return (
    <div
      className="w-full overflow-hidden flex items-center select-none"
      style={{ background: '#f4a61d', height: '40px' }}
    >
      <div className="flex items-center h-full overflow-hidden w-full">
        <div
          className="flex whitespace-nowrap h-full items-center"
          style={{ animation: 'homeTickerScroll 35s linear infinite' }}
        >
          <span className="text-sm font-semibold text-[#102847] tracking-wide">{message.repeat(3)}</span>
        </div>
      </div>
      <style>{`
        @keyframes homeTickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
