import { useRef, useEffect } from 'react'

interface VisualizationProps {
  chapterNumber: number
}

type DrawFn = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => void

function createDrawFunction(chapter: number): DrawFn {
  switch (chapter) {
    case 1:
      return waveInterference
    case 2:
      return noiseField
    case 3:
      return bayesianUpdate
    case 4:
      return emptyNetwork
    case 5:
      return gradientDescent
    case 6:
      return gaussianSamples
    case 7:
      return confidenceBands
    case 8:
      return flowField
    case 9:
      return regularizationPrune
    case 10:
      return attentionWeights
    case 11:
      return sparseMatrix
    case 12:
      return overfitWiggle
    case 13:
      return soundWaveform
    case 14:
      return textToWave
    case 15:
      return convolutionalLayers
    case 16:
      return multimodalStreams
    case 17:
      return tokenRiver
    case 18:
      return agentLoop
    case 19:
      return trainingSpiral
    case 20:
      return embeddingSpace
    case 21:
      return rewardLandscape
    case 22:
      return videoFrames
    case 23:
      return textCorpus
    case 24:
      return toolGraph
    case 25:
      return latentManifold
    case 26:
      return hallucinationDrift
    case 27:
      return chainOfThought
    case 28:
      return spectrogramVoice
    case 29:
      return scalingCurve
    case 30:
      return alignmentBoundary
    case 31:
      return ensembleVotes
    case 32:
      return uncurvedBlock
    case 33:
      return tokenizerSplit
    case 34:
      return residualHighway
    case 35:
      return diffusionDenoise
    case 36:
      return feedbackLoop
    case 37:
      return transferArrows
    case 38:
      return contextWindow
    case 39:
      return syntheticMirror
    case 40:
      return returnCycle
    case 41:
      return glassBox
    case 42:
      return oneBecomeMany
    case 43:
      return softHardAttn
    case 44:
      return enoughThreshold
    case 45:
      return imperfectCircle
    case 46:
      return contentmentBalance
    case 47:
      return intuitionWeb
    case 48:
      return unlearnErase
    case 49:
      return openMindField
    case 50:
      return livingWay
    case 51:
      return neuralNetwork
    case 52:
      return deepLayers
    case 53:
      return singlePerceptron
    case 54:
      return activationCurve
    case 55:
      return reluFunction
    case 56:
      return sigmoidWave
    case 57:
      return backpropFlow
    case 58:
      return optimizationPath
    case 59:
      return epochCounter
    case 60:
      return batchGrid
    case 61:
      return learningRateSteps
    case 62:
      return convFilters
    case 63:
      return recurrentLoop
    case 64:
      return lstmGates
    case 65:
      return transformerBlocks
    case 66:
      return compressionFunnel
    case 67:
      return adversarialDance
    case 68:
      return dropoutRain
    case 69:
      return normalizationWave
    case 70:
      return transferBridge
    case 71:
      return bigDataStream
    case 72:
      return augmentMirrors
    case 73:
      return preprocessPipeline
    case 74:
      return scalingBars
    case 75:
      return featureCraft
    case 76:
      return dimensionCollapse
    case 77:
      return pcaAxes
    case 78:
      return tsneCluster
    case 79:
      return crossValidFolds
    case 80:
      return regularizationShrink
    case 81:
      return agiHorizon
    case 82:
      return agenticAutonomy
    case 83:
      return explainableLight
    case 84:
      return alignmentCompass
    case 85:
      return federatedNodes
    case 86:
      return ethicalScales
    case 87:
      return biasLens
    case 88:
      return humanLoopCircuit
    case 89:
      return mlopsGears
    case 90:
      return apiGateway
    case 91:
      return roboticArm
    case 92:
      return knowledgeWeb
    case 93:
      return quantumSuperposition
    case 94:
      return neuromorphicSpike
    case 95:
      return dimensionExplosion
    case 96:
      return boostingSteps
    case 97:
      return selfTeach
    case 98:
      return edgeDevice
    case 99:
      return policyLandscape
    case 100:
      return transformerFull
    default:
      return waveInterference
  }
}

function waveInterference(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const maxR = Math.min(w, h) * 0.45

  for (let i = 0; i < 40; i++) {
    const r = (i / 40) * maxR
    const points = 120
    ctx.beginPath()
    for (let j = 0; j <= points; j++) {
      const angle = (j / points) * Math.PI * 2
      const wave1 = Math.sin(angle * 6 + t * 0.5 + i * 0.15) * (r * 0.04)
      const wave2 = Math.cos(angle * 3 - t * 0.3 + i * 0.1) * (r * 0.03)
      const dr = r + wave1 + wave2
      const x = cx + Math.cos(angle) * dr
      const y = cy + Math.sin(angle) * dr
      if (j === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.08 + (i / 40) * 0.15})`
    ctx.lineWidth = 0.8
    ctx.stroke()
  }
}

function noiseField(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const step = 20
  const cols = Math.ceil(w / step)
  const rows = Math.ceil(h / step)

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = i * step + step / 2
      const y = j * step + step / 2
      const angle = Math.sin(x * 0.01 + t * 0.3) * Math.cos(y * 0.01 + t * 0.2) * Math.PI * 2
      const len = step * 0.4

      ctx.beginPath()
      ctx.moveTo(x - Math.cos(angle) * len / 2, y - Math.sin(angle) * len / 2)
      ctx.lineTo(x + Math.cos(angle) * len / 2, y + Math.sin(angle) * len / 2)
      ctx.strokeStyle = `rgba(31, 30, 29, ${0.15 + Math.sin(i * 0.3 + j * 0.3 + t) * 0.1})`
      ctx.lineWidth = 1
      ctx.stroke()
    }
  }
}

function bayesianUpdate(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2

  for (let layer = 0; layer < 3; layer++) {
    const phase = t * 0.4 + layer * 2
    const spread = 80 + layer * 40 + Math.sin(phase) * 20

    ctx.beginPath()
    for (let x = -spread; x <= spread; x += 1) {
      const sigma = 30 + layer * 15 + Math.sin(t * 0.3 + layer) * 10
      const y = Math.exp(-(x * x) / (2 * sigma * sigma)) * (150 + layer * 30)
      const px = cx + x * 1.5
      const py = cy + 60 - y
      if (x === -spread) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.12 + layer * 0.12})`
    ctx.lineWidth = 1.2
    ctx.stroke()
  }

  const numDots = 30
  for (let i = 0; i < numDots; i++) {
    const seed = i * 137.508
    const px = cx + Math.sin(seed + t * 0.1) * (100 + Math.cos(seed * 0.5) * 60)
    const py = cy + Math.cos(seed * 0.7 + t * 0.15) * 60
    const size = 1.5 + Math.sin(t + i) * 0.5
    ctx.beginPath()
    ctx.arc(px, py, size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.2 + Math.sin(t + i * 0.5) * 0.1})`
    ctx.fill()
  }
}

function emptyNetwork(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const nodes: { x: number; y: number }[] = []
  const numNodes = 20
  const cx = w / 2
  const cy = h / 2

  for (let i = 0; i < numNodes; i++) {
    const angle = (i / numNodes) * Math.PI * 2 + t * 0.1
    const r = 100 + Math.sin(i * 1.5 + t * 0.3) * 50
    nodes.push({
      x: cx + Math.cos(angle) * r,
      y: cy + Math.sin(angle) * r,
    })
  }

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x
      const dy = nodes[i].y - nodes[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 180) {
        const alpha = (1 - dist / 180) * 0.15
        ctx.beginPath()
        ctx.moveTo(nodes[i].x, nodes[i].y)
        ctx.lineTo(nodes[j].x, nodes[j].y)
        ctx.strokeStyle = `rgba(31, 30, 29, ${alpha})`
        ctx.lineWidth = 0.6
        ctx.stroke()
      }
    }
  }

  for (const node of nodes) {
    ctx.beginPath()
    ctx.arc(node.x, node.y, 3, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(31, 30, 29, 0.3)'
    ctx.fill()
  }
}

function gradientDescent(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2

  for (let i = 0; i < 25; i++) {
    const r = 20 + i * 12
    ctx.beginPath()
    const eccentricity = 1.4 + Math.sin(t * 0.2) * 0.2
    ctx.ellipse(cx + Math.sin(t * 0.1) * 10, cy + 20, r * eccentricity, r, 0.3 + Math.sin(t * 0.15) * 0.1, 0, Math.PI * 2)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.04 + (i / 25) * 0.08})`
    ctx.lineWidth = 0.8
    ctx.stroke()
  }

  const pathLen = 40
  ctx.beginPath()
  for (let i = 0; i < pathLen; i++) {
    const progress = i / pathLen
    const wobble = Math.sin(progress * 8 + t) * (1 - progress) * 15
    const x = cx + 120 * (1 - progress) * Math.cos(progress * 4 + t * 0.3) + wobble
    const y = cy - 100 + progress * 120
    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.4)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  const dotProgress = ((t * 0.15) % 1)
  const dotX = cx + 120 * (1 - dotProgress) * Math.cos(dotProgress * 4 + t * 0.3)
  const dotY = cy - 100 + dotProgress * 120
  ctx.beginPath()
  ctx.arc(dotX, dotY, 4, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(31, 30, 29, 0.6)'
  ctx.fill()
}

function gaussianSamples(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const numParticles = 200

  for (let i = 0; i < numParticles; i++) {
    const seed = i * 2.399
    const r1 = Math.abs(Math.sin(seed * 3.7)) * 120
    const r2 = Math.abs(Math.cos(seed * 2.3)) * 120
    const angle = seed + t * 0.05 * (i % 2 === 0 ? 1 : -1)
    const x = cx + Math.cos(angle) * r1 * Math.sin(t * 0.2 + i * 0.01)
    const y = cy + Math.sin(angle) * r2 * Math.cos(t * 0.15 + i * 0.01)
    const size = 1 + Math.sin(t + seed) * 0.5

    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.1 + Math.abs(Math.sin(seed)) * 0.25})`
    ctx.fill()
  }
}

function confidenceBands(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const margin = 60
  const plotW = w - margin * 2
  const cy = h / 2

  for (let band = 3; band >= 1; band--) {
    const spread = band * 25 + Math.sin(t * 0.3 + band) * 8
    ctx.beginPath()
    for (let x = 0; x <= plotW; x += 2) {
      const normX = x / plotW
      const baseY = Math.sin(normX * 4 + t * 0.4) * 40
      const upper = cy + baseY - spread
      if (x === 0) ctx.moveTo(margin + x, upper)
      else ctx.lineTo(margin + x, upper)
    }
    for (let x = plotW; x >= 0; x -= 2) {
      const normX = x / plotW
      const baseY = Math.sin(normX * 4 + t * 0.4) * 40
      const lower = cy + baseY + spread
      ctx.lineTo(margin + x, lower)
    }
    ctx.closePath()
    ctx.fillStyle = `rgba(31, 30, 29, ${0.03 * band})`
    ctx.fill()
  }

  ctx.beginPath()
  for (let x = 0; x <= plotW; x += 2) {
    const normX = x / plotW
    const baseY = Math.sin(normX * 4 + t * 0.4) * 40
    const px = margin + x
    const py = cy + baseY
    if (x === 0) ctx.moveTo(px, py)
    else ctx.lineTo(px, py)
  }
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.5)'
  ctx.lineWidth = 1.5
  ctx.stroke()
}

function flowField(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const numLines = 60
  const steps = 50
  const stepSize = 4

  for (let i = 0; i < numLines; i++) {
    let x = (i / numLines) * w
    let y = h * 0.1 + Math.sin(i * 0.5) * 30
    ctx.beginPath()
    ctx.moveTo(x, y)
    for (let s = 0; s < steps; s++) {
      const angle = Math.sin(x * 0.008 + t * 0.2) * Math.cos(y * 0.006 + t * 0.15) * Math.PI * 2
      x += Math.cos(angle) * stepSize
      y += Math.sin(angle) * stepSize + 1.5
      ctx.lineTo(x, y)
    }
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.06 + (i / numLines) * 0.1})`
    ctx.lineWidth = 0.8
    ctx.stroke()
  }
}

function regularizationPrune(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const branches = 8
  const depth = 4

  function drawBranch(x: number, y: number, angle: number, len: number, d: number) {
    if (d <= 0) return
    const endX = x + Math.cos(angle) * len
    const endY = y + Math.sin(angle) * len
    const fade = Math.sin(t * 0.5 + d * 0.8 + angle) * 0.5 + 0.5
    const alpha = fade * (d / depth) * 0.4

    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(endX, endY)
    ctx.strokeStyle = `rgba(31, 30, 29, ${alpha})`
    ctx.lineWidth = d * 0.5
    ctx.stroke()

    const spread = 0.5 + Math.sin(t * 0.3 + d) * 0.2
    drawBranch(endX, endY, angle - spread, len * 0.7, d - 1)
    drawBranch(endX, endY, angle + spread, len * 0.7, d - 1)
  }

  for (let i = 0; i < branches; i++) {
    const angle = (i / branches) * Math.PI * 2 + t * 0.05
    drawBranch(cx, cy, angle, 50 + Math.sin(t * 0.2 + i) * 10, depth)
  }

  ctx.beginPath()
  ctx.arc(cx, cy, 5, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(31, 30, 29, 0.3)'
  ctx.fill()
}

function attentionWeights(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const n = 8
  const leftX = w * 0.3
  const rightX = w * 0.7
  const startY = h * 0.15
  const spacing = (h * 0.7) / (n - 1)

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const weight = Math.sin(i * 0.8 + j * 1.2 + t * 0.5) * 0.5 + 0.5
      const alpha = weight * 0.3

      ctx.beginPath()
      ctx.moveTo(leftX, startY + i * spacing)
      const cpX = w / 2
      const cpY = (startY + i * spacing + startY + j * spacing) / 2 + Math.sin(t * 0.3 + i + j) * 10
      ctx.quadraticCurveTo(cpX, cpY, rightX, startY + j * spacing)
      ctx.strokeStyle = `rgba(31, 30, 29, ${alpha})`
      ctx.lineWidth = weight * 2
      ctx.stroke()
    }
  }

  for (let i = 0; i < n; i++) {
    ctx.beginPath()
    ctx.arc(leftX, startY + i * spacing, 4, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(31, 30, 29, 0.4)'
    ctx.fill()

    ctx.beginPath()
    ctx.arc(rightX, startY + i * spacing, 4, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(31, 30, 29, 0.4)'
    ctx.fill()
  }
}

function sparseMatrix(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const gridSize = 16
  const cellW = (w * 0.7) / gridSize
  const cellH = (h * 0.7) / gridSize
  const offsetX = w * 0.15
  const offsetY = h * 0.15

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const value = Math.sin(i * 1.3 + j * 0.7 + t * 0.4) * Math.cos(i * 0.5 + j * 1.1 + t * 0.3)
      const visible = Math.abs(value) > 0.5

      if (visible) {
        const size = Math.abs(value) * cellW * 0.6
        const x = offsetX + j * cellW + cellW / 2
        const y = offsetY + i * cellH + cellH / 2
        ctx.beginPath()
        ctx.arc(x, y, size / 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(31, 30, 29, ${Math.abs(value) * 0.4})`
        ctx.fill()
      }
    }
  }

  ctx.strokeStyle = 'rgba(31, 30, 29, 0.05)'
  ctx.lineWidth = 0.5
  for (let i = 0; i <= gridSize; i++) {
    ctx.beginPath()
    ctx.moveTo(offsetX + i * cellW, offsetY)
    ctx.lineTo(offsetX + i * cellW, offsetY + gridSize * cellH)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(offsetX, offsetY + i * cellH)
    ctx.lineTo(offsetX + gridSize * cellW, offsetY + i * cellH)
    ctx.stroke()
  }
}

function overfitWiggle(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const margin = 60
  const plotW = w - margin * 2
  const cy = h / 2

  ctx.beginPath()
  for (let x = 0; x <= plotW; x += 2) {
    const normX = x / plotW
    const simpleY = Math.sin(normX * Math.PI * 2) * 60
    const px = margin + x
    const py = cy + simpleY
    if (x === 0) ctx.moveTo(px, py)
    else ctx.lineTo(px, py)
  }
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.15)'
  ctx.lineWidth = 2
  ctx.setLineDash([4, 4])
  ctx.stroke()
  ctx.setLineDash([])

  ctx.beginPath()
  for (let x = 0; x <= plotW; x += 1) {
    const normX = x / plotW
    const baseY = Math.sin(normX * Math.PI * 2) * 60
    const wiggle = Math.sin(normX * 20 + t * 0.8) * 20 * Math.sin(t * 0.3)
      + Math.cos(normX * 15 + t * 0.5) * 10
    const px = margin + x
    const py = cy + baseY + wiggle
    if (x === 0) ctx.moveTo(px, py)
    else ctx.lineTo(px, py)
  }
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.5)'
  ctx.lineWidth = 1.2
  ctx.stroke()

  const numPoints = 10
  for (let i = 0; i < numPoints; i++) {
    const normX = (i + 0.5) / numPoints
    const y = Math.sin(normX * Math.PI * 2) * 60 + (Math.sin(i * 3.7) * 15)
    ctx.beginPath()
    ctx.arc(margin + normX * plotW, cy + y, 3, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(31, 30, 29, 0.5)'
    ctx.fill()
  }
}

function soundWaveform(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cy = h / 2
  const numWaves = 5

  for (let wave = 0; wave < numWaves; wave++) {
    const yOffset = (wave - 2) * 40
    ctx.beginPath()
    for (let x = 0; x < w; x += 1) {
      const normX = x / w
      const envelope = Math.sin(normX * Math.PI) * (0.6 + wave * 0.1)
      const freq = 8 + wave * 4
      const amp = 25 * envelope
      const y = cy + yOffset + Math.sin(normX * freq * Math.PI + t * (1 + wave * 0.3)) * amp
      if (x === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.08 + wave * 0.06})`
    ctx.lineWidth = 1
    ctx.stroke()
  }

  const scanX = ((t * 0.1) % 1) * w
  ctx.beginPath()
  ctx.moveTo(scanX, h * 0.2)
  ctx.lineTo(scanX, h * 0.8)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.15)'
  ctx.lineWidth = 0.5
  ctx.stroke()
}

function textToWave(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const topY = h * 0.25
  const bottomY = h * 0.75
  const numTokens = 8

  for (let i = 0; i < numTokens; i++) {
    const x = cx + (i - numTokens / 2) * 30
    const bobY = topY + Math.sin(t * 0.8 + i * 0.6) * 5
    ctx.beginPath()
    ctx.rect(x - 8, bobY - 6, 16, 12)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.2 + Math.sin(t + i) * 0.1})`
    ctx.lineWidth = 0.8
    ctx.stroke()

    const progress = (Math.sin(t * 0.4 + i * 0.8) + 1) / 2
    ctx.beginPath()
    ctx.moveTo(x, bobY + 6)
    const cpY = (topY + bottomY) / 2
    ctx.quadraticCurveTo(x + Math.sin(t + i) * 20, cpY, cx + (i - numTokens / 2) * 8, bottomY - 20)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.05 + progress * 0.1})`
    ctx.lineWidth = 0.5
    ctx.stroke()
  }

  ctx.beginPath()
  for (let x = w * 0.2; x < w * 0.8; x += 1) {
    const normX = (x - w * 0.2) / (w * 0.6)
    const amp = 15 * Math.sin(normX * Math.PI)
    const y = bottomY + Math.sin(normX * 12 + t * 2) * amp
    if (x === w * 0.2) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.35)'
  ctx.lineWidth = 1.2
  ctx.stroke()
}

function convolutionalLayers(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const layers = 5
  const layerW = w * 0.12
  const gap = (w - layers * layerW) / (layers + 1)

  for (let l = 0; l < layers; l++) {
    const x = gap + l * (layerW + gap)
    const cells = 8 - l
    const cellSize = (h * 0.6) / cells
    const yStart = h * 0.2

    for (let i = 0; i < cells; i++) {
      for (let j = 0; j < cells; j++) {
        const val = Math.sin(i * 1.5 + j * 2.1 + t * 0.5 + l * 1.2) * 0.5 + 0.5
        const alpha = val * 0.3
        ctx.fillStyle = `rgba(31, 30, 29, ${alpha})`
        ctx.fillRect(x + j * (layerW / cells), yStart + i * cellSize, layerW / cells - 1, cellSize - 1)
      }
    }

    if (l < layers - 1) {
      const nextX = gap + (l + 1) * (layerW + gap)
      ctx.beginPath()
      ctx.moveTo(x + layerW, h / 2)
      ctx.lineTo(nextX, h / 2)
      ctx.strokeStyle = 'rgba(31, 30, 29, 0.1)'
      ctx.lineWidth = 0.5
      ctx.setLineDash([2, 2])
      ctx.stroke()
      ctx.setLineDash([])
    }
  }
}

function multimodalStreams(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const streams = 3
  const colors = [0.5, 0.35, 0.2]

  for (let s = 0; s < streams; s++) {
    const startAngle = (s / streams) * Math.PI * 2 + t * 0.1
    const startX = cx + Math.cos(startAngle) * 150
    const startY = cy + Math.sin(startAngle) * 150

    ctx.beginPath()
    const steps = 60
    for (let i = 0; i <= steps; i++) {
      const progress = i / steps
      const x = startX + (cx - startX) * progress + Math.sin(progress * 6 + t + s) * 20 * (1 - progress)
      const y = startY + (cy - startY) * progress + Math.cos(progress * 5 + t + s * 2) * 20 * (1 - progress)
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.strokeStyle = `rgba(31, 30, 29, ${colors[s]})`
    ctx.lineWidth = 1.5
    ctx.stroke()
  }

  const pulseR = 20 + Math.sin(t * 0.8) * 5
  ctx.beginPath()
  ctx.arc(cx, cy, pulseR, 0, Math.PI * 2)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.3)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  for (let ring = 1; ring <= 3; ring++) {
    ctx.beginPath()
    ctx.arc(cx, cy, pulseR + ring * 15, 0, Math.PI * 2)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.08 / ring})`
    ctx.lineWidth = 0.5
    ctx.stroke()
  }
}

function tokenRiver(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const numTokens = 80
  const riverWidth = h * 0.4

  for (let i = 0; i < numTokens; i++) {
    const seed = i * 1.618
    const baseX = ((seed * 100 + t * 30) % (w + 40)) - 20
    const lane = (Math.sin(seed * 7.3) + 1) / 2
    const y = h / 2 - riverWidth / 2 + lane * riverWidth + Math.sin(baseX * 0.01 + t * 0.5 + seed) * 15
    const size = 3 + Math.sin(seed * 3.1) * 1.5

    ctx.beginPath()
    ctx.rect(baseX - size, y - size / 2, size * 2, size)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.08 + lane * 0.15})`
    ctx.fill()
  }

  ctx.beginPath()
  for (let x = 0; x < w; x += 2) {
    const y = h / 2 - riverWidth / 2 + Math.sin(x * 0.015 + t * 0.3) * 10 - 10
    if (x === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.06)'
  ctx.lineWidth = 0.5
  ctx.stroke()

  ctx.beginPath()
  for (let x = 0; x < w; x += 2) {
    const y = h / 2 + riverWidth / 2 + Math.sin(x * 0.012 + t * 0.25) * 10 + 10
    if (x === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.06)'
  ctx.stroke()
}

function agentLoop(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const r = Math.min(w, h) * 0.28
  const nodes = 4
  const labels = ['Observe', 'Reason', 'Decide', 'Act']

  for (let i = 0; i < nodes; i++) {
    const angle = (i / nodes) * Math.PI * 2 - Math.PI / 2
    const nextAngle = ((i + 1) / nodes) * Math.PI * 2 - Math.PI / 2
    const x1 = cx + Math.cos(angle) * r
    const y1 = cy + Math.sin(angle) * r
    const x2 = cx + Math.cos(nextAngle) * r
    const y2 = cy + Math.sin(nextAngle) * r

    ctx.beginPath()
    const cpAngle = (angle + nextAngle) / 2
    const cpR = r * 1.15
    ctx.moveTo(x1, y1)
    ctx.quadraticCurveTo(cx + Math.cos(cpAngle) * cpR, cy + Math.sin(cpAngle) * cpR, x2, y2)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.2)'
    ctx.lineWidth = 1
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(x1, y1, 20, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.3)'
    ctx.lineWidth = 1
    ctx.stroke()

    ctx.fillStyle = 'rgba(31, 30, 29, 0.4)'
    ctx.font = '10px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(labels[i], x1, y1 + 32)
  }

  const dotAngle = (t * 0.3) % (Math.PI * 2) - Math.PI / 2
  const dotX = cx + Math.cos(dotAngle) * r
  const dotY = cy + Math.sin(dotAngle) * r
  ctx.beginPath()
  ctx.arc(dotX, dotY, 5, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(31, 30, 29, 0.5)'
  ctx.fill()
}

function trainingSpiral(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const maxR = Math.min(w, h) * 0.4
  const turns = 6
  const points = 300

  ctx.beginPath()
  for (let i = 0; i <= points; i++) {
    const progress = i / points
    const angle = progress * turns * Math.PI * 2 + t * 0.2
    const r = progress * maxR
    const wobble = Math.sin(progress * 20 + t) * 3 * progress
    const x = cx + Math.cos(angle) * (r + wobble)
    const y = cy + Math.sin(angle) * (r + wobble)
    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.25)'
  ctx.lineWidth = 1
  ctx.stroke()

  const epochs = 12
  for (let i = 0; i < epochs; i++) {
    const progress = (i + (t * 0.05) % 1) / epochs
    if (progress > 1) continue
    const angle = progress * turns * Math.PI * 2 + t * 0.2
    const r = progress * maxR
    const x = cx + Math.cos(angle) * r
    const y = cy + Math.sin(angle) * r
    ctx.beginPath()
    ctx.arc(x, y, 2.5, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.2 + progress * 0.3})`
    ctx.fill()
  }
}

function embeddingSpace(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const clusters = 5
  const pointsPerCluster = 15

  for (let c = 0; c < clusters; c++) {
    const clusterAngle = (c / clusters) * Math.PI * 2 + t * 0.05
    const clusterR = 80 + Math.sin(c * 2.3) * 30
    const clusterX = cx + Math.cos(clusterAngle) * clusterR
    const clusterY = cy + Math.sin(clusterAngle) * clusterR

    for (let p = 0; p < pointsPerCluster; p++) {
      const seed = c * 100 + p * 3.7
      const px = clusterX + Math.cos(seed + t * 0.2) * (15 + Math.sin(seed) * 8)
      const py = clusterY + Math.sin(seed * 1.3 + t * 0.15) * (15 + Math.cos(seed) * 8)

      ctx.beginPath()
      ctx.arc(px, py, 2, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(31, 30, 29, ${0.15 + c * 0.05})`
      ctx.fill()
    }

    ctx.beginPath()
    ctx.arc(clusterX, clusterY, 25 + Math.sin(t * 0.3 + c) * 3, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.06)'
    ctx.lineWidth = 0.5
    ctx.setLineDash([2, 3])
    ctx.stroke()
    ctx.setLineDash([])
  }
}

function rewardLandscape(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const rows = 20
  const perspectiveH = h * 0.6
  const startY = h * 0.3

  for (let i = 0; i < rows; i++) {
    const rowProgress = i / rows
    const y = startY + rowProgress * perspectiveH
    const rowWidth = w * 0.3 + rowProgress * w * 0.5

    ctx.beginPath()
    for (let x = 0; x <= rowWidth; x += 2) {
      const normX = x / rowWidth - 0.5
      const height = Math.sin(normX * 4 + t * 0.3) * Math.cos(rowProgress * 3 + t * 0.2) * 20 * (1 - rowProgress)
      const px = (w - rowWidth) / 2 + x
      const py = y + height
      if (x === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.05 + rowProgress * 0.12})`
    ctx.lineWidth = 0.8
    ctx.stroke()
  }

  const agentX = w / 2 + Math.sin(t * 0.4) * 50
  const agentRow = 0.4
  const agentY = startY + agentRow * perspectiveH + Math.sin(agentX / w * 4 + t * 0.3) * Math.cos(agentRow * 3 + t * 0.2) * 20 * 0.6
  ctx.beginPath()
  ctx.arc(agentX, agentY, 4, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(31, 30, 29, 0.5)'
  ctx.fill()
}

function videoFrames(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const numFrames = 7
  const frameW = w * 0.12
  const frameH = frameW * 0.75
  const cy = h / 2

  for (let i = 0; i < numFrames; i++) {
    const progress = i / (numFrames - 1)
    const x = w * 0.15 + progress * w * 0.7 - frameW / 2
    const yOffset = Math.sin(progress * Math.PI) * -20 + Math.sin(t * 0.5 + i * 0.8) * 5
    const y = cy - frameH / 2 + yOffset

    ctx.strokeStyle = `rgba(31, 30, 29, ${0.15 + progress * 0.15})`
    ctx.lineWidth = 0.8
    ctx.strokeRect(x, y, frameW, frameH)

    const shape = (i + Math.floor(t * 0.5)) % 3
    const shapeCx = x + frameW / 2
    const shapeCy = y + frameH / 2
    const shapeR = frameW * 0.2

    ctx.beginPath()
    if (shape === 0) {
      ctx.arc(shapeCx + Math.sin(t + i) * 5, shapeCy, shapeR, 0, Math.PI * 2)
    } else if (shape === 1) {
      ctx.rect(shapeCx - shapeR + Math.cos(t + i) * 3, shapeCy - shapeR, shapeR * 2, shapeR * 2)
    } else {
      ctx.moveTo(shapeCx, shapeCy - shapeR)
      ctx.lineTo(shapeCx + shapeR, shapeCy + shapeR)
      ctx.lineTo(shapeCx - shapeR, shapeCy + shapeR)
      ctx.closePath()
    }
    ctx.fillStyle = `rgba(31, 30, 29, ${0.1 + Math.sin(t + i * 0.5) * 0.05})`
    ctx.fill()

    if (i < numFrames - 1) {
      const nextX = w * 0.15 + ((i + 1) / (numFrames - 1)) * w * 0.7 - frameW / 2
      ctx.beginPath()
      ctx.moveTo(x + frameW + 2, cy)
      ctx.lineTo(nextX - 2, cy)
      ctx.strokeStyle = 'rgba(31, 30, 29, 0.08)'
      ctx.lineWidth = 0.5
      ctx.setLineDash([1, 2])
      ctx.stroke()
      ctx.setLineDash([])
    }
  }
}

function textCorpus(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const lines = 30
  const margin = w * 0.15

  for (let i = 0; i < lines; i++) {
    const y = h * 0.1 + (i / lines) * h * 0.8
    const lineWidth = (0.4 + Math.abs(Math.sin(i * 1.7 + t * 0.1)) * 0.5) * (w - margin * 2)
    const alpha = 0.06 + Math.sin(i * 0.5 + t * 0.3) * 0.03

    ctx.beginPath()
    ctx.moveTo(margin, y)
    ctx.lineTo(margin + lineWidth, y)
    ctx.strokeStyle = `rgba(31, 30, 29, ${alpha})`
    ctx.lineWidth = 2
    ctx.stroke()

    const numWords = Math.floor(lineWidth / 30)
    let wordX = margin
    for (let j = 0; j < numWords; j++) {
      const wordLen = 10 + Math.sin(i * 3.3 + j * 2.1) * 8
      const highlight = Math.sin(t * 0.5 + i * 0.3 + j * 0.7) > 0.7
      if (highlight) {
        ctx.fillStyle = 'rgba(31, 30, 29, 0.12)'
        ctx.fillRect(wordX, y - 4, wordLen, 8)
      }
      wordX += wordLen + 6
      if (wordX > margin + lineWidth) break
    }
  }
}

function toolGraph(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const agentR = 25

  ctx.beginPath()
  ctx.arc(cx, cy, agentR, 0, Math.PI * 2)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.4)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  const tools = 6
  const toolR = Math.min(w, h) * 0.32

  for (let i = 0; i < tools; i++) {
    const angle = (i / tools) * Math.PI * 2 + t * 0.08
    const tx = cx + Math.cos(angle) * toolR
    const ty = cy + Math.sin(angle) * toolR
    const active = Math.sin(t * 0.6 + i * 1.5) > 0.3

    ctx.beginPath()
    ctx.moveTo(cx + Math.cos(angle) * agentR, cy + Math.sin(angle) * agentR)
    ctx.lineTo(tx, ty)
    ctx.strokeStyle = `rgba(31, 30, 29, ${active ? 0.3 : 0.08})`
    ctx.lineWidth = active ? 1.2 : 0.5
    ctx.stroke()

    ctx.beginPath()
    ctx.rect(tx - 12, ty - 12, 24, 24)
    ctx.strokeStyle = `rgba(31, 30, 29, ${active ? 0.4 : 0.15})`
    ctx.lineWidth = 1
    ctx.stroke()

    if (active) {
      const pulseProgress = (Math.sin(t * 2 + i) + 1) / 2
      const dotX = cx + Math.cos(angle) * (agentR + pulseProgress * (toolR - agentR))
      const dotY = cy + Math.sin(angle) * (agentR + pulseProgress * (toolR - agentR))
      ctx.beginPath()
      ctx.arc(dotX, dotY, 2.5, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(31, 30, 29, 0.4)'
      ctx.fill()
    }
  }
}

function latentManifold(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const gridU = 20
  const gridV = 20

  for (let u = 0; u < gridU; u++) {
    ctx.beginPath()
    for (let v = 0; v <= gridV; v++) {
      const nu = u / gridU
      const nv = v / gridV
      const x = cx + (nu - 0.5) * 250 + Math.sin(nv * Math.PI * 2 + t * 0.3) * 30 * nu
      const y = cy + (nv - 0.5) * 250 + Math.cos(nu * Math.PI * 2 + t * 0.2) * 30 * nv
      if (v === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.strokeStyle = `rgba(31, 30, 29, 0.08)`
    ctx.lineWidth = 0.5
    ctx.stroke()
  }

  for (let v = 0; v < gridV; v++) {
    ctx.beginPath()
    for (let u = 0; u <= gridU; u++) {
      const nu = u / gridU
      const nv = v / gridV
      const x = cx + (nu - 0.5) * 250 + Math.sin(nv * Math.PI * 2 + t * 0.3) * 30 * nu
      const y = cy + (nv - 0.5) * 250 + Math.cos(nu * Math.PI * 2 + t * 0.2) * 30 * nv
      if (u === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.strokeStyle = `rgba(31, 30, 29, 0.08)`
    ctx.lineWidth = 0.5
    ctx.stroke()
  }

  const numPoints = 8
  for (let i = 0; i < numPoints; i++) {
    const nu = 0.3 + Math.sin(i * 2.1 + t * 0.1) * 0.2
    const nv = 0.3 + Math.cos(i * 1.7 + t * 0.15) * 0.2
    const x = cx + (nu - 0.5) * 250 + Math.sin(nv * Math.PI * 2 + t * 0.3) * 30 * nu
    const y = cy + (nv - 0.5) * 250 + Math.cos(nu * Math.PI * 2 + t * 0.2) * 30 * nv
    ctx.beginPath()
    ctx.arc(x, y, 3, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(31, 30, 29, 0.3)'
    ctx.fill()
  }
}

function hallucinationDrift(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2

  ctx.beginPath()
  for (let angle = 0; angle < Math.PI * 8; angle += 0.02) {
    const r = 20 + angle * 12 + Math.sin(angle * 3 + t * 0.5) * (5 + angle * 0.8)
    const x = cx + Math.cos(angle + t * 0.1) * r * 0.4
    const y = cy + Math.sin(angle + t * 0.1) * r * 0.4
    if (angle === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.12)'
  ctx.lineWidth = 0.7
  ctx.stroke()

  const numGhosts = 12
  for (let i = 0; i < numGhosts; i++) {
    const angle = (i / numGhosts) * Math.PI * 2 + t * 0.15
    const r = 60 + Math.sin(t * 0.4 + i * 2) * 40
    const x = cx + Math.cos(angle) * r
    const y = cy + Math.sin(angle) * r
    const ghostR = 4 + Math.sin(t + i * 1.3) * 2

    ctx.beginPath()
    ctx.arc(x, y, ghostR, 0, Math.PI * 2)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.1 + Math.sin(t * 0.8 + i) * 0.05})`
    ctx.lineWidth = 0.5
    ctx.setLineDash([1, 2])
    ctx.stroke()
    ctx.setLineDash([])
  }
}

function chainOfThought(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const steps = 7
  const margin = w * 0.12
  const stepW = (w - margin * 2) / steps

  for (let i = 0; i < steps; i++) {
    const x = margin + i * stepW + stepW / 2
    const baseY = h / 2 + Math.sin(i * 0.8 + t * 0.3) * 20
    const reveal = Math.min(1, Math.max(0, (Math.sin(t * 0.3) + 1) / 2 * steps - i))

    ctx.beginPath()
    ctx.arc(x, baseY, 12, 0, Math.PI * 2)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.1 + reveal * 0.25})`
    ctx.lineWidth = 1
    ctx.stroke()

    if (reveal > 0.5) {
      ctx.beginPath()
      ctx.arc(x, baseY, 4, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(31, 30, 29, ${reveal * 0.3})`
      ctx.fill()
    }

    if (i < steps - 1) {
      const nextX = margin + (i + 1) * stepW + stepW / 2
      const nextY = h / 2 + Math.sin((i + 1) * 0.8 + t * 0.3) * 20
      ctx.beginPath()
      ctx.moveTo(x + 14, baseY)
      ctx.quadraticCurveTo((x + nextX) / 2, (baseY + nextY) / 2 - 15, nextX - 14, nextY)
      ctx.strokeStyle = `rgba(31, 30, 29, ${0.08 + reveal * 0.12})`
      ctx.lineWidth = 0.8
      ctx.stroke()
    }
  }
}

function spectrogramVoice(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const margin = 40
  const plotW = w - margin * 2
  const plotH = h - margin * 2
  const freqBins = 32
  const timeBins = 50

  for (let ti = 0; ti < timeBins; ti++) {
    for (let fi = 0; fi < freqBins; fi++) {
      const x = margin + (ti / timeBins) * plotW
      const y = margin + (1 - fi / freqBins) * plotH
      const cellW = plotW / timeBins
      const cellH = plotH / freqBins

      const energy = Math.sin(fi * 0.5 + ti * 0.3 + t * 0.8) *
        Math.cos(fi * 0.2 + ti * 0.1 + t * 0.3) *
        Math.exp(-Math.abs(fi - 16 + Math.sin(ti * 0.2 + t * 0.5) * 8) / 12)

      if (energy > 0.1) {
        ctx.fillStyle = `rgba(31, 30, 29, ${energy * 0.3})`
        ctx.fillRect(x, y, cellW - 0.5, cellH - 0.5)
      }
    }
  }
}

function scalingCurve(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const margin = 60
  const plotW = w - margin * 2
  const plotH = h - margin * 2

  ctx.beginPath()
  ctx.moveTo(margin, margin + plotH)
  ctx.lineTo(margin + plotW, margin + plotH)
  ctx.moveTo(margin, margin + plotH)
  ctx.lineTo(margin, margin)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.15)'
  ctx.lineWidth = 0.8
  ctx.stroke()

  const curves = 3
  for (let c = 0; c < curves; c++) {
    ctx.beginPath()
    for (let x = 0; x <= plotW; x += 2) {
      const normX = x / plotW
      const scale = 1 + c * 0.3
      const y = Math.pow(normX + 0.01, -0.3 * scale) * 0.7 + Math.sin(t * 0.2 + c) * 0.02
      const clampedY = Math.min(1, Math.max(0, y))
      const px = margin + x
      const py = margin + (1 - clampedY) * plotH
      if (x === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.15 + c * 0.1})`
    ctx.lineWidth = 1.2
    ctx.stroke()
  }

  const dotX = ((t * 0.05) % 0.8) + 0.1
  const dotPx = margin + dotX * plotW
  const dotY = Math.pow(dotX + 0.01, -0.3) * 0.7
  const dotPy = margin + (1 - Math.min(1, dotY)) * plotH
  ctx.beginPath()
  ctx.arc(dotPx, dotPy, 4, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(31, 30, 29, 0.4)'
  ctx.fill()
}

function alignmentBoundary(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const boundaryR = Math.min(w, h) * 0.3

  ctx.beginPath()
  const boundaryPoints = 80
  for (let i = 0; i <= boundaryPoints; i++) {
    const angle = (i / boundaryPoints) * Math.PI * 2
    const wobble = Math.sin(angle * 5 + t * 0.3) * 8 + Math.cos(angle * 3 + t * 0.2) * 5
    const r = boundaryR + wobble
    const x = cx + Math.cos(angle) * r
    const y = cy + Math.sin(angle) * r
    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.closePath()
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.3)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  const insideCount = 20
  for (let i = 0; i < insideCount; i++) {
    const angle = (i / insideCount) * Math.PI * 2 + t * 0.05
    const r = Math.abs(Math.sin(i * 2.3 + t * 0.1)) * boundaryR * 0.7
    const x = cx + Math.cos(angle) * r
    const y = cy + Math.sin(angle) * r
    ctx.beginPath()
    ctx.arc(x, y, 2, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(31, 30, 29, 0.2)'
    ctx.fill()
  }

  const outsideCount = 8
  for (let i = 0; i < outsideCount; i++) {
    const angle = (i / outsideCount) * Math.PI * 2 + t * 0.08
    const r = boundaryR + 30 + Math.sin(i * 3.1 + t * 0.3) * 15
    const x = cx + Math.cos(angle) * r
    const y = cy + Math.sin(angle) * r
    ctx.beginPath()
    ctx.arc(x, y, 2, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.15)'
    ctx.lineWidth = 0.5
    ctx.setLineDash([1, 1])
    ctx.stroke()
    ctx.setLineDash([])
  }
}

function ensembleVotes(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const bottomY = h * 0.75
  const models = 5
  const topY = h * 0.2

  for (let m = 0; m < models; m++) {
    const x = w * 0.2 + (m / (models - 1)) * w * 0.6
    const prediction = Math.sin(m * 1.7 + t * 0.4) * 40

    ctx.beginPath()
    ctx.arc(x, topY, 15, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.25)'
    ctx.lineWidth = 1
    ctx.stroke()

    const voteY = bottomY + prediction
    ctx.beginPath()
    ctx.moveTo(x, topY + 15)
    ctx.quadraticCurveTo(x, (topY + voteY) / 2, cx + (x - cx) * 0.3, voteY)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.1 + Math.abs(Math.sin(m + t * 0.3)) * 0.1})`
    ctx.lineWidth = 0.8
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(cx + (x - cx) * 0.3, voteY, 3, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(31, 30, 29, 0.2)'
    ctx.fill()
  }

  const avgY = bottomY
  ctx.beginPath()
  ctx.arc(cx, avgY, 6, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(31, 30, 29, 0.35)'
  ctx.fill()

  ctx.beginPath()
  ctx.moveTo(w * 0.3, avgY)
  ctx.lineTo(w * 0.7, avgY)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.08)'
  ctx.lineWidth = 0.5
  ctx.setLineDash([3, 3])
  ctx.stroke()
  ctx.setLineDash([])
}

function uncurvedBlock(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const size = Math.min(w, h) * 0.3

  const wobble = Math.sin(t * 0.2) * 3
  const points = [
    { x: cx - size / 2 + wobble, y: cy - size / 2 },
    { x: cx + size / 2, y: cy - size / 2 + wobble },
    { x: cx + size / 2 - wobble, y: cy + size / 2 },
    { x: cx - size / 2, y: cy + size / 2 - wobble },
  ]

  ctx.beginPath()
  ctx.moveTo(points[0].x, points[0].y)
  for (let i = 1; i <= 4; i++) {
    const p = points[i % 4]
    ctx.lineTo(p.x, p.y)
  }
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.3)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  const numInner = 6
  for (let i = 1; i <= numInner; i++) {
    const progress = i / (numInner + 1)
    const innerSize = size * (1 - progress * 0.7)
    const rot = Math.sin(t * 0.15 + i * 0.5) * 0.05
    const fade = Math.sin(t * 0.3 + i * 0.8) * 0.5 + 0.5

    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate(rot)
    ctx.beginPath()
    ctx.rect(-innerSize / 2, -innerSize / 2, innerSize, innerSize)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.04 + fade * 0.08})`
    ctx.lineWidth = 0.5
    ctx.stroke()
    ctx.restore()
  }

  const numPotential = 20
  for (let i = 0; i < numPotential; i++) {
    const seed = i * 2.618
    const px = cx + Math.cos(seed * 5 + t * 0.1) * (size * 0.35)
    const py = cy + Math.sin(seed * 3 + t * 0.12) * (size * 0.35)
    const alpha = Math.sin(t * 0.5 + seed) * 0.1 + 0.1
    ctx.beginPath()
    ctx.arc(px, py, 1.5, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${alpha})`
    ctx.fill()
  }
}

function tokenizerSplit(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cy = h / 2
  const numBlocks = 12
  const totalW = w * 0.7
  const startX = w * 0.15

  for (let i = 0; i < numBlocks; i++) {
    const blockW = 15 + Math.sin(i * 2.3) * 8
    const x = startX + (i / numBlocks) * totalW
    const splitProgress = (Math.sin(t * 0.5 + i * 0.4) + 1) / 2
    const gap = splitProgress * 8

    ctx.fillStyle = `rgba(31, 30, 29, ${0.08 + splitProgress * 0.12})`
    ctx.fillRect(x, cy - 15 - gap, blockW, 12)
    ctx.fillRect(x + 2, cy + 3 + gap, blockW - 4, 10)

    if (splitProgress > 0.5) {
      ctx.fillRect(x + 4, cy + 18 + gap * 1.5, blockW - 8, 6)
    }
  }

  ctx.beginPath()
  ctx.moveTo(startX, cy)
  ctx.lineTo(startX + totalW, cy)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.06)'
  ctx.lineWidth = 0.5
  ctx.setLineDash([2, 4])
  ctx.stroke()
  ctx.setLineDash([])
}

function residualHighway(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const layers = 8
  const layerH = h * 0.7 / layers
  const startY = h * 0.15
  const cx = w / 2

  for (let i = 0; i < layers; i++) {
    const y = startY + i * layerH + layerH / 2
    ctx.beginPath()
    ctx.rect(cx - 40, y - 8, 80, 16)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.2)'
    ctx.lineWidth = 0.8
    ctx.stroke()

    if (i < layers - 1) {
      ctx.beginPath()
      ctx.moveTo(cx, y + 8)
      ctx.lineTo(cx, y + layerH - 8)
      ctx.strokeStyle = 'rgba(31, 30, 29, 0.15)'
      ctx.lineWidth = 0.6
      ctx.stroke()
    }
  }

  ctx.beginPath()
  ctx.moveTo(cx + 60, startY + layerH / 2)
  ctx.lineTo(cx + 60, startY + layers * layerH - layerH / 2)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.25)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  for (let i = 0; i < layers; i += 2) {
    const y = startY + i * layerH + layerH / 2
    ctx.beginPath()
    ctx.moveTo(cx + 40, y)
    ctx.lineTo(cx + 60, y)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.15)'
    ctx.lineWidth = 0.5
    ctx.stroke()
  }

  const dotProgress = ((t * 0.2) % 1)
  const dotY = startY + layerH / 2 + dotProgress * (layers - 1) * layerH
  ctx.beginPath()
  ctx.arc(cx + 60, dotY, 4, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(31, 30, 29, 0.4)'
  ctx.fill()
}

function diffusionDenoise(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const numParticles = 300
  const noiseLevel = (Math.sin(t * 0.2) + 1) / 2

  for (let i = 0; i < numParticles; i++) {
    const seed = i * 1.618
    const targetAngle = seed * 2.4
    const targetR = Math.sqrt(i / numParticles) * 100

    const targetX = cx + Math.cos(targetAngle) * targetR
    const targetY = cy + Math.sin(targetAngle) * targetR

    const noiseX = (Math.sin(seed * 7.3 + t) - 0.5) * 200 * noiseLevel
    const noiseY = (Math.cos(seed * 5.1 + t) - 0.5) * 200 * noiseLevel

    const x = targetX + noiseX
    const y = targetY + noiseY

    ctx.beginPath()
    ctx.arc(x, y, 1.2, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.1 + (1 - noiseLevel) * 0.2})`
    ctx.fill()
  }
}

function feedbackLoop(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const loops = 4

  for (let l = 0; l < loops; l++) {
    const r = 40 + l * 35
    const startAngle = t * (0.2 + l * 0.05)
    const arcLen = Math.PI * 1.5

    ctx.beginPath()
    ctx.arc(cx, cy, r, startAngle, startAngle + arcLen)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.08 + l * 0.06})`
    ctx.lineWidth = 1 + l * 0.3
    ctx.stroke()

    const endAngle = startAngle + arcLen
    const arrowX = cx + Math.cos(endAngle) * r
    const arrowY = cy + Math.sin(endAngle) * r
    ctx.beginPath()
    ctx.arc(arrowX, arrowY, 3, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.15 + l * 0.08})`
    ctx.fill()
  }
}

function transferArrows(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const leftX = w * 0.2
  const rightX = w * 0.8
  const cy = h / 2
  const boxH = h * 0.3

  ctx.strokeStyle = 'rgba(31, 30, 29, 0.2)'
  ctx.lineWidth = 1
  ctx.strokeRect(leftX - 30, cy - boxH / 2, 60, boxH)
  ctx.strokeRect(rightX - 30, cy - boxH / 2, 60, boxH)

  const numLayers = 5
  for (let i = 0; i < numLayers; i++) {
    const y = cy - boxH / 2 + (i + 0.5) * (boxH / numLayers)
    const freeze = i < 3
    const alpha = freeze ? 0.3 : 0.1 + Math.sin(t + i) * 0.05
    ctx.fillStyle = `rgba(31, 30, 29, ${alpha})`
    ctx.fillRect(leftX - 20, y - 3, 40, 6)

    ctx.fillStyle = `rgba(31, 30, 29, ${alpha})`
    ctx.fillRect(rightX - 20, y - 3, 40, 6)
  }

  const numArrows = 3
  for (let i = 0; i < numArrows; i++) {
    const progress = ((t * 0.15 + i * 0.33) % 1)
    const x = leftX + 30 + progress * (rightX - leftX - 60)
    const y = cy + (i - 1) * 20
    ctx.beginPath()
    ctx.arc(x, y, 2.5, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.2 + progress * 0.2})`
    ctx.fill()
  }

  ctx.beginPath()
  ctx.moveTo(leftX + 35, cy)
  ctx.lineTo(rightX - 35, cy)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.1)'
  ctx.lineWidth = 0.5
  ctx.setLineDash([3, 3])
  ctx.stroke()
  ctx.setLineDash([])
}

function contextWindow(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const winW = w * 0.5
  const winH = h * 0.4

  ctx.strokeStyle = 'rgba(31, 30, 29, 0.25)'
  ctx.lineWidth = 1.2
  ctx.strokeRect(cx - winW / 2, cy - winH / 2, winW, winH)

  const numTokens = 60
  for (let i = 0; i < numTokens; i++) {
    const seed = i * 2.1
    const x = cx + (Math.sin(seed * 3.7 + t * 0.05) - 0.5) * w * 0.9
    const y = cy + (Math.cos(seed * 2.3 + t * 0.04) - 0.5) * h * 0.9

    const inside = x > cx - winW / 2 && x < cx + winW / 2 && y > cy - winH / 2 && y < cy + winH / 2

    ctx.beginPath()
    ctx.arc(x, y, 2, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${inside ? 0.35 : 0.06})`
    ctx.fill()
  }

  const scanX = cx - winW / 2 + ((t * 0.1) % 1) * winW
  ctx.beginPath()
  ctx.moveTo(scanX, cy - winH / 2)
  ctx.lineTo(scanX, cy + winH / 2)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.08)'
  ctx.lineWidth = 0.5
  ctx.stroke()
}

function syntheticMirror(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2

  ctx.beginPath()
  ctx.moveTo(cx, h * 0.1)
  ctx.lineTo(cx, h * 0.9)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.1)'
  ctx.lineWidth = 0.5
  ctx.stroke()

  const numPoints = 15
  for (let i = 0; i < numPoints; i++) {
    const seed = i * 3.14
    const x = cx - 40 - Math.abs(Math.sin(seed * 2.1)) * 80
    const y = cy + (i / numPoints - 0.5) * h * 0.6
    const size = 2 + Math.sin(seed) * 1

    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(31, 30, 29, 0.3)'
    ctx.fill()

    const mirrorX = cx + (cx - x) + Math.sin(t * 0.5 + i) * 5
    const mirrorY = y + Math.cos(t * 0.3 + i * 0.7) * 3
    ctx.beginPath()
    ctx.arc(mirrorX, mirrorY, size, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.15)'
    ctx.lineWidth = 0.6
    ctx.stroke()

    ctx.beginPath()
    ctx.setLineDash([1, 2])
    ctx.moveTo(x + size, y)
    ctx.lineTo(mirrorX - size, mirrorY)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.06)'
    ctx.lineWidth = 0.4
    ctx.stroke()
    ctx.setLineDash([])
  }
}

function returnCycle(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const r = Math.min(w, h) * 0.3

  for (let ring = 0; ring < 3; ring++) {
    const ringR = r - ring * 30
    const speed = 0.15 + ring * 0.05
    const dir = ring % 2 === 0 ? 1 : -1
    ctx.beginPath()
    ctx.arc(cx, cy, ringR, 0, Math.PI * 2)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.06 + ring * 0.04})`
    ctx.lineWidth = 0.5
    ctx.stroke()

    const numDots = 6 - ring
    for (let d = 0; d < numDots; d++) {
      const angle = (d / numDots) * Math.PI * 2 + t * speed * dir
      const dx = cx + Math.cos(angle) * ringR
      const dy = cy + Math.sin(angle) * ringR
      ctx.beginPath()
      ctx.arc(dx, dy, 2.5, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(31, 30, 29, ${0.15 + ring * 0.08})`
      ctx.fill()
    }
  }
}

function glassBox(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const boxSize = Math.min(w, h) * 0.35

  ctx.strokeStyle = 'rgba(31, 30, 29, 0.2)'
  ctx.lineWidth = 1
  ctx.strokeRect(cx - boxSize / 2, cy - boxSize / 2, boxSize, boxSize)

  const gridN = 6
  for (let i = 1; i < gridN; i++) {
    const offset = (i / gridN) * boxSize
    ctx.beginPath()
    ctx.moveTo(cx - boxSize / 2 + offset, cy - boxSize / 2)
    ctx.lineTo(cx - boxSize / 2 + offset, cy + boxSize / 2)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.05)'
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(cx - boxSize / 2, cy - boxSize / 2 + offset)
    ctx.lineTo(cx + boxSize / 2, cy - boxSize / 2 + offset)
    ctx.stroke()
  }

  const pathPoints = 8
  ctx.beginPath()
  for (let i = 0; i < pathPoints; i++) {
    const px = cx - boxSize / 2 + ((i + 0.5) / pathPoints) * boxSize
    const py = cy + Math.sin(i * 1.2 + t * 0.4) * boxSize * 0.3
    if (i === 0) ctx.moveTo(px, py)
    else ctx.lineTo(px, py)
  }
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.35)'
  ctx.lineWidth = 1.2
  ctx.stroke()

  for (let i = 0; i < pathPoints; i++) {
    const px = cx - boxSize / 2 + ((i + 0.5) / pathPoints) * boxSize
    const py = cy + Math.sin(i * 1.2 + t * 0.4) * boxSize * 0.3
    ctx.beginPath()
    ctx.arc(px, py, 3, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(31, 30, 29, 0.25)'
    ctx.fill()
  }
}

function oneBecomeMany(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const topY = h * 0.2
  const bottomY = h * 0.8
  const branches = 8

  ctx.beginPath()
  ctx.arc(cx, topY, 8, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(31, 30, 29, 0.3)'
  ctx.fill()

  for (let i = 0; i < branches; i++) {
    const endX = w * 0.15 + (i / (branches - 1)) * w * 0.7
    const endY = bottomY + Math.sin(t * 0.4 + i * 1.2) * 10

    ctx.beginPath()
    ctx.moveTo(cx, topY + 8)
    ctx.quadraticCurveTo(
      cx + (endX - cx) * 0.3 + Math.sin(t * 0.3 + i) * 15,
      (topY + endY) / 2,
      endX, endY
    )
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.08 + Math.sin(t * 0.5 + i * 0.8) * 0.06})`
    ctx.lineWidth = 0.8
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(endX, endY, 4, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.15 + (i % 2) * 0.1})`
    ctx.fill()
  }
}

function softHardAttn(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const leftCx = w * 0.3
  const rightCx = w * 0.7
  const cy = h / 2
  const r = Math.min(w, h) * 0.2

  const softPoints = 20
  for (let i = 0; i < softPoints; i++) {
    const angle = (i / softPoints) * Math.PI * 2
    const pr = r * (0.5 + Math.sin(angle * 3 + t * 0.5) * 0.3)
    const x = leftCx + Math.cos(angle) * pr
    const y = cy + Math.sin(angle) * pr
    const alpha = 0.05 + Math.sin(angle * 2 + t * 0.3) * 0.03 + 0.05
    ctx.beginPath()
    ctx.arc(x, y, 8, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${alpha})`
    ctx.fill()
  }

  const hardPoints = 5
  for (let i = 0; i < hardPoints; i++) {
    const angle = (i / hardPoints) * Math.PI * 2 + t * 0.1
    const selected = Math.sin(t * 0.4 + i * 2) > 0.3
    const pr = r * 0.7
    const x = rightCx + Math.cos(angle) * pr
    const y = cy + Math.sin(angle) * pr
    ctx.beginPath()
    ctx.arc(x, y, 6, 0, Math.PI * 2)
    if (selected) {
      ctx.fillStyle = 'rgba(31, 30, 29, 0.35)'
      ctx.fill()
    } else {
      ctx.strokeStyle = 'rgba(31, 30, 29, 0.1)'
      ctx.lineWidth = 0.5
      ctx.stroke()
    }
  }
}

function enoughThreshold(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const margin = 60
  const plotW = w - margin * 2
  const plotH = h - margin * 2
  const thresholdY = margin + plotH * 0.3

  ctx.beginPath()
  ctx.moveTo(margin, thresholdY)
  ctx.lineTo(margin + plotW, thresholdY)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.2)'
  ctx.lineWidth = 1
  ctx.setLineDash([4, 4])
  ctx.stroke()
  ctx.setLineDash([])

  ctx.beginPath()
  for (let x = 0; x <= plotW; x += 2) {
    const normX = x / plotW
    const y = 1 - (1 - Math.exp(-normX * 4)) + Math.sin(t * 0.3 + normX * 2) * 0.02
    const py = margin + y * plotH
    if (x === 0) ctx.moveTo(margin + x, py)
    else ctx.lineTo(margin + x, py)
  }
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.35)'
  ctx.lineWidth = 1.2
  ctx.stroke()

  const crossX = 0.4 + Math.sin(t * 0.1) * 0.05
  const crossPx = margin + crossX * plotW
  ctx.beginPath()
  ctx.moveTo(crossPx, margin)
  ctx.lineTo(crossPx, margin + plotH)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.12)'
  ctx.lineWidth = 0.8
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(crossPx, thresholdY, 5, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(31, 30, 29, 0.4)'
  ctx.fill()
}

function imperfectCircle(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const r = Math.min(w, h) * 0.3

  for (let ring = 0; ring < 5; ring++) {
    const ringR = r - ring * 15
    const imperfection = 3 + ring * 2
    ctx.beginPath()
    const points = 100
    for (let i = 0; i <= points; i++) {
      const angle = (i / points) * Math.PI * 2
      const wobble = Math.sin(angle * (3 + ring) + t * 0.2 + ring) * imperfection
      const pr = ringR + wobble
      const x = cx + Math.cos(angle) * pr
      const y = cy + Math.sin(angle) * pr
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.06 + ring * 0.05})`
    ctx.lineWidth = 0.8 + ring * 0.2
    ctx.stroke()
  }
}

function contentmentBalance(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const beamW = w * 0.5
  const tilt = Math.sin(t * 0.3) * 0.08

  ctx.save()
  ctx.translate(cx, cy)
  ctx.rotate(tilt)

  ctx.beginPath()
  ctx.moveTo(-beamW / 2, 0)
  ctx.lineTo(beamW / 2, 0)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.3)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(0, 40)
  ctx.stroke()

  const leftWeight = 3
  const rightWeight = 3
  for (let i = 0; i < leftWeight; i++) {
    ctx.beginPath()
    ctx.arc(-beamW / 2 + 5, 15 + i * 12, 5, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.2)'
    ctx.lineWidth = 0.8
    ctx.stroke()
  }
  for (let i = 0; i < rightWeight; i++) {
    ctx.beginPath()
    ctx.arc(beamW / 2 - 5, 15 + i * 12, 5, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.2)'
    ctx.lineWidth = 0.8
    ctx.stroke()
  }

  ctx.restore()

  ctx.beginPath()
  ctx.moveTo(cx, cy + 40)
  ctx.lineTo(cx - 15, cy + 70)
  ctx.lineTo(cx + 15, cy + 70)
  ctx.closePath()
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.15)'
  ctx.lineWidth = 0.8
  ctx.stroke()
}

function intuitionWeb(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const nodes = 16

  const positions: { x: number; y: number }[] = []
  for (let i = 0; i < nodes; i++) {
    const seed = i * 2.399
    const r = 40 + Math.abs(Math.sin(seed * 3)) * 100
    const angle = seed + t * 0.02
    positions.push({
      x: cx + Math.cos(angle) * r,
      y: cy + Math.sin(angle) * r,
    })
  }

  for (let i = 0; i < nodes; i++) {
    for (let j = i + 1; j < nodes; j++) {
      const dx = positions[i].x - positions[j].x
      const dy = positions[i].y - positions[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 120) {
        const alpha = (1 - dist / 120) * 0.12
        const pulse = Math.sin(t * 0.8 + i + j) > 0.5 ? 1.5 : 1
        ctx.beginPath()
        ctx.moveTo(positions[i].x, positions[i].y)
        ctx.lineTo(positions[j].x, positions[j].y)
        ctx.strokeStyle = `rgba(31, 30, 29, ${alpha * pulse})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    }
  }

  for (let i = 0; i < nodes; i++) {
    ctx.beginPath()
    ctx.arc(positions[i].x, positions[i].y, 2.5, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(31, 30, 29, 0.2)'
    ctx.fill()
  }
}

function unlearnErase(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const numLines = 15

  for (let i = 0; i < numLines; i++) {
    const y = cy - 100 + i * 14
    const lineW = 60 + Math.sin(i * 1.7) * 40
    const eraseProgress = Math.max(0, Math.sin(t * 0.3 - i * 0.15))
    const remainingW = lineW * (1 - eraseProgress * 0.8)

    ctx.beginPath()
    ctx.moveTo(cx - lineW / 2, y)
    ctx.lineTo(cx - lineW / 2 + remainingW, y)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.15 - eraseProgress * 0.1})`
    ctx.lineWidth = 1.5
    ctx.stroke()

    if (eraseProgress > 0.1) {
      const eraseX = cx - lineW / 2 + remainingW
      ctx.beginPath()
      ctx.arc(eraseX, y, 2, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(31, 30, 29, ${eraseProgress * 0.15})`
      ctx.fill()
    }
  }
}

function openMindField(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const numRays = 24

  for (let i = 0; i < numRays; i++) {
    const angle = (i / numRays) * Math.PI * 2 + t * 0.05
    const innerR = 20 + Math.sin(t * 0.4 + i * 0.5) * 5
    const outerR = 80 + Math.sin(i * 1.5 + t * 0.2) * 30

    ctx.beginPath()
    ctx.moveTo(cx + Math.cos(angle) * innerR, cy + Math.sin(angle) * innerR)
    ctx.lineTo(cx + Math.cos(angle) * outerR, cy + Math.sin(angle) * outerR)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.06 + Math.sin(t + i * 0.7) * 0.04})`
    ctx.lineWidth = 0.6
    ctx.stroke()
  }

  ctx.beginPath()
  ctx.arc(cx, cy, 20 + Math.sin(t * 0.4) * 3, 0, Math.PI * 2)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.15)'
  ctx.lineWidth = 1
  ctx.stroke()

  const orbiters = 8
  for (let i = 0; i < orbiters; i++) {
    const angle = (i / orbiters) * Math.PI * 2 + t * 0.15
    const r = 110 + Math.sin(t * 0.3 + i * 2) * 15
    const x = cx + Math.cos(angle) * r
    const y = cy + Math.sin(angle) * r
    ctx.beginPath()
    ctx.arc(x, y, 3, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(31, 30, 29, 0.15)'
    ctx.fill()
  }
}

function livingWay(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2

  const numPaths = 5
  for (let p = 0; p < numPaths; p++) {
    const startAngle = (p / numPaths) * Math.PI * 2
    ctx.beginPath()
    let x = cx + Math.cos(startAngle) * 20
    let y = cy + Math.sin(startAngle) * 20
    ctx.moveTo(x, y)

    const steps = 80
    for (let s = 0; s < steps; s++) {
      const progress = s / steps
      const angle = startAngle + progress * Math.PI * 3 + Math.sin(t * 0.2 + p) * 0.5
      const r = 20 + progress * 120
      x = cx + Math.cos(angle) * r * (0.8 + Math.sin(progress * 4 + t * 0.3) * 0.2)
      y = cy + Math.sin(angle) * r * (0.8 + Math.cos(progress * 3 + t * 0.2) * 0.2)
      ctx.lineTo(x, y)
    }
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.06 + p * 0.03})`
    ctx.lineWidth = 0.8
    ctx.stroke()
  }

  ctx.beginPath()
  ctx.arc(cx, cy, 6 + Math.sin(t * 0.5) * 2, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(31, 30, 29, 0.25)'
  ctx.fill()
}

function neuralNetwork(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const layers = [4, 6, 8, 6, 4]
  const layerSpacing = w / (layers.length + 1)
  const positions: { x: number; y: number }[][] = []

  for (let l = 0; l < layers.length; l++) {
    const x = layerSpacing * (l + 1)
    const nodes: { x: number; y: number }[] = []
    for (let n = 0; n < layers[l]; n++) {
      const y = h / 2 + (n - (layers[l] - 1) / 2) * 30
      nodes.push({ x, y })
    }
    positions.push(nodes)
  }

  for (let l = 0; l < positions.length - 1; l++) {
    for (const from of positions[l]) {
      for (const to of positions[l + 1]) {
        const signal = Math.sin(t * 1.5 + from.y * 0.05 + to.y * 0.03 + l) * 0.5 + 0.5
        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.strokeStyle = `rgba(31, 30, 29, ${0.03 + signal * 0.1})`
        ctx.lineWidth = 0.4 + signal * 0.8
        ctx.stroke()
      }
    }
  }

  for (let l = 0; l < positions.length; l++) {
    for (const node of positions[l]) {
      const pulse = Math.sin(t * 2 + node.x * 0.02 + node.y * 0.03) * 0.5 + 0.5
      ctx.beginPath()
      ctx.arc(node.x, node.y, 4 + pulse * 3, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(31, 30, 29, ${0.15 + pulse * 0.2})`
      ctx.fill()
    }
  }
}

function deepLayers(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const numLayers = 10
  const nodesPerLayer = 6
  const layerGap = w / (numLayers + 1)
  const nodeGap = h * 0.6 / (nodesPerLayer + 1)
  const startY = h * 0.2

  for (let l = 0; l < numLayers; l++) {
    const x = layerGap * (l + 1)
    for (let n = 0; n < nodesPerLayer; n++) {
      const y = startY + nodeGap * (n + 1)
      const activation = Math.sin(t * 0.8 + l * 0.5 + n * 0.7) * 0.5 + 0.5
      ctx.beginPath()
      ctx.arc(x, y, 3 + activation * 2, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(31, 30, 29, ${0.1 + activation * 0.25})`
      ctx.fill()

      if (l < numLayers - 1) {
        const nextX = layerGap * (l + 2)
        for (let nn = 0; nn < nodesPerLayer; nn++) {
          const nextY = startY + nodeGap * (nn + 1)
          const weight = Math.sin(l + n * 0.3 + nn * 0.5 + t * 0.4) * 0.5 + 0.5
          if (weight > 0.3) {
            ctx.beginPath()
            ctx.moveTo(x + 5, y)
            ctx.lineTo(nextX - 5, nextY)
            ctx.strokeStyle = `rgba(31, 30, 29, ${weight * 0.08})`
            ctx.lineWidth = 0.4
            ctx.stroke()
          }
        }
      }
    }

    ctx.fillStyle = `rgba(31, 30, 29, ${0.04 + Math.sin(t * 0.3 + l) * 0.02})`
    ctx.fillRect(x - 8, startY, 16, nodeGap * (nodesPerLayer + 1))
  }
}

function singlePerceptron(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const numInputs = 6
  const inputX = w * 0.2
  const outputX = w * 0.8

  ctx.beginPath()
  ctx.arc(cx, cy, 20, 0, Math.PI * 2)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.35)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  for (let i = 0; i < numInputs; i++) {
    const y = cy + (i - (numInputs - 1) / 2) * 35
    const weight = Math.sin(t * 0.5 + i * 1.3) * 0.5 + 0.5

    ctx.beginPath()
    ctx.arc(inputX, y, 5, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.2 + weight * 0.15})`
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(inputX + 5, y)
    ctx.lineTo(cx - 20, cy)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.05 + weight * 0.2})`
    ctx.lineWidth = 0.5 + weight * 2
    ctx.stroke()

    const pulsePos = ((t * 0.3 + i * 0.2) % 1)
    const px = inputX + 5 + pulsePos * (cx - 25 - inputX)
    const py = y + pulsePos * (cy - y)
    ctx.beginPath()
    ctx.arc(px, py, 2, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.3 * weight})`
    ctx.fill()
  }

  ctx.beginPath()
  ctx.moveTo(cx + 20, cy)
  ctx.lineTo(outputX - 5, cy)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.25)'
  ctx.lineWidth = 1.2
  ctx.stroke()

  const outPulse = Math.sin(t * 0.8) * 0.5 + 0.5
  ctx.beginPath()
  ctx.arc(outputX, cy, 6, 0, Math.PI * 2)
  ctx.fillStyle = `rgba(31, 30, 29, ${0.15 + outPulse * 0.25})`
  ctx.fill()
}

function activationCurve(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const margin = 60
  const plotW = w - margin * 2
  const plotH = h - margin * 2
  const cy = margin + plotH / 2

  ctx.beginPath()
  ctx.moveTo(margin, cy)
  ctx.lineTo(margin + plotW, cy)
  ctx.moveTo(margin + plotW / 2, margin)
  ctx.lineTo(margin + plotW / 2, margin + plotH)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.1)'
  ctx.lineWidth = 0.5
  ctx.stroke()

  const morph = (Math.sin(t * 0.3) + 1) / 2
  ctx.beginPath()
  for (let x = 0; x <= plotW; x += 1) {
    const normX = (x / plotW - 0.5) * 10
    const sigmoid = 1 / (1 + Math.exp(-normX))
    const tanh = Math.tanh(normX)
    const blended = sigmoid * morph + ((tanh + 1) / 2) * (1 - morph)
    const py = margin + plotH - blended * plotH
    if (x === 0) ctx.moveTo(margin + x, py)
    else ctx.lineTo(margin + x, py)
  }
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.4)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  const numDots = 12
  for (let i = 0; i < numDots; i++) {
    const inputX = (Math.sin(t * 0.2 + i * 0.8) * 0.4 + 0.5) * plotW
    const normX = (inputX / plotW - 0.5) * 10
    const sigmoid = 1 / (1 + Math.exp(-normX))
    const tanh = Math.tanh(normX)
    const blended = sigmoid * morph + ((tanh + 1) / 2) * (1 - morph)

    ctx.beginPath()
    ctx.arc(margin + inputX, margin + plotH - blended * plotH, 2.5, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.2 + Math.sin(t + i) * 0.1})`
    ctx.fill()
  }
}

function reluFunction(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const margin = 60
  const plotW = w - margin * 2
  const plotH = h - margin * 2
  const originX = margin + plotW * 0.4
  const originY = margin + plotH * 0.6

  ctx.beginPath()
  ctx.moveTo(margin, originY)
  ctx.lineTo(margin + plotW, originY)
  ctx.moveTo(originX, margin)
  ctx.lineTo(originX, margin + plotH)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.1)'
  ctx.lineWidth = 0.5
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(margin, originY)
  ctx.lineTo(originX, originY)
  ctx.lineTo(margin + plotW, originY - plotH * 0.5)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.4)'
  ctx.lineWidth = 2
  ctx.stroke()

  const numParticles = 30
  for (let i = 0; i < numParticles; i++) {
    const seed = i * 1.618
    const inputX = ((seed * 37 + t * 40) % (plotW + 20)) - 10
    const normX = inputX / plotW - 0.4
    const reluY = normX > 0 ? normX : 0
    const px = margin + inputX
    const py = originY - reluY * plotH * 0.83
    const scatter = Math.sin(seed * 5 + t) * 4

    ctx.beginPath()
    ctx.arc(px, py + scatter, 2, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${normX > 0 ? 0.3 : 0.08})`
    ctx.fill()
  }
}

function sigmoidWave(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const margin = 50
  const plotW = w - margin * 2
  const plotH = h - margin * 2

  ctx.beginPath()
  for (let x = 0; x <= plotW; x += 1) {
    const normX = (x / plotW - 0.5) * 12
    const y = 1 / (1 + Math.exp(-normX))
    const py = margin + plotH - y * plotH
    if (x === 0) ctx.moveTo(margin + x, py)
    else ctx.lineTo(margin + x, py)
  }
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.3)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  const numDots = 20
  for (let i = 0; i < numDots; i++) {
    const speed = 0.15 + (i % 3) * 0.05
    const progress = ((t * speed + i * 0.05) % 1)
    const x = progress * plotW
    const normX = (progress - 0.5) * 12
    const y = 1 / (1 + Math.exp(-normX))
    const px = margin + x
    const py = margin + plotH - y * plotH

    ctx.beginPath()
    ctx.arc(px, py, 2.5, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.15 + y * 0.25})`
    ctx.fill()

    if (i < numDots - 1) {
      const trailLen = 15
      for (let tr = 1; tr <= trailLen; tr++) {
        const tp = progress - tr * 0.003
        if (tp < 0) break
        const tx = tp * plotW
        const tn = (tp - 0.5) * 12
        const ty = 1 / (1 + Math.exp(-tn))
        ctx.beginPath()
        ctx.arc(margin + tx, margin + plotH - ty * plotH, 1, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(31, 30, 29, ${0.03 * (1 - tr / trailLen)})`
        ctx.fill()
      }
    }
  }
}

function backpropFlow(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const layers = [3, 5, 5, 3]
  const layerSpacing = w / (layers.length + 1)
  const positions: { x: number; y: number }[][] = []

  for (let l = 0; l < layers.length; l++) {
    const x = layerSpacing * (l + 1)
    const nodes: { x: number; y: number }[] = []
    for (let n = 0; n < layers[l]; n++) {
      const y = h / 2 + (n - (layers[l] - 1) / 2) * 35
      nodes.push({ x, y })
    }
    positions.push(nodes)
  }

  for (let l = 0; l < positions.length - 1; l++) {
    for (const from of positions[l]) {
      for (const to of positions[l + 1]) {
        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.strokeStyle = 'rgba(31, 30, 29, 0.06)'
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    }
  }

  for (let l = positions.length - 1; l > 0; l--) {
    for (let n = 0; n < positions[l].length; n++) {
      const from = positions[l][n]
      for (let pn = 0; pn < positions[l - 1].length; pn++) {
        const to = positions[l - 1][pn]
        const progress = ((t * 0.3 + n * 0.15 + pn * 0.1) % 1)
        const px = from.x + (to.x - from.x) * progress
        const py = from.y + (to.y - from.y) * progress
        const gradient = Math.sin(t + l + n + pn) * 0.5 + 0.5

        ctx.beginPath()
        ctx.arc(px, py, 1.5 + gradient * 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(31, 30, 29, ${0.15 + gradient * 0.2})`
        ctx.fill()
      }
    }
  }

  for (const layer of positions) {
    for (const node of layer) {
      ctx.beginPath()
      ctx.arc(node.x, node.y, 5, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(31, 30, 29, 0.25)'
      ctx.lineWidth = 1
      ctx.stroke()
    }
  }
}

function optimizationPath(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const margin = 40
  const plotW = w - margin * 2
  const plotH = h - margin * 2

  ctx.beginPath()
  for (let x = 0; x <= plotW; x += 2) {
    const normX = (x / plotW) * 4 - 2
    const landscape = Math.sin(normX * 2) * 0.3 + normX * normX * 0.15 + Math.cos(normX * 5) * 0.1
    const py = margin + plotH * 0.3 + landscape * plotH * 0.4
    if (x === 0) ctx.moveTo(margin + x, py)
    else ctx.lineTo(margin + x, py)
  }
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.25)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  const ballProgress = ((t * 0.1) % 1)
  const ballNormX = 2 - ballProgress * 3.5
  const ballX = margin + ((ballNormX + 2) / 4) * plotW
  const ballLandscape = Math.sin(ballNormX * 2) * 0.3 + ballNormX * ballNormX * 0.15 + Math.cos(ballNormX * 5) * 0.1
  const ballY = margin + plotH * 0.3 + ballLandscape * plotH * 0.4

  ctx.beginPath()
  ctx.arc(ballX, ballY - 6, 6, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(31, 30, 29, 0.45)'
  ctx.fill()

  const trailSteps = 20
  for (let i = 0; i < trailSteps; i++) {
    const tp = ballProgress - i * 0.01
    if (tp < 0) break
    const tn = 2 - tp * 3.5
    const tx = margin + ((tn + 2) / 4) * plotW
    const tl = Math.sin(tn * 2) * 0.3 + tn * tn * 0.15 + Math.cos(tn * 5) * 0.1
    const ty = margin + plotH * 0.3 + tl * plotH * 0.4
    ctx.beginPath()
    ctx.arc(tx, ty - 6, 1.5, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.15 * (1 - i / trailSteps)})`
    ctx.fill()
  }
}

function epochCounter(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const numRings = 5
  const maxR = Math.min(w, h) * 0.38

  for (let r = 0; r < numRings; r++) {
    const ringR = maxR * (r + 1) / numRings
    const speed = 0.3 + r * 0.15
    const progress = ((t * speed) % (Math.PI * 2))

    ctx.beginPath()
    ctx.arc(cx, cy, ringR, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.06)'
    ctx.lineWidth = 0.5
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(cx, cy, ringR, -Math.PI / 2, -Math.PI / 2 + progress)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.1 + r * 0.06})`
    ctx.lineWidth = 3 + r * 1.5
    ctx.stroke()

    const dotAngle = -Math.PI / 2 + progress
    ctx.beginPath()
    ctx.arc(cx + Math.cos(dotAngle) * ringR, cy + Math.sin(dotAngle) * ringR, 3, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.2 + r * 0.08})`
    ctx.fill()
  }

  const epochs = Math.floor(t * 0.3)
  ctx.fillStyle = 'rgba(31, 30, 29, 0.2)'
  ctx.font = '12px monospace'
  ctx.textAlign = 'center'
  ctx.fillText(`${epochs % 100}`, cx, cy + 4)
}

function batchGrid(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const gridCols = 10
  const gridRows = 10
  const cellSize = Math.min(w, h) * 0.06
  const gap = cellSize * 0.3
  const totalW = gridCols * (cellSize + gap)
  const totalH = gridRows * (cellSize + gap)
  const offsetX = (w - totalW) / 2
  const offsetY = (h - totalH) / 2

  const batchSize = 4
  const currentBatchRow = Math.floor((t * 0.5) % gridRows)

  for (let r = 0; r < gridRows; r++) {
    for (let c = 0; c < gridCols; c++) {
      const x = offsetX + c * (cellSize + gap)
      const y = offsetY + r * (cellSize + gap)
      const inBatch = r >= currentBatchRow && r < currentBatchRow + batchSize

      if (inBatch) {
        const processProgress = Math.sin(t * 2 + c * 0.3 + r * 0.2) * 0.5 + 0.5
        ctx.fillStyle = `rgba(31, 30, 29, ${0.1 + processProgress * 0.2})`
        ctx.fillRect(x, y, cellSize, cellSize)
      } else {
        ctx.strokeStyle = 'rgba(31, 30, 29, 0.08)'
        ctx.lineWidth = 0.5
        ctx.strokeRect(x, y, cellSize, cellSize)
      }
    }
  }

  const bracketX = offsetX - 10
  const batchY = offsetY + currentBatchRow * (cellSize + gap)
  const batchH = batchSize * (cellSize + gap) - gap
  ctx.beginPath()
  ctx.moveTo(bracketX + 5, batchY)
  ctx.lineTo(bracketX, batchY)
  ctx.lineTo(bracketX, batchY + batchH)
  ctx.lineTo(bracketX + 5, batchY + batchH)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.2)'
  ctx.lineWidth = 1
  ctx.stroke()
}

function learningRateSteps(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const margin = 60
  const plotW = w - margin * 2
  const plotH = h - margin * 2

  ctx.beginPath()
  for (let x = 0; x <= plotW; x += 2) {
    const normX = (x / plotW) * 4 - 2
    const y = normX * normX
    const py = margin + plotH * 0.2 + (y / 4) * plotH * 0.7
    if (x === 0) ctx.moveTo(margin + x, py)
    else ctx.lineTo(margin + x, py)
  }
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.15)'
  ctx.lineWidth = 1
  ctx.stroke()

  const rates = [0.5, 0.3, 0.15]
  for (let r = 0; r < rates.length; r++) {
    const lr = rates[r]
    let posX = 1.8 - r * 0.3
    ctx.beginPath()
    for (let step = 0; step < 12; step++) {
      const px = margin + ((posX + 2) / 4) * plotW
      const y = posX * posX
      const py = margin + plotH * 0.2 + (y / 4) * plotH * 0.7
      if (step === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)

      const grad = 2 * posX
      posX -= lr * grad * (0.3 + Math.sin(t * 0.3 + r) * 0.05)
    }
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.15 + r * 0.1})`
    ctx.lineWidth = 1
    ctx.setLineDash([3, 2])
    ctx.stroke()
    ctx.setLineDash([])

    const finalPx = margin + ((posX + 2) / 4) * plotW
    const finalY = posX * posX
    const finalPy = margin + plotH * 0.2 + (finalY / 4) * plotH * 0.7
    ctx.beginPath()
    ctx.arc(finalPx, finalPy, 4, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.2 + r * 0.1})`
    ctx.fill()
  }
}

function convFilters(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const gridSize = 12
  const cellSize = Math.min(w, h) * 0.05
  const gridW = gridSize * cellSize
  const gridX = (w - gridW) / 2
  const gridY = (h - gridW) / 2

  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      const val = Math.sin(r * 0.8 + c * 0.6 + t * 0.2) * 0.5 + 0.5
      ctx.fillStyle = `rgba(31, 30, 29, ${val * 0.15})`
      ctx.fillRect(gridX + c * cellSize, gridY + r * cellSize, cellSize - 1, cellSize - 1)
    }
  }

  const kernelSize = 3
  const scanCol = Math.floor(((t * 0.8) % (gridSize - kernelSize + 1)))
  const scanRow = Math.floor(((t * 0.3) % (gridSize - kernelSize + 1)))

  ctx.strokeStyle = 'rgba(31, 30, 29, 0.5)'
  ctx.lineWidth = 2
  ctx.strokeRect(
    gridX + scanCol * cellSize - 1,
    gridY + scanRow * cellSize - 1,
    kernelSize * cellSize + 2,
    kernelSize * cellSize + 2
  )

  const smallGridX = w * 0.8
  const smallGridY = h * 0.15
  const smallCell = cellSize * 0.6
  for (let r = 0; r < kernelSize; r++) {
    for (let c = 0; c < kernelSize; c++) {
      const val = Math.sin(r * 2 + c * 3 + t * 0.5) * 0.5 + 0.5
      ctx.fillStyle = `rgba(31, 30, 29, ${0.1 + val * 0.3})`
      ctx.fillRect(smallGridX + c * smallCell, smallGridY + r * smallCell, smallCell - 1, smallCell - 1)
    }
  }

  ctx.beginPath()
  ctx.setLineDash([2, 2])
  ctx.moveTo(gridX + scanCol * cellSize + kernelSize * cellSize, gridY + scanRow * cellSize)
  ctx.lineTo(smallGridX, smallGridY + kernelSize * smallCell / 2)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.1)'
  ctx.lineWidth = 0.5
  ctx.stroke()
  ctx.setLineDash([])
}

function recurrentLoop(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const numNodes = 6
  const radius = Math.min(w, h) * 0.25

  for (let i = 0; i < numNodes; i++) {
    const angle = (i / numNodes) * Math.PI * 2 - Math.PI / 2
    const nextAngle = ((i + 1) / numNodes) * Math.PI * 2 - Math.PI / 2
    const x1 = cx + Math.cos(angle) * radius
    const y1 = cy + Math.sin(angle) * radius
    const x2 = cx + Math.cos(nextAngle) * radius
    const y2 = cy + Math.sin(nextAngle) * radius

    ctx.beginPath()
    const cpAngle = (angle + nextAngle) / 2
    const cpR = radius * 1.1
    ctx.moveTo(x1, y1)
    ctx.quadraticCurveTo(
      cx + Math.cos(cpAngle) * cpR,
      cy + Math.sin(cpAngle) * cpR,
      x2, y2
    )
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.2)'
    ctx.lineWidth = 1
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(x1, y1, 10, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.25)'
    ctx.lineWidth = 1.2
    ctx.stroke()
  }

  const numSignals = 3
  for (let s = 0; s < numSignals; s++) {
    const signalAngle = ((t * 0.4 + s * Math.PI * 2 / numSignals) % (Math.PI * 2)) - Math.PI / 2
    const sx = cx + Math.cos(signalAngle) * radius
    const sy = cy + Math.sin(signalAngle) * radius
    ctx.beginPath()
    ctx.arc(sx, sy, 4, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(31, 30, 29, 0.4)'
    ctx.fill()
  }

  ctx.beginPath()
  ctx.arc(cx, cy, radius * 0.4, 0, Math.PI * 2)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.06)'
  ctx.lineWidth = 0.5
  ctx.setLineDash([2, 3])
  ctx.stroke()
  ctx.setLineDash([])
}

function lstmGates(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const cellW = w * 0.35
  const cellH = h * 0.25

  ctx.strokeStyle = 'rgba(31, 30, 29, 0.25)'
  ctx.lineWidth = 1.2
  ctx.strokeRect(cx - cellW / 2, cy - cellH / 2, cellW, cellH)

  const gates = [
    { label: 'f', x: cx - cellW * 0.25, y: cy + cellH / 2 + 30 },
    { label: 'i', x: cx, y: cy + cellH / 2 + 30 },
    { label: 'o', x: cx + cellW * 0.25, y: cy + cellH / 2 + 30 },
  ]

  for (let g = 0; g < gates.length; g++) {
    const gate = gates[g]
    const openness = (Math.sin(t * 0.6 + g * 2) + 1) / 2

    ctx.beginPath()
    ctx.arc(gate.x, gate.y, 12, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.3)'
    ctx.lineWidth = 1
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(gate.x, gate.y, 12, -Math.PI / 2, -Math.PI / 2 + openness * Math.PI * 2)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.2 + openness * 0.3})`
    ctx.lineWidth = 2.5
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(gate.x, gate.y - 12)
    ctx.lineTo(gate.x, cy + cellH / 2)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.1)'
    ctx.lineWidth = 0.5
    ctx.stroke()

    const flowAlpha = openness * 0.3
    const numParticles = 5
    for (let p = 0; p < numParticles; p++) {
      const progress = ((t * 0.5 + p * 0.2 + g * 0.3) % 1)
      const py = gate.y - 12 - progress * (cellH + 12)
      if (py > cy - cellH / 2) {
        ctx.beginPath()
        ctx.arc(gate.x, py, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(31, 30, 29, ${flowAlpha})`
        ctx.fill()
      }
    }
  }

  ctx.beginPath()
  ctx.moveTo(cx - cellW / 2 - 20, cy)
  ctx.lineTo(cx + cellW / 2 + 20, cy)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.15)'
  ctx.lineWidth = 2
  ctx.stroke()

  const cellFlow = ((t * 0.2) % 1)
  const flowX = cx - cellW / 2 - 20 + cellFlow * (cellW + 40)
  ctx.beginPath()
  ctx.arc(flowX, cy, 3, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(31, 30, 29, 0.35)'
  ctx.fill()
}

function transformerBlocks(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const numBlocks = 6
  const blockW = w * 0.35
  const blockH = h * 0.08
  const gap = h * 0.04
  const totalH = numBlocks * (blockH + gap)
  const startY = (h - totalH) / 2

  for (let b = 0; b < numBlocks; b++) {
    const y = startY + b * (blockH + gap)
    const pulse = Math.sin(t * 0.5 + b * 0.8) * 0.5 + 0.5

    ctx.fillStyle = `rgba(31, 30, 29, ${0.04 + pulse * 0.06})`
    ctx.fillRect(cx - blockW / 2, y, blockW, blockH)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.15 + pulse * 0.1})`
    ctx.lineWidth = 0.8
    ctx.strokeRect(cx - blockW / 2, y, blockW, blockH)

    if (b < numBlocks - 1) {
      ctx.beginPath()
      ctx.moveTo(cx, y + blockH)
      ctx.lineTo(cx, y + blockH + gap)
      ctx.strokeStyle = 'rgba(31, 30, 29, 0.15)'
      ctx.lineWidth = 0.8
      ctx.stroke()
    }

    const numArrows = 3
    for (let a = 0; a < numArrows; a++) {
      const ax = cx - blockW * 0.3 + a * blockW * 0.3
      const arrowY = y + blockH / 2
      const targetX = cx - blockW * 0.3 + ((a + 1) % numArrows) * blockW * 0.3
      const alpha = Math.sin(t * 1.2 + b + a * 1.5) * 0.5 + 0.5

      ctx.beginPath()
      ctx.moveTo(ax, arrowY)
      ctx.quadraticCurveTo((ax + targetX) / 2, arrowY - 8 * alpha, targetX, arrowY)
      ctx.strokeStyle = `rgba(31, 30, 29, ${alpha * 0.15})`
      ctx.lineWidth = 0.5
      ctx.stroke()
    }
  }

  ctx.beginPath()
  ctx.moveTo(cx + blockW / 2 + 15, startY)
  ctx.lineTo(cx + blockW / 2 + 15, startY + totalH - gap)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.1)'
  ctx.lineWidth = 1
  ctx.stroke()
}

function compressionFunnel(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const topY = h * 0.15
  const bottomY = h * 0.85
  const topW = w * 0.7
  const bottleneckW = w * 0.08

  ctx.beginPath()
  ctx.moveTo(cx - topW / 2, topY)
  ctx.lineTo(cx - bottleneckW / 2, h / 2)
  ctx.lineTo(cx - topW / 2, bottomY)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.2)'
  ctx.lineWidth = 1
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(cx + topW / 2, topY)
  ctx.lineTo(cx + bottleneckW / 2, h / 2)
  ctx.lineTo(cx + topW / 2, bottomY)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.2)'
  ctx.lineWidth = 1
  ctx.stroke()

  const numParticles = 60
  for (let i = 0; i < numParticles; i++) {
    const seed = i * 1.618
    const progress = ((t * 0.15 + seed * 0.1) % 1)
    const py = topY + progress * (bottomY - topY)
    const relProgress = progress < 0.5
      ? progress * 2
      : 2 - progress * 2
    const maxSpread = topW / 2 * (1 - relProgress) + bottleneckW / 2 * relProgress
    const px = cx + (Math.sin(seed * 7) * 0.8) * maxSpread

    ctx.beginPath()
    ctx.arc(px, py, 1.5, 0, Math.PI * 2)
    const compression = relProgress
    ctx.fillStyle = `rgba(31, 30, 29, ${0.08 + compression * 0.25})`
    ctx.fill()
  }

  ctx.beginPath()
  ctx.moveTo(cx - bottleneckW, h / 2 - 3)
  ctx.lineTo(cx + bottleneckW, h / 2 - 3)
  ctx.moveTo(cx - bottleneckW, h / 2 + 3)
  ctx.lineTo(cx + bottleneckW, h / 2 + 3)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.3)'
  ctx.lineWidth = 0.8
  ctx.stroke()
}

function adversarialDance(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const orbitR = Math.min(w, h) * 0.2

  const genAngle = t * 0.4
  const discAngle = t * 0.4 + Math.PI
  const genX = cx + Math.cos(genAngle) * orbitR
  const genY = cy + Math.sin(genAngle) * orbitR
  const discX = cx + Math.cos(discAngle) * orbitR
  const discY = cy + Math.sin(discAngle) * orbitR

  ctx.beginPath()
  ctx.arc(genX, genY, 18, 0, Math.PI * 2)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.35)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(discX, discY, 18, 0, Math.PI * 2)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.35)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(genX, genY)
  ctx.lineTo(discX, discY)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.1)'
  ctx.lineWidth = 0.8
  ctx.setLineDash([3, 3])
  ctx.stroke()
  ctx.setLineDash([])

  const numSamples = 15
  for (let i = 0; i < numSamples; i++) {
    const angle = (i / numSamples) * Math.PI * 2 + t * 0.1
    const r = 12 + Math.sin(t + i * 0.8) * 5
    const sx = genX + Math.cos(angle) * r
    const sy = genY + Math.sin(angle) * r
    ctx.beginPath()
    ctx.arc(sx, sy, 1.5, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(31, 30, 29, 0.2)'
    ctx.fill()

    const progress = ((t * 0.3 + i * 0.1) % 1)
    const px = sx + (discX - sx) * progress
    const py = sy + (discY - sy) * progress
    if (progress > 0.1 && progress < 0.9) {
      ctx.beginPath()
      ctx.arc(px, py, 1, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(31, 30, 29, ${0.15 * (1 - Math.abs(progress - 0.5) * 2)})`
      ctx.fill()
    }
  }

  const tension = Math.sin(t * 0.8) * 0.5 + 0.5
  for (let ring = 1; ring <= 3; ring++) {
    ctx.beginPath()
    ctx.arc(cx, cy, orbitR * 0.5 + ring * 15, 0, Math.PI * 2)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.03 + tension * 0.04})`
    ctx.lineWidth = 0.4
    ctx.stroke()
  }
}

function dropoutRain(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const gridCols = 8
  const gridRows = 8
  const cellSize = Math.min(w, h) * 0.07
  const gap = cellSize * 0.5
  const totalW = gridCols * (cellSize + gap)
  const totalH = gridRows * (cellSize + gap)
  const offsetX = (w - totalW) / 2
  const offsetY = (h - totalH) / 2

  for (let r = 0; r < gridRows; r++) {
    for (let c = 0; c < gridCols; c++) {
      const x = offsetX + c * (cellSize + gap)
      const y = offsetY + r * (cellSize + gap)
      const seed = r * gridCols + c
      const dropPhase = Math.sin(t * 0.7 + seed * 1.3)
      const dropped = dropPhase > 0.2

      if (dropped) {
        const fadeOut = (dropPhase - 0.2) / 0.8
        ctx.beginPath()
        ctx.arc(x + cellSize / 2, y + cellSize / 2, cellSize / 2, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(31, 30, 29, ${0.06 * (1 - fadeOut)})`
        ctx.lineWidth = 0.5
        ctx.setLineDash([1, 2])
        ctx.stroke()
        ctx.setLineDash([])
      } else {
        ctx.beginPath()
        ctx.arc(x + cellSize / 2, y + cellSize / 2, cellSize / 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(31, 30, 29, ${0.15 + Math.sin(t + seed * 0.5) * 0.05})`
        ctx.fill()
      }
    }
  }

  for (let i = 0; i < 8; i++) {
    const rainX = offsetX + (Math.sin(i * 3.7 + t * 0.1) * 0.5 + 0.5) * totalW
    const rainY = ((t * 30 + i * 50) % (totalH + 20)) + offsetY - 10
    ctx.beginPath()
    ctx.moveTo(rainX, rainY)
    ctx.lineTo(rainX, rainY + 8)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.1)'
    ctx.lineWidth = 0.5
    ctx.stroke()
  }
}

function normalizationWave(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const margin = 50
  const plotW = w - margin * 2
  const cy = h / 2

  const morphProgress = (Math.sin(t * 0.3) + 1) / 2

  const numWaves = 5
  for (let wave = 0; wave < numWaves; wave++) {
    const offset = (wave - 2) * 30
    ctx.beginPath()
    for (let x = 0; x <= plotW; x += 2) {
      const normX = x / plotW
      const rawAmp = 40 + Math.sin(wave * 2.3) * 25
      const rawFreq = 3 + Math.sin(wave * 1.7) * 2
      const rawPhase = wave * 1.3

      const rawY = Math.sin(normX * rawFreq * Math.PI + rawPhase + t * 0.3) * rawAmp
      const normalizedY = Math.sin(normX * 4 * Math.PI + t * 0.3) * 25

      const y = rawY * (1 - morphProgress) + normalizedY * morphProgress
      const py = cy + offset + y

      if (x === 0) ctx.moveTo(margin + x, py)
      else ctx.lineTo(margin + x, py)
    }
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.1 + wave * 0.04})`
    ctx.lineWidth = 1
    ctx.stroke()
  }

  ctx.beginPath()
  ctx.moveTo(margin, cy)
  ctx.lineTo(margin + plotW, cy)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.08)'
  ctx.lineWidth = 0.5
  ctx.setLineDash([4, 4])
  ctx.stroke()
  ctx.setLineDash([])
}

function transferBridge(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const leftCx = w * 0.2
  const rightCx = w * 0.8
  const cy = h / 2
  const domainR = Math.min(w, h) * 0.18

  ctx.beginPath()
  ctx.arc(leftCx, cy, domainR, 0, Math.PI * 2)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.2)'
  ctx.lineWidth = 1.2
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(rightCx, cy, domainR, 0, Math.PI * 2)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.2)'
  ctx.lineWidth = 1.2
  ctx.stroke()

  const bridgeY1 = cy - 8
  const bridgeY2 = cy + 8
  ctx.beginPath()
  ctx.moveTo(leftCx + domainR, bridgeY1)
  ctx.lineTo(rightCx - domainR, bridgeY1)
  ctx.moveTo(leftCx + domainR, bridgeY2)
  ctx.lineTo(rightCx - domainR, bridgeY2)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.15)'
  ctx.lineWidth = 1
  ctx.stroke()

  const bridgeLen = rightCx - domainR - leftCx - domainR
  const numParticles = 12
  for (let i = 0; i < numParticles; i++) {
    const progress = ((t * 0.2 + i * 0.08) % 1)
    const px = leftCx + domainR + progress * bridgeLen
    const py = cy + Math.sin(progress * Math.PI * 3 + t) * 5
    ctx.beginPath()
    ctx.arc(px, py, 2, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.15 + Math.sin(progress * Math.PI) * 0.2})`
    ctx.fill()
  }

  for (let d = 0; d < 2; d++) {
    const dCx = d === 0 ? leftCx : rightCx
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2 + t * 0.1 * (d === 0 ? 1 : -1)
      const r = domainR * 0.5 + Math.sin(i * 2 + t * 0.3) * 10
      ctx.beginPath()
      ctx.arc(dCx + Math.cos(angle) * r, cy + Math.sin(angle) * r, 2, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(31, 30, 29, 0.12)'
      ctx.fill()
    }
  }
}

function bigDataStream(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const numParticles = 500
  for (let i = 0; i < numParticles; i++) {
    const seed = i * 1.618033
    const lane = Math.floor(Math.abs(Math.sin(seed * 7.3)) * 12)
    const laneY = h * 0.1 + (lane / 12) * h * 0.8
    const speed = 0.8 + Math.abs(Math.sin(seed * 3.1)) * 1.2
    const px = ((seed * 200 + t * speed * 30) % (w + 10)) - 5
    const py = laneY + Math.sin(px * 0.02 + t * 0.5 + lane) * 8

    const size = 0.5 + Math.abs(Math.sin(seed * 5.7)) * 1.5
    ctx.beginPath()
    ctx.arc(px, py, size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.06 + Math.abs(Math.sin(seed * 2.3)) * 0.12})`
    ctx.fill()
  }

  for (let lane = 0; lane < 12; lane++) {
    const laneY = h * 0.1 + (lane / 12) * h * 0.8
    ctx.beginPath()
    ctx.moveTo(0, laneY)
    ctx.lineTo(w, laneY)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.02)'
    ctx.lineWidth = 0.3
    ctx.stroke()
  }
}

function augmentMirrors(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const size = Math.min(w, h) * 0.1

  function drawShape(sx: number, sy: number, rotation: number, scaleX: number, scaleY: number, alpha: number) {
    ctx.save()
    ctx.translate(sx, sy)
    ctx.rotate(rotation)
    ctx.scale(scaleX, scaleY)
    ctx.beginPath()
    ctx.moveTo(0, -size)
    ctx.lineTo(size * 0.8, size * 0.5)
    ctx.lineTo(-size * 0.8, size * 0.5)
    ctx.closePath()
    ctx.strokeStyle = `rgba(31, 30, 29, ${alpha})`
    ctx.lineWidth = 1 / Math.max(Math.abs(scaleX), Math.abs(scaleY))
    ctx.stroke()
    ctx.restore()
  }

  drawShape(cx, cy, 0, 1, 1, 0.35)

  const transforms = [
    { dx: -120, dy: -60, rot: Math.PI / 4 + Math.sin(t * 0.3) * 0.1, sx: 1, sy: 1 },
    { dx: 120, dy: -60, rot: 0, sx: -1, sy: 1 },
    { dx: -120, dy: 80, rot: 0, sx: 1, sy: -1 },
    { dx: 120, dy: 80, rot: Math.PI / 6 + Math.cos(t * 0.4) * 0.1, sx: 0.8, sy: 1.2 },
    { dx: 0, dy: -100, rot: Math.sin(t * 0.2) * 0.3, sx: 1.2, sy: 0.8 },
    { dx: 0, dy: 110, rot: Math.PI + Math.sin(t * 0.25) * 0.1, sx: 0.9, sy: 0.9 },
  ]

  for (let i = 0; i < transforms.length; i++) {
    const tr = transforms[i]
    const wobble = Math.sin(t * 0.5 + i * 1.2) * 3
    drawShape(cx + tr.dx + wobble, cy + tr.dy, tr.rot, tr.sx, tr.sy, 0.12 + Math.sin(t * 0.4 + i) * 0.05)

    ctx.beginPath()
    ctx.setLineDash([1, 3])
    ctx.moveTo(cx, cy)
    ctx.lineTo(cx + tr.dx + wobble, cy + tr.dy)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.05)'
    ctx.lineWidth = 0.4
    ctx.stroke()
    ctx.setLineDash([])
  }
}

function preprocessPipeline(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const stages = 4
  const stageW = w / (stages + 1)
  const cy = h / 2

  for (let s = 0; s < stages; s++) {
    const x = stageW * (s + 0.5)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.15)'
    ctx.lineWidth = 0.8
    ctx.strokeRect(x, cy - 40, stageW * 0.7, 80)

    if (s < stages - 1) {
      ctx.beginPath()
      ctx.moveTo(x + stageW * 0.7 + 5, cy)
      ctx.lineTo(x + stageW - 5, cy)
      ctx.strokeStyle = 'rgba(31, 30, 29, 0.12)'
      ctx.stroke()
    }
  }

  const numDots = 20
  for (let i = 0; i < numDots; i++) {
    const seed = i * 2.618
    const totalProgress = ((t * 0.1 + seed * 0.05) % 1)
    const stageIdx = Math.floor(totalProgress * stages)
    const inStageProgress = (totalProgress * stages) % 1

    const stageX = stageW * (stageIdx + 0.5)
    const px = stageX + inStageProgress * stageW * 0.7

    const messiness = Math.max(0, 1 - stageIdx / (stages - 1))
    const scatter = Math.sin(seed * 5) * 30 * messiness
    const py = cy + scatter

    ctx.beginPath()
    ctx.arc(px, py, 2, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.1 + (1 - messiness) * 0.2})`
    ctx.fill()
  }
}

function scalingBars(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const numBars = 12
  const barW = w * 0.04
  const gap = (w * 0.7) / numBars
  const offsetX = w * 0.15
  const baseY = h * 0.8

  const morphProgress = (Math.sin(t * 0.3) + 1) / 2

  for (let i = 0; i < numBars; i++) {
    const x = offsetX + i * gap
    const rawHeight = 30 + Math.abs(Math.sin(i * 1.7 + 0.5)) * 200
    const normalizedHeight = 100 + Math.sin(i * 0.5 + t * 0.1) * 5
    const barHeight = rawHeight * (1 - morphProgress) + normalizedHeight * morphProgress

    ctx.fillStyle = `rgba(31, 30, 29, ${0.1 + morphProgress * 0.1})`
    ctx.fillRect(x, baseY - barHeight, barW, barHeight)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.15 + morphProgress * 0.1})`
    ctx.lineWidth = 0.5
    ctx.strokeRect(x, baseY - barHeight, barW, barHeight)
  }

  ctx.beginPath()
  ctx.moveTo(offsetX - 10, baseY)
  ctx.lineTo(offsetX + numBars * gap + 10, baseY)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.15)'
  ctx.lineWidth = 0.8
  ctx.stroke()

  if (morphProgress > 0.5) {
    const normLineY = baseY - 100
    ctx.beginPath()
    ctx.moveTo(offsetX - 10, normLineY)
    ctx.lineTo(offsetX + numBars * gap + 10, normLineY)
    ctx.strokeStyle = `rgba(31, 30, 29, ${(morphProgress - 0.5) * 0.3})`
    ctx.lineWidth = 0.5
    ctx.setLineDash([3, 3])
    ctx.stroke()
    ctx.setLineDash([])
  }
}

function featureCraft(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const leftX = w * 0.15
  const rightX = w * 0.65
  const cy = h / 2
  const morphProgress = (Math.sin(t * 0.25) + 1) / 2

  for (let i = 0; i < 15; i++) {
    const seed = i * 2.3
    const rawX = leftX + Math.sin(seed * 3) * 40
    const rawY = cy + Math.cos(seed * 2) * 80 + Math.sin(t * 0.3 + i) * 5
    const rawSize = 2 + Math.abs(Math.sin(seed * 5)) * 6

    const refinedX = rightX + (i % 5) * 25
    const refinedY = cy - 50 + Math.floor(i / 5) * 35
    const refinedSize = 4

    const px = rawX * (1 - morphProgress) + refinedX * morphProgress
    const py = rawY * (1 - morphProgress) + refinedY * morphProgress
    const size = rawSize * (1 - morphProgress) + refinedSize * morphProgress

    if (morphProgress > 0.5) {
      ctx.beginPath()
      ctx.rect(px - size, py - size, size * 2, size * 2)
      ctx.strokeStyle = `rgba(31, 30, 29, ${0.15 + morphProgress * 0.15})`
      ctx.lineWidth = 0.8
      ctx.stroke()
    } else {
      ctx.beginPath()
      ctx.arc(px, py, size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(31, 30, 29, ${0.1 + (1 - morphProgress) * 0.1})`
      ctx.fill()
    }
  }

  ctx.beginPath()
  ctx.moveTo(w * 0.42, cy - 10)
  ctx.lineTo(w * 0.52, cy)
  ctx.lineTo(w * 0.42, cy + 10)
  ctx.strokeStyle = `rgba(31, 30, 29, ${0.1 + morphProgress * 0.15})`
  ctx.lineWidth = 1
  ctx.stroke()
}

function dimensionCollapse(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const collapseProgress = (Math.sin(t * 0.25) + 1) / 2
  const size = Math.min(w, h) * 0.25
  const depth = size * 0.4 * (1 - collapseProgress)

  const front = [
    { x: cx - size / 2, y: cy - size / 2 },
    { x: cx + size / 2, y: cy - size / 2 },
    { x: cx + size / 2, y: cy + size / 2 },
    { x: cx - size / 2, y: cy + size / 2 },
  ]
  const back = front.map(p => ({ x: p.x + depth, y: p.y - depth }))

  ctx.beginPath()
  ctx.moveTo(front[0].x, front[0].y)
  for (let i = 1; i < 4; i++) ctx.lineTo(front[i].x, front[i].y)
  ctx.closePath()
  ctx.strokeStyle = `rgba(31, 30, 29, ${0.25})`
  ctx.lineWidth = 1.2
  ctx.stroke()

  if (collapseProgress < 0.95) {
    ctx.beginPath()
    ctx.moveTo(back[0].x, back[0].y)
    for (let i = 1; i < 4; i++) ctx.lineTo(back[i].x, back[i].y)
    ctx.closePath()
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.1 * (1 - collapseProgress)})`
    ctx.lineWidth = 0.8
    ctx.stroke()

    for (let i = 0; i < 4; i++) {
      ctx.beginPath()
      ctx.moveTo(front[i].x, front[i].y)
      ctx.lineTo(back[i].x, back[i].y)
      ctx.strokeStyle = `rgba(31, 30, 29, ${0.12 * (1 - collapseProgress)})`
      ctx.lineWidth = 0.6
      ctx.stroke()
    }
  }

  const numPoints = 20
  for (let i = 0; i < numPoints; i++) {
    const seed = i * 1.618
    const u = Math.sin(seed * 3) * 0.4
    const v = Math.cos(seed * 5) * 0.4
    const z = Math.sin(seed * 7) * 0.4 * (1 - collapseProgress)
    const px = cx + u * size + z * depth / (size * 0.4) * depth
    const py = cy + v * size - z * depth / (size * 0.4) * depth
    ctx.beginPath()
    ctx.arc(px, py, 1.5, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.15 + collapseProgress * 0.1})`
    ctx.fill()
  }
}

function pcaAxes(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const rotation = t * 0.15

  const numPoints = 60
  for (let i = 0; i < numPoints; i++) {
    const seed = i * 1.618
    const rawX = Math.sin(seed * 3.7) * 100
    const rawY = Math.cos(seed * 2.3) * 40 + rawX * 0.3
    const rx = rawX * Math.cos(rotation) - rawY * Math.sin(rotation)
    const ry = rawX * Math.sin(rotation) + rawY * Math.cos(rotation)

    ctx.beginPath()
    ctx.arc(cx + rx, cy + ry, 2, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(31, 30, 29, 0.15)'
    ctx.fill()
  }

  const axisLen = 120
  const pc1Angle = rotation
  const pc2Angle = rotation + Math.PI / 2

  ctx.beginPath()
  ctx.moveTo(cx - Math.cos(pc1Angle) * axisLen, cy - Math.sin(pc1Angle) * axisLen)
  ctx.lineTo(cx + Math.cos(pc1Angle) * axisLen, cy + Math.sin(pc1Angle) * axisLen)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.35)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(cx - Math.cos(pc2Angle) * axisLen * 0.4, cy - Math.sin(pc2Angle) * axisLen * 0.4)
  ctx.lineTo(cx + Math.cos(pc2Angle) * axisLen * 0.4, cy + Math.sin(pc2Angle) * axisLen * 0.4)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.15)'
  ctx.lineWidth = 1
  ctx.stroke()

  const arrowSize = 8
  const arrowAngle = pc1Angle
  const ax = cx + Math.cos(arrowAngle) * axisLen
  const ay = cy + Math.sin(arrowAngle) * axisLen
  ctx.beginPath()
  ctx.moveTo(ax, ay)
  ctx.lineTo(ax - Math.cos(arrowAngle - 0.3) * arrowSize, ay - Math.sin(arrowAngle - 0.3) * arrowSize)
  ctx.moveTo(ax, ay)
  ctx.lineTo(ax - Math.cos(arrowAngle + 0.3) * arrowSize, ay - Math.sin(arrowAngle + 0.3) * arrowSize)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.35)'
  ctx.lineWidth = 1.2
  ctx.stroke()
}

function tsneCluster(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const numClusters = 5
  const pointsPerCluster = 18

  const clusterProgress = Math.min(1, (Math.sin(t * 0.2) + 1) / 2 * 1.2)

  for (let c = 0; c < numClusters; c++) {
    const clusterAngle = (c / numClusters) * Math.PI * 2 + 0.5
    const clusterDist = 80 * clusterProgress
    const clusterX = cx + Math.cos(clusterAngle) * clusterDist
    const clusterY = cy + Math.sin(clusterAngle) * clusterDist

    for (let p = 0; p < pointsPerCluster; p++) {
      const seed = c * 100 + p * 3.14
      const spreadR = 60 * (1 - clusterProgress) + 15 * clusterProgress
      const angle = seed * 2.4 + t * 0.05
      const r = Math.abs(Math.sin(seed * 7)) * spreadR

      const startX = cx + Math.sin(seed * 3) * 100
      const startY = cy + Math.cos(seed * 5) * 100
      const endX = clusterX + Math.cos(angle) * r
      const endY = clusterY + Math.sin(angle) * r
      const px = startX * (1 - clusterProgress) + endX * clusterProgress
      const py = startY * (1 - clusterProgress) + endY * clusterProgress

      ctx.beginPath()
      ctx.arc(px, py, 2, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(31, 30, 29, ${0.1 + c * 0.04})`
      ctx.fill()
    }

    if (clusterProgress > 0.5) {
      ctx.beginPath()
      ctx.arc(clusterX, clusterY, 20 + Math.sin(t * 0.5 + c) * 3, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(31, 30, 29, ${(clusterProgress - 0.5) * 0.15})`
      ctx.lineWidth = 0.5
      ctx.setLineDash([2, 3])
      ctx.stroke()
      ctx.setLineDash([])
    }
  }
}

function crossValidFolds(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const numFolds = 5
  const margin = w * 0.1
  const totalW = w - margin * 2
  const foldW = totalW / numFolds
  const rowH = h * 0.08
  const gap = h * 0.03
  const startY = h * 0.15

  const activeFold = Math.floor((t * 0.3) % numFolds)

  for (let row = 0; row < numFolds; row++) {
    const y = startY + row * (rowH + gap)
    for (let fold = 0; fold < numFolds; fold++) {
      const x = margin + fold * foldW
      const isTest = fold === ((row + activeFold) % numFolds)

      if (isTest) {
        ctx.fillStyle = `rgba(31, 30, 29, ${0.2 + Math.sin(t * 0.8 + row) * 0.05})`
        ctx.fillRect(x + 2, y, foldW - 4, rowH)
      } else {
        ctx.fillStyle = 'rgba(31, 30, 29, 0.06)'
        ctx.fillRect(x + 2, y, foldW - 4, rowH)
      }
      ctx.strokeStyle = 'rgba(31, 30, 29, 0.1)'
      ctx.lineWidth = 0.5
      ctx.strokeRect(x + 2, y, foldW - 4, rowH)
    }
  }

  const resultY = startY + numFolds * (rowH + gap) + 20
  for (let i = 0; i < numFolds; i++) {
    const barH = 20 + Math.sin(i * 1.3 + t * 0.2) * 5
    const x = margin + (i + 0.2) * foldW
    ctx.fillStyle = `rgba(31, 30, 29, ${0.1 + (i === activeFold ? 0.15 : 0)})`
    ctx.fillRect(x, resultY + 30 - barH, foldW * 0.6, barH)
  }

  ctx.beginPath()
  ctx.moveTo(margin, resultY + 30)
  ctx.lineTo(margin + totalW, resultY + 30)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.1)'
  ctx.lineWidth = 0.5
  ctx.stroke()
}

function regularizationShrink(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const margin = 50
  const plotW = w - margin * 2
  const plotH = h - margin * 2
  const cy = margin + plotH / 2

  const shrinkProgress = (Math.sin(t * 0.3) + 1) / 2

  ctx.beginPath()
  for (let x = 0; x <= plotW; x += 1) {
    const normX = x / plotW
    const complexY = Math.sin(normX * 15) * 60 + Math.cos(normX * 7) * 30 + Math.sin(normX * 3) * 20
    const simpleY = Math.sin(normX * Math.PI * 2) * 40
    const y = complexY * (1 - shrinkProgress) + simpleY * shrinkProgress
    const py = cy + y
    if (x === 0) ctx.moveTo(margin + x, py)
    else ctx.lineTo(margin + x, py)
  }
  ctx.strokeStyle = `rgba(31, 30, 29, ${0.25 + shrinkProgress * 0.15})`
  ctx.lineWidth = 1.2
  ctx.stroke()

  const numPoints = 8
  for (let i = 0; i < numPoints; i++) {
    const normX = (i + 0.5) / numPoints
    const y = Math.sin(normX * Math.PI * 2) * 40 + Math.sin(i * 2.3) * 10
    ctx.beginPath()
    ctx.arc(margin + normX * plotW, cy + y, 3, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(31, 30, 29, 0.25)'
    ctx.fill()
  }

  const pullStrength = shrinkProgress * 0.5
  for (let i = 0; i < 8; i++) {
    const x = margin + ((i + 0.5) / 8) * plotW
    ctx.beginPath()
    ctx.moveTo(x, cy - 80 * (1 - shrinkProgress))
    ctx.lineTo(x, cy + 80 * (1 - shrinkProgress))
    ctx.strokeStyle = `rgba(31, 30, 29, ${pullStrength * 0.1})`
    ctx.lineWidth = 0.3
    ctx.stroke()
  }
}

function agiHorizon(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const horizonY = h * 0.55
  const cx = w / 2

  ctx.beginPath()
  for (let x = 0; x <= w; x += 2) {
    const normX = x / w
    const wave = Math.sin(normX * 6 + t * 0.2) * 3 + Math.cos(normX * 3 + t * 0.15) * 2
    if (x === 0) ctx.moveTo(x, horizonY + wave)
    else ctx.lineTo(x, horizonY + wave)
  }
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.2)'
  ctx.lineWidth = 1
  ctx.stroke()

  const numRays = 20
  const glowIntensity = Math.sin(t * 0.4) * 0.3 + 0.5
  for (let i = 0; i < numRays; i++) {
    const angle = ((i / numRays) - 0.5) * Math.PI * 0.8
    const len = 80 + Math.sin(t * 0.3 + i * 0.5) * 30
    ctx.beginPath()
    ctx.moveTo(cx, horizonY)
    ctx.lineTo(cx + Math.cos(angle - Math.PI / 2) * len, horizonY + Math.sin(angle - Math.PI / 2) * len)
    ctx.strokeStyle = `rgba(31, 30, 29, ${glowIntensity * 0.08})`
    ctx.lineWidth = 0.5
    ctx.stroke()
  }

  const numSteps = 10
  for (let i = 0; i < numSteps; i++) {
    const progress = (i + 0.5) / numSteps
    const perspective = progress * progress
    const stepY = horizonY + (1 - perspective) * (h * 0.35)
    const stepW = (1 - perspective) * w * 0.6
    ctx.beginPath()
    ctx.moveTo(cx - stepW / 2, stepY)
    ctx.lineTo(cx + stepW / 2, stepY)
    ctx.strokeStyle = `rgba(31, 30, 29, ${(1 - perspective) * 0.12})`
    ctx.lineWidth = 1 - perspective * 0.5
    ctx.stroke()
  }

  ctx.beginPath()
  ctx.arc(cx, horizonY - 5, 8 + glowIntensity * 4, 0, Math.PI * 2)
  ctx.fillStyle = `rgba(31, 30, 29, ${glowIntensity * 0.15})`
  ctx.fill()
}

function agenticAutonomy(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2

  const pathPoints: { x: number; y: number }[] = []
  let px = cx
  let py = cy
  const numSteps = 80
  for (let i = 0; i < numSteps; i++) {
    const angle = Math.sin(i * 0.3 + t * 0.2) * Math.PI * 0.8 + Math.cos(i * 0.15 + t * 0.1) * Math.PI * 0.3
    px += Math.cos(angle) * 4
    py += Math.sin(angle) * 4
    pathPoints.push({ x: px, y: py })
  }

  ctx.beginPath()
  ctx.moveTo(cx, cy)
  for (const pt of pathPoints) {
    ctx.lineTo(pt.x, pt.y)
  }
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.15)'
  ctx.lineWidth = 0.8
  ctx.stroke()

  const headIdx = Math.min(numSteps - 1, Math.floor(((t * 0.5) % 1) * numSteps))
  const head = pathPoints[headIdx]
  ctx.beginPath()
  ctx.arc(head.x, head.y, 6, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(31, 30, 29, 0.4)'
  ctx.fill()

  const lookAhead = 15
  for (let i = 1; i <= 3; i++) {
    const futureIdx = Math.min(numSteps - 1, headIdx + i * lookAhead)
    const future = pathPoints[futureIdx]
    ctx.beginPath()
    ctx.setLineDash([2, 2])
    ctx.moveTo(head.x, head.y)
    ctx.lineTo(future.x, future.y)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.08 / i})`
    ctx.lineWidth = 0.5
    ctx.stroke()
    ctx.setLineDash([])

    ctx.beginPath()
    ctx.arc(future.x, future.y, 3, 0, Math.PI * 2)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.1 / i})`
    ctx.lineWidth = 0.5
    ctx.stroke()
  }

  ctx.beginPath()
  ctx.arc(cx, cy, 4, 0, Math.PI * 2)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.2)'
  ctx.lineWidth = 0.8
  ctx.stroke()
}

function explainableLight(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const boxSize = Math.min(w, h) * 0.3

  ctx.strokeStyle = 'rgba(31, 30, 29, 0.25)'
  ctx.lineWidth = 1.5
  ctx.strokeRect(cx - boxSize / 2, cy - boxSize / 2, boxSize, boxSize)

  const illumination = (Math.sin(t * 0.4) + 1) / 2
  const innerPad = boxSize * 0.1
  const innerSize = boxSize - innerPad * 2

  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      const cellX = cx - boxSize / 2 + innerPad + (c / 5) * innerSize
      const cellY = cy - boxSize / 2 + innerPad + (r / 5) * innerSize
      const cellSize = innerSize / 5
      const dist = Math.sqrt(Math.pow(r - 2, 2) + Math.pow(c - 2, 2)) / 3
      const reveal = Math.max(0, illumination - dist * 0.3)

      ctx.fillStyle = `rgba(31, 30, 29, ${reveal * 0.2})`
      ctx.fillRect(cellX, cellY, cellSize - 2, cellSize - 2)
    }
  }

  const numRays = 12
  for (let i = 0; i < numRays; i++) {
    const angle = (i / numRays) * Math.PI * 2
    const innerR = boxSize / 2 + 5
    const outerR = boxSize / 2 + 15 + illumination * 25
    ctx.beginPath()
    ctx.moveTo(cx + Math.cos(angle) * innerR, cy + Math.sin(angle) * innerR)
    ctx.lineTo(cx + Math.cos(angle) * outerR, cy + Math.sin(angle) * outerR)
    ctx.strokeStyle = `rgba(31, 30, 29, ${illumination * 0.12})`
    ctx.lineWidth = 0.5
    ctx.stroke()
  }
}

function alignmentCompass(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const r = Math.min(w, h) * 0.3

  ctx.beginPath()
  ctx.arc(cx, cy, r, 0, Math.PI * 2)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.2)'
  ctx.lineWidth = 1.2
  ctx.stroke()

  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2
    const len = i % 3 === 0 ? 12 : 6
    ctx.beginPath()
    ctx.moveTo(cx + Math.cos(angle) * (r - len), cy + Math.sin(angle) * (r - len))
    ctx.lineTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r)
    ctx.strokeStyle = `rgba(31, 30, 29, ${i % 3 === 0 ? 0.25 : 0.1})`
    ctx.lineWidth = i % 3 === 0 ? 1.2 : 0.6
    ctx.stroke()
  }

  const needleAngle = -Math.PI / 2 + Math.sin(t * 0.3) * 0.3 + Math.cos(t * 0.17) * 0.15
  const needleLen = r * 0.7

  ctx.beginPath()
  ctx.moveTo(cx, cy)
  ctx.lineTo(cx + Math.cos(needleAngle) * needleLen, cy + Math.sin(needleAngle) * needleLen)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.4)'
  ctx.lineWidth = 2
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(cx, cy)
  ctx.lineTo(cx + Math.cos(needleAngle + Math.PI) * needleLen * 0.3, cy + Math.sin(needleAngle + Math.PI) * needleLen * 0.3)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.15)'
  ctx.lineWidth = 1
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(cx, cy, 4, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(31, 30, 29, 0.3)'
  ctx.fill()

  const trueNorthAngle = -Math.PI / 2
  ctx.beginPath()
  ctx.arc(cx + Math.cos(trueNorthAngle) * (r + 12), cy + Math.sin(trueNorthAngle) * (r + 12), 3, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(31, 30, 29, 0.25)'
  ctx.fill()
}

function federatedNodes(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const numNodes = 6
  const orbitR = Math.min(w, h) * 0.3

  const nodePositions: { x: number; y: number }[] = []
  for (let i = 0; i < numNodes; i++) {
    const angle = (i / numNodes) * Math.PI * 2 - Math.PI / 2
    nodePositions.push({
      x: cx + Math.cos(angle) * orbitR,
      y: cy + Math.sin(angle) * orbitR,
    })
  }

  for (const node of nodePositions) {
    ctx.beginPath()
    ctx.setLineDash([2, 3])
    ctx.moveTo(node.x, node.y)
    ctx.lineTo(cx, cy)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.08)'
    ctx.lineWidth = 0.5
    ctx.stroke()
    ctx.setLineDash([])
  }

  for (let i = 0; i < numNodes; i++) {
    const node = nodePositions[i]
    ctx.beginPath()
    ctx.arc(node.x, node.y, 15, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.25)'
    ctx.lineWidth = 1
    ctx.stroke()

    const localData = 5
    for (let d = 0; d < localData; d++) {
      const angle = (d / localData) * Math.PI * 2 + t * 0.2 + i
      const dr = 8 + Math.sin(t + d + i) * 2
      ctx.beginPath()
      ctx.arc(node.x + Math.cos(angle) * dr, node.y + Math.sin(angle) * dr, 1.5, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(31, 30, 29, 0.15)'
      ctx.fill()
    }

    const sendProgress = ((t * 0.3 + i * 0.5) % 1)
    const gx = node.x + (cx - node.x) * sendProgress
    const gy = node.y + (cy - node.y) * sendProgress
    ctx.beginPath()
    ctx.arc(gx, gy, 2, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.2 * Math.sin(sendProgress * Math.PI)})`
    ctx.fill()
  }

  ctx.beginPath()
  ctx.arc(cx, cy, 12, 0, Math.PI * 2)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.3)'
  ctx.lineWidth = 1.2
  ctx.stroke()

  const pulse = Math.sin(t * 0.8) * 0.5 + 0.5
  ctx.beginPath()
  ctx.arc(cx, cy, 5 + pulse * 3, 0, Math.PI * 2)
  ctx.fillStyle = `rgba(31, 30, 29, ${0.1 + pulse * 0.15})`
  ctx.fill()
}

function ethicalScales(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h * 0.4
  const beamW = w * 0.55
  const tilt = Math.sin(t * 0.35) * 0.12

  ctx.beginPath()
  ctx.moveTo(cx, cy)
  ctx.lineTo(cx, cy + 60)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.25)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(cx - 15, cy + 60)
  ctx.lineTo(cx + 15, cy + 60)
  ctx.lineTo(cx + 20, cy + 70)
  ctx.lineTo(cx - 20, cy + 70)
  ctx.closePath()
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.15)'
  ctx.lineWidth = 0.8
  ctx.stroke()

  ctx.save()
  ctx.translate(cx, cy)
  ctx.rotate(tilt)

  ctx.beginPath()
  ctx.moveTo(-beamW / 2, 0)
  ctx.lineTo(beamW / 2, 0)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.3)'
  ctx.lineWidth = 2
  ctx.stroke()

  const panR = 25
  const leftPanY = 30
  const rightPanY = 30
  const chainLen = 25

  ctx.beginPath()
  ctx.moveTo(-beamW / 2, 0)
  ctx.lineTo(-beamW / 2, chainLen)
  ctx.moveTo(beamW / 2, 0)
  ctx.lineTo(beamW / 2, chainLen)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.15)'
  ctx.lineWidth = 0.8
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(-beamW / 2, leftPanY + chainLen, panR, 0, Math.PI)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.2)'
  ctx.lineWidth = 1
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(beamW / 2, rightPanY + chainLen, panR, 0, Math.PI)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.2)'
  ctx.lineWidth = 1
  ctx.stroke()

  const leftItems = 3
  const rightItems = 3
  for (let i = 0; i < leftItems; i++) {
    const ix = -beamW / 2 + (i - 1) * 12
    const iy = leftPanY + chainLen - 5 - Math.sin(t * 0.5 + i) * 2
    ctx.beginPath()
    ctx.arc(ix, iy, 5, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.15 + i * 0.05})`
    ctx.fill()
  }
  for (let i = 0; i < rightItems; i++) {
    const ix = beamW / 2 + (i - 1) * 12
    const iy = rightPanY + chainLen - 5 - Math.cos(t * 0.5 + i) * 2
    ctx.beginPath()
    ctx.arc(ix, iy, 5, 0, Math.PI * 2)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.15 + i * 0.05})`
    ctx.lineWidth = 0.8
    ctx.stroke()
  }

  ctx.restore()
}

function biasLens(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const gridSize = 12
  const cellSize = Math.min(w, h) * 0.05
  const gridW = gridSize * cellSize
  const offsetX = (w - gridW) / 2
  const offsetY = (h - gridW) / 2

  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      const x = offsetX + c * cellSize
      const y = offsetY + r * cellSize

      const dist = Math.sqrt(Math.pow((c + 0.5) / gridSize - 0.5, 2) + Math.pow((r + 0.5) / gridSize - 0.5, 2))
      const lensStrength = Math.max(0, 1 - dist * 3) * (Math.sin(t * 0.4) * 0.5 + 0.5)

      const warpX = (c / gridSize - 0.5) * lensStrength * cellSize * 2
      const warpY = (r / gridSize - 0.5) * lensStrength * cellSize * 2

      ctx.strokeStyle = `rgba(31, 30, 29, ${0.08 + lensStrength * 0.12})`
      ctx.lineWidth = 0.5
      ctx.strokeRect(x + warpX, y + warpY, cellSize - 1, cellSize - 1)
    }
  }

  ctx.beginPath()
  ctx.arc(cx, cy, gridW * 0.25, 0, Math.PI * 2)
  ctx.strokeStyle = `rgba(31, 30, 29, ${0.15 + Math.sin(t * 0.4) * 0.05})`
  ctx.lineWidth = 1.5
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(cx, cy, gridW * 0.25 + 3, 0, Math.PI * 2)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.06)'
  ctx.lineWidth = 0.5
  ctx.stroke()
}

function humanLoopCircuit(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const loopR = Math.min(w, h) * 0.28

  ctx.beginPath()
  ctx.arc(cx, cy, loopR, 0, Math.PI * 2)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.12)'
  ctx.lineWidth = 3
  ctx.stroke()

  const stations = [
    { angle: -Math.PI / 2, label: 'H', isHuman: true },
    { angle: 0, label: 'M', isHuman: false },
    { angle: Math.PI / 2, label: 'E', isHuman: false },
    { angle: Math.PI, label: 'R', isHuman: false },
  ]

  for (const station of stations) {
    const sx = cx + Math.cos(station.angle) * loopR
    const sy = cy + Math.sin(station.angle) * loopR
    const nodeR = station.isHuman ? 18 : 14

    ctx.beginPath()
    ctx.arc(sx, sy, nodeR, 0, Math.PI * 2)
    if (station.isHuman) {
      ctx.fillStyle = 'rgba(31, 30, 29, 0.08)'
      ctx.fill()
      ctx.strokeStyle = 'rgba(31, 30, 29, 0.35)'
      ctx.lineWidth = 1.5
    } else {
      ctx.strokeStyle = 'rgba(31, 30, 29, 0.25)'
      ctx.lineWidth = 1
    }
    ctx.stroke()

    if (station.isHuman) {
      ctx.beginPath()
      ctx.arc(sx, sy - 5, 4, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(31, 30, 29, 0.3)'
      ctx.lineWidth = 0.8
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(sx, sy - 1)
      ctx.lineTo(sx, sy + 7)
      ctx.moveTo(sx - 5, sy + 2)
      ctx.lineTo(sx + 5, sy + 2)
      ctx.stroke()
    }
  }

  const numSignals = 4
  for (let s = 0; s < numSignals; s++) {
    const signalAngle = ((t * 0.4 + s * Math.PI / 2) % (Math.PI * 2))
    const sx = cx + Math.cos(signalAngle) * loopR
    const sy = cy + Math.sin(signalAngle) * loopR
    ctx.beginPath()
    ctx.arc(sx, sy, 3, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(31, 30, 29, 0.35)'
    ctx.fill()
  }
}

function mlopsGears(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  function drawGear(gx: number, gy: number, r: number, teeth: number, rotation: number, alpha: number) {
    ctx.beginPath()
    for (let i = 0; i <= teeth * 2; i++) {
      const angle = (i / (teeth * 2)) * Math.PI * 2 + rotation
      const toothR = i % 2 === 0 ? r : r * 0.8
      const x = gx + Math.cos(angle) * toothR
      const y = gy + Math.sin(angle) * toothR
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.closePath()
    ctx.strokeStyle = `rgba(31, 30, 29, ${alpha})`
    ctx.lineWidth = 1
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(gx, gy, r * 0.25, 0, Math.PI * 2)
    ctx.strokeStyle = `rgba(31, 30, 29, ${alpha * 0.6})`
    ctx.lineWidth = 0.8
    ctx.stroke()
  }

  const gears = [
    { x: w * 0.3, y: h * 0.4, r: 40, teeth: 10, speed: 0.3 },
    { x: w * 0.52, y: h * 0.48, r: 30, teeth: 8, speed: -0.4 },
    { x: w * 0.68, y: h * 0.4, r: 35, teeth: 9, speed: 0.34 },
  ]

  for (let i = 0; i < gears.length; i++) {
    const gear = gears[i]
    drawGear(gear.x, gear.y, gear.r, gear.teeth, t * gear.speed, 0.2 + i * 0.05)
  }

  const labels = ['Train', 'Deploy', 'Monitor']
  ctx.fillStyle = 'rgba(31, 30, 29, 0.25)'
  ctx.font = '10px sans-serif'
  ctx.textAlign = 'center'
  for (let i = 0; i < gears.length; i++) {
    ctx.fillText(labels[i], gears[i].x, gears[i].y + gears[i].r + 18)
  }
}

function apiGateway(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const gateW = 30
  const gateH = h * 0.4

  ctx.fillStyle = 'rgba(31, 30, 29, 0.06)'
  ctx.fillRect(cx - gateW / 2, cy - gateH / 2, gateW, gateH)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.25)'
  ctx.lineWidth = 1.2
  ctx.strokeRect(cx - gateW / 2, cy - gateH / 2, gateW, gateH)

  const numRequests = 8
  for (let i = 0; i < numRequests; i++) {
    const startY = cy - gateH * 0.35 + (i / numRequests) * gateH * 0.7
    const startX = w * 0.1
    const progress = ((t * 0.25 + i * 0.12) % 1)

    if (progress < 0.5) {
      const px = startX + progress * 2 * (cx - gateW / 2 - startX)
      ctx.beginPath()
      ctx.arc(px, startY + Math.sin(progress * 4 + i) * 5, 2, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(31, 30, 29, ${0.15 + Math.sin(t + i) * 0.05})`
      ctx.fill()
    } else {
      const endX = w * 0.9
      const exitProgress = (progress - 0.5) * 2
      const px = cx + gateW / 2 + exitProgress * (endX - cx - gateW / 2)
      const fan = (i - numRequests / 2) * 8 * exitProgress
      ctx.beginPath()
      ctx.arc(px, startY + fan, 2, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(31, 30, 29, ${0.2 * (1 - exitProgress * 0.5)})`
      ctx.fill()
    }
  }

  ctx.beginPath()
  ctx.moveTo(cx - 6, cy - 8)
  ctx.lineTo(cx + 6, cy)
  ctx.lineTo(cx - 6, cy + 8)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.3)'
  ctx.lineWidth = 1.2
  ctx.stroke()
}

function roboticArm(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const baseX = w * 0.35
  const baseY = h * 0.75

  const seg1Len = Math.min(w, h) * 0.22
  const seg2Len = Math.min(w, h) * 0.18
  const seg3Len = Math.min(w, h) * 0.12

  const angle1 = -Math.PI / 3 + Math.sin(t * 0.3) * 0.4
  const angle2 = angle1 - Math.PI / 4 + Math.sin(t * 0.4 + 1) * 0.3
  const angle3 = angle2 + Math.sin(t * 0.5 + 2) * 0.5

  const joint1X = baseX + Math.cos(angle1) * seg1Len
  const joint1Y = baseY + Math.sin(angle1) * seg1Len
  const joint2X = joint1X + Math.cos(angle2) * seg2Len
  const joint2Y = joint1Y + Math.sin(angle2) * seg2Len
  const endX = joint2X + Math.cos(angle3) * seg3Len
  const endY = joint2Y + Math.sin(angle3) * seg3Len

  ctx.fillStyle = 'rgba(31, 30, 29, 0.15)'
  ctx.fillRect(baseX - 15, baseY, 30, 10)

  ctx.beginPath()
  ctx.moveTo(baseX, baseY)
  ctx.lineTo(joint1X, joint1Y)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.3)'
  ctx.lineWidth = 4
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(joint1X, joint1Y)
  ctx.lineTo(joint2X, joint2Y)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.25)'
  ctx.lineWidth = 3
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(joint2X, joint2Y)
  ctx.lineTo(endX, endY)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.2)'
  ctx.lineWidth = 2
  ctx.stroke()

  const joints = [
    { x: baseX, y: baseY, r: 6 },
    { x: joint1X, y: joint1Y, r: 5 },
    { x: joint2X, y: joint2Y, r: 4 },
  ]
  for (const j of joints) {
    ctx.beginPath()
    ctx.arc(j.x, j.y, j.r, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(31, 30, 29, 0.2)'
    ctx.fill()
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.3)'
    ctx.lineWidth = 1
    ctx.stroke()
  }

  const gripAngle = angle3
  ctx.beginPath()
  ctx.moveTo(endX + Math.cos(gripAngle + 0.4) * 8, endY + Math.sin(gripAngle + 0.4) * 8)
  ctx.lineTo(endX, endY)
  ctx.lineTo(endX + Math.cos(gripAngle - 0.4) * 8, endY + Math.sin(gripAngle - 0.4) * 8)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.25)'
  ctx.lineWidth = 1.5
  ctx.stroke()
}

function knowledgeWeb(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const numNodes = 12

  const nodes: { x: number; y: number }[] = []
  for (let i = 0; i < numNodes; i++) {
    const seed = i * 2.399
    const r = 50 + Math.abs(Math.sin(seed * 3)) * 90
    const angle = seed + t * 0.03
    nodes.push({
      x: cx + Math.cos(angle) * r,
      y: cy + Math.sin(angle) * r,
    })
  }

  const edges = [
    [0, 1], [0, 3], [1, 2], [1, 4], [2, 5], [3, 4], [3, 6],
    [4, 5], [4, 7], [5, 8], [6, 7], [7, 8], [8, 9], [9, 10],
    [10, 11], [6, 11], [2, 9],
  ]

  for (const [a, b] of edges) {
    if (a >= numNodes || b >= numNodes) continue
    const pulse = Math.sin(t * 0.8 + a + b) * 0.5 + 0.5
    ctx.beginPath()
    ctx.moveTo(nodes[a].x, nodes[a].y)
    const midX = (nodes[a].x + nodes[b].x) / 2 + Math.sin(t * 0.3 + a) * 8
    const midY = (nodes[a].y + nodes[b].y) / 2 + Math.cos(t * 0.3 + b) * 8
    ctx.quadraticCurveTo(midX, midY, nodes[b].x, nodes[b].y)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.06 + pulse * 0.1})`
    ctx.lineWidth = 0.8 + pulse * 0.5
    ctx.stroke()

    if (pulse > 0.6) {
      const flowPos = ((t * 0.5 + a * 0.3) % 1)
      const fx = nodes[a].x + (nodes[b].x - nodes[a].x) * flowPos
      const fy = nodes[a].y + (nodes[b].y - nodes[a].y) * flowPos
      ctx.beginPath()
      ctx.arc(fx, fy, 1.5, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(31, 30, 29, 0.25)'
      ctx.fill()
    }
  }

  for (let i = 0; i < numNodes; i++) {
    const size = 4 + Math.sin(t * 0.5 + i * 1.2) * 1.5
    ctx.beginPath()
    ctx.arc(nodes[i].x, nodes[i].y, size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.15 + (i % 3) * 0.05})`
    ctx.fill()
  }
}

function quantumSuperposition(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2

  const collapseProgress = Math.max(0, Math.sin(t * 0.25))
  const numStates = 5

  for (let s = 0; s < numStates; s++) {
    const stateAngle = (s / numStates) * Math.PI * 2 + t * 0.1
    const stateR = 60 * (1 - collapseProgress) + (s === 0 ? 0 : 60) * collapseProgress
    const stateX = cx + Math.cos(stateAngle) * stateR * (s === 0 ? 0 : 1)
    const stateY = cy + Math.sin(stateAngle) * stateR * (s === 0 ? 0 : 1)
    const alpha = s === 0
      ? 0.1 + collapseProgress * 0.3
      : 0.2 * (1 - collapseProgress)

    ctx.beginPath()
    const points = 40
    for (let i = 0; i <= points; i++) {
      const angle = (i / points) * Math.PI * 2
      const wobble = Math.sin(angle * 3 + t + s * 2) * (5 + 10 * (1 - collapseProgress))
      const r = 20 + wobble
      const px = stateX + Math.cos(angle) * r
      const py = stateY + Math.sin(angle) * r
      if (i === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.closePath()
    ctx.strokeStyle = `rgba(31, 30, 29, ${alpha})`
    ctx.lineWidth = 0.8
    ctx.stroke()
  }

  if (collapseProgress > 0.8) {
    const flashAlpha = (collapseProgress - 0.8) * 2
    ctx.beginPath()
    ctx.arc(cx, cy, 25, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${flashAlpha * 0.15})`
    ctx.fill()
  }

  for (let ring = 1; ring <= 3; ring++) {
    ctx.beginPath()
    ctx.arc(cx, cy, 30 + ring * 25, 0, Math.PI * 2)
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.03 * (1 - collapseProgress)})`
    ctx.lineWidth = 0.3
    ctx.stroke()
  }
}

function neuromorphicSpike(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const margin = 40
  const plotW = w - margin * 2
  const numChannels = 8
  const channelH = (h - margin * 2) / numChannels

  for (let ch = 0; ch < numChannels; ch++) {
    const baseY = margin + ch * channelH + channelH / 2
    ctx.beginPath()
    for (let x = 0; x <= plotW; x += 1) {
      const normX = x / plotW
      let y = 0

      const numSpikes = 3 + Math.floor(Math.abs(Math.sin(ch * 2.3)) * 4)
      for (let s = 0; s < numSpikes; s++) {
        const spikePos = (Math.sin(ch * 1.7 + s * 3.1) * 0.3 + 0.5 + t * 0.05 * (1 + ch * 0.1)) % 1
        const dist = normX - spikePos
        if (Math.abs(dist) < 0.015) {
          y += (1 - Math.abs(dist) / 0.015) * channelH * 0.35 * -1
        } else if (dist > 0.015 && dist < 0.04) {
          y += Math.sin((dist - 0.015) / 0.025 * Math.PI) * channelH * 0.08
        }
      }

      const px = margin + x
      const py = baseY + y
      if (x === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.15 + ch * 0.03})`
    ctx.lineWidth = 0.8
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(margin, baseY)
    ctx.lineTo(margin + plotW, baseY)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.04)'
    ctx.lineWidth = 0.3
    ctx.stroke()
  }
}

function dimensionExplosion(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const expansionProgress = (Math.sin(t * 0.2) + 1) / 2

  const dims = [1, 2, 3, 5, 8]
  const maxR = Math.min(w, h) * 0.38

  for (let d = 0; d < dims.length; d++) {
    const dim = dims[d]
    const ringR = maxR * (d + 1) / dims.length * (0.3 + expansionProgress * 0.7)
    const numPoints = dim * 4
    const alpha = 0.06 + d * 0.04

    ctx.beginPath()
    ctx.arc(cx, cy, ringR, 0, Math.PI * 2)
    ctx.strokeStyle = `rgba(31, 30, 29, ${alpha * 0.5})`
    ctx.lineWidth = 0.3
    ctx.stroke()

    for (let p = 0; p < numPoints; p++) {
      const angle = (p / numPoints) * Math.PI * 2 + t * 0.05 * (d + 1)
      const px = cx + Math.cos(angle) * ringR
      const py = cy + Math.sin(angle) * ringR

      ctx.beginPath()
      ctx.arc(px, py, 1.5, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(31, 30, 29, ${alpha})`
      ctx.fill()

      if (p > 0) {
        const prevAngle = ((p - 1) / numPoints) * Math.PI * 2 + t * 0.05 * (d + 1)
        ctx.beginPath()
        ctx.moveTo(cx + Math.cos(prevAngle) * ringR, cy + Math.sin(prevAngle) * ringR)
        ctx.lineTo(px, py)
        ctx.strokeStyle = `rgba(31, 30, 29, ${alpha * 0.5})`
        ctx.lineWidth = 0.3
        ctx.stroke()
      }
    }
  }

  ctx.fillStyle = 'rgba(31, 30, 29, 0.2)'
  ctx.font = '10px monospace'
  ctx.textAlign = 'center'
  for (let d = 0; d < dims.length; d++) {
    const ringR = maxR * (d + 1) / dims.length * (0.3 + expansionProgress * 0.7)
    ctx.fillText(`${dims[d]}D`, cx + ringR + 12, cy - 5)
  }
}

function boostingSteps(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const margin = 50
  const plotW = w - margin * 2
  const plotH = h - margin * 2
  const cy = margin + plotH / 2

  const numLearners = 6
  const activeCount = Math.floor(((t * 0.2) % numLearners) + 1)

  for (let l = 0; l < numLearners; l++) {
    if (l >= activeCount) break
    const alpha = l === activeCount - 1 ? 0.3 : 0.08
    ctx.beginPath()
    for (let x = 0; x <= plotW; x += 2) {
      const normX = x / plotW
      const threshold = 0.2 + l * 0.12
      const y = normX < threshold ? -15 : 15
      const py = cy + y * (1 - l * 0.08) + l * 3
      if (x === 0) ctx.moveTo(margin + x, py)
      else ctx.lineTo(margin + x, py)
    }
    ctx.strokeStyle = `rgba(31, 30, 29, ${alpha})`
    ctx.lineWidth = 1
    ctx.stroke()
  }

  ctx.beginPath()
  for (let x = 0; x <= plotW; x += 1) {
    const normX = x / plotW
    let sum = 0
    for (let l = 0; l < activeCount; l++) {
      const threshold = 0.2 + l * 0.12
      const weight = 1 / (l + 1)
      sum += (normX < threshold ? -15 : 15) * weight
    }
    const py = cy + sum
    if (x === 0) ctx.moveTo(margin + x, py)
    else ctx.lineTo(margin + x, py)
  }
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.4)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  const numPoints = 10
  for (let i = 0; i < numPoints; i++) {
    const px = margin + (i + 0.5) / numPoints * plotW
    const truY = Math.sin((i + 0.5) / numPoints * Math.PI * 2) * 30
    ctx.beginPath()
    ctx.arc(px, cy + truY, 3, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(31, 30, 29, 0.2)'
    ctx.fill()
  }
}

function selfTeach(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const mainR = 30

  ctx.beginPath()
  ctx.arc(cx, cy, mainR, 0, Math.PI * 2)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.3)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  const selfLoopR = 20
  const loopAngle = t * 0.5
  ctx.beginPath()
  ctx.arc(cx, cy - mainR - selfLoopR + 5, selfLoopR, 0.3, Math.PI * 2 - 0.3)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.2)'
  ctx.lineWidth = 1
  ctx.stroke()

  const arrowAngle = Math.PI * 2 - 0.3
  const arrowX = cx + Math.cos(arrowAngle) * selfLoopR
  const arrowY = cy - mainR - selfLoopR + 5 + Math.sin(arrowAngle) * selfLoopR
  ctx.beginPath()
  ctx.moveTo(arrowX + 4, arrowY - 2)
  ctx.lineTo(arrowX, arrowY)
  ctx.lineTo(arrowX + 2, arrowY + 4)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.2)'
  ctx.lineWidth = 1
  ctx.stroke()

  const numSignals = 8
  for (let i = 0; i < numSignals; i++) {
    const progress = ((t * 0.3 + i * 0.125) % 1)
    const angle = progress * Math.PI * 2
    const sx = cx + Math.cos(angle + loopAngle) * (mainR + 8)
    const sy = cy + Math.sin(angle + loopAngle) * (mainR + 8)
    ctx.beginPath()
    ctx.arc(sx, sy, 2, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.15 + Math.sin(progress * Math.PI) * 0.15})`
    ctx.fill()
  }

  const numGenerated = 12
  for (let i = 0; i < numGenerated; i++) {
    const angle = (i / numGenerated) * Math.PI * 2 + t * 0.05
    const r = mainR + 40 + Math.sin(t * 0.3 + i * 1.5) * 10
    const gx = cx + Math.cos(angle) * r
    const gy = cy + Math.sin(angle) * r

    ctx.beginPath()
    ctx.arc(gx, gy, 2, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(31, 30, 29, 0.1)'
    ctx.fill()

    ctx.beginPath()
    ctx.setLineDash([1, 2])
    ctx.moveTo(gx, gy)
    const towardX = cx + Math.cos(angle) * (mainR + 5)
    const towardY = cy + Math.sin(angle) * (mainR + 5)
    ctx.lineTo(towardX, towardY)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.05)'
    ctx.lineWidth = 0.3
    ctx.stroke()
    ctx.setLineDash([])
  }
}

function edgeDevice(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const numDevices = 5
  const deviceSize = Math.min(w, h) * 0.08

  for (let d = 0; d < numDevices; d++) {
    const angle = (d / numDevices) * Math.PI * 2 - Math.PI / 2
    const orbitR = Math.min(w, h) * 0.28
    const dx = w / 2 + Math.cos(angle) * orbitR
    const dy = h / 2 + Math.sin(angle) * orbitR

    ctx.strokeStyle = 'rgba(31, 30, 29, 0.25)'
    ctx.lineWidth = 1
    ctx.strokeRect(dx - deviceSize / 2, dy - deviceSize / 2, deviceSize, deviceSize)

    const processing = Math.sin(t * 0.8 + d * 1.5) * 0.5 + 0.5
    const barW = deviceSize * 0.6
    const barH = 3
    ctx.fillStyle = `rgba(31, 30, 29, ${0.1 + processing * 0.2})`
    ctx.fillRect(dx - barW / 2, dy + deviceSize * 0.15, barW * processing, barH)

    const numLocalDots = 4
    for (let p = 0; p < numLocalDots; p++) {
      const pAngle = (p / numLocalDots) * Math.PI * 2 + t * 0.3 + d
      const pR = deviceSize * 0.7
      ctx.beginPath()
      ctx.arc(dx + Math.cos(pAngle) * pR, dy + Math.sin(pAngle) * pR, 1.5, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(31, 30, 29, ${0.08 + processing * 0.08})`
      ctx.fill()
    }

    ctx.beginPath()
    ctx.moveTo(dx - deviceSize * 0.2, dy - deviceSize * 0.1)
    ctx.lineTo(dx + deviceSize * 0.1, dy - deviceSize * 0.1)
    ctx.lineTo(dx + deviceSize * 0.1, dy + deviceSize * 0.05)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.12)'
    ctx.lineWidth = 0.5
    ctx.stroke()
  }

  const cloudX = w * 0.85
  const cloudY = h * 0.15
  ctx.beginPath()
  ctx.arc(cloudX, cloudY, 15, 0, Math.PI * 2)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.08)'
  ctx.lineWidth = 0.5
  ctx.setLineDash([2, 3])
  ctx.stroke()
  ctx.setLineDash([])

  ctx.beginPath()
  ctx.moveTo(cloudX - 4, cloudY - 4)
  ctx.lineTo(cloudX + 4, cloudY + 4)
  ctx.moveTo(cloudX + 4, cloudY - 4)
  ctx.lineTo(cloudX - 4, cloudY + 4)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.1)'
  ctx.lineWidth = 1
  ctx.stroke()
}

function policyLandscape(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const margin = 40
  const plotW = w - margin * 2
  const plotH = h - margin * 2
  const rows = 15

  for (let r = 0; r < rows; r++) {
    const rowProgress = r / rows
    const y = margin + rowProgress * plotH
    ctx.beginPath()
    for (let x = 0; x <= plotW; x += 2) {
      const normX = x / plotW
      const reward = Math.sin(normX * 3 + rowProgress * 2) * Math.cos(normX * 5 + t * 0.2) * 20
        + Math.sin(normX * 8 + rowProgress * 4 + t * 0.15) * 8
      const py = y + reward * (1 - rowProgress * 0.3)
      if (x === 0) ctx.moveTo(margin + x, py)
      else ctx.lineTo(margin + x, py)
    }
    ctx.strokeStyle = `rgba(31, 30, 29, ${0.04 + rowProgress * 0.08})`
    ctx.lineWidth = 0.6
    ctx.stroke()
  }

  const agentX = margin + ((Math.sin(t * 0.3) + 1) / 2) * plotW
  const agentRow = 0.5
  const agentY = margin + agentRow * plotH
  const reward = Math.sin((agentX - margin) / plotW * 3 + agentRow * 2) *
    Math.cos((agentX - margin) / plotW * 5 + t * 0.2) * 20

  ctx.beginPath()
  ctx.arc(agentX, agentY + reward * 0.7, 5, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(31, 30, 29, 0.4)'
  ctx.fill()

  const trailLen = 30
  for (let i = 1; i <= trailLen; i++) {
    const pastT = t - i * 0.03
    const pastX = margin + ((Math.sin(pastT * 0.3) + 1) / 2) * plotW
    const pastReward = Math.sin((pastX - margin) / plotW * 3 + agentRow * 2) *
      Math.cos((pastX - margin) / plotW * 5 + pastT * 0.2) * 20
    ctx.beginPath()
    ctx.arc(pastX, agentY + pastReward * 0.7, 1.5, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(31, 30, 29, ${0.15 * (1 - i / trailLen)})`
    ctx.fill()
  }
}

function transformerFull(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const margin = h * 0.08
  const blockH = h * 0.06
  const gap = h * 0.025
  const blockW = w * 0.3

  const components = [
    'Input',
    'Embed',
    'Pos',
    'MHA',
    'Add+Norm',
    'FFN',
    'Add+Norm',
    'MHA',
    'Add+Norm',
    'FFN',
    'Add+Norm',
    'Linear',
    'Softmax',
  ]

  let y = margin
  for (let i = 0; i < components.length; i++) {
    const pulse = Math.sin(t * 0.6 + i * 0.5) * 0.5 + 0.5
    const isMHA = components[i] === 'MHA'
    const isAddNorm = components[i] === 'Add+Norm'
    const bW = isAddNorm ? blockW * 0.9 : blockW

    ctx.fillStyle = `rgba(31, 30, 29, ${isMHA ? 0.06 + pulse * 0.04 : 0.03 + pulse * 0.02})`
    ctx.fillRect(cx - bW / 2, y, bW, blockH)
    ctx.strokeStyle = `rgba(31, 30, 29, ${isMHA ? 0.25 : isAddNorm ? 0.12 : 0.15})`
    ctx.lineWidth = isMHA ? 1.2 : 0.6
    ctx.strokeRect(cx - bW / 2, y, bW, blockH)

    if (isMHA) {
      const numHeads = 4
      const headW = bW * 0.15
      for (let h_idx = 0; h_idx < numHeads; h_idx++) {
        const hx = cx - bW * 0.35 + h_idx * (bW * 0.22)
        const headPulse = Math.sin(t * 1.2 + h_idx * 1.5 + i) * 0.5 + 0.5
        ctx.fillStyle = `rgba(31, 30, 29, ${0.05 + headPulse * 0.1})`
        ctx.fillRect(hx, y + 2, headW, blockH - 4)
      }
    }

    if (i < components.length - 1) {
      ctx.beginPath()
      ctx.moveTo(cx, y + blockH)
      ctx.lineTo(cx, y + blockH + gap)
      ctx.strokeStyle = 'rgba(31, 30, 29, 0.1)'
      ctx.lineWidth = 0.5
      ctx.stroke()

      const signalProgress = ((t * 0.4 + i * 0.1) % 1)
      const sy = y + blockH + signalProgress * gap
      ctx.beginPath()
      ctx.arc(cx, sy, 1.5, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(31, 30, 29, 0.2)'
      ctx.fill()
    }

    if (isAddNorm && i > 1) {
      const skipFrom = y - (blockH + gap) * 2
      if (skipFrom > margin) {
        ctx.beginPath()
        ctx.moveTo(cx + bW / 2 + 8, skipFrom + blockH)
        ctx.lineTo(cx + bW / 2 + 8, y + blockH / 2)
        ctx.lineTo(cx + bW / 2, y + blockH / 2)
        ctx.strokeStyle = 'rgba(31, 30, 29, 0.1)'
        ctx.lineWidth = 0.6
        ctx.stroke()
      }
    }

    y += blockH + gap
  }
}

export default function Visualization({ chapterNumber }: VisualizationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const draw = createDrawFunction(chapterNumber)
    let startTime = performance.now()

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      const elapsed = (performance.now() - startTime) / 1000
      const rect = canvas.parentElement!.getBoundingClientRect()
      ctx.setTransform(window.devicePixelRatio || 1, 0, 0, window.devicePixelRatio || 1, 0, 0)
      draw(ctx, rect.width, rect.height, elapsed)
      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animRef.current)
    }
  }, [chapterNumber])

  return (
    <div className="w-full h-full flex items-center justify-center p-8 md:p-16">
      <div className="w-full h-full max-w-[500px] max-h-[500px] aspect-square">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
    </div>
  )
}
