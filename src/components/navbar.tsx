'use client';

import React from 'react';
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import {
  UserCircleIcon,
  CogIcon,
  HomeIcon,
  XMarkIcon,
  PhoneIcon,
  Bars3Icon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/solid';
import { getImagePrefix } from '../../utils/utils';
import Image from 'next/image';
import { motion } from 'framer-motion';

const NAV_MENU = [
  {
    name: 'Home',
    icon: HomeIcon,
    href: '#home',
  },
  {
    name: 'Services',
    icon: WrenchScrewdriverIcon,
    href: '#skills',
  },
  {
    name: 'Industries',
    icon: BuildingOffice2Icon,
    href: '#industries',
  },
  {
    name: 'Contact Us',
    icon: PhoneIcon,
    href: '#contact',
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const sectionId = href.substring(1); // Remove the '#' to get the ID
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <motion.li
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Typography
        as="a"
        href={href || '#'}
        onClick={handleClick}
        variant="paragraph"
        color="textDark"
        className="flex items-center gap-2 font-medium text-textDark"
        aria-label={`Navigate to ${href?.substring(1) || 'section'}`}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child) && child.type === NAV_MENU[0].icon
            ? React.cloneElement(child as React.ReactElement, {
                className: 'h-5 w-5 text-textDark transition-transform',
              })
            : child
        )}
      </Typography>
    </motion.li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      className="border-0 sticky top-0 z-50 bg-bgDark border-b border-black/10 backdrop-blur-200 py-2 px-4 lg:px-8"
    >
      <div className="container mx-auto flex items-center justify-between lg:justify-between">
        <div className="flex items-center justify-center w-full lg:w-auto">
          <Image
            src={`${getImagePrefix()}image/mj.png`}
            alt="MJ Steel Fabrication"
            width={170}
            height={120}
            className="mx-auto lg:mx-0"
          />
        </div>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5 text-textDark" />
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <a href="tel:+971559591480">
            <Button
              variant="text"
              color="gray"
              className="flex items-center gap-2"
            >
              <DevicePhoneMobileIcon className="h-5 w-5 text-textDark" />
              +971 55 959 1480
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-secondary/50 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5 text-textDark" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex justify-center w-full align-middle text-center gap-2">
            <a href="tel:+971 55 959 1480">
              <Button
                variant="text"
                color="gray"
                className="flex items-center gap-2"
              >
                <DevicePhoneMobileIcon className="h-5 w-5 text-textDark" />
                +971 55 959 1480
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
