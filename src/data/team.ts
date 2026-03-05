import { TeamMember } from '@/types/models';

const image = (seed: string) => `https://picsum.photos/seed/${seed}/800/1000`;

export const teamMembers: TeamMember[] = [
  {
    id: 'ted-misztela',
    name: 'TED MISZTELA',
    role: 'Head Coach',
    bio: 'Ted leads the academy performance pathway and brings decades of competitive coaching experience to player development at every stage.',
    specialties: ['High-performance coaching', 'Match analytics', 'Coach mentoring'],
    certifications: ['Tennis Canada Certified', 'Club Pro Level 3'],
    contactCTA: 'Contact Ted',
    imageUrl: image('ted')
  },
  {
    id: 'jamie-power',
    name: 'JAMIE POWER',
    role: 'Head Coach',
    bio: 'Jamie specializes in adult progression programs and builds confident athletes through clear technical frameworks and game situations.',
    specialties: ['Adult development', 'Serve mechanics', 'Group program design'],
    certifications: ['TPA Certified', 'Safe Sport'],
    contactCTA: 'Contact Jamie',
    imageUrl: image('jamie')
  },
  {
    id: 'kevin-hall',
    name: 'KEVIN HALL',
    role: 'Club Director',
    bio: 'Kevin oversees strategic operations and ensures every Headstart member receives a professional and welcoming club experience.',
    specialties: ['Club operations', 'Program pathways', 'Community growth'],
    certifications: ['Club Director Certification'],
    contactCTA: 'Contact Kevin',
    imageUrl: image('kevin')
  },
  {
    id: 'liam-macdonald',
    name: 'LIAM MACDONALD',
    role: 'Club Professional',
    bio: 'Liam runs league operations and tactical session planning for rising competitive juniors and adults.',
    specialties: ['League play', 'Doubles strategy', 'Junior transition training'],
    certifications: ['Club Pro Level 2'],
    contactCTA: 'Contact Liam',
    imageUrl: image('liam')
  },
  {
    id: 'don-driscoll',
    name: 'DON DRISCOLL',
    role: 'Club Professional',
    bio: 'Don is known for technical detail and consistent progression systems tailored to each athlete.',
    specialties: ['Technical correction', 'Clinics', 'Shot reliability'],
    certifications: ['Club Pro Certification'],
    contactCTA: 'Contact Don',
    imageUrl: image('don')
  },
  {
    id: 'mackenzie-grace-frame',
    name: 'MacKenzie Grace Frame',
    role: 'TPA Certified Instructor',
    bio: 'MacKenzie creates engaging junior sessions and helps new players build confidence quickly.',
    specialties: ['Junior pathways', 'Intro tennis', 'Motor skills'],
    certifications: ['TPA Certified Instructor'],
    contactCTA: 'Contact MacKenzie',
    imageUrl: image('mackenzie')
  },
  {
    id: 'carlos-eduardo-castillo',
    name: 'Carlos Eduardo Castillo',
    role: 'Club Professional',
    bio: 'Carlos focuses on high-intensity training and elite match preparation.',
    specialties: ['Elite conditioning', 'Point construction', 'Competition prep'],
    certifications: ['Club Pro Level 2'],
    contactCTA: 'Contact Carlos',
    imageUrl: image('carlos')
  },
  {
    id: 'victor-imafidon',
    name: 'Victor Imafidon',
    role: 'Club Professional',
    bio: 'Victor delivers private sessions with structured progression plans across all levels.',
    specialties: ['Private lessons', 'Footwork systems', 'Serve patterns'],
    certifications: ['Club Pro Certification'],
    contactCTA: 'Contact Victor',
    imageUrl: image('victor')
  },
  {
    id: 'rishabh-simeon-bandari',
    name: 'RISHABH SIMEON BANDARI',
    role: 'Club Professional',
    bio: 'Rishabh blends technical development with competitive match simulation in junior groups.',
    specialties: ['Junior competition', 'Rally tolerance', 'Tactical IQ'],
    certifications: ['Club Pro Level 1'],
    contactCTA: 'Contact Rishabh',
    imageUrl: image('rishabh')
  },
  {
    id: 'matt-vanamburg',
    name: 'MATT VANAMBURG',
    role: 'Club Professional 2',
    bio: 'Matt helps players transition from rec to tournament readiness with measurable progress tracking.',
    specialties: ['Performance tracking', 'Transition pathway', 'Conditioning'],
    certifications: ['Club Professional 2'],
    contactCTA: 'Contact Matt',
    imageUrl: image('matt')
  },
  {
    id: 'william-hardman',
    name: 'WILLIAM HARDMAN',
    role: 'Club Professional',
    bio: 'William supports adult and junior training with a calm and technical coaching approach.',
    specialties: ['Stroke production', 'Confidence building', 'Program support'],
    certifications: ['Club Pro Certification'],
    contactCTA: 'Contact William',
    imageUrl: image('william')
  },
  {
    id: 'tennis-tim',
    name: 'TENNIS TIM',
    role: 'Club Professional',
    bio: 'Tim keeps junior sessions dynamic, positive, and development-focused.',
    specialties: ['Kids tennis', 'Game-based learning', 'Session energy'],
    certifications: ['TPA Junior Specialist'],
    contactCTA: 'Contact Tim',
    imageUrl: image('tim')
  }
];
