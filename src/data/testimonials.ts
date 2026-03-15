// src/data/testimonials.ts
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  linkedin?: string;
};

export const testimonials: Testimonial[] = [
  { name: "Alexander Kalombe", role: "Business Administration Student",
    linkedin: "https://www.linkedin.com/in/alexander-kalombe-26b297165/",
    quote: "Working with Eskinder, I turned vague goals into a weekly plan I could follow and finally stayed consistent." },

  { name: "Yoseph Kasie", role: "Software Developer Enthusiast",
    linkedin: "https://www.linkedin.com/in/yoseph-kasie-193783246/",
    quote: "Eskinder's ability to map a simple study path kept me focused each day instead of guessing what to learn." },

  { name: "Evan Graham", role: "Frontend Developer",
    // linkedin: "",
    quote: "Working with Eskinder, I shipped a new portfolio page every week—small steps, steady progress." },

  { name: "Abreham Nedi", role: "Full-stack Developer",
    linkedin: "https://www.linkedin.com/in/abreham-nedi-aab4aa208/",
    quote: "Eskinder has delivered an easy way to create clean posters from prompts—I could share ideas fast." },

  { name: "Nayeef Mahmud", role: "CIS Student",
    linkedin: "https://www.linkedin.com/in/nayeefmahmud/",
    quote: "Eskinder has helped me study with confidence—checklists and streaks cut the overwhelm." },

  { name: "Farhiya Ahmed", role: "CIS Student",
    linkedin: "https://www.linkedin.com/in/farhiya-ahmed-bb416a227/",
    quote: "Working with Eskinder, I organized classes and labs with a clear focus board—less stress, better habits." },

  { name: "Ridhoy Ahmad", role: "Full-stack Java Developer",
    linkedin: "https://www.linkedin.com/search/results/all/?keywords=Ridhoy%20Ahmad&origin=GLOBAL_SEARCH_HEADER&sid=dEf",
    quote: "Eskinder's ability to set a simple routine helped me ship features steadily instead of cramming." },

  { name: "Yohanes Tezera", role: "Mechanical Engineer",
    linkedin: "https://www.linkedin.com/search/results/all/?keywords=Yohanes%20Tezera%20&origin=GLOBAL_SEARCH_HEADER&sid=9eX",
    quote: "Working with Eskinder, I planned CAD tasks clearly and kept reviews on schedule." },

  { name: "Chris K", role: "Sales Engineer",
    linkedin: "https://www.linkedin.com/in/chris-k-71b362222/",
    quote: "Eskinder has delivered a simple prep board for demos and follow-ups—my days run smoother." },

  { name: "Liday Kassahun", role: "Public Health Student",
    linkedin: "https://www.linkedin.com/in/lidyakassahun/",
    quote: "Working with Eskinder, I built the ZeroEffort Tracker—keeps my studies on pace with almost no friction." },

  { name: "Hamad Iqbal", role: "Cloud Developer",
    linkedin: "https://www.linkedin.com/in/hamad-iqbal-236172211/",
    quote: "Eskinder's expertise in cloud architecture clarified the design—I can explain and build the stack now." },

  { name: "Fredy Tapi", role: "Aspiring Cloud Engineer",
    linkedin: "https://www.linkedin.com/in/fredytapia/",
    quote: "Working with Eskinder, we used agile tickets and shipped our first module cleanly and on time." },

  { name: "Chandramati Hiregoudra", role: "Aspiring Cloud Developer",
    linkedin: "https://www.linkedin.com/in/chandramatihiregoudra/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAFAkTIkBBwlZdtWYRbllIxgyr_afr72Nn2I",
    quote: "Eskinder has delivered a reusable pattern—API calls and a Lambda I can extend on my own." },

  { name: "Roman Canger", role: "IT Support Specialist",
    linkedin: "https://www.linkedin.com/in/romancanger/",
    quote: "Working with Eskinder, I merged API calls with an AI chatbot and the frontend—the integration felt smooth." },

  // Entry-level cloud ops (simple wording, all unique)
  { name: "Chandra Dunn", role: "Cloud Developer",
    linkedin: "https://www.linkedin.com/in/chandra-dunn/",
    quote: "Working with Eskinder, we wrote a small YAML template to launch an EC2 and VPC the right way." },

  { name: "Terani Perry", role: "Cloud Developer",
    linkedin: "https://www.linkedin.com/in/terani-perry/",
    quote: "Working with Eskinder, we fixed a network ACL that blocked subnet traffic and kept the app online." },

  { name: "Joshua Epps", role: "Cloud Developer",
    linkedin: "https://www.linkedin.com/in/joshua-epps54/",
    quote: "Working with Eskinder, we used AWS CLI to find an open port and tightened the security group fast." },

  { name: "Rasha Selman Alani", role: "Cloud Developer",
    linkedin: "https://www.linkedin.com/in/rasha-selman-alani/",
    quote: "Working with Eskinder, we traced suspicious traffic with AWS CLI and blocked the source safely." },

  { name: "Kiki McWhorter", role: "Cloud Developer",
    linkedin: "https://www.linkedin.com/in/kikimcwhorter/",
    quote: "Working with Eskinder, we debugged a Python Lambda using breakpoints and fixed a bad env variable." },

  { name: "Anthony Karanja", role: "Cloud Developer",
    linkedin: "https://www.linkedin.com/in/anthonykaranja/",
    quote: "Eskinder's ability to set CloudWatch alarms and trim IAM to least-privilege made our setup safer." },
];


