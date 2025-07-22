export default function Preview({ title, categories, cards, back }) {
  return (
    <div>
      <h2 className="font-semibold mb-2">Vorschau</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {cards.map(card => (
          <div key={card.id} id={`card-front-${card.id}`} className="border bg-white p-2 aspect-[3/4] flex flex-col">
            <h3 className="font-semibold text-center mb-2">{card.title}</h3>
            {card.image && <img src={card.image} alt="" className="h-24 object-cover mb-2" />}
            <div className="text-sm flex-1">
              {categories.map((cat, i) => (
                <div key={i} className="flex justify-between">
                  <span>{cat}</span>
                  <span>{card.values[i]}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div id="card-back-preview" className="border bg-white p-2 aspect-[3/4] flex items-center justify-center">
          {back.type === 'image' && back.image && <img src={back.image} alt="" className="object-cover w-full h-full" />}
          {back.type === 'color' && (
            <div style={{ background: back.color }} className="w-full h-full flex items-center justify-center">
              <span className="text-lg font-bold text-white">{back.text}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
