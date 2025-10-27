import { Fragment, useEffect, useMemo, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, Star, MapPin, Shield, CheckCircle2 } from 'lucide-react';

export default function ListingModal({ open, onClose, homestay }) {
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState('');
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    if (open) {
      setMessage('');
      setPaid(false);
      if (homestay?.intent === 'book') {
        // noop, could scroll booking into view
      }
    }
  }, [open, homestay]);

  const nights = useMemo(() => {
    if (!checkin || !checkout) return 0;
    const start = new Date(checkin);
    const end = new Date(checkout);
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  }, [checkin, checkout]);

  if (!homestay) return null;

  const total = nights * homestay.pricePerNight;

  const handlePay = (e) => {
    e.preventDefault();
    // Mock secure payment flow
    setTimeout(() => setPaid(true), 600);
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-start justify-center p-4 sm:p-6">
            <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0 translate-y-2" enterTo="opacity-100 translate-y-0" leave="ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-2">
              <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white p-0 text-left align-middle shadow-xl">
                <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
                  <Dialog.Title as="h3" className="text-lg font-semibold text-neutral-900">{homestay.title}</Dialog.Title>
                  <button onClick={onClose} aria-label="Close" className="p-2 rounded-md hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F26419]">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-2 p-4 sm:p-6">
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {homestay.images.map((src, i) => (
                        <img key={i} src={src} alt={`${homestay.title} photo ${i+1}`} className={`h-28 sm:h-40 w-full object-cover rounded-md ${i===0 ? 'col-span-3 sm:col-span-2 h-44 sm:h-64' : ''}`} />
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-neutral-700">
                      <MapPin className="h-4 w-4 text-[#F26419]" />
                      <span>{homestay.location.city}, {homestay.location.country}</span>
                      <span className="inline-flex items-center gap-1 text-amber-600 ml-2" aria-label={`${homestay.rating} out of 5 stars`}>
                        <Star className="h-4 w-4 fill-current" /> {homestay.rating.toFixed(1)} ({homestay.reviews.length} reviews)
                      </span>
                    </div>
                    <p className="mt-3 text-neutral-800 leading-relaxed">{homestay.description}</p>
                    <div className="mt-4">
                      <h4 className="font-semibold text-neutral-900">Amenities</h4>
                      <ul className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-neutral-700">
                        {homestay.amenities.map((a) => (
                          <li key={a} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#F26419]" /> {a}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold text-neutral-900">Hosted by {homestay.host.name}</h4>
                      <p className="text-sm text-neutral-700">Speaks: {homestay.host.languages.join(', ')}</p>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold text-neutral-900">Reviews</h4>
                      <ul className="mt-2 space-y-3">
                        {homestay.reviews.map((r, i) => (
                          <li key={i} className="p-3 rounded-md border border-neutral-200 bg-neutral-50">
                            <p className="text-sm text-neutral-800"><span className="font-medium">{r.author}</span> • {r.date}</p>
                            <p className="text-sm text-neutral-700 mt-1">{r.text}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold text-neutral-900">Location</h4>
                      <div className="mt-2 aspect-[16/9] w-full overflow-hidden rounded-lg border border-neutral-200">
                        <iframe title={`Map for ${homestay.title}`} src={homestay.mapEmbedUrl} className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                    </div>
                  </div>

                  <aside className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-neutral-200 p-4 sm:p-6">
                    <div className="rounded-lg border border-neutral-200 p-4">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="text-2xl font-semibold text-neutral-900">${homestay.pricePerNight}</span>
                          <span className="text-sm text-neutral-600"> / night</span>
                        </div>
                        <div className="inline-flex items-center gap-1 text-xs text-neutral-600"><Shield className="h-4 w-4 text-[#F26419]" /> Secure</div>
                      </div>
                      <form className="mt-4 space-y-3" onSubmit={handlePay}>
                        <div>
                          <label htmlFor="checkin" className="block text-sm font-medium text-neutral-800">Check-in</label>
                          <input id="checkin" type="date" value={checkin} onChange={(e)=>setCheckin(e.target.value)} required className="mt-1 w-full rounded-md border-neutral-300 focus:border-[#F26419] focus:ring-[#F26419]" />
                        </div>
                        <div>
                          <label htmlFor="checkout" className="block text-sm font-medium text-neutral-800">Check-out</label>
                          <input id="checkout" type="date" value={checkout} onChange={(e)=>setCheckout(e.target.value)} required className="mt-1 w-full rounded-md border-neutral-300 focus:border-[#F26419] focus:ring-[#F26419]" />
                        </div>
                        <div>
                          <label htmlFor="guests" className="block text-sm font-medium text-neutral-800">Guests</label>
                          <input id="guests" type="number" min={1} max={homestay.maxGuests} value={guests} onChange={(e)=>setGuests(Number(e.target.value))} className="mt-1 w-full rounded-md border-neutral-300 focus:border-[#F26419] focus:ring-[#F26419]" />
                          <p className="mt-1 text-xs text-neutral-600">Max {homestay.maxGuests} guests</p>
                        </div>
                        <div className="pt-2 border-t border-neutral-200">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-neutral-700">Nights</span>
                            <span className="font-medium text-neutral-900">{nights}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-neutral-700">Total</span>
                            <span className="font-semibold text-neutral-900">${total}</span>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="note" className="block text-sm font-medium text-neutral-800">Message to host (optional)</label>
                          <textarea id="note" rows={3} value={message} onChange={(e)=>setMessage(e.target.value)} className="mt-1 w-full rounded-md border-neutral-300 focus:border-[#F26419] focus:ring-[#F26419]" placeholder="Introduce yourself and your trip."></textarea>
                        </div>
                        {!paid ? (
                          <button type="submit" disabled={nights<=0} className="w-full inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#F26419] text-white font-medium shadow hover:opacity-95 disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F26419]">Pay securely</button>
                        ) : (
                          <div className="rounded-md bg-green-50 border border-green-200 p-3 text-sm text-green-800" role="status" aria-live="polite">Payment successful. A confirmation email has been sent.</div>
                        )}
                      </form>
                    </div>
                  </aside>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
