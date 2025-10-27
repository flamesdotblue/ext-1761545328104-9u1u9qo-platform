import { Home, Search, User, Plus } from 'lucide-react';

export default function NavBar({ onSearchClick }) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200" role="banner">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div className="flex items-center justify-between h-16">
          <a href="#content" className="flex items-center gap-2 text-neutral-900 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F26419] rounded">
            <Home className="h-5 w-5 text-[#F26419]" aria-hidden="true" />
            <span>Haven Homestays</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={onSearchClick} className="text-sm text-neutral-700 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F26419] rounded inline-flex items-center gap-2">
              <Search className="h-4 w-4" aria-hidden="true" />
              Search
            </button>
            <a href="#about" className="text-sm text-neutral-700 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F26419] rounded">About</a>
            <a href="#become-host" className="text-sm text-neutral-700 hover:text-neutral-900 inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F26419] rounded">
              <Plus className="h-4 w-4" aria-hidden="true" /> Become a host
            </a>
            <a href="#auth" className="text-sm text-neutral-700 hover:text-neutral-900 inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F26419] rounded">
              <User className="h-4 w-4" aria-hidden="true" /> Login / Signup
            </a>
            <a href="#search-section" className="ml-4 inline-flex items-center px-4 py-2 rounded-md bg-[#F26419] text-white text-sm font-medium shadow hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F26419]">Book now</a>
          </div>
          <div className="md:hidden">
            <button onClick={onSearchClick} aria-label="Search" className="p-2 rounded-md text-neutral-700 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F26419]">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
