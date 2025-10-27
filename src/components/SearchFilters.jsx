import { useState, useEffect } from 'react';

const AMENITIES = ['WiFi', 'Kitchen', 'Washer', 'Parking', 'Air conditioning', 'Heating', 'Workspace'];
const LANGUAGES = ['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Japanese'];

export default function SearchFilters({ filters, onChange }) {
  const [local, setLocal] = useState(filters);

  useEffect(() => setLocal(filters), [filters]);

  const update = (patch) => {
    const next = { ...local, ...patch };
    setLocal(next);
    onChange(next);
  };

  const toggleAmenity = (a) => {
    const has = local.amenities.includes(a);
    update({ amenities: has ? local.amenities.filter(x => x !== a) : [...local.amenities, a] });
  };

  return (
    <form className="bg-white rounded-xl border border-neutral-200 shadow-sm p-4 sm:p-6" aria-describedby="filter-help" onSubmit={(e)=>e.preventDefault()}>
      <p id="filter-help" className="sr-only">Use the filters to narrow your search by location, dates, price, amenities, and languages.</p>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="md:col-span-2">
          <label htmlFor="location" className="block text-sm font-medium text-neutral-800">Location</label>
          <input id="location" type="text" value={local.location} onChange={(e)=>update({location: e.target.value})} placeholder="City, region, or country" className="mt-1 w-full rounded-md border-neutral-300 focus:border-[#F26419] focus:ring-[#F26419]" />
        </div>
        <div>
          <label htmlFor="start" className="block text-sm font-medium text-neutral-800">Check-in</label>
          <input id="start" type="date" value={local.startDate} onChange={(e)=>update({startDate: e.target.value})} className="mt-1 w-full rounded-md border-neutral-300 focus:border-[#F26419] focus:ring-[#F26419]" />
        </div>
        <div>
          <label htmlFor="end" className="block text-sm font-medium text-neutral-800">Check-out</label>
          <input id="end" type="date" value={local.endDate} onChange={(e)=>update({endDate: e.target.value})} className="mt-1 w-full rounded-md border-neutral-300 focus:border-[#F26419] focus:ring-[#F26419]" />
        </div>
        <div>
          <label htmlFor="priceMin" className="block text-sm font-medium text-neutral-800">Min price</label>
          <input id="priceMin" type="number" min={0} value={local.priceMin} onChange={(e)=>update({priceMin: Number(e.target.value)})} className="mt-1 w-full rounded-md border-neutral-300 focus:border-[#F26419] focus:ring-[#F26419]" />
        </div>
        <div>
          <label htmlFor="priceMax" className="block text-sm font-medium text-neutral-800">Max price</label>
          <input id="priceMax" type="number" min={0} value={local.priceMax} onChange={(e)=>update({priceMax: Number(e.target.value)})} className="mt-1 w-full rounded-md border-neutral-300 focus:border-[#F26419] focus:ring-[#F26419]" />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <fieldset>
          <legend className="text-sm font-medium text-neutral-800">Amenities</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {AMENITIES.map((a) => (
              <label key={a} className="inline-flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded text-[#F26419] focus:ring-[#F26419]" checked={local.amenities.includes(a)} onChange={()=>toggleAmenity(a)} />
                <span>{a}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="md:col-span-2">
          <label htmlFor="language" className="block text-sm font-medium text-neutral-800">Host language</label>
          <select id="language" value={local.language} onChange={(e)=>update({language: e.target.value})} className="mt-1 w-full rounded-md border-neutral-300 focus:border-[#F26419] focus:ring-[#F26419]">
            <option value="">Any</option>
            {LANGUAGES.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-end gap-3">
        <button type="button" onClick={()=>onChange({ location: '', priceMin: 0, priceMax: 1000, startDate: '', endDate: '', amenities: [], language: '' })} className="px-4 py-2 rounded-md border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F26419]">Clear</button>
        <button type="submit" className="px-4 py-2 rounded-md bg-[#F26419] text-white font-medium shadow hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F26419]">Apply filters</button>
      </div>
    </form>
  );
}
