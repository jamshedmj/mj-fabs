'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { Input, Button, Typography, Alert } from '@material-tailwind/react';
import emailjs from 'emailjs-com';
import heroImage from '../../public/image/image-8.jpg';
import { toast } from 'react-toastify';

function Hero() {
  const formRef = useRef(null);
  const [email, setEmail] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'service_hh8cckt',
        'template_kwmatum',
        { user_email: email },
        '48spd0v-pW66wa4Dg'
      )
      .then(
        (result: any) => {
          toast.success('Quote request sent!');
          setEmail('');
        },
        (error: any) => {
          toast.error('Failed to send quote request.');
          console.error(error);
        }
      );
  };

  return (
    <header className="p-8 bg-bgDark border-b border-black/10 backdrop-blur">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        {/* Text Content */}
        <div className="order-1 lg:order-1">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-4xl !leading-tight text-3xl"
          >
            &ldquo;Strength You Can Rely On&rdquo;
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            From design to delivery &mdash; precision-engineered steel
            fabrication for every project size.
          </Typography>
          <form onSubmit={sendEmail} ref={formRef} className="grid">
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              <Input
                color="black"
                label="Enter your email"
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                color="gray"
                className="w-full px-4 md:w-[12rem]"
              >
                Get a Quote
              </Button>
            </div>
          </form>
        </div>

        {/* Image */}
        <Image
          src={heroImage}
          alt="Steel fabricator"
          width={800}
          height={600}
          className="order-2 lg:order-2 h-[36rem] w-full rounded-xl object-cover"
          priority
        />
      </div>
    </header>
  );
}

export default Hero;
