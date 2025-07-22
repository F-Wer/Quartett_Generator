import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import JSZip from 'jszip'
import CardEditor from './components/CardEditor'
import CardBackEditor from './components/CardBackEditor'
import Preview from './components/Preview'

const STORAGE_KEY = 'quartett-generator'

export default function App() {
  const [title, setTitle] = useState('')
  const [categories, setCategories] = useState(['Wert 1', 'Wert 2'])
  const [cards, setCards] = useState([])
  const [back, setBack] = useState({ type: 'color', color: '#ffffff', text: 'Mein Quartett', image: null })

  // Load from storage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const data = JSON.parse(saved)
      setTitle(data.title || '')
      setCategories(data.categories || ['Wert 1', 'Wert 2'])
      setCards(data.cards || [])
      setBack(data.back || { type: 'color', color: '#ffffff', text: 'Mein Quartett', image: null })
    }
  }, [])

  // Save to storage
  useEffect(() => {
    const data = { title, categories, cards, back }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }, [title, categories, cards, back])

  const addCategory = () => setCategories([...categories, `Wert ${categories.length + 1}`])
  const updateCategory = (i, value) => {
    const newCats = [...categories]
    newCats[i] = value
    setCategories(newCats)
  }
  const removeCategory = (i) => {
    const newCats = categories.filter((_, idx) => idx !== i)
    setCategories(newCats)
    setCards(cards.map(c => {
      const vals = { ...c.values }
      delete vals[i]
      return { ...c, values: vals }
    }))
  }

  const addCard = () => {
    const emptyValues = {}
    categories.forEach((_, i) => (emptyValues[i] = ''))
    setCards([...cards, { id: uuidv4(), title: '', image: null, values: emptyValues }])
  }

  const updateCard = (id, card) => {
    setCards(cards.map(c => (c.id === id ? card : c)))
  }

  const removeCard = (id) => {
    setCards(cards.filter(c => c.id !== id))
  }

  const exportPDF = async () => {
    const doc = new jsPDF({ unit: 'pt', format: [300, 400] })
    for (let i = 0; i < cards.length; i++) {
      const front = await html2canvas(document.getElementById(`card-front-${cards[i].id}`))
      const backCanvas = await html2canvas(document.getElementById('card-back-preview'))
      if (i > 0) doc.addPage()
      doc.addImage(front.toDataURL('image/jpeg'), 'JPEG', 0, 0, 300, 400)
      doc.addPage()
      doc.addImage(backCanvas.toDataURL('image/jpeg'), 'JPEG', 0, 0, 300, 400)
    }
    doc.save('quartett.pdf')
  }

  const exportZIP = async () => {
    const zip = new JSZip()
    for (let card of cards) {
      const front = await html2canvas(document.getElementById(`card-front-${card.id}`))
      zip.file(`front-${card.title || card.id}.jpg`, front.toDataURL('image/jpeg').split(',')[1], { base64: true })
    }
    const backCanvas = await html2canvas(document.getElementById('card-back-preview'))
    zip.file('back.jpg', backCanvas.toDataURL('image/jpeg').split(',')[1], { base64: true })
    const blob = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'quartett.zip'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">Quartett Generator</h1>
      <div className="space-y-2">
        <label className="block">
          <span className="font-semibold">Spieltitel:</span>
          <input className="border rounded w-full p-2" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <div>
          <h2 className="font-semibold mb-2">Kategorien</h2>
          {categories.map((cat, i) => (
            <div key={i} className="flex items-center mb-1">
              <input className="border rounded p-1 flex-1" value={cat} onChange={e => updateCategory(i, e.target.value)} />
              <button className="ml-2 text-red-500" onClick={() => removeCategory(i)}>X</button>
            </div>
          ))}
          <button className="mt-2 bg-blue-500 text-white px-2 py-1 rounded" onClick={addCategory}>Kategorie hinzufügen</button>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Karten</h2>
          {cards.map(card => (
            <CardEditor key={card.id} card={card} categories={categories} onChange={c => updateCard(card.id, c)} onRemove={() => removeCard(card.id)} />
          ))}
          <button className="mt-2 bg-blue-500 text-white px-2 py-1 rounded" onClick={addCard}>Karte hinzufügen</button>
        </div>
        <CardBackEditor back={back} setBack={setBack} />
        <div className="flex space-x-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={exportPDF}>Export PDF</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={exportZIP}>Export ZIP</button>
        </div>
        <Preview title={title} categories={categories} cards={cards} back={back} />
      </div>
    </div>
  )
}
