'use client';

import { Typography } from '@material-tailwind/react';
import { SkillCard } from '@/components';
import { getImagePrefix } from '../../utils/utils';

const SKILLS = [
  {
    image: `${getImagePrefix()}image/structure.jpg`,
    title: 'Steel Fabrication & Structure',
    children:
      'From staircases to structural frames and mobile ramps — we build durable, high-quality steel components for industrial, commercial, and decorative use.',
  },
  {
    image: `${getImagePrefix()}image/machine.jpg`,
    title: 'Machine Jobs',
    children:
      'We offer a full suite of machining services including threading, boring, milling, hydraulic repairs, and precision rolling for industrial components.',
  },
  {
    image: `${getImagePrefix()}image/painting.jpg`,
    title: 'Painting & Surface Finishing',
    children:
      'We specialize in powder coating, fireproof coating, electroplating, and chrome/gold plating — for durable and polished results.',
  },
  {
    image: `${getImagePrefix()}image/cuplock.jpg`,
    title: 'Scaffolding & Handrails',
    children:
      'Cup lock, H-frame, and aluminum scaffolding along with custom stainless-steel handrails and glass fittings — fabricated to safety and aesthetic standards.',
  },
  {
    image: `${getImagePrefix()}image/custom.jpg`,
    title: 'Custom Fabrication',
    children:
      'From exhibition stands to decorative items, parking lot structures, and mobile ramps — we tailor steel solutions to your project needs.',
  },
  {
    image: `${getImagePrefix()}image/repair.jpg`,
    title: 'Repair & Maintenance',
    children:
      'Industrial motor winding, plumbing, electrical, and masonry work – all backed by our expertise in heavy-duty machine repair.',
  },
];

export function Skills() {
  return (
    <section className="px-8 py-12 border-b border-black/10 backdrop-blur">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Our Expertise
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          At MJ Fabrications, we deliver precision-engineered steel solutions
          that stand the test of time — from fabrication and finishing to
          on-site maintenance and custom jobs.
        </Typography>
      </div>
      <div className="container mx-auto gap-4 grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
