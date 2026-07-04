import { GraduationCap, Scale, BookOpen, Briefcase, Building2, Target } from "lucide-react";

import faculty1 from "@/assets/faculty-1-aru.jpg"; 
import faculty2 from "@/assets/faculty-2-krish.jpg"; 



import p1 from "@/assets/arpit.JPG";
import p2 from "@/assets/chitwan-agrawal.jpg";
import p3 from "@/assets/dhruv-naseri.jpg";
import p4 from "@/assets/kasak-ahuja.jpg";
import p5 from "@/assets/kasak-wadhwani.jpg";
import p6 from "@/assets/naman-agrawal.jpg";
import p7 from "@/assets/radhi-bha.jpg";
import p8 from "@/assets/riddhi-bapte.jpg";
import p9 from "@/assets/rupali-kale.jpg";
import p10 from "@/assets/saniya-kamble.jpg";
import p11 from "@/assets/shimant.jpg";
import p12 from "@/assets/surabhi-jaiswal.jpg";
import p13 from "@/assets/vansh-katekhaye.jpg";
import p14 from "@/assets/vedant-kohat.jpg";
import p15 from "@/assets/vinay-khanija.jpg";


const BRAND = {
  name: "KAT Expert",
  tagline: "A Place to Learn, A Place to Grow",
  phone: "+91 9552388015", 
  phoneAlt: "+91 99757 17636",
  whatsapp: "919552388015",
  address: "901 A Khare Town, Dharampeth, Behind Batukbhai Jewellers, Nagpur - 440010",
  email: "info@katexperts.com"
};

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "About", href: "#about" },
  { label: "Faculty", href: "#faculty" },
  { label: "Toppers", href: "#toppers" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

const COURSES = [
  {
    id: "cat",
    title: "CAT",
    category: "MBA",
    icon: GraduationCap,
    description: "Comprehensive CAT preparation for top IIMs with concept-first teaching and mock analytics.",
    duration: "12 Months",
    mode: "Offline",
    features: ["500+ hrs live classes", "40+ full mocks", "Personal mentorship"],
    featured: true
  },
  {
    id: "clat",
    title: "CLAT",
    category: "Law",
    icon: Scale,
    description: "Crack CLAT & AILET for premier NLUs with daily legal reasoning and current affairs drills.",
    duration: "10 Months",
    mode: "Offline",
    features: ["Legal reasoning mastery", "Daily GK capsules", "Sectional tests"]
  },
  {
    id: "ipmat",
    title: "IPMAT",
    category: "UG",
    icon: BookOpen,
    description: "Integrated Programme in Management coaching for IIM Indore & Rohtak after Class 12.",
    duration: "8 Months",
    mode: "Offline",
    features: ["Quant + Verbal focus", "PI & WAT prep", "Foundation building"]
  },
  {
    id: "mba-cet",
    title: "MBA CET",
    category: "MBA",
    icon: Target,
    description: "MAH MBA CET preparation targeting JBIMS, SIMSREE and top Maharashtra B-schools.",
    duration: "6 Months",
    mode: "Offline",
    features: ["Speed test training", "100+ practice sets", "CAP guidance"],
    featured: true
  },
  {
    id: "mca-cet",
    title: "MCA CET",
    category: "UG",
    icon: Building2,
    description: "MAH MCA CET coaching covering aptitude, computer concepts and programming logic.",
    duration: "6 Months",
    mode: "Offline",
    features: ["Logical reasoning", "Computer fundamentals", "Mock series"]
  },
  {
    id: "crt",
    title: "CRT",
    category: "Skills",
    icon: Briefcase,
    description: "Campus Recruitment Training to make you placement-ready with aptitude & soft skills.",
    duration: "4 Months",
    mode: "Offline",
    features: ["Aptitude + coding", "Group discussion", "Interview prep"]
  },
   {
    id: "cuet",
    title: "CUET & MH - CET Classroom Program",
    category: "UG",
    icon: Briefcase,
    description: "Program is an all-inclusive preparation package designed for students aiming to excel in both Common University Entrance Test (CUET UG) and Maharashtra CET (MH-CET).",
    duration: "4 Months",
    mode: "Offline",
    features: ["General Aptitude", "English Language", "General Awareness"]
  },
   {
    id: "set",
    title: "SET",
    category: "UG",
    icon: Briefcase,
    description: "The Symbiosis Entrance Test (SET – General) is conducted by Symbiosis International (Deemed University) and serves as the gateway for undergraduate admissions across various prestigious Symbiosis institutes.",
    duration: "4 Months",
    mode: "Offline",
    features: ["General Awareness", "Logical and Analytical Reasoning", "English Language"]
  }
];

const STATS = [
  { value: 5000, suffix: "+", label: "Students Trained" },
  { value: 120, suffix: "+", label: "CAT 99%ilers" },
  { value: 850, suffix: "+", label: "MBA Converts" },
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 96, suffix: "%", label: "Placement Success" }
];

const FACULTY = [
  {
    image: faculty1,
    name: "Dr Arumita Pawa",
    designation: "MA English Literature | B.Com | NLP Practitioner | TESOL & TEFL London Business School | Certified Soft Skill Trainer",
    experience: "12+ years",
    qualifications: "MBA, IIM Alumnus",
    expertise: ["Soft Skills","English Literature" ,"Strategy"],
    blurb: "Dr. Arumita Pawa is a dynamic academician and trainer with a distinguished career spanning over two decades in education and leadership. Formerly the Head of the Department of Commerce and Management, as well as the Junior College at Raisoni College, she has been instrumental in shaping the academic and professional journeys of countless students."
  },
  {
    image: faculty2,
    name: "Prof. Krish Vyas",
    designation: "BE | MBA | Master Mentor Specialized in Quantitative Aptitude (QA) & Data Interpretation & Logical Reasoning (DILR)",
    experience: "10+ years",
    qualifications: "MA English, PGDM",
    expertise: ["Quantitative Ability", "DI-LR", "Strategy"],
    blurb: "An engineer and an MBA, Krish combines the analytical laser-like focus and business sense in a unique package for the competitive exam preparation arena. Having spent years of direct teaching and mentoring experience, he has emerged as the go-to guide for thousands of aspirants pursuing dreams through examinations such as CAT, CLAT, and many other entrance exams. Masters in Quants & LRDI."
  }
];

const TOPPERS = [
  { image: p6, name: "Naman Agrawal", exam: "MBA CET", score: "AIR 1", college: "JBIMS Mumbai", year: 2026, hasCrown: true },
  { image: p15, name: "Vinay Khanija", exam: "MBA CET", score: "99.35%ile", college: "IIM Ahmedabad", year: 2026 },
  { image: p3, name: "Dhruv Naseri", exam: "MBA CET", score: "97.26%ile", college: "IIM Bangalore", year: 2026 },
  { image: p7, name: "Radhika Bhattad", exam: "MBA CET", score: "95.84%ile", college: "NLSIU Bangalore", year: 2026 },
  { image: p12, name: "Surabhi Jaiswal", exam: "MBA CET", score: "95.81%ile", college: "IIM Indore", year: 2026 },
  { image: p4, name: "Kasak Ahuja", exam: "MBA CET", score: "93.13%ile", college: "SIMSREE Mumbai", year: 2026 },
  { image: p11, name: "Shimant Bijwe", exam: "MBA CET", score: "91.85%ile", college: "JBIMS Mumbai", year: 2026},
  { image: p10, name: "Saniya Kamble", exam: "MBA CET", score: "91.58%ile", college: "IIM Ahmedabad", year: 2026 },
  { image: "", name: "Janhavi Pawaday", exam: "MBA CET", score: "88.36%ile", college: "IIM Bangalore", year: 2026 },
  { image: p14, name: "Vedant Kohat", exam: "MBA CET", score: "87.71%ile", college: "NLSIU Bangalore", year: 2026 },
  { image: p5, name: "Kasak Wadhwani", exam: "MBA CET", score: "87.12%ile", college: "IIM Indore", year: 2026 },
  { image: p2, name: "Chitwan Agrawal", exam: "MBA CET", score: "86.95%ile", college: "SIMSREE Mumbai", year: 2026 },
  { image: p8, name: "Riddhi Bapte", exam: "MBA CET", score: "85.71%ile", college: "JBIMS Mumbai", year: 2026 },
  { image: p9, name: "Rupali Kale", exam: "MCA CET", score: "97.70%ile", college: "IIM Ahmedabad", year: 2026, hasCrown: true },
  { image: p1, name: "Arpit Khadatkar", exam: "MCA CET", score: "95.93%ile", college: "IIM Bangalore", year: 2026 },
  { image: p13, name: "Vansh Katekhaye", exam: "MCA CET", score: "87.93%ile", college: "IIM Indore", year: 2026 },
  { image: "", name: "Kiran Kumar Rajurkar", exam: "CAT", score: "80.30%ile", college: "SIMSREE Mumbai", year: 2025 },
  { image: "", name: "Nikita Agrawal", exam: "DILR", score: "88.71%ile", college: "JBIMS Mumbai", year: 2025 },
  { image: "", name: "Meet Patel", exam: "CAT", score: "87.97%ile", college: "IIM Ahmedabad", year: 2025 },
  { image: "", name: "Hiten Khatod", exam: "CAT", score: "89.90%ile", college: "IIM Bangalore", year: 2025 },
  { image: "", name: "Naman Agrawal", exam: "DILR", score: "98.81%ile", college: "NLSIU Bangalore", year: 2025 }
];

const TESTIMONIALS = [
  {
    image:p9,
    name: "Rupali Kale",
    rating: 5,
    text: "I'm incredibly grateful to KATexpert for their amazing mentorship and resources during my MCA CET prep. Their constant motivation and structural support guided me to hit a 97.7 percentile. Joining them was definitely the right choice!"
  },
  {
    image:p11,
    name: "Shimant Bijwe",
    rating: 5,
    text: "The interactive classes at KATexpert genuinely made learning enjoyable and kept me highly engaged throughout. The clear directions and strategic curriculum provided by the mentors were exactly what I needed to successfully achieve my goal."
  },
  {
    
    name: "Janhavi Pawaday",
    rating: 5,
    text: "Even though I joined KATexpert later than most students, the teachers went out of their way to help me cover the syllabus. Their structured worksheets helped me improve quickly, scoring an 88% with constant support."
  },


   {
    
    name: "Nandini Trivedi",
    rating: 5,
    text: "Learning from Arumita Ma'am has been a truly enriching experience. Her passion, patience, and ability to simplify complex concepts inspired me to think deeply, express creatively, and grow continuously. I will always cherish our bond, built on respect, trust, and a shared love for learning."
  },
   {
    
    name: "Amisha Shukla",
    rating: 5,
    text: "Arumita Ma'am's wisdom, warmth, and kindness make every class inspiring. She teaches with patience, encourages curiosity, and helps students grow with confidence. Her guidance, belief in us, and genuine care leave a lasting impact, making her an unforgettable teacher and mentor."
  },
   {
    
    name: "Atharva Pandhbudhe",
    rating: 5,
    text: "I feel fortunate to have learned from Krish Sir. His passion, dedication, and genuine care made learning enjoyable and meaningful. Beyond academics, he taught valuable life lessons, inspired us, believed in our potential, and became the best teacher I have ever had."
  },
   {
    
    name: "Saniya Raghunath Sondarkar",
    rating: 5,
    text: "Krish Sir's teaching combines clarity, passion, and real-life examples, making complex concepts easy to understand. His patience, encouragement, and positivity inspire confidence, curiosity, and personal growth. Every class motivates me to aim higher, making him an exceptional teacher who leaves a lasting impression."
  },
   {
    
    name: "Kunjal Sugandh",
    rating: 5,
    text: "Arumita Ma'am's engaging teaching, personal attention, and genuine care made learning enjoyable and inspiring. She simplified complex concepts, encouraged confidence, and supported my growth beyond academics. Her guidance, warmth, and belief in my potential have left a lasting impact on my learning journey."
  },
   {
    
    name: "Khushi Yadav",
    rating: 5,
    text: "Krish Sir's exceptional teaching style made every concept clear and easy to understand. His guidance, care, and mentorship felt like that of an elder brother, inspiring confidence and gratitude. I feel fortunate to have learned from such an incredible teacher and mentor."
  },

  
   {
    
    name: "Maheshwari Urkude",
    rating: 5,
    text: "I feel grateful to have learned from Krish Sir. His passion, dedication, and ability to simplify complex topics made learning inspiring and engaging. Beyond teaching, he built confidence, encouraged growth, and instilled a lifelong love for learning, leaving a lasting impact on my life."
   },
   {
    
    name: "Vidhi Agrawal",
    rating: 5,
    text: "Krish Sir is more than a teacher—he is a mentor and guiding light. His kindness, patience, and passion make learning enjoyable while simplifying complex concepts. His guidance has shaped both my academic and personal growth, leaving me with lifelong lessons and unforgettable inspiration."
  },
   {
    
    name: "Rudra Amol Kshirsagar",
    rating: 5,
    text: "Even though I joined KATexpert later than most students, the teachers went out of their way to help me cover the syllabus. Their structured worksheets helped me improve quickly, scoring an 88% with constant support."
  },
   {
    
    name: "Ifra Khan",
    rating: 5,
    text: "Even though I joined KATexpert later than most students, the teachers went out of their way to help me cover the syllabus. Their structured worksheets helped me improve quickly, scoring an 88% with constant support."
  },
   {
    
    name: "Isha Dhatrak",
    rating: 5,
    text: "Even though I joined KATexpert later than most students, the teachers went out of their way to help me cover the syllabus. Their structured worksheets helped me improve quickly, scoring an 88% with constant support."
  },

   {
    
    name: "Arya Dhakate",
    rating: 5,
    text: "Even though I joined KATexpert later than most students, the teachers went out of their way to help me cover the syllabus. Their structured worksheets helped me improve quickly, scoring an 88% with constant support."
  },
   {
    
    name: "Pawan Chandiramani",
    rating: 5,
    text: "Even though I joined KATexpert later than most students, the teachers went out of their way to help me cover the syllabus. Their structured worksheets helped me improve quickly, scoring an 88% with constant support."
  },
   {
    
    name: "Rimjhim Singh",
    rating: 5,
    text: "Even though I joined KATexpert later than most students, the teachers went out of their way to help me cover the syllabus. Their structured worksheets helped me improve quickly, scoring an 88% with constant support."
  },
];


const FAQS = [
  {
    question: "What are the benefits of joining KATexpert?",
    answer: "Detailed information about expert faculty, structured curriculum, and high-quality study materials can be found on {Link: KATexpert https://katexpert.com}."
  },
  {
    question: "How can I enroll in a course?",
    answer: "Information regarding the registration form and contacting the admissions team is available at {Link: KATexpert https://katexpert.com}."
  },
  {
    question: "What is the fee structure?",
    answer: "Fee structures, which vary based on course, are provided upon contacting the team as detailed at {Link: KATexpert https://katexpert.com}."
  },
  {
    question: "Do you offer online mocks?",
    answer: "Details regarding online mock test series for exam simulation can be found on {Link: KATexpert https://katexpert.com}."
  }
];

export { BRAND, NAV_LINKS, COURSES, STATS, FACULTY, TOPPERS, TESTIMONIALS ,FAQS};