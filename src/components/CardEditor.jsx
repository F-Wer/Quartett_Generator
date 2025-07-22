import { useRef } from 'react'

export default function CardEditor({ card, categories, onChange, onRemove }) {
  const fileRef = useRef(null)

  const update = (field, value) => {
    onChange({ ...card, [field]: value })
  }

  const updateValue = (idx, value) => {
    const vals = { ...card.values, [idx]: value }
    onChange({ ...card, values: vals })
  }

  const handleImage = e => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => update('image', reader.result)
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="border p-2 mb-2">
      <div className="flex justify-between items-center">
        <input className="border p-1 flex-1" value={card.title} onChange={e => update('title', e.target.value)} placeholder="Kartentitel" />
        <button className="ml-2 text-red-500" onClick={onRemove}>X</button>
      </div>
      <div className="mt-2">
        {categories.map((cat, i) => (
          <div key={i} className="flex items-center mb-1">
            <span className="w-24 mr-2 text-sm">{cat}</span>
            <input className="border p-1 flex-1" value={card.values[i] || ''} onChange={e => updateValue(i, e.target.value)} />
          </div>
        ))}
      </div>
      <div className="mt-2">
        {card.image && <img src={card.image} alt="" className="h-24 mb-2" />}
        <input type="file" ref={fileRef} onChange={handleImage} />
      </div>
    </div>
  )
}
