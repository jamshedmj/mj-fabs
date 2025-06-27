'use client';

import React from 'react';
import Image from 'next/image';
import { Typography, Card, CardBody, Avatar } from '@material-tailwind/react';
import { getImagePrefix } from '../../utils/utils';

const TESTIMONIALS = [
  {
    title: 'Custom Staircase & Platform',
    quote:
      'MJ Fabrications delivered a flawless steel staircase and platform for our factory extension. Their workmanship, precision, and timely execution were top-notch.',
    name: 'Ahmed Raza – Site Manager',
    company: 'Al-Falah Engineering',
    avatar: `${getImagePrefix()}image/anonymous.jpg`,
    image: `${getImagePrefix()}image/anonymous.jpg`,
  },
  {
    title: 'Steel Handrails & Safety Grills',
    quote:
      'Their team fabricated and installed stainless steel handrails and grills across multiple residential towers we manage. Excellent finishing and secure fitting.',
    name: 'Sana Iqbal – Operations Lead',
    company: 'UrbanLine Developers',
    avatar: `${getImagePrefix()}image/anonymous.jpg`,
    image: `${getImagePrefix()}image/anonymous.jpg`,
  },
  {
    title: 'Mobile Scaffolding & Painting Booth',
    quote:
      'We hired MJ Fabrications to build mobile scaffolding units and a custom painting booth structure — solid fabrication and reliable service.',
    name: 'Bilal Hussain – Project Engineer',
    company: 'TechBuild Solutions',
    avatar: `${getImagePrefix()}image/anonymous.jpg`,
    image: `${getImagePrefix()}image/anonymous.jpg`,
  },
];

export function Testimonial() {
  const [active, setActive] = React.useState(0);
  const testimonial = TESTIMONIALS[active];

  return (
    <section className="pb-12 pt-6 px-8 lg:pb-24 border-b border-black/10 backdrop-blur">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            What Our Clients Say
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            Discover what clients have to say about their experiences working
            with MJ Fabrications. Your satisfaction is our success.
          </Typography>
        </div>

        <Card color="transparent" shadow={false} className="py-8 lg:flex-row">
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between">
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
              >
                {testimonial.title}
              </Typography>
              <Typography className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
                {testimonial.quote}
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-0.5">
                {testimonial.name}
              </Typography>
              <Typography
                variant="small"
                className="font-normal mb-5 !text-gray-500"
              >
                {testimonial.company}
              </Typography>

              <div className="flex items-center gap-4">
                {TESTIMONIALS.map((item, index) => (
                  <React.Fragment key={index}>
                    <Avatar
                      variant="rounded"
                      src={item.avatar}
                      alt={item.name}
                      size="sm"
                      className={`cursor-pointer transition-opacity ${
                        active === index ? 'opacity-100' : 'opacity-50'
                      }`}
                      onClick={() => setActive(index)}
                    />
                    {index < TESTIMONIALS.length - 1 && (
                      <div className="w-[1px] h-[36px] bg-blue-gray-100"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                alt="testimonial"
                src={testimonial.image}
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
