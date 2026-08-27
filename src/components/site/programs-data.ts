import {
  HeartHandshake,
  GraduationCap,
  Stethoscope,
  Users,
  Sprout,
  type LucideIcon,
} from "lucide-react";

export type Program = {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  desc: string;
  overview: string;
  image: string;
  highlights: { title: string; body: string }[];
  outcomes: string[];
  caseStudy: { title: string; location: string; story: string; image: string };
};

export const programs: Program[] = [
  {
    slug: "outreach",
    icon: HeartHandshake,
    title: "Outreach Programs",
    tagline: "Meeting communities where they are.",
    desc: "Boots-on-the-ground initiatives that bring relief, dignity, and hope directly to underserved communities.",
    overview:
      "Our outreach teams travel into rural villages, displacement camps, and overlooked urban neighborhoods to deliver food, hygiene kits, clothing, and emotional support. Every visit begins with listening — so the help we deliver matches the need on the ground.",
    image: "https://images.pexels.com/photos/6646899/pexels-photo-6646899.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: [
      { title: "Relief Distribution", body: "Food packs, hygiene kits, and clothing for vulnerable families." },
      { title: "Community Listening", body: "House-to-house visits to understand needs before we act." },
      { title: "Crisis Response", body: "Rapid mobilization to communities affected by displacement or disaster." },
    ],
    outcomes: [
      "Over 5,000 families served across South-East Nigeria",
      "Active in 25+ rural and peri-urban communities",
      "Quarterly relief campaigns powered by local volunteers",
    ],
    caseStudy: {
      title: "Ezzaa Community Relief Drive",
      location: "Ezzaa, Ebonyi State",
      story: "In early 2024, flooding displaced over 200 families in the Ezzaa community. Within 72 hours, our volunteer team mobilized to distribute emergency food packs, blankets, and hygiene kits to every affected household. We followed up with a three-month recovery program that helped families rebuild their homes and restart their livelihoods.",
      image: "https://images.pexels.com/photos/6647015/pexels-photo-6647015.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  },
  {
    slug: "education",
    icon: GraduationCap,
    title: "Educational Support",
    tagline: "Keeping every child in the classroom.",
    desc: "Scholarships, learning materials, and mentorship that keep children and young adults in school.",
    overview:
      "We believe education is the most reliable path out of poverty. Our education program covers school fees, uniforms, books, and exam registrations for children from low-income homes, paired with mentorship to keep them on track.",
    image: "https://images.pexels.com/photos/26855714/pexels-photo-26855714.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: [
      { title: "Scholarships", body: "Sponsorships for primary, secondary, and tertiary students." },
      { title: "Learning Materials", body: "Books, uniforms, and stationery delivered each new term." },
      { title: "Mentorship Circles", body: "Volunteer mentors guiding students through academic and life decisions." },
    ],
    outcomes: [
      "Hundreds of children sponsored back into school",
      "Partnerships with local schools and PTAs",
      "After-school study clubs in rural communities",
    ],
    caseStudy: {
      title: "Back-to-School Scholarship Initiative",
      location: "Abakaliki, Ebonyi State",
      story: "When 14-year-old Amaka's family could no longer afford her school fees, she was weeks away from dropping out. Our scholarship program covered her fees, books, and uniform for the full academic year. Today, Amaka is one of the top students in her class and dreams of becoming a doctor.",
      image: "https://images.pexels.com/photos/34211750/pexels-photo-34211750.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  },
  {
    slug: "healthcare",
    icon: Stethoscope,
    title: "Healthcare Assistance",
    tagline: "Healthcare as a right, not a privilege.",
    desc: "Free medical outreaches, essential medications, and access to care for vulnerable families.",
    overview:
      "Our medical outreaches partner with licensed doctors, nurses, and pharmacists to bring free consultations, screenings, and medicines to communities with limited access to clinics. We focus on maternal health, malaria prevention, and chronic disease screening.",
    image: "https://images.pexels.com/photos/30688589/pexels-photo-30688589.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: [
      { title: "Free Medical Outreaches", body: "Consultations, screenings, and medication for under-served areas." },
      { title: "Maternal & Child Care", body: "Pre-natal support, vaccinations, and infant nutrition guidance." },
      { title: "Health Education", body: "Workshops on hygiene, nutrition, and preventive care." },
    ],
    outcomes: [
      "Thousands of free consultations delivered",
      "Essential medications dispensed at no cost",
      "Referral support for critical cases",
    ],
    caseStudy: {
      title: "Maternal Health Outreach",
      location: "Onueke, Ebonyi State",
      story: "Many women in rural Ebonyi communities lack access to prenatal care. Our team of volunteer doctors and nurses set up a two-day free clinic that served over 300 women, providing screenings, prenatal vitamins, and health education. We identified several high-risk pregnancies and connected the mothers to nearby hospitals for ongoing care.",
      image: "https://images.pexels.com/photos/7447009/pexels-photo-7447009.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  },
  {
    slug: "youth",
    icon: Users,
    title: "Youth Empowerment",
    tagline: "Building the next generation of African leaders.",
    desc: "Skills training, leadership development, and entrepreneurship pathways for African youth.",
    overview:
      "We equip young people with the skills, mindset, and networks to thrive. From vocational training to leadership bootcamps and small-business grants, our youth programs turn ambition into livelihood.",
    image: "https://images.pexels.com/photos/6802855/pexels-photo-6802855.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: [
      { title: "Vocational Training", body: "Tailoring, ICT, catering, and trade skills with certification." },
      { title: "Leadership Bootcamps", body: "Workshops on character, communication, and civic responsibility." },
      { title: "Startup Grants", body: "Seed funding and mentorship for youth-led micro-businesses." },
    ],
    outcomes: [
      "Young entrepreneurs launched with seed grants",
      "Annual leadership summit for emerging leaders",
      "Job-ready graduates from our skills programs",
    ],
    caseStudy: {
      title: "Youth Tailoring Cooperative",
      location: "Abakaliki, Ebonyi State",
      story: "Chidi, a 22-year-old who struggled to find work, joined our six-month tailoring program. After graduating with a certification and a sewing machine through our startup grant, he opened a small shop that now employs two other young people from his neighborhood. His business is growing, and he mentors new trainees in our program.",
      image: "https://images.pexels.com/photos/20853652/pexels-photo-20853652.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  },
  {
    slug: "community",
    icon: Sprout,
    title: "Community Development",
    tagline: "Lifting whole communities, not just individuals.",
    desc: "Sustainable infrastructure, peace-building, and grassroots projects that lift entire communities.",
    overview:
      "We partner with community leaders to build the infrastructure and social fabric that lasting development requires — clean water, safe gathering spaces, peace dialogues, and grassroots organizing.",
    image: "https://images.pexels.com/photos/28101461/pexels-photo-28101461.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: [
      { title: "Clean Water Projects", body: "Boreholes and water points for communities without safe water." },
      { title: "Peace Dialogues", body: "Mediation and reconciliation between communities in conflict." },
      { title: "Grassroots Organizing", body: "Training local committees to lead their own development." },
    ],
    outcomes: [
      "Water access restored in remote villages",
      "Peace committees established across multiple communities",
      "Long-term partnerships with local government",
    ],
    caseStudy: {
      title: "Clean Water Borehole Project",
      location: "Ndiagu, Ebonyi State",
      story: "For decades, the people of Ndiagu walked over 4 kilometers each day to fetch water from a contaminated stream. In partnership with the community, we drilled a solar-powered borehole that now serves over 1,500 residents with clean, safe drinking water. The community formed a water committee to maintain the facility and ensure its sustainability.",
      image: "https://images.pexels.com/photos/34172771/pexels-photo-34172771.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  },
];

export function getProgram(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

export const defaultImpactStats = [
  { label: "Lives Impacted", value: "10,000+", icon: "Users" },
  { label: "Communities Supported", value: "25+", icon: "MapPin" },
  { label: "Families Served", value: "5,000+", icon: "HeartHandshake" },
  { label: "Volunteers Mobilized", value: "200+", icon: "Sparkles" },
];

export const defaultBeneficiaryStories = [
  {
    name: "Amaka",
    age: 14,
    program: "Educational Support",
    location: "Abakaliki, Ebonyi State",
    quote:
      "When my family could no longer afford my school fees, I thought my education was over. Envo Peace stepped in and covered everything. Today I am one of the top students in my class, and I dream of becoming a doctor to help my community.",
    image: "https://images.pexels.com/photos/34379886/pexels-photo-34379886.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Chidi",
    age: 22,
    program: "Youth Empowerment",
    location: "Abakaliki, Ebonyi State",
    quote:
      "I was jobless for two years before joining the tailoring program. Now I run my own shop and employ two other young people. The startup grant and mentorship changed my life — I went from waiting for opportunity to creating it.",
    image: "https://images.pexels.com/photos/20853652/pexels-photo-20853652.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Mama Nkechi",
    age: 52,
    program: "Healthcare Assistance",
    location: "Onueke, Ebonyi State",
    quote:
      "I had not seen a doctor in years because the clinic was too far and too expensive. The free medical outreach came to our village and the doctors checked me, gave me medicine, and found that my blood pressure was too high. They connected me to a hospital and probably saved my life.",
    image: "https://images.pexels.com/photos/19982405/pexels-photo-19982405.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const galleryImages = [
  { url: "https://images.pexels.com/photos/9090746/pexels-photo-9090746.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Youth outreach activity in a rural community", category: "Outreach" },
  { url: "https://images.pexels.com/photos/6646899/pexels-photo-6646899.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Volunteers distributing food aid boxes", category: "Outreach" },
  { url: "https://images.pexels.com/photos/26855714/pexels-photo-26855714.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Children reading at school", category: "Education" },
  { url: "https://images.pexels.com/photos/34211750/pexels-photo-34211750.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Students collaborating on an assignment", category: "Education" },
  { url: "https://images.pexels.com/photos/30688589/pexels-photo-30688589.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Healthcare checkup in Lagos, Nigeria", category: "Healthcare" },
  { url: "https://images.pexels.com/photos/7447009/pexels-photo-7447009.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Doctor giving a child a health check-up", category: "Healthcare" },
  { url: "https://images.pexels.com/photos/6802855/pexels-photo-6802855.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Youth skills training — tailoring program", category: "Youth" },
  { url: "https://images.pexels.com/photos/16850257/pexels-photo-16850257.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Mentor guiding youth in carpentry workshop", category: "Youth" },
  { url: "https://images.pexels.com/photos/28101461/pexels-photo-28101461.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Clean water access for a village", category: "Community" },
  { url: "https://images.pexels.com/photos/34172771/pexels-photo-34172771.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Children collecting water from a communal tap", category: "Community" },
  { url: "https://images.pexels.com/photos/27638656/pexels-photo-27638656.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Community gathering celebrating unity", category: "Community" },
  { url: "https://images.pexels.com/photos/6647015/pexels-photo-6647015.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Volunteers moving aid boxes for charity", category: "Outreach" },
];
