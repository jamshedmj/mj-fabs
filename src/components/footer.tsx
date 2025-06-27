'use client';

import React from 'react';
import { Typography, Button } from '@material-tailwind/react';
import {
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/solid';
import { getImagePrefix } from '../../utils/utils';
import Image from 'next/image';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#skills' },
  { name: 'Industries', href: '#industries' },
  { name: 'Contact Us', href: '#contact' },
];

const SOCIAL_LINKS = [
  { name: 'Facebook', href: 'https://www.facebook.com', icon: GlobeAltIcon },
  { name: 'Twitter', href: 'https://www.twitter.com', icon: GlobeAltIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com', icon: GlobeAltIcon },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  // Animation variants for fade-in
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <footer className="mt-10 px-4 bg-black py-12 bg-bgDark text-textLight">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12"
        >
          {/* Logo and Branding */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src={`${getImagePrefix()}image/mj_white.png`}
              alt="MJ Steel Fabrication"
              width={170}
              height={120}
              className="mx-auto md:mx-0 mb-4"
            />
            <Typography
              variant="small"
              className="text-center md:text-left text-gray-400"
            >
              Precision-engineered steel fabrication for every project size.
            </Typography>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <Typography variant="h6" className="mb-4 font-medium text-white">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map(({ name, href }) => (
                <li key={name}>
                  <Typography
                    as="a"
                    href={href}
                    variant="small"
                    className="font-normal text-gray-400 hover:text-gray-200 transition-colors"
                    onClick={(e: any) => {
                      e.preventDefault();
                      const sectionId = href.substring(1);
                      const section = document.getElementById(sectionId);
                      if (section) {
                        section.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        });
                      }
                    }}
                  >
                    {name}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and Social */}
          <div className="flex flex-col items-center md:items-start">
            <Typography variant="h6" className="mb-4 font-medium text-white">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-2">
              <a href="tel:+1234567890">
                <Button
                  variant="text"
                  color="gray"
                  className="flex items-center gap-2 text-gray-400 hover:text-gray-200"
                >
                  <PhoneIcon className="h-5 w-5" />
                  +1 (234) 567-890
                </Button>
              </a>
              <a href="mailto:info@mjsteelfabrication.com">
                <Button
                  variant="text"
                  color="gray"
                  className="flex items-center gap-2 text-gray-400 hover:text-gray-200"
                >
                  <EnvelopeIcon className="h-5 w-5" />
                  info@mjsteelfabrication.com
                </Button>
              </a>
              {/* <div className="flex gap-4 mt-2">
                {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5 text-gray-400 hover:text-gray-200 transition-colors" />
                  </a>
                ))}
              </div> */}
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="mt-8 border-t border-black/10 pt-6 text-center">
          <Typography variant="small" className="text-gray-400">
            © {CURRENT_YEAR} MJ Steel Fabrication. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
