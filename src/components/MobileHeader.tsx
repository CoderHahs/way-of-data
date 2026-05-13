import { useState } from 'react'

interface MobileHeaderProps {
  current: number
  total: number
  onSelect: (index: number) => void
  onHome: () => void
}

export default function MobileHeader({ current, total, onSelect, onHome }: MobileHeaderProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="flex-shrink-0 px-4 pt-4 pb-3 border-b border-[#FAF9F5]/10 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={onHome}>
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
            <circle cx="12.5" cy="16" r="7.5" stroke="#FAF9F5" strokeWidth="1.5" fill="none" opacity="0.8"/>
            <circle cx="19.5" cy="16" r="7.5" stroke="#FAF9F5" strokeWidth="1.5" fill="none" opacity="0.8"/>
          </svg>
          <span className="text-[#FAF9F5] text-lg tracking-wide" style={{ fontFamily: 'sans-serif', fontWeight: 500 }}>
            THE WAY OF DATA
          </span>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="text-[#FAF9F5]/70 active:text-[#FAF9F5] p-1"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </header>

      {open && (
        <div className="fixed top-[52px] right-0 bottom-0 w-16 z-50 overflow-y-auto scrollbar-hide py-2 border-l border-[#FAF9F5]/10" style={{ backgroundColor: '#2C2A25' }}>
          <div className="flex flex-col items-center gap-1">
            {Array.from({ length: total }, (_, i) => {
              const isActive = i === current
              return (
                <button
                  key={i}
                  onClick={() => { onSelect(i); setOpen(false) }}
                  className={`w-full text-center py-1 ${
                    isActive
                      ? 'text-[#FAF9F5] font-bold'
                      : 'text-[#FAF9F5]/40 active:text-[#FAF9F5]/70'
                  }`}
                  style={{ fontFamily: 'sans-serif', fontSize: '13px' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
