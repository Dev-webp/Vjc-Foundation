// components/data/causesData.ts

export interface Cause {
    title: string;
    description: string;
    image: string;
  }
  
  export const causes: Cause[] = [
    {
      title: 'Child Education',
      description:
        'We provide access to quality education for underprivileged children to help shape their future.',
      image: '/assets/causes/one.png',
    },
    {
      title: 'Orphan Care & Support',
      description:
        'Empowering orphan kids with care, education, and opportunities to fulfill their life goals.',
        image: '/assets/causes/two.png',
    },
    {
      title: 'Skill Development',
      description:
        'Equipping children with life skills and vocational training for a better tomorrow.',
        image: '/assets/causes/three.png',
    },
    {
      title: 'Health & Nutrition',
      description:
        'Providing nutritious meals and regular health checkups to children for healthy growth.',
        image: '/assets/causes/four.png',
    },
    {
      title: 'Girl Child Empowerment',
      description:
        'Supporting the education and rights of girl children through focused programs and mentorship.',
        image: '/assets/causes/five.png',
    },
    {
      title: 'Mental Well-being',
      description:
        'Fostering emotional health through counseling, group activities, and safe spaces.',
        image: '/assets/causes/six.png',
    },
    {
      title: 'Digital Learning Access',
      description:
        'Introducing digital classrooms and online tools to bridge the education gap.',
        image: '/assets/causes/seven.png',
    },
    {
      title: 'Environment & Sustainability',
      description:
        'Educating children about eco-friendly habits and engaging them in sustainability drives.',
        image: '/assets/causes/eight.png',
    },
    {
      title: 'Community Volunteering',
      description:
        'Connecting people who want to help with children and causes that need them the most.',
        image: '/assets/causes/nine.png',
    },
  ];
  