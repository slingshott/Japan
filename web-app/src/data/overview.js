export const bigPicture = {
  text: '10 days across Japan, March 19–29, 2026. Andrew and Megan arrive a day early (Friday), the rest of the crew lands Saturday morning. Everyone moves west together over the week and flies home from Osaka on March 29.',
  route: 'Tokyo (3 nights) → Fuji (1 night) → Kyoto (2 nights) → Hiroshima (1 night) → Osaka (1 night)',
}

export const flights = [
  { leg: 'Andrew & Megan — Out', flight: 'UA7911 (ANA)', date: 'Thu Mar 19 → Fri Mar 20', depart: '5:25 PM — Chicago ORD', arrive: '9:05 PM — Tokyo HND' },
  { leg: 'Group — Out', flight: 'UA7914 (ANA)', date: 'Fri Mar 20 → Sat Mar 21', depart: '1:20 AM — San Francisco SFO', arrive: '4:50 AM — Tokyo HND' },
  { leg: 'Return Leg 1', flight: 'UA8005 (ANA)', date: 'Sun Mar 29', depart: '12:55 PM — Osaka ITM', arrive: '2:10 PM — Tokyo HND' },
  { leg: 'Return Leg 2', flight: 'UA882', date: 'Sun Mar 29', depart: '5:15 PM — Tokyo HND', arrive: '3:15 PM — Chicago ORD' },
]

export const flightNotes = [
  'Andrew & Megan confirmation: IER3BW',
  'Return leg 1 passengers: Andrew, Megan, Cole, Mason, Dagen',
  'Check-in at ANA counter (flights operated by All Nippon Airways)',
  'March 29: Leave Osaka early. 12:55 PM Itami flight → ~3hr layover at Haneda → 5:15 PM international departure',
]

export const people = [
  { name: 'Andrew', notes: 'Arrives Fri Mar 20 @ 9:05 PM' },
  { name: 'Megan', notes: 'Arrives Fri Mar 20 @ 9:05 PM' },
  { name: 'Cole', notes: 'Arrives Sat Mar 21 @ 4:50 AM' },
  { name: 'Dagen', notes: 'Arrives Sat Mar 21 @ 4:50 AM' },
  { name: 'Mason', notes: 'Arrives Sat Mar 21 @ 4:50 AM' },
  { name: 'Jasmin', notes: 'Arrives Sat Mar 21 @ 4:50 AM' },
  { name: 'Ryan', notes: 'Arrives Sat Mar 21 @ 4:50 AM. Has separate rooms.' },
]

export const accommodations = [
  { dates: 'Mar 20', location: 'Tokyo (Akasaka)', stay: 'APA Hotel Akasaka-Mitsuke', conf: '260310022480', who: 'Andrew & Megan' },
  { dates: 'Mar 21-23', location: 'Tokyo (Shinjuku)', stay: '17-16 Minamimotomachi Airbnb', conf: 'HMPS9DSHZK', who: 'Everyone except Ryan' },
  { dates: 'Mar 21-23', location: 'Tokyo (Akasaka)', stay: 'Hotel Risveglio Akasaka', conf: '3285192339', who: 'Ryan' },
  { dates: 'Mar 24', location: 'Fuji', stay: '1910-1 Nagahama', conf: 'HMY5RRK3J9', who: 'Everyone' },
  { dates: 'Mar 25-26', location: 'Kyoto', stay: 'Genji Kyoto', conf: '', who: 'Andrew & Megan' },
  { dates: 'Mar 25-26', location: 'Kyoto', stay: 'Shimogyo Ward, Higashichō 260-4', conf: 'HMCTSTCZT4', who: 'Cole, Dagen, Mason, Jasmin' },
  { dates: 'Mar 25-26', location: 'Kyoto', stay: 'Rihga Royal Hotel Kyoto', conf: '73390707369876', who: 'Ryan' },
  { dates: 'Mar 27', location: 'Hiroshima', stay: 'FAV HOTEL Hiroshima Heiwaodori', conf: 'T0E450B26749E', who: 'Everyone except Ryan' },
  { dates: 'Mar 27', location: 'Hiroshima', stay: 'Oriental Hotel Hiroshima', conf: '1658110030264807', who: 'Ryan' },
  { dates: 'Mar 28', location: 'Osaka', stay: 'KOKO HOTEL Osaka Namba Sennichimae', conf: '6610207902', who: 'Everyone' },
]

export const restaurants = [
  { day: 'Sun Mar 22', name: 'Sushi Hana (鮨華)', time: '6:30 PM', party: 'Everyone except Ryan (6)', notes: 'Omakase, ¥13,000/person', conf: 'H72M6AXFSP' },
  { day: 'Mon Mar 23', name: 'WAKANUI GRILL DINING BAR', time: '7:00 PM', party: 'Everyone (7)', notes: 'Steakhouse, Tokyo Tower views', conf: 'ZEG3JS' },
  { day: 'Thu Mar 26', name: 'Hassun (Gion)', time: '6:00 PM', party: 'Andrew & Megan (2)', notes: 'Kaiseki. Smart casual, no cologne.' },
]

export const mustDos = [
  { num: 1, what: 'Floral Workshop (Nicolai Bergmann)', where: 'Tokyo (Omotesando)', when: 'Sat Mar 21, 2:30 PM', who: 'Andrew & Megan' },
  { num: 2, what: 'Cyberpunk Night Out (Kabukicho Tower)', where: 'Tokyo (Shinjuku)', when: 'Sun Mar 22, Evening', who: null },
  { num: 3, what: 'Woodworking Pilgrimage (Inoue Hamono)', where: 'Tokyo (Sumida City)', when: 'Mon Mar 23, ~10 AM', who: 'Andrew & Megan' },
  { num: 4, what: 'Hassun Date Night', where: 'Kyoto (Gion)', when: 'Thu Mar 26, 6 PM', who: 'Andrew & Megan' },
  { num: 5, what: 'Okonomimura "Food Theme Park"', where: 'Hiroshima', when: 'Fri Mar 27, Dinner', who: null },
]

export const trains = [
  { date: 'Mar 24', route: 'Shinjuku → Fujikawaguchiko', depart: '1:30 PM', arrive: '3:53 PM', bookedBy: 'Jasmin (6) + Ryan (1)' },
  { date: 'Mar 25', route: 'Fujikawaguchiko → Mishima', depart: '9:55 AM', arrive: '11:35 AM', bookedBy: 'Cole (7)' },
  { date: 'Mar 25', route: 'Mishima → Kyoto', depart: '11:55 AM', arrive: '2:34 PM', bookedBy: 'Cole (7)' },
  { date: 'Mar 27', route: 'Kyoto → Himeji', depart: '8:01 AM', arrive: '8:49 AM', bookedBy: 'Jasmin (7)' },
  { date: 'Mar 27', route: 'Himeji → Hiroshima', depart: '1:46 PM', arrive: '2:42 PM', bookedBy: 'Cole (7)' },
  { date: 'Mar 28', route: 'Hiroshima → Osaka', depart: '9:07 AM', arrive: '10:28 AM', bookedBy: 'Cole (7)' },
]

export const weather = [
  { location: 'Tokyo', dates: 'Mar 20-24', highs: '13-16°C (55-61°F)', lows: '5-8°C (41-46°F)', notes: 'Comfortable with layers.' },
  { location: 'Fujikawaguchiko', dates: 'Mar 24-25', highs: '~9°C (48°F)', lows: '~0°C (32°F)', notes: 'The cold one. Near-freezing at night.' },
  { location: 'Kyoto', dates: 'Mar 25-27', highs: '13-15°C (55-59°F)', lows: '4-7°C (39-45°F)', notes: 'Early mornings at Fushimi Inari will be cold.' },
  { location: 'Hiroshima', dates: 'Mar 27-28', highs: '14-16°C (57-61°F)', lows: '6-8°C (43-46°F)', notes: 'Slightly warmer.' },
  { location: 'Osaka', dates: 'Mar 28-29', highs: '14-16°C (57-61°F)', lows: '6-8°C (43-46°F)', notes: 'Slightly warmer.' },
]

export const etiquette = [
  {
    category: 'The Big Rules',
    rules: [
      'No tipping. Ever. Not at restaurants, hotels, taxis, or bars.',
      'No eating or drinking while walking. Finish at the stall or stand aside.',
      'No phone calls on trains. Silent mode (manner mode). Texting is fine.',
      'Keep voices low on public transit.',
      'Carry your trash. Public bins barely exist.',
    ],
  },
  {
    category: 'Shoes',
    rules: [
      'Remove shoes when entering homes, ryokans, some restaurants, temples, fitting rooms.',
      'Wear clean, presentable socks — you\'ll take shoes on/off constantly.',
      'Some places have toilet slippers. Use them. Don\'t forget to switch back.',
    ],
  },
  {
    category: 'Temples & Shrines',
    rules: [
      'Bow slightly before entering a torii gate. Walk to the side, not the center.',
      'Purification fountain: Rinse left hand, right hand, then mouth (from left hand). Don\'t drink from the ladle.',
      'Photos usually fine outside. Check signs inside.',
      'Hats off inside temple buildings.',
    ],
  },
  {
    category: 'Restaurants & Dining',
    rules: [
      '"Itadakimasu" (いただきます) before eating. "Gochisousama deshita" (ごちそうさまでした) when leaving.',
      'Never stick chopsticks upright in rice (funeral ritual).',
      'Never pass food chopstick-to-chopstick (also funeral ritual).',
      'Slurping noodles is encouraged — it means you\'re enjoying it.',
      'Pour drinks for others before yourself.',
      'Hassun: No cologne or perfume. Kaiseki is about the food\'s aroma.',
    ],
  },
  {
    category: 'Onsen (Hot Springs)',
    rules: [
      'You go in naked. No swimsuits.',
      'Wash thoroughly at shower stations before entering the bath.',
      'Small towel: bring it but don\'t let it touch the water. Fold on head.',
      'Tattoos: some onsen prohibit them. Check in advance.',
      'No phones. Leave them in the locker.',
    ],
  },
  {
    category: 'General',
    rules: [
      'Use both hands when giving or receiving money, cards, or items.',
      'Lines are sacred. Never cut. Platforms have marked queuing spots.',
      'Escalators: stand left in Tokyo, stand right in Osaka.',
      'Point with your whole hand (palm up), not a single finger.',
      '7-Eleven / Lawson / FamilyMart ATMs accept foreign cards.',
    ],
  },
]
