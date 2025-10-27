import Spline from '@splinetool/react-spline';

export default function Hero({ onCTAClick }) {
  return (
    <section aria-label="Intro" className="relative min-h-[68vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-black/30 to-neutral-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex flex-col items-start justify-end h-full">
        <div className="backdrop-blur-sm bg-white/70 rounded-lg p-5 sm:p-8 shadow-lg max-w-2xl">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900">Find your next stay, feel at home</h1>
          <p className="mt-3 text-neutral-700 text-base sm:text-lg">Discover welcoming homestays around the world. Thoughtfully curated spaces hosted by friendly locals.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={onCTAClick} className="inline-flex items-center px-5 py-3 rounded-md bg-[#F26419] text-white font-medium shadow hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F26419]">Start searching</button>
            <a href="#featured-heading" className="inline-flex items-center px-5 py-3 rounded-md border border-neutral-300 bg-white text-neutral-900 font-medium hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F26419]">Browse featured</a>
          </div>
        </div>
      </div>
    </section>
  );
}
