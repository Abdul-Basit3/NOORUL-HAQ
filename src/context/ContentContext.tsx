import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface PrayerTime {
  name: string;
  time: string;
  icon: string;
}

interface Lecture {
  id: number;
  title: string;
  speaker: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  views?: string;
  date?: string;
}

interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
  duration: string;
  level: string;
  progress: number;
  image: string;
  students: number;
}

interface Project {
  id: number;
  title: string;
  description: string;
  goal: number;
  raised: number;
  image: string;
  donors: number;
  daysLeft: number;
}

interface Activity {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  spotsLeft: number;
  image: string;
  category: string;
}

interface Executive {
  id: number;
  name: string;
  position: string;
  phone: string;
  email: string;
  photo: string;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface ContentContextType {
  prayerTimes: PrayerTime[];
  updatePrayerTimes: (times: PrayerTime[]) => void;
  lectures: Lecture[];
  updateLectures: (lectures: Lecture[]) => void;
  courses: Course[];
  updateCourses: (courses: Course[]) => void;
  projects: Project[];
  updateProjects: (projects: Project[]) => void;
  activities: Activity[];
  updateActivities: (activities: Activity[]) => void;
  executives: Executive[];
  updateExecutives: (executives: Executive[]) => void;
  faqs: FAQItem[];
  updateFAQs: (faqs: FAQItem[]) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

const DATA_VERSION = '1.2'; // Increment this to force refresh

const getStoredData = <T,>(key: string, defaultValue: T): T => {
  const versionKey = `${key}_version`;
  const savedVersion = localStorage.getItem(versionKey);
  
  if (savedVersion !== DATA_VERSION) {
    // Clear old data and set new version
    localStorage.removeItem(key);
    localStorage.setItem(versionKey, DATA_VERSION);
    return defaultValue;
  }
  
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : defaultValue;
};

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>(() =>
    getStoredData('prayerTimes', [
      { name: 'Fajr', time: '5:30 AM', icon: '🌅' },
      { name: 'Dhuhr', time: '12:45 PM', icon: '☀️' },
      { name: 'Asr', time: '4:15 PM', icon: '🌤️' },
      { name: 'Maghrib', time: '6:30 PM', icon: '🌆' },
      { name: 'Isha', time: '8:00 PM', icon: '🌙' },
    ])
  );

  const [lectures, setLectures] = useState<Lecture[]>(() =>
    getStoredData('lectures', [
      {
        id: 1,
        title: 'The Importance of Prayer in Islam',
        speaker: 'Sheikh Ahmad',
        duration: '45:30',
        thumbnail: 'lecture1.jpg',
        videoUrl: '#',
        views: '2.5K',
        date: 'Feb 10, 2026',
      },
      {
        id: 2,
        title: 'Understanding Tawheed',
        speaker: 'Dr. Fatima',
        duration: '38:15',
        thumbnail: 'lecture2.jpg',
        videoUrl: '#',
        views: '1.8K',
        date: 'Feb 8, 2026',
      },
      {
        id: 3,
        title: 'The Perfect Salah',
        speaker: 'Imam Yusuf',
        duration: '52:00',
        thumbnail: 'salah.jpg',
        videoUrl: '#',
        views: '3.2K',
        date: 'Feb 5, 2026',
      },
      {
        id: 4,
        title: 'Islamic Knowledge Series',
        speaker: 'Sheikh Omar',
        duration: '41:20',
        thumbnail: 'lectures.jpg',
        videoUrl: '#',
        views: '1.5K',
        date: 'Feb 1, 2026',
      },
    ])
  );

  const [courses, setCourses] = useState<Course[]>(() =>
    getStoredData('courses', [
      {
        id: 1,
        title: 'Tajweed - Quran Recitation',
        instructor: 'Sheikh Abdullah',
        description: 'Master the art of Quranic recitation with proper Tajweed rules',
        duration: '12 months',
        level: 'All Levels',
        progress: 65,
        image: 'tajweed.jpg',
        students: 145,
      },
      {
        id: 2,
        title: 'Hadith Sciences',
        instructor: 'Dr. Aisha',
        description: 'Study of Prophetic traditions and their authentication',
        duration: '6 months',
        level: 'Intermediate',
        progress: 40,
        image: 'hadith.jpg',
        students: 98,
      },
      {
        id: 3,
        title: 'Arabic Language',
        instructor: 'Imam Hassan',
        description: 'Learn classical Arabic for Quranic understanding',
        duration: '9 months',
        level: 'Beginner',
        progress: 80,
        image: 'arabic.jpg',
        students: 210,
      },
      {
        id: 4,
        title: 'Fiqh - Islamic Jurisprudence',
        instructor: 'Sheikh Bilal',
        description: 'Understanding Islamic law and practical rulings',
        duration: '8 months',
        level: 'Advanced',
        progress: 25,
        image: 'fiqh.jpg',
        students: 76,
      },
      {
        id: 5,
        title: 'Seerah - Life of the Prophet',
        instructor: 'Dr. Fatima',
        description: "Comprehensive study of Prophet Muhammad's (PBUH) life",
        duration: '6 months',
        level: 'All Levels',
        progress: 55,
        image: 'seera.jpg',
        students: 187,
      },
    ])
  );

  const [projects, setProjects] = useState<Project[]>(() =>
    getStoredData('projects', [
      {
        id: 1,
        title: 'Mosque Extension',
        description: 'Expanding our prayer hall to accommodate 500+ worshippers for Friday prayers and special occasions',
        goal: 100000,
        raised: 67500,
        image: 'extend.jpg',
        donors: 245,
        daysLeft: 45,
      },
      {
        id: 2,
        title: 'Ramadan Support Program',
        description: 'Providing iftar meals and support during the blessed month to families in need',
        goal: 25000,
        raised: 18750,
        image: 'ramadan.jpg',
        donors: 156,
        daysLeft: 30,
      },
      {
        id: 3,
        title: 'Mosque Renovation',
        description: 'Renovating and beautifying our mosque facilities for better community experience',
        goal: 50000,
        raised: 35000,
        image: 'mosque.jpg',
        donors: 189,
        daysLeft: 60,
      },
    ])
  );

  const [activities, setActivities] = useState<Activity[]>(() =>
    getStoredData('activities', [
      {
        id: 1,
        title: 'Football Tournament',
        date: 'March 15, 2026',
        time: '6:00 PM',
        venue: 'Sports Ground',
        description: 'Annual football tournament for youth and community members',
        status: 'upcoming',
        spotsLeft: 15,
        image: 'football.jpg',
        category: 'Sports',
      },
      {
        id: 2,
        title: 'Islamic Quiz Competition',
        date: 'March 20, 2026',
        time: '2:00 PM',
        venue: 'Community Center',
        description: 'Test your Islamic knowledge in this exciting quiz competition',
        status: 'upcoming',
        spotsLeft: 8,
        image: 'quiz.jpg',
        category: 'Education',
      },
      {
        id: 3,
        title: 'Islamic Seminar',
        date: 'March 25, 2026',
        time: '7:30 PM',
        venue: 'Main Hall',
        description: 'Educational seminar on contemporary Islamic topics',
        status: 'upcoming',
        spotsLeft: 25,
        image: 'seminar.jpg',
        category: 'Education',
      },
    ])
  );

  const [executives, setExecutives] = useState<Executive[]>(() =>
    getStoredData('executives', [
      {
        id: 1,
        name: 'Ahmed Ibrahim',
        position: 'President',
        phone: '+233 (0) 123-4567',
        email: 'president@gmsa.edu.gh',
        photo: 'president.jpg',
      },
      {
        id: 2,
        name: 'Sheikh Abdullah Yusuf',
        position: 'Chief Imam',
        phone: '+233 (0) 234-5678',
        email: 'imam@gmsa.edu.gh',
        photo: 'imam1.jpg',
      },
      {
        id: 3,
        name: 'Imam Hassan Mahmoud',
        position: 'First Deputy Imam',
        phone: '+233 (0) 345-6789',
        email: 'deputy1@gmsa.edu.gh',
        photo: 'imam2.jpg',
      },
      {
        id: 4,
        name: 'Imam Bilal Omar',
        position: 'Second Deputy Imam',
        phone: '+233 (0) 456-7890',
        email: 'deputy2@gmsa.edu.gh',
        photo: 'imam3.jpg',
      },
      {
        id: 5,
        name: 'Khalid Abdullahi',
        position: 'Muazin (Caller of Prayers)',
        phone: '+233 (0) 567-8901',
        email: 'muazin@gmsa.edu.gh',
        photo: 'muazin.jpg',
      },
      {
        id: 6,
        name: 'Fatima Zahra',
        position: 'Secretary',
        phone: '+233 (0) 678-9012',
        email: 'secretary@gmsa.edu.gh',
        photo: 'secretary.jpg',
      },
      {
        id: 7,
        name: 'Aisha Mohammed',
        position: 'Secretary Organizer',
        phone: '+233 (0) 789-0123',
        email: 'organizer@gmsa.edu.gh',
        photo: 'organizer.jpg',
      },
      {
        id: 8,
        name: 'Usman Suleiman',
        position: 'Treasurer',
        phone: '+233 (0) 890-1234',
        email: 'treasurer@gmsa.edu.gh',
        photo: 'treaturer.jpg',
      },
      {
        id: 9,
        name: 'Maryam Idris',
        position: 'Public Relations Officer (P.R.O)',
        phone: '+233 (0) 901-2345',
        email: 'pro@gmsa.edu.gh',
        photo: 'pro.jpg',
      },
      {
        id: 10,
        name: 'Khadija Aminu',
        position: 'Women Commissioner (WOCOM)',
        phone: '+233 (0) 012-3456',
        email: 'wocom@gmsa.edu.gh',
        photo: 'wocom.jpg',
      },
    ])
  );

  const [faqs, setFAQs] = useState<FAQItem[]>(() =>
    getStoredData('faqs', [
      {
        id: 1,
        question: 'What are the mosque prayer times?',
        answer: 'Prayer times vary by season. Please check our home page for current daily prayer times. We also send notifications for prayer time changes.',
      },
      {
        id: 2,
        question: 'How can I enroll in Islamic studies courses?',
        answer: 'Visit the Studies/Courses page and click "Enroll Now" on your desired course. Fill out the registration form and our team will contact you with further details.',
      },
      {
        id: 3,
        question: 'Are donations tax-deductible?',
        answer: 'Yes, our organization is a registered 501(c)(3) nonprofit. All donations are tax-deductible. You will receive a receipt for your records.',
      },
      {
        id: 4,
        question: 'How do I register for events and activities?',
        answer: 'Navigate to the Activities page, select your desired event, and click the "Register" button. You will receive a confirmation email with event details.',
      },
      {
        id: 5,
        question: 'Can I volunteer at the mosque?',
        answer: 'Absolutely! We welcome volunteers for various programs. Please contact our Community Outreach coordinator through the Executives directory.',
      },
      {
        id: 6,
        question: 'Is there parking available?',
        answer: 'Yes, we have a dedicated parking lot with spaces for 100+ vehicles. Additional street parking is available during peak times.',
      },
      {
        id: 7,
        question: 'Do you offer women-only programs?',
        answer: "Yes, we have dedicated women-only programs including study circles, fitness classes, and social events. Contact our Women's Program Director for details.",
      },
      {
        id: 8,
        question: 'How can I watch past lectures?',
        answer: 'All recorded lectures are available in our Lectures section. You can browse by speaker, topic, or date.',
      },
    ])
  );

  useEffect(() => {
    localStorage.setItem('prayerTimes', JSON.stringify(prayerTimes));
  }, [prayerTimes]);

  useEffect(() => {
    localStorage.setItem('lectures', JSON.stringify(lectures));
  }, [lectures]);

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));
  }, [activities]);

  useEffect(() => {
    localStorage.setItem('executives', JSON.stringify(executives));
  }, [executives]);

  useEffect(() => {
    localStorage.setItem('faqs', JSON.stringify(faqs));
  }, [faqs]);

  const updatePrayerTimes = (times: PrayerTime[]) => setPrayerTimes(times);
  const updateLectures = (data: Lecture[]) => setLectures(data);
  const updateCourses = (data: Course[]) => setCourses(data);
  const updateProjects = (data: Project[]) => setProjects(data);
  const updateActivities = (data: Activity[]) => setActivities(data);
  const updateExecutives = (data: Executive[]) => setExecutives(data);
  const updateFAQs = (data: FAQItem[]) => setFAQs(data);

  return (
    <ContentContext.Provider
      value={{
        prayerTimes,
        updatePrayerTimes,
        lectures,
        updateLectures,
        courses,
        updateCourses,
        projects,
        updateProjects,
        activities,
        updateActivities,
        executives,
        updateExecutives,
        faqs,
        updateFAQs,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used within ContentProvider');
  return context;
};
