import { useState, useCallback, useRef } from 'react'
import { chapters } from './data/chapters'
import HomePage from './components/HomePage'
import ChapterView from './components/ChapterView'
import ChapterSidebar from './components/ChapterSidebar'

function App() {
  const [started, setStarted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const isTransitioning = useRef(false)

  const goToChapter = useCallback((index: number) => {
    if (index === currentIndex || isTransitioning.current) return
    isTransitioning.current = true
    setVisible(false)
    setTimeout(() => {
      setCurrentIndex(index)
      setVisible(true)
      isTransitioning.current = false
    }, 400)
  }, [currentIndex])

  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (isTransitioning.current) return
    if (Math.abs(e.deltaY) < 30) return
    if (e.deltaY > 0 && currentIndex < chapters.length - 1) {
      goToChapter(currentIndex + 1)
    } else if (e.deltaY < 0 && currentIndex > 0) {
      goToChapter(currentIndex - 1)
    }
  }, [currentIndex, goToChapter])

  if (!started) {
    return <HomePage onBegin={() => setStarted(true)} />
  }

  return (
    <div className="h-full w-full flex overflow-hidden" style={{ backgroundColor: '#2C2A25' }}>
      <ChapterSidebar
        current={currentIndex}
        total={chapters.length}
        onSelect={goToChapter}
        onHome={() => setStarted(false)}
      />

      <div className="flex-1 flex flex-col min-w-0 ml-14">
        <div
          className="flex-1 overflow-hidden"
          style={{ backgroundColor: '#2C2A25' }}
          onWheel={handleWheel}
        >
          <div
            className="h-full w-full transition-opacity duration-400 ease-in-out"
            style={{ opacity: visible ? 1 : 0 }}
          >
            <ChapterView chapter={chapters[currentIndex]} />
          </div>
        </div>

        <footer
          className="flex-shrink-0 py-3 px-8 text-center"
          style={{ backgroundColor: '#2C2A25' }}
        >
          <span
            className="text-xs tracking-[0.2em] text-[#FAF9F5]/40 uppercase"
            style={{ fontFamily: 'sans-serif' }}
          >
            THE WAY OF DATA
          </span>
        </footer>
      </div>
    </div>
  )
}

export default App
