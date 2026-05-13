import type { Chapter } from '../data/chapters'
import Visualization from './Visualization'

interface ChapterViewProps {
  chapter: Chapter
}

export default function ChapterView({ chapter }: ChapterViewProps) {
  return (
    <div className="h-full w-full flex items-center justify-center" style={{ backgroundColor: '#2C2A25' }}>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-6 px-6">
        <div className="w-[280px] h-[280px] md:w-[340px] md:h-[340px] flex-shrink-0">
          <Visualization chapterNumber={chapter.number} />
        </div>

        <div className="flex items-center overflow-y-auto scrollbar-hide">
          <div className="py-4 md:py-8">
            <span className="text-[#FAF9F5]/40 text-sm tracking-wider mb-6 block" style={{ fontFamily: 'sans-serif' }}>
              {chapter.number}
            </span>
            <div className="space-y-1">
              {chapter.lines.map((line, i) => (
                <p
                  key={`${chapter.number}-${i}`}
                  className={`text-base md:text-lg leading-relaxed font-light ${
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
  )
}
