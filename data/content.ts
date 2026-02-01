
import { Unit, QuestionType } from '../types';

export const UNITS: Unit[] = [
  {
    id: 'unit-1',
    title: 'Unit 1: Scam Basics',
    description: 'Foundation of cybersecurity awareness.',
    lessons: [
      {
        id: 'u1-l1',
        unitId: 'unit-1',
        title: 'The Cyber Mindset',
        description: 'Learn why hackers target everyone.',
        xpReward: 50,
        questions: [
          {
            id: 'q1',
            type: QuestionType.MCQ,
            title: 'Who is the most common target for cyber scams?',
            content: 'Hackers often choose their targets based on specific criteria.',
            options: ['Only rich people', 'Only tech-illiterate elders', 'Anyone with an internet presence', 'Large corporations only'],
            correctAnswer: 2,
            explanation: 'In the digital age, everyone is a potential target. Hackers use automated tools to find any vulnerability.',
            redFlags: ['Unsolicited messages', 'Vague threats'],
            safetyTip: 'Assume every unexpected digital interaction could be a test of your security.',
            difficulty: 1
          },
          {
            id: 'q2',
            type: QuestionType.TRUE_FALSE,
            title: 'Is this true?',
            content: 'Scammers always use poor grammar and spelling in their messages.',
            correctAnswer: false,
            explanation: 'Modern scams, especially AI-generated ones, can be perfectly written and very professional.',
            redFlags: ['Over-reliance on "professionalism" to hide intent'],
            safetyTip: 'Trust the sender\'s identity, not just their grammar.',
            difficulty: 1
          }
        ]
      },
      {
        id: 'u1-l2',
        unitId: 'unit-1',
        title: 'Red Flag Detection',
        description: 'Spotting the common signs of a scam.',
        xpReward: 60,
        questions: [
          {
            id: 'q3',
            type: QuestionType.INBOX_SIM,
            title: 'Incoming SMS',
            content: {
              sender: '+1-800-URGENT',
              message: 'FINAL NOTICE: Your Netflix subscription has failed. Update payment immediately at http://net-flix-pay-secure.com or your account will be deleted in 2 hours.'
            },
            options: ['Ignore', 'Click Link', 'Report Scam', 'Verify on Netflix App'],
            correctAnswer: 3,
            explanation: 'The sense of urgency and the suspicious URL (net-flix-pay-secure.com) are major red flags.',
            redFlags: ['High urgency', 'Suspicious URL', 'Threat of account deletion'],
            safetyTip: 'Always use official apps or bookmarks to visit account payment pages.',
            difficulty: 2
          }
        ]
      }
    ]
  },
  {
    id: 'unit-2',
    title: 'Unit 2: SMS Fraud & OTP Scam',
    description: 'Master the art of protecting your 2FA.',
    lessons: [
      {
        id: 'u2-l1',
        unitId: 'unit-2',
        title: 'The OTP Trap',
        description: 'Why you should never share your code.',
        xpReward: 100,
        questions: [
          {
            id: 'q4',
            type: QuestionType.SCENARIO_CHOICE,
            title: 'The "Accidental" Code',
            content: 'A stranger calls you saying they accidentally sent their Amazon verification code to your phone number and asks you to read it back to them so they can log in.',
            options: [
              'Give them the code to be helpful',
              'Ask for their ID first',
              'Hang up and ignore',
              'Tell them you didn\'t receive anything'
            ],
            correctAnswer: 2,
            explanation: 'This is a classic "Takeover Scam". They are trying to log into YOUR account and triggered an OTP to your phone.',
            redFlags: ['Stranger asking for a code', 'Request for 2FA shared via voice'],
            safetyTip: 'Never share an OTP with anyone, including bank staff or helpful strangers.',
            difficulty: 3
          }
        ]
      }
    ]
  }
];

// Mock expansion for remaining units to fulfill MVP requirements
for (let i = 3; i <= 10; i++) {
  UNITS.push({
    id: `unit-${i}`,
    title: `Unit ${i}: ${['Phishing Emails', 'Fake Calls', 'Social Media Fraud', 'Malware', 'Payment Scams', 'Advanced Social Engineering', 'Device Security', 'Mastery Test'][i - 3]}`,
    description: 'Expanding your defense perimeter.',
    lessons: [
      {
        id: `u${i}-l1`,
        unitId: `unit-${i}`,
        title: 'New Mission Data',
        description: 'Analyzing recent threat vectors.',
        xpReward: 100,
        questions: [
          {
            id: `q-gen-${i}`,
            type: QuestionType.MCQ,
            title: 'Adaptive Defense Question',
            content: 'A suspicious link is found in a work email. What is the safest action?',
            options: ['Click to see if it is blocked', 'Forward to IT', 'Reply to sender asking if it is safe', 'Hover to inspect link URL'],
            correctAnswer: 3,
            explanation: 'Inspecting the URL by hovering is the first step of safe browsing.',
            redFlags: ['Mismatched link text and destination'],
            safetyTip: 'When in doubt, don\'t click.',
            difficulty: 2
          }
        ]
      }
    ]
  });
}

export const BADGES = [
  { id: 'b1', name: 'Beginner Defender', description: 'Completed your first lesson.', icon: '🛡️' },
  { id: 'b2', name: 'OTP Protector', description: 'Successfully identified an OTP scam.', icon: '🔑' },
  { id: 'b3', name: 'Phishing Hunter', description: 'Spotted 5 suspicious links.', icon: '🎣' },
  { id: 'b4', name: 'Scam Call Blocker', description: 'Defended against a fake support call.', icon: '📞' },
  { id: 'b5', name: 'Cyber Master', description: 'Reached Level 10.', icon: '👑' }
];
