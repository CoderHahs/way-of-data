interface ChapterSidebarProps {
  current: number
  total: number
  onSelect: (index: number) => void
  onHome: () => void
}

export default function ChapterSidebar({ current, total, onSelect, onHome }: ChapterSidebarProps) {
  return (
    <aside
      className="fixed left-0 top-0 w-14 z-50 flex flex-col border-r border-[#FAF9F5]/10"
      style={{ backgroundColor: '#2C2A25', height: '100dvh', minHeight: '100vh' }}
    >
      <button
        onClick={onHome}
        className="w-full flex items-center justify-center py-3 text-[#FAF9F5]/80 hover:text-[#FAF9F5] transition-colors cursor-pointer flex-shrink-0 border-b border-[#FAF9F5]/10"
        title="Home"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9.5L12 3l9 6.5" />
          <path d="M19 13v6a1 1 0 01-1 1h-4v-5h-4v5H6a1 1 0 01-1-1v-6" />
        </svg>
      </button>

      <div className="flex-1 overflow-y-auto pt-4 pb-1 px-2 scrollbar-hide flex flex-col justify-between">
        {Array.from({ length: total }, (_, i) => {
          const isActive = i === current
          return (
            <button
              key={i}
              onClick={() => onSelect(i)}
              className={`w-full text-center cursor-pointer transition-colors ${
                isActive
                  ? 'text-[#FAF9F5] font-bold'
                  : 'text-[#FAF9F5]/40 hover:text-[#FAF9F5]/70'
              }`}
              style={{ fontFamily: 'sans-serif', fontSize: '10px', lineHeight: 1 }}
            >
              {String(i + 1).padStart(2, '0')}
            </button>
          )
        })}
      </div>
    </aside>
  )
}
