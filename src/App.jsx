import { useMemo, useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import SearchFilters from './components/SearchFilters';
import FeaturedHomestays from './components/FeaturedHomestays';
import ListingModal from './components/ListingModal';
import Footer from './components/Footer';
import homestaysData from './data/homestays';

export default function App() {
  const [filters, setFilters] = useState({
    location: '',
    priceMin: 0,
    priceMax: 1000,
    startDate: '',
    endDate: '',
    amenities: [],
    language: '',
  });
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filtered = useMemo(() => {
    return homestaysData.filter((h) => {
      const inLocation = filters.location
        ? (h.location.city + ' ' + h.location.country).toLowerCase().includes(filters.location.toLowerCase())
        : true;
      const inPrice = h.pricePerNight >= filters.priceMin && h.pricePerNight <= filters.priceMax;
      const inLanguage = filters.language ? h.host.languages.map((l)=>l.toLowerCase()).includes(filters.language.toLowerCase()) : true;
      const hasAmenities = filters.amenities.length
        ? filters.amenities.every((a) => h.amenities.includes(a))
        : true;
      // Simple availability check placeholder: if dates selected, assume available unless homestay.unavailable overlaps
      const available = (() => {
        if (!filters.startDate || !filters.endDate) return true;
        const start = new Date(filters.startDate);
        const end = new Date(filters.endDate);
        return !h.unavailable.some((range) => {
          const rStart = new Date(range.start);
          const rEnd = new Date(range.end);
          return start <= rEnd && end >= rStart;
        });
      })();
      return inLocation && inPrice && inLanguage && hasAmenities && available;
    });
  }, [filters]);

  const handleView = (home, intent) => {
    setSelected({ ...home, intent });
    setShowModal(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900">
      <NavBar onSearchClick={() => {
        const el = document.getElementById('search-section');
        el?.scrollIntoView({ behavior: 'smooth' });
      }} />
      <main id="content" className="flex-1">
        <Hero onCTAClick={() => {
          const el = document.getElementById('search-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }} />
        <section id="search-section" aria-labelledby="search-heading" className="px-4 sm:px-6 lg:px-8 py-8">
          <h2 id="search-heading" className="sr-only">Search homestays</h2>
          <SearchFilters filters={filters} onChange={setFilters} />
        </section>
        <section aria-labelledby="featured-heading" className="px-4 sm:px-6 lg:px-8 pb-16">
          <h2 id="featured-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 mb-6">Featured homestays</h2>
          <FeaturedHomestays homestays={filtered} onView={handleView} />
        </section>
      </main>
      <Footer />
      <ListingModal open={showModal} onClose={() => setShowModal(false)} homestay={selected} />
    </div>
  );
}
