export const THRESHOLDS = {
location: 50,
  genderPreference: 50,
indoorOutdoor: 50,
  creativePractical: 50,
workAlone: 50,
  technology: 50,
animals: 50,
};

export const CRITERIA_NAMES = {
location: "Living Location",
  genderPreference: "Job Gender Preference", 
indoorOutdoor: "Indoor vs Outdoor Work",
  creativePractical: "Creative vs Practical Work",
workAlone: "Working with People",
  technology: "Technology Preference",
animals: "Working with Animals/Nature",
};

export const INITIAL_DATA = {
location: 0,
  genderPreference: 50,
indoorOutdoor: 50,
  creativePractical: 50,
workAlone: 50,
  technology: 50,
animals: 50,
};

export const LOCATION_OPTIONS = [
{ value: 25, label: "In a City / Big Town" },
  { value: 50, label: "Somewhat Urban" },
{ value: 75, label: "Somewhat Rural" },
  { value: 100, label: "Very Rural (Village)" }
];

export const SCREEN_CONFIG = [
  {
    title: "Living & Gender",
    isLast: false,
    criteria: [
      {
        key: "location",
        name: "Where will you live?",
        type: "location",
        description: "",
        cardTitle: "LOCATION"
      },
      {
        key: "genderPreference",
        name: "Do you like very BOY-ish jobs, very GIRL-ish jobs, or something in between?",
        description: "",
        leftLabel: "Boy-ish jobs",
        rightLabel: "Girl-ish jobs",
        cardTitle: "GENDER PREFERENCE"
      }
    ]
},
    {
    title: "Environment",
    isLast: false,
criteria: [
            {
        key: "indoorOutdoor",
        name: "Do you prefer working Indoors OR Outdoors?",
        description: "",
        leftLabel: "Indoor work",
        rightLabel: "Outdoor work",
        cardTitle: "WORK ENVIRONMENT"
      },
      {
        key: "creativePractical",
        name: "Do you prefer working Creatively OR Practically with your hands?",
        description: "",
        leftLabel: "Creative work",
        rightLabel: "Practical work",
        cardTitle: "WORK STYLE"
      }
    ]
},
    {
    title: "Teamwork",
    isLast: false,
criteria: [
            {
        key: "workAlone",
        name: "Do you prefer a job where you work more alone or with lots of different people",
        description: "",
        leftLabel: "Work alone",
        rightLabel: "Work with many people",
        cardTitle: "TEAMWORK"
      }
]
  },
  {
    title: "Interests",
    isLast: true,
    criteria: [
            {
        key: "technology",
        name: "Do you prefer working with technology (advanced machines, or computers, etcetera) OR not so much?",
        description: "",
        leftLabel: "No technology",
        rightLabel: "Lots of technology",
        cardTitle: "TECHNOLOGY"
      },
      {
        key: "animals",
        name: "Do you like working with animals, plants/trees, nature OR not so much?",
        description: "",
        leftLabel: "No animals/plants",
        rightLabel: "Lots of animals/plants",
        cardTitle: "NATURE & ANIMALS"
      }
]
  }
];

export const JOB_COLLECTION = [
  {
    job: "Hairdresser / Barber",
    area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 2,
    c2: 3,
    c3: 4,
    c4: 2,
    c5: 1,
    boygirl: 4
  },
  {
    job: "Sell Vegetables/Fruits",
    area: "Semi-Urban, Somewhat-Rural, Very-Rural-Village",
    c1: 5,
    c2: 5,
    c3: 4,
    c4: 1,
    c5: 5,
    boygirl: 4
  },
  {
    job: "Drawing, Painting, Arts & Designs (incl Signboards)",
    area: "City-Center, Semi-Urban",
    c1: 2,
    c2: 1,
    c3: 2,
    c4: 1,
    c5: 1,
    boygirl: 3
  },
  {
    job: "Construction Work / Building / Plastering / Painting / Masonry etc",
    area: "City-Center, Semi-Urban",
    c1: 5,
    c2: 5,
    c3: 3,
    c4: 2,
    c5: 1,
    boygirl: 1
  },
  {
    job: "Solar power installation and maintenance",
    area: "City-Center, Semi-Urban",
    c1: 4,
    c2: 5,
    c3: 2,
    c4: 5,
    c5: 1,
    boygirl: 2
  },
  {
    job: "Carpentry",
    area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 4,
    c2: 4,
    c3: 2,
    c4: 2,
    c5: 1,
    boygirl: 2
  },
  {
    job: "Machine Motor Rewinding / Electric Motor Repair",
    area: "City-Center, Semi-Urban",
    c1: 2,
    c2: 5,
    c3: 2,
    c4: 4,
    c5: 1,
    boygirl: 1
  },
  {
    job: "Mobile Phone Repair",
    area: "City-Center, Semi-Urban",
    c1: 1,
    c2: 5,
    c3: 2,
    c4: 5,
    c5: 1,
    boygirl: 2
  },
  {
    job: "Professional Cleaner",
    area: "City-Center, Semi-Urban",
    c1: 1,
    c2: 5,
    c3: 2,
    c4: 2,
    c5: 1,
    boygirl: 4
  },
  {
    job: "High-Value Livestock Keeping / Animal Husbandry (for example, pigs)",
    area: "Semi-Urban, Somewhat-Rural, Very-Rural-Village",
    c1: 5,
    c2: 5,
    c3: 2,
    c4: 1,
    c5: 5,
    boygirl: 3
  },
  {
    job: "Welding & Gas Welding",
    area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 4,
    c2: 4,
    c3: 2,
    c4: 3,
    c5: 1,
    boygirl: 2
  },
  {
    job: "Embroidery",
    area: "City-Center, Semi-Urban",
    c1: 2,
    c2: 1,
    c3: 2,
    c4: 1,
    c5: 1,
    boygirl: 5
  },
  {
    job: "Shoe-Shining PRO",
    area: "City-Center",
    c1: 5,
    c2: 4,
    c3: 5,
    c4: 1,
    c5: 1,
    boygirl: 3
  },
  {
    job: "Horticulture (Plants, Trees, Gardens)",
    area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 5,
    c2: 3,
    c3: 3,
    c4: 1,
    c5: 5,
    boygirl: 3
  },
  {
    job: "Wedding & Event DECORATION",
    area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 2,
    c2: 1,
    c3: 4,
    c4: 1,
    c5: 1,
    boygirl: 3
  },
  {
    job: "High-quality Baking/Cakes Business",
    area: "City-Center, Semi-Urban",
    c1: 2,
    c2: 2,
    c3: 3,
    c4: 2,
    c5: 1,
    boygirl: 4
  },
  {
    job: "Car Body Repair",
    area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 4,
    c2: 5,
    c3: 2,
    c4: 2,
    c5: 1,
    boygirl: 1
  },
  {
    job: "Motorcycle or Bajaji mechanics / maintenance",
    area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 4,
    c2: 5,
    c3: 3,
    c4: 4,
    c5: 1,
    boygirl: 1
  },
  {
    job: "TV, Radio, and other Appliances - BASIC REPAIRS",
    area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 1,
    c2: 5,
    c3: 3,
    c4: 5,
    c5: 1,
    boygirl: 2
  },
  {
    job: "Batik Making / Textile Printing",
    area: "Semi-Urban, Somewhat-Rural",
    c1: 4,
    c2: 2,
    c3: 2,
    c4: 2,
    c5: 2,
    boygirl: 4
  },
  {
    job: "Graphic Design (& Digital Marketing)",
    area: "City-Center, Semi-Urban",
    c1: 1,
    c2: 1,
    c3: 2,
    c4: 5,
    c5: 1,
    boygirl: 3
  },
  {
    job: "Tailoring",
    area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 2,
    c2: 4,
    c3: 2,
    c4: 2,
    c5: 1,
    boygirl: 4
  },
  {
    job: "Chicken Keeping/Rearing",
    area: "Semi-Urban, Somewhat-Rural, Very-Rural-Village",
    c1: 5,
    c2: 5,
    c3: 2,
    c4: 1,
    c5: 5,
    boygirl: 3
  },
  {
    job: "Catering/Cooking - Food & Beverage",
    area: "City-Center, Semi-Urban",
    c1: 2,
    c2: 4,
    c3: 4,
    c4: 1,
    c5: 2,
    boygirl: 4
  },
  {
    job: "Aluminum door, windows and cabins making",
    area: "City-Center, Semi-Urban",
    c1: 4,
    c2: 5,
    c3: 2,
    c4: 4,
    c5: 1,
    boygirl: 2
  },
  {
    job: "Driving Bajaji (and bodaboda?)",
    area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 5,
    c2: 5,
    c3: 5,
    c4: 2,
    c5: 1,
    boygirl: 1
  },
  {
    job: "(Mini) Bus Driver",
    area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 5,
    c2: 5,
    c3: 3,
    c4: 3,
    c5: 1,
    boygirl: 1
  },
  {
    job: "Leather goods production",
    area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 3,
    c2: 4,
    c3: 2,
    c4: 3,
    c5: 2,
    boygirl: 3
  },
  {
    job: "Refrigeration and Air condition",
    area: "City-Center, Semi-Urban",
    c1: 2,
    c2: 5,
    c3: 2,
    c4: 4,
    c5: 1,
    boygirl: 2
  },
  {
    job: "Professional Photography / Videography",
    area: "City-Center, Semi-Urban",
    c1: 3,
    c2: 2,
    c3: 3,
    c4: 4,
    c5: 1,
    boygirl: 3
  },
  {
    job: "Hotel, Restaurants, Guesthouse & Hospitality Business (incl. Tourism)",
    area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 2,
    c2: 4,
    c3: 5,
    c4: 2,
    c5: 3,
    boygirl: 3
  },
  {
    job: "Vegetable/Food/Fruit Farming (Agriculture)",
    area: "Somewhat-Rural, Very-Rural-Village",
    c1: 5,
    c2: 5,
    c3: 2,
    c4: 2,
    c5: 5,
    boygirl: 3
  },
  {
    job: "Floor Tiles fixing",
    area: "City-Center, Semi-Urban",
    c1: 3,
    c2: 4,
    c3: 2,
    c4: 1,
    c5: 1,
    boygirl: 1
  },
  {
    job: "Plumbing",
    area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 2,
    c2: 5,
    c3: 2,
    c4: 2,
    c5: 1,
    boygirl: 1
  },
  {
    job: "Lorry Driver",
    area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 5,
    c2: 5,
    c3: 1,
    c4: 3,
    c5: 1,
    boygirl: 1
  },
  {
    job: "Video editing and production",
    area: "City-Center, Semi-Urban",
    c1: 1,
    c2: 2,
    c3: 1,
    c4: 4,
    c5: 1,
    boygirl: 3
  },
  {
    job: "Childcare & Baby care",
    area: "City-Center, Semi-Urban, Semi-Rural, Very-Rural-Village",
    c1: 1,
    c2: 4,
    c3: 2,
    c4: 1,
    c5: 3,
    boygirl: 6
  },
  {
    job: "Shop / Local Market helper",
    area: "City-Center, Semi-Urban, Semi-Rural",
    c1: 3,
    c2: 5,
    c3: 4,
    c4: 2,
    c5: 2,
    boygirl: 3
  },
  {
    job: "Bicycle (and Motorcycle) repair",
    area: "City-Center, Semi-Urban, Semi-Rural, Very-Rural-Village",
    c1: 3,
    c2: 5,
    c3: 2,
    c4: 4,
    c5: 1,
    boygirl: 1
  },
  {
    job: "Helping with Livestock keeping (cows, goats, etc)",
    area: "Semi-Rural, Very-Rural-Village",
    c1: 5,
    c2: 5,
    c3: 1,
    c4: 1,
    c5: 5,
    boygirl: 2
  },
  {
    job: "Make and sell handmade crafts: woven baskets, jewellery",
    area: "City-Center, Semi-Urban, Semi-Rural, Very-Rural-Village",
    c1: 3,
    c2: 2,
    c3: 3,
    c4: 2,
    c5: 2,
    boygirl: 4
  },
  {
    job: "Make and sell home-made snacks / food items",
    area: "City-Center, Semi-Urban, Semi-Rural, Very-Rural-Village",
    c1: 3,
    c2: 3,
    c3: 3,
    c4: 1,
    c5: 2,
    boygirl: 4
  },
  {
    job: "Brick-making",
    area: "Semi-Rural, Very-Rural-Village",
    c1: 5,
    c2: 5,
    c3: 2,
    c4: 2,
    c5: 1,
    boygirl: 2
  },
  {
    job: "Small-scale construction projects / repair / painting projects",
    area: "City-Center, Semi-Urban, Semi-Rural, Very-Rural-Village",
    c1: 4,
    c2: 5,
    c3: 2,
    c4: 2,
    c5: 1,
    boygirl: 1
  },
  {
    job: "Security Guard",
    area: "City-Center, Semi-Urban, Semi-Rural",
    c1: 2,
    c2: 5,
    c3: 2,
    c4: 2,
    c5: 1,
    boygirl: 2
  },
  {
    job: "Make (and sell) pottery",
    area: "Semi-Urban, Semi-Rural, Very-Rural-Village",
    c1: 3,
    c2: 3,
    c3: 2,
    c4: 2,
    c5: 2,
    boygirl: 3
  }
]; 