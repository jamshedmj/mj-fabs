'use client';

import Image from 'next/image';
import { Input, Button, Typography } from '@material-tailwind/react';
import { getImagePrefix } from '../../utils/utils';

function Hero() {
  return (
    <header className="p-8 bg-bgDark border-b border-black/10 backdrop-blur">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-4xl !leading-tight text-3xl"
          >
            "Strength You Can Rely On"
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            From design to delivery – precision-engineered steel fabrication for
            every project size.
          </Typography>
          <div className="grid">
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input color="gray" label="Enter your email" size="lg" />
              <Button color="gray" className="w-full px-4 md:w-[12rem]">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src={`${getImagePrefix()}image/image-8.jpg`}
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
