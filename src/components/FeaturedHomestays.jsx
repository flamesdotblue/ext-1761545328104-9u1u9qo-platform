import { Star } from 'lucide-react';

export default function FeaturedHomestays({ homestays, onView }) {
  if (!homestays.length) {
    return (
      <div role="status" aria-live="polite" className="text-neutral-700">No homestays match your filters. Try adjusting your criteria.</div>
    );
  }
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {homestays.map((h) => (
        <article key={h.id} className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden" aria-labelledby={`home-${h.id}-title`}>
          <div className="relative aspect-[4/3] overflow-hidden">
            <img src={h.images[0]} alt={`${h.title} in ${h.location.city}, ${h.location.country}`} className="w-full h-full object-cover" />
            <div className="absolute top-2 left-2 bg-white/90 rounded-md px-2 py-1 text-xs font-medium text-neutral-800">{h.category}</div>
          </div>
          <div className="p-4">
            <h3 id={`home-${h.id}-title`} className="text-lg font-semibold text-neutral-900">{h.title}</h3>
            <p className="text-sm text-neutral-600">{h.location.city}, {h.location.country}</p>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-500" aria-label={`${h.rating} out of 5 stars`}>
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm text-neutral-800">{h.rating.toFixed(1)}</span>
                <span className="text-sm text-neutral-500">({h.reviews.length})</span>
              </div>
              <div className="text-right">
                <span className="text-neutral-900 font-semibold">${h.pricePerNight}</span>
                <span className="text-neutral-600 text-sm"> / night</span>
              </div>
            </div>
            <p className="mt-2 text-sm text-neutral-700 line-clamp-2">{h.summary}</p>
            <div className="mt-4 flex items-center gap-3">
              <button onClick={() => onView(h, 'view')} className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-md border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F26419]">View homestay</button>
              <button onClick={() => onView(h, 'book')} className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-md bg-[#F26419] text-white font-medium shadow hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F26419]">Book now</button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
