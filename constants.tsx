
import { Competency, ExperienceItem, LeadershipItem, EducationItem } from './types';

export const CORE_COMPETENCIES: Competency[] = [
  {
    id: 'talent-acquisition',
    title: 'Talent Acquisition',
    description: 'Executing strategic recruitment life-cycles and implementing effective employee retention strategies.',
    icon: 'groups'
  },
  {
    id: 'ops-management',
    title: 'Operations Management',
    description: 'Streamlining business processes and resource allocation for maximum organizational efficiency.',
    icon: 'settings_suggest'
  },
  {
    id: 'leadership',
    title: 'Leadership',
    description: 'Guiding cross-functional teams with proactive communication, mentorship, and conflict resolution.',
    icon: 'diversity_3'
  }
];

export const ALL_COMPETENCIES: Competency[] = [
  ...CORE_COMPETENCIES,
  {
    id: 'data-integrity',
    title: 'Data Integrity & Admin',
    description: 'Ensuring accuracy in HRIS systems, maintaining strict data protocols, and managing confidential records.',
    icon: 'verified_user'
  },
  {
    id: 'compliance',
    title: 'Compliance & Protocol',
    description: 'Adhering to labor laws and internal corporate governance standards to mitigate risk.',
    icon: 'gavel'
  },
  {
    id: 'process-analysis',
    title: 'Process Analysis',
    description: 'Analyzing workflows to optimize efficiency, reduce bottlenecks, and streamline onboarding.',
    icon: 'analytics'
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp1',
    title: 'Intern',
    company: 'Wallmaax Paints Pvt Ltd',
    location: 'Aluva, Kerala',
    period: 'Aug 2023 – Oct 2023',
    icon: 'apartment',
    type: 'relevant',
    description: [
      'Assisted in end-to-end recruitment processes, including candidate screening and interview scheduling.',
      'Maintained and updated employee records in the HR database with 100% accuracy.',
      'Coordinated employee engagement activities and helped streamline internal communication.'
    ]
  },
  {
    id: 'exp2',
    title: 'Project Trainee',
    company: 'Apollo Tyres Ltd',
    location: 'Perambra, Kerala',
    period: 'May 2023 – Jun 2023',
    icon: 'tire_repair',
    type: 'relevant',
    description: [
      'Conducted a comprehensive study on "Organizational Climate" from 100+ employees.',
      'Analyzed survey data using statistical tools to identify trends in morale and productivity.',
      'Presented actionable findings to senior management for internal policy improvements.'
    ]
  },
  {
    id: 'exp3',
    title: 'Microbiologist',
    company: 'Valluvanad Hospital Complex Limited',
    location: 'Ottapalam, Kerala',
    period: '2020 – 2021',
    icon: 'biotech',
    type: 'transferable',
    description: [
      'Executed strict quality control protocols in laboratory settings ensuring 100% compliance.',
      'Managed sensitive data and documentation with high precision, transferable to HR file management.',
      'Collaborated within a multidisciplinary team to streamline workflow processes.'
    ]
  }
];

export const LEADERSHIP: LeadershipItem[] = [
  {
    id: 'lead1',
    title: 'Head of Operations Club',
    category: 'Leadership',
    description: 'Led a student-run organization focused on operational excellence. Organized workshops and industry visits.',
    icon: 'psychology',
    bullets: [
      'Managed a team of 15+ student volunteers.',
      'Coordinated 5 major campus events with 200+ attendees each.'
    ]
  },
  {
    id: 'lead2',
    title: 'Professional Certifications',
    category: 'Development',
    description: 'Continuously upskilling to stay ahead of industry trends and compliance regulations.',
    icon: 'school',
    bullets: [
      'Certified Human Resources Professional (CHRP)',
      'Lean Six Sigma Green Belt',
      'SHRM-CP (In Progress)'
    ]
  },
  {
    id: 'lead3',
    title: 'Communication Training & Volunteering',
    category: 'Engagement',
    description: 'Active participation in community outreach programs and specialized interpersonal skills training.',
    icon: 'volunteer_activism',
    subItems: [
      { title: 'Public Speaking', subtitle: 'Toastmasters International Member' },
      { title: 'Community Mentor', subtitle: 'Mentoring junior HR associates' }
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu1',
    degree: 'MBA in Hospital Management & HR',
    institution: 'University of Kerala',
    period: '2018 - 2020',
    level: 'Postgraduate',
    icon: 'school',
    description: 'Specialized in strategic human resource planning within healthcare institutions, optimizing operational workflows.'
  },
  {
    id: 'edu2',
    degree: 'B.Sc Microbiology',
    institution: 'Calicut University',
    period: '2015 - 2018',
    level: 'Undergraduate',
    icon: 'biotech',
    description: 'Foundation in biological sciences providing a strong technical background for healthcare management roles.'
  }
];
