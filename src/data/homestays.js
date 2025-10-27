const homestays = [
  {
    id: 'alpine-nest',
    title: 'Alpine Nest Retreat',
    category: 'Mountain',
    summary: 'Cozy timber chalet with sweeping alpine views and a crackling fireplace.',
    description:
      'Nestled on a quiet ridge, the Alpine Nest offers panoramic mountain vistas, a slow-burning fireplace, and a fully equipped kitchen. Thoughtful touches and warm wood interiors make this a perfect escape for couples or small families.',
    location: { city: 'Zermatt', country: 'Switzerland' },
    pricePerNight: 210,
    maxGuests: 4,
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1465628976988-fe43bda15798?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1200&auto=format&fit=crop'
    ],
    amenities: ['WiFi', 'Kitchen', 'Washer', 'Heating', 'Parking'],
    host: { name: 'Lina', languages: ['English', 'German'] },
    rating: 4.8,
    reviews: [
      { author: 'Marco', date: 'Aug 2024', text: 'The view is breathtaking and the host is wonderful.' },
      { author: 'Elena', date: 'Sep 2024', text: 'Super clean, cozy, and close to hiking trails.' }
    ],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2725.988938822586!2d7.745!3d46.0207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478f33e1c0b9d79f%3A0x3fd5c9!2sZermatt!5e0!3m2!1sen!2sch!4v1700000000000',
    unavailable: [{ start: '2025-12-20', end: '2026-01-04' }]
  },
  {
    id: 'coastal-casa',
    title: 'Coastal Casa',
    category: 'Beach',
    summary: 'Sunlit beachfront apartment steps from the ocean with a breezy balcony.',
    description:
      'Wake up to the sound of waves at Coastal Casa. This airy, minimalist apartment features a private balcony, stocked kitchen, and fast WiFi. Cafés and surf spots are a short walk away.',
    location: { city: 'Lisbon', country: 'Portugal' },
    pricePerNight: 165,
    maxGuests: 3,
    images: [
      'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d52?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523217582562-86d0def993a8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1527030280862-64139fba04ca?q=80&w=1200&auto=format&fit=crop'
    ],
    amenities: ['WiFi', 'Kitchen', 'Air conditioning', 'Workspace'],
    host: { name: 'Tiago', languages: ['Portuguese', 'English', 'Spanish'] },
    rating: 4.7,
    reviews: [
      { author: 'Sophie', date: 'Jul 2024', text: 'Perfect location and stylish interior. Loved the balcony!' },
      { author: 'Jon', date: 'Oct 2024', text: 'Fast WiFi and great coffee shops nearby.' }
    ],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.362!2d-9.149!3d38.7223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61ed9bff%3A0x400ebbde49036d0!2sLisbon!5e0!3m2!1sen!2spt!4v1700000000001',
    unavailable: [{ start: '2025-08-01', end: '2025-08-10' }]
  },
  {
    id: 'urban-loft',
    title: 'Scandi Urban Loft',
    category: 'City',
    summary: 'Minimal, bright loft in the creative district with coffee and galleries nearby.',
    description:
      'A thoughtfully designed loft with Montserrat headings and Open Sans body feel—clean lines, plenty of light, and everything you need for a comfortable city stay.',
    location: { city: 'Copenhagen', country: 'Denmark' },
    pricePerNight: 180,
    maxGuests: 2,
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?q=80&w=1200&auto=format&fit=crop'
    ],
    amenities: ['WiFi', 'Kitchen', 'Washer', 'Heating', 'Workspace', 'Parking'],
    host: { name: 'Anna', languages: ['Danish', 'English', 'German'] },
    rating: 4.9,
    reviews: [
      { author: 'Priya', date: 'Nov 2024', text: 'Immaculate and perfectly located. Host was very accommodating.' },
      { author: 'Leo', date: 'Dec 2024', text: 'Beautiful design and quiet at night.' }
    ],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.933!2d12.5683!3d55.6761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652530f0dfb1b5d%3A0x5!2sCopenhagen!5e0!3m2!1sen!2sdk!4v1700000000002',
    unavailable: []
  }
];

export default homestays;
