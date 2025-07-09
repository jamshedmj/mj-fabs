'use client';

import { Typography, Card, CardBody } from '@material-tailwind/react';
import {
  TruckIcon,
  ShieldCheckIcon,
  HeartIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  Cog8ToothIcon,
  CubeTransparentIcon,
} from '@heroicons/react/24/solid';

const INDUSTRIES = [
  { title: 'Automotive', icon: TruckIcon },
  { title: 'Medical & Dental', icon: HeartIcon },
  { title: 'Aerospace', icon: RocketLaunchIcon },
  { title: 'Electronic', icon: CpuChipIcon },
  { title: 'Industrial', icon: Cog8ToothIcon },
  { title: 'Consumer Products', icon: CubeTransparentIcon },
];

export function IndustriesServed() {
  return (
    <section className="py-16 px-8 bg-white border-b border-black/10 backdrop-blur">
      <div className="container mx-auto max-w-screen-xl text-center mb-12">
        <Typography variant="h2" color="blue-gray" className="mb-4 font-bold">
          Industries Served
        </Typography>
        <Typography variant="lead" className="mx-auto max-w-3xl">
          At MJ Fabrications we service a wide range of industries from
          automotive to medical to aerospace and beyond. The products are mainly
          used in customized automated assembly lines, which is part of what
          keeps your business exciting and innovative.
        </Typography>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map(({ title, icon: Icon }, idx) => (
          <Card
            key={idx}
            className="flex items-center gap-4 p-6 shadow-lg border bg-white/30 backdrop-blur-xl hover:scale-105 transition-transform"
          >
            <div className="p-3 rounded-full bg-gray-900 text-white">
              <Icon className="h-6 w-6" />
            </div>
            <CardBody className="text-left p-0">
              <Typography variant="h5" color="blue-gray">
                {title}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default IndustriesServed;
