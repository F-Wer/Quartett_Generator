export default function CardBackEditor({ back, setBack }) {
  const handleImage = e => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => setBack({ ...back, type: 'image', image: reader.result })
      reader.readAsDataURL(file)
    }
  }

  return (
    <div>
      <h2 className="font-semibold mb-2">Rückseite</h2>
      <div className="mb-2">
        <label className="mr-2"><input type="radio" checked={back.type === 'color'} onChange={() => setBack({ ...back, type: 'color', image: null })} /> Farbe</label>
        <label className="mr-2"><input type="radio" checked={back.type === 'image'} onChange={() => setBack({ ...back, type: 'image' })} /> Bild</label>
      </div>
      {back.type === 'color' && (
        <div className="space-y-2">
          <input type="color" value={back.color} onChange={e => setBack({ ...back, color: e.target.value })} />
          <input className="border p-1" value={back.text} onChange={e => setBack({ ...back, text: e.target.value })} placeholder="Text" />
        </div>
      )}
      {back.type === 'image' && (
        <div>
          {back.image && <img src={back.image} alt="" className="h-24 mb-2" />}
          <input type="file" onChange={handleImage} />
        </div>
      )}
    </div>
  )
}
