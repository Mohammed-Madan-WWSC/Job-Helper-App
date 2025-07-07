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
        name: "Where would you like to live and work?",
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
area: "City-Center, Semi-Urban",
    c1: 2,
c2: 4,
    c3: 3,
c4: 3,
    c5: 1,
boygirl: 1
  },
{
    job: "Teaching/Training Children and Youth",
area: "City-Center, Semi-Urban, Somewhat-Rural, Very-Rural-Village",
    c1: 1,
c2: 2,
    c3: 1,
c4: 3,
    c5: 1,
boygirl: 4
  },
{
    job: "Motorcycle Mechanic / Boda Boda / Bicycle Repair / 3-Wheeler",
area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 2,
c2: 4,
    c3: 2,
c4: 3,
    c5: 1,
boygirl: 1
  },
{
    job: "Driver / Public Transport / Delivery / Cargo",
area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 3,
c2: 5,
    c3: 3,
c4: 2,
    c5: 1,
boygirl: 1
  },
{
    job: "Photography (Social Events / Weddings / etc)",
area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 2,
c2: 1,
    c3: 3,
c4: 4,
    c5: 1,
boygirl: 2
  },
{
    job: "Small Business / Market Trading / Shop",
area: "City-Center, Semi-Urban, Somewhat-Rural, Very-Rural-Village",
    c1: 2,
c2: 3,
    c3: 4,
c4: 2,
    c5: 1,
boygirl: 4
  },
{
    job: "Online Selling & E-Commerce",
area: "City-Center, Semi-Urban",
    c1: 1,
c2: 3,
    c3: 3,
c4: 5,
    c5: 1,
boygirl: 3
  },
{
    job: "Beauty Salon & Cosmetics",
area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 2,
c2: 3,
    c3: 4,
c4: 2,
    c5: 1,
boygirl: 5
  },
{
    job: "COOKING (Traditional/Catering/Business)",
area: "City-Center, Semi-Urban, Somewhat-Rural, Very-Rural-Village",
    c1: 2,
c2: 2,
    c3: 3,
c4: 1,
    c5: 1,
boygirl: 4
  },
{
    job: "Sewing & Tailoring / Alteration",
area: "City-Center, Semi-Urban, Somewhat-Rural, Very-Rural-Village",
    c1: 2,
c2: 2,
    c3: 3,
c4: 1,
    c5: 1,
boygirl: 4
  },
{
    job: "Shoemaker",
area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 2,
c2: 3,
    c3: 2,
c4: 1,
    c5: 1,
boygirl: 2
  },
{
    job: "Upholstery & Furniture Repair / Making",
area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 3,
c2: 3,
    c3: 2,
c4: 2,
    c5: 1,
boygirl: 2
  },
{
    job: "Agriculture / Farming (Commercial)",
area: "Semi-Urban, Somewhat-Rural, Very-Rural-Village",
    c1: 5,
c2: 4,
    c3: 3,
c4: 2,
    c5: 5,
boygirl: 3
  },
{
    job: "Fishing (Commercial)",
area: "Semi-Urban, Somewhat-Rural, Very-Rural-Village",
    c1: 5,
c2: 4,
    c3: 2,
c4: 1,
    c5: 5,
boygirl: 2
  },
{
    job: "Brick Making",
area: "Semi-Urban, Somewhat-Rural, Very-Rural-Village",
    c1: 5,
c2: 5,
    c3: 2,
c4: 1,
    c5: 1,
boygirl: 2
  },
{
    job: "Security Guard / Watchman",
area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 2,
c2: 5,
    c3: 2,
c4: 2,
    c5: 1,
boygirl: 1
  },
{
    job: "Data Entry / Computer Services / Internet Services",
area: "City-Center, Semi-Urban",
    c1: 1,
c2: 3,
    c3: 2,
c4: 5,
    c5: 1,
boygirl: 3
  },
{
    job: "Electrical Work / Electronics",
area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 2,
c2: 4,
    c3: 2,
c4: 5,
    c5: 1,
boygirl: 2
  },
{
    job: "Plumbing",
area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 2,
c2: 4,
    c3: 2,
c4: 3,
    c5: 1,
boygirl: 1
  },
{
    job: "DJ / Music / Sound Systems",
area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 2,
c2: 1,
    c3: 3,
c4: 4,
    c5: 1,
boygirl: 2
  },
{
    job: "Radio/TV/Satellite Installation & Repair",
area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 2,
c2: 4,
    c3: 2,
c4: 5,
    c5: 1,
boygirl: 2
  },
{
    job: "Graphics Design & Printing Business",
area: "City-Center, Semi-Urban",
    c1: 1,
c2: 1,
    c3: 2,
c4: 5,
    c5: 1,
boygirl: 3
  },
{
    job: "Office Assistant / Receptionist / Customer Service",
area: "City-Center, Semi-Urban",
    c1: 1,
c2: 3,
    c3: 1,
c4: 3,
    c5: 1,
boygirl: 4
  },
{
    job: "Domestic Work / House Help / Cleaning",
area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 1,
c2: 5,
    c3: 2,
c4: 1,
    c5: 1,
boygirl: 5
  },
{
    job: "Child Care / Nanny / Babysitting",
area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 1,
c2: 3,
    c3: 1,
c4: 1,
    c5: 1,
boygirl: 5
  },
{
    job: "Elderly Care / Senior Assistance",
area: "City-Center, Semi-Urban, Somewhat-Rural, Very-Rural-Village",
    c1: 1,
c2: 3,
    c3: 1,
c4: 1,
    c5: 1,
boygirl: 4
  },
{
    job: "Real Estate Agent / Property Sales",
area: "City-Center, Semi-Urban",
    c1: 2,
c2: 3,
    c3: 1,
c4: 3,
    c5: 1,
boygirl: 3
  },
{
    job: "Insurance Agent / Financial Services",
area: "City-Center, Semi-Urban",
    c1: 1,
c2: 3,
    c3: 1,
c4: 3,
    c5: 1,
boygirl: 3
  },
{
    job: "Tour Guide / Travel Services",
area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 3,
c2: 2,
    c3: 1,
c4: 2,
    c5: 3,
boygirl: 3
  },
{
    job: "Sports Coaching / Training",
area: "City-Center, Semi-Urban, Somewhat-Rural",
    c1: 3,
c2: 3,
    c3: 1,
c4: 2,
    c5: 1,
boygirl: 2
  },
{
    job: "Fitness Trainer / Gym Instructor",
area: "City-Center, Semi-Urban",
    c1: 2,
c2: 3,
    c3: 1,
c4: 2,
    c5: 1,
boygirl: 3
  },
{
    job: "Massage Therapy / Traditional Healing",
area: "City-Center, Semi-Urban, Somewhat-Rural, Very-Rural-Village",
    c1: 1,
c2: 3,
    c3: 1,
c4: 1,
    c5: 2,
boygirl: 4
  }
]; 