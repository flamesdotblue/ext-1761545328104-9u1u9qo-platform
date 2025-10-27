export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-neutral-900 font-semibold">Haven Homestays</h3>
          <p className="mt-2 text-sm text-neutral-700">Thoughtfully curated homestays with local hosts. Book with confidence and feel at home anywhere.</p>
        </div>
        <div>
          <h4 className="text-neutral-900 font-semibold">Explore</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#search-section" className="text-neutral-700 hover:text-neutral-900">Search</a></li>
            <li><a href="#featured-heading" className="text-neutral-700 hover:text-neutral-900">Featured</a></li>
            <li><a href="#become-host" className="text-neutral-700 hover:text-neutral-900">Become a host</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-neutral-900 font-semibold">Support</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#about" className="text-neutral-700 hover:text-neutral-900">About us</a></li>
            <li><a href="#auth" className="text-neutral-700 hover:text-neutral-900">Account</a></li>
            <li><a href="#" className="text-neutral-700 hover:text-neutral-900">Privacy & Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-4 text-center text-sm text-neutral-600">© {new Date().getFullYear()} Haven Homestays. All rights reserved.</div>
    </footer>
  );
}
