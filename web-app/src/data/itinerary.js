export const days = [
  {
    id: 'mar20',
    title: 'Friday, March 20',
    subtitle: 'Arrival & Acclimation — Tokyo',
    city: 'tokyo',
    items: [
      { time: '9:05 PM', text: 'Andrew & Megan arrive at Haneda Airport — UA7911 (ANA) from Chicago ORD. (Conf: IER3BW)', type: 'default' },
      { text: 'Transit: Keikyu Airport Line → Shimbashi → Ginza Line → Akasaka-Mitsuke (~45 min) OR taxi.', type: 'default' },
      { text: 'Check into APA Hotel Akasaka-Mitsuke.', type: 'default', details: ['Conf: 260310022480'] },
      { text: 'The Mission: Walk to a conbini, grab a light meal, stay awake until 10 PM or midnight. No naps.', type: 'note' },
    ],
  },
  {
    id: 'mar21',
    title: 'Saturday, March 21',
    subtitle: 'Tokyo Day 1 — The Collision',
    city: 'tokyo',
    items: [
      { time: '4:50 AM', text: 'Cole, Dagen, Mason, Jasmin, and Ryan arrive at Haneda Airport (UA7914).', type: 'default' },
      { time: '7:00 AM', text: 'Andrew & Megan: Check out of Akasaka hotel, leave bags with front desk. Grab coffee and explore.', type: 'default' },
      { time: '1:00 PM', text: 'Andrew & Megan: Transit to Omotesando.', type: 'default' },
      { time: '2:15 PM', text: 'Arrive at Nicolai Bergmann Flagship Store. Coffee at Nomad Cafe.', type: 'default' },
      { time: '2:30–4:30 PM', text: 'The Floral Workshop (Andrew & Megan)', type: 'must-do', details: ['Check-in: メーガン (Me-gan) / スコット (Su-kotto)'] },
      { text: 'Everyone regroups. Grab bags from Akasaka. Check into Airbnb: 17-16 Minamimotomachi (Shinjuku).', type: 'default' },
    ],
  },
  {
    id: 'mar22',
    title: 'Sunday, March 22',
    subtitle: 'Tokyo Day 2 — Sightseeing',
    city: 'tokyo',
    items: [
      { time: 'Early AM', text: 'Tsukiji Outer Market — Sushi Breakfast.', type: 'default' },
      { text: 'teamLab Borderless (Azabudai Hills) or Artizon Museum.', type: 'default' },
      { text: 'Optional: Yomiuri Giants vs. Tohoku Golden Eagles Spring Training at Tokyo Dome.', type: 'note' },
      {
        time: '6:30 PM',
        text: 'Sushi Hana (鮨華) — Omakase Dinner',
        type: 'reservation',
        details: ['Everyone except Ryan (6 people)', '¥13,000/person', 'Conf: H72M6AXFSP'],
      },
      {
        text: 'The "Cyberpunk" Night Out — Tokyu Kabukicho Tower',
        type: 'must-do',
        details: ['Drinks at Kabuki-Yokocho (Level 2)', 'Games at Namco Tokyo (Level 3)'],
      },
      { text: 'Shinjuku Golden-Gai — Bar hopping.', type: 'default' },
    ],
  },
  {
    id: 'mar23',
    title: 'Monday, March 23',
    subtitle: 'Tokyo Day 3 — The Split',
    city: 'tokyo',
    items: [
      {
        time: '9:30 AM',
        text: 'The Woodworking Pilgrimage — Inoue Hamono (Sumida City)',
        type: 'must-do',
        details: ['Andrew & Megan', 'Buy a chisel, meet Mr. Inoue', 'Everyone else: Yoyogi Park / Meiji Jingu'],
      },
      { time: '12:00–1:00 PM', text: 'Train to Harajuku (~45 min) — everyone meets up for lunch/shopping.', type: 'default' },
      { text: '21_21 Design Sight (Roppongi).', type: 'default' },
      {
        time: '7:00 PM',
        text: 'WAKANUI GRILL DINING BAR TOKYO',
        type: 'reservation',
        details: ['Everyone (7 people)', 'Steakhouse with Tokyo Tower views', 'Conf: ZEG3JS'],
      },
    ],
  },
  {
    id: 'mar24',
    title: 'Tuesday, March 24',
    subtitle: 'Tokyo → Fuji',
    city: 'fuji',
    items: [
      { text: 'Check out of Airbnb.', type: 'default' },
      { time: '1:30–3:53 PM', text: 'Train from Shinjuku to Fujikawaguchiko.', type: 'default' },
      { text: 'Check into rental house: 1910-1 Nagahama.', type: 'default', details: ['Conf: HMY5RRK3J9'] },
      { text: 'Relax, enjoy Mt. Fuji views, Onsen, Laundry.', type: 'default' },
    ],
  },
  {
    id: 'mar25',
    title: 'Wednesday, March 25',
    subtitle: 'Fuji → Kyoto',
    city: 'kyoto',
    items: [
      { text: 'Check out of Fuji rental.', type: 'default' },
      { time: '9:55 AM', text: 'Train: Fujikawaguchiko → Mishima (arrive 11:35 AM).', type: 'default' },
      { time: '11:55 AM', text: 'Shinkansen: Mishima → Kyoto (arrive 2:34 PM).', type: 'default' },
      { text: 'Check into hotels.', type: 'default', details: ['Andrew & Megan: Genji Kyoto', 'Cole, Dagen, Mason, Jasmin: Shimogyo Ward', 'Ryan: Rihga Royal Hotel'] },
      { text: 'Evening: Explore Gion district.', type: 'default' },
    ],
  },
  {
    id: 'mar26',
    title: 'Thursday, March 26',
    subtitle: 'Kyoto Day 2 — Temples & Michelin',
    city: 'kyoto',
    items: [
      { time: '6:00–7:00 AM', text: 'Fushimi Inari Taisha — Beat the crowds.', type: 'default' },
      { text: 'Lunch: Nishiki Market.', type: 'default' },
      { text: 'Afternoon: Nijo Castle.', type: 'default' },
      {
        time: '6:00 PM',
        text: 'Hassun (Gion) — Kaiseki Dinner',
        type: 'must-do',
        details: ['Andrew & Megan only', 'Smart casual. No cologne. Be on time.'],
      },
      { text: "Bee's Knees (Cocktail Lounge).", type: 'default' },
    ],
  },
  {
    id: 'mar27',
    title: 'Friday, March 27',
    subtitle: 'The Himeji Sprint → Hiroshima',
    city: 'hiroshima',
    items: [
      { text: 'CRITICAL: Ship luggage from Kyoto to Hiroshima via Yamato Transport (Kuroneko). Day pack only.', type: 'note' },
      { time: '8:01 AM', text: 'Shinkansen: Kyoto → Himeji.', type: 'default' },
      { time: '9:00 AM–12:30 PM', text: 'Tour Himeji Castle.', type: 'default' },
      { time: '1:46 PM', text: 'Train: Himeji → Hiroshima.', type: 'default' },
      { text: 'Hiroshima Peace Memorial Museum.', type: 'default' },
      {
        text: 'The "Food Theme Park" — Okonomimura',
        type: 'must-do',
        details: ['3rd floor. Pick a loud stall. Order "Hiroshima Style."'],
      },
      { text: 'Check into hotels.', type: 'default', details: ['FAV HOTEL Hiroshima Heiwaodori', 'Ryan: Oriental Hotel Hiroshima'] },
    ],
  },
  {
    id: 'mar28',
    title: 'Saturday, March 28',
    subtitle: 'Hiroshima → Osaka',
    city: 'osaka',
    items: [
      { time: '9:07 AM', text: 'Train: Hiroshima → Osaka.', type: 'default' },
      { text: 'Check into KOKO HOTEL Osaka Namba Sennichimae.', type: 'default' },
      { text: 'Osaka Aquarium Kaiyukan and/or Umeda Sky Building.', type: 'default' },
      { text: 'Evening: Dotonbori (Neon entertainment district).', type: 'default' },
    ],
  },
  {
    id: 'mar29',
    title: 'Sunday, March 29',
    subtitle: 'Departure — Osaka → Home',
    city: 'osaka',
    items: [
      { text: 'Morning: Osaka Castle.', type: 'default' },
      { text: 'Transit to Osaka Itami Airport (ITM).', type: 'default' },
      { time: '12:55 PM', text: 'UA8005 (ANA): Osaka ITM → Tokyo HND (arrive 2:10 PM).', type: 'default', details: ['Andrew, Megan, Cole, Mason, Dagen'] },
      { time: '5:15 PM', text: 'UA882: Tokyo HND → Chicago ORD (arrive 3:15 PM same day).', type: 'default' },
    ],
  },
]

export const warnings = [
  {
    title: 'Luggage at Himeji',
    text: 'Ship your large bags from Kyoto to Hiroshima the day before (Mar 27). Coin lockers at Himeji Station will be full during Cherry Blossom season.',
  },
  {
    title: 'Cherry Blossom Timing',
    text: "You'll hit the start of the season. Add Shinjuku Gyoen (Tokyo) and Maruyama Park (Kyoto) to walking routes for early-blooming weeping cherry trees.",
  },
  {
    title: 'Oversized Baggage Seats',
    text: 'Reserve the "Oversized Baggage" seats at the back of Shinkansen cars if bringing large suitcases. Luggage forwarding makes this a non-issue.',
  },
]
