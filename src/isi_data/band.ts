export const band = {
  name: "Pussy Destroyer",

  tagline: "Brutality • Chaos • Sonic Violence",

  genre: ["Brutal Death Metal", "Deathcore", "Blackened Death"],

  formed: 2024,

  origin: {
    city: "Jakarta Timur",
    country: "Indonesia",
  },

  label: "Independent",

  description: `
Pussy Destroyer is an extreme metal band forged in brutality,
combining elements of brutal death metal, deathcore, and blackened atmosphere.
Their sound architecture focuses on relentless breakdowns,
ferocious blast beats, and suffocating low-end guitar tone.

Each composition is built to feel oppressive dense, cold, and unyielding.
There is no space for comfort, only pressure and decay.
The music does not aim to entertain, but to confront.

The band’s philosophy centers around sonic violence,
dark aesthetics, and apocalyptic lyrical themes.
It explores the collapse of meaning, the distortion of identity,
and the quiet inevitability of destruction.

On stage, the presence is minimal but intense
no theatrics, no excess, only sound and weight.
Every performance is a controlled descent into chaos.

This is not just a band.
It is a manifestation of noise, tension, and absence.
`,

  philosophy: {
    themes: [
      "Violence",
      "Human corruption",
      "Existential horror",
      "Apocalyptic destruction",
      "Anti-dogma",
    ],

    visualStyle: ["Dark", "Grunge", "Ritualistic", "Grotesque"],
  },

  members: [
    {
      id: 1,
      name: "Ragnar Vortex",
      role: "Vocals",

      gear: {
        microphone: "Shure SM7B",
        effect: "Death Growl Processor",
      },

      joined: 2021,

      bio: `
Founder and primary lyricist.
Known for his cavernous guttural vocals
and violent stage presence.
      `,

      socials: {
        instagram: "https://instagram.com/",
        twitter: "https://twitter.com/",
      },
    },

    {
      id: 2,
      name: "Skorn Maledict",
      role: "Lead Guitar",

      gear: {
        guitar: "Ibanez RG",
        amp: "Mesa Boogie Dual Rectifier",
        pedals: ["Fortin Grind", "Horizon Precision Drive"],
      },

      joined: 2021,

      bio: `
Responsible for the band's crushing riff structures
and dissonant tremolo sections.
      `,
    },

    {
      id: 3,
      name: "Malthor Abyss",
      role: "Bass",

      gear: {
        bass: "Darkglass Alpha Omega",
        amp: "Darkglass Microtubes 900",
      },

      joined: 2022,

      bio: `
Provides the devastating low-end
that reinforces the band's sonic brutality.
      `,
    },

    {
      id: 4,
      name: "Vex Oblivion",
      role: "Drums",

      gear: {
        kit: "Tama Starclassic",
        cymbals: "Meinl",
        style: ["Blast Beat", "Gravity Blast", "Technical Double Kick"],
      },

      joined: 2021,

      bio: `
Known for machine-gun blast beats
and relentless tempo shifts.
      `,
    },
  ],

  discography: [
    {
      id: 1,
      title: "Carnal Annihilation",

      type: "EP",

      year: 2022,

      cover: "/albums/carnal-annihilation.jpg",

      tracks: [
        {
          title: "Flesh Dominion",
          duration: "3:42",
        },
        {
          title: "Obscene Ritual",
          duration: "4:01",
        },
        {
          title: "Carnal Annihilation",
          duration: "3:55",
        },
      ],

      streaming: {
        spotify: "https://spotify.com",
        youtube: "https://youtube.com",
        appleMusic: "https://music.apple.com",
      },
    },

    {
      id: 2,
      title: "Ritual of Ruin",

      type: "Album",

      year: 2024,

      cover: "/albums/ritual-of-ruin.jpg",

      tracks: [
        { title: "Blood Cathedral", duration: "4:20" },
        { title: "Infernal Dominion", duration: "3:58" },
        { title: "Devour the Flesh", duration: "4:40" },
        { title: "Ritual of Ruin", duration: "5:10" },
        { title: "Abyssal Collapse", duration: "3:32" },
      ],

      streaming: {
        spotify: "https://spotify.com",
        youtube: "https://youtube.com",
      },
    },
  ],

  tours: [
    {
      id: 1,

      tourName: "Ritual of Ruin Asia Tour",

      year: 2025,

      shows: [
        {
          city: "Jakarta",
          venue: "Hard Rock Cafe",
          date: "2025-04-18",
        },
        {
          city: "Bandung",
          venue: "Hall of Doom",
          date: "2025-04-20",
        },
        {
          city: "Kuala Lumpur",
          venue: "Blackbox KL",
          date: "2025-04-26",
        },
      ],
    },
  ],

  media: {
    gallery: ["/media/band1.jpg", "/media/band2.jpg", "/media/band3.jpg"],

    videos: [
      {
        title: "Carnal Annihilation (Official Video)",
        youtubeId: "xxxxxxxx",
      },
      {
        title: "Live at Hellfest",
        youtubeId: "xxxxxxxx",
      },
    ],
  },

  streamingStats: {
    spotifyMonthlyListeners: 120000,

    topCities: ["Jakarta", "Berlin", "Los Angeles", "Tokyo"],

    topTracks: ["Flesh Dominion", "Infernal Dominion", "Blood Cathedral"],
  },

  socials: {
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    spotify: "https://spotify.com/",
    bandcamp: "https://bandcamp.com/",
  },

  merchandise: [
    {
      id: 1,
      name: "Ritual of Ruin T-Shirt",
      price: 25,
      image: "/merch/shirt1.jpg",
    },
    {
      id: 2,
      name: "Carnal Annihilation Hoodie",
      price: 45,
      image: "/merch/hoodie1.jpg",
    },
  ],

  setlist: [
    "Flesh Dominion",
    "Carnal Annihilation",
    "Infernal Dominion",
    "Blood Cathedral",
    "Devour the Flesh",
  ],
};
