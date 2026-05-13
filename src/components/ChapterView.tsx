import type { Chapter } from '../data/chapters'
import Visualization from './Visualization'

interface ChapterViewProps {
  chapter: Chapter
}

export default function ChapterView({ chapter }: ChapterViewProps) {
  return (
    <>
      {/* Mobile: poem on first screen, visualization on second screen */}
      <div className="md:hidden" style={{ backgroundColor: '#2C2A25' }}>
        <div className="min-h-[calc(100dvh-52px)] flex items-center justify-center px-6 py-8">
          <div className="text-center">
            <span className="text-[#FAF9F5]/40 text-xs tracking-wider mb-4 block" style={{ fontFamily: 'sans-serif' }}>
              {chapter.number}
            </span>
            <div className="space-y-0.5">
              {chapter.lines.map((line, i) => (
                <p
                  key={`${chapter.number}-${i}`}
                  className={`text-sm leading-relaxed font-light ${
                    line === '' ? 'h-4' : 'text-[#FAF9F5]/90'
                  }`}
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    opacity: 0,
                    animation: `fadeInLine 0.6s ease forwards`,
                    animationDelay: `${i * 50}ms`,
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="min-h-[calc(100dvh-52px)] flex items-center justify-center px-5 py-8">
          <div className="w-[280px] h-[280px]">
            <Visualization chapterNumber={chapter.number} />
          </div>
        </div>
      </div>

      {/* Desktop: side by side */}
      <div className="hidden md:flex h-full w-full items-center justify-center" style={{ backgroundColor: '#2C2A25' }}>
        <div className="flex flex-row items-center gap-6 px-6">
          <div className="w-[340px] h-[340px] flex-shrink-0">
            <Visualization chapterNumber={chapter.number} />
          </div>
          <div className="flex items-center">
            <div className="py-8">
              <span className="text-[#FAF9F5]/40 text-sm tracking-wider mb-6 block" style={{ fontFamily: 'sans-serif' }}>
                {chapter.number}
              </span>
              <div className="space-y-1">
                {chapter.lines.map((line, i) => (
                  <p
                    key={`${chapter.number}-${i}`}
                    className={`text-lg leading-relaxed font-light ${
                      line === '' ? 'h-5' : 'text-[#FAF9F5]/90'
                    }`}
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      opacity: 0,
                      animation: `fadeInLine 0.6s ease forwards`,
                      animationDelay: `${i * 50}ms`,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
