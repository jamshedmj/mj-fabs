'use client';

import { useRef, useState } from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';

interface SkillCardProps {
  title: string;
  image: any;
  children: React.ReactNode;
}

export function SkillCard({ image, title, children }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-secondary/50 bg-white/40 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      style={{
        boxShadow:
          '0 4px 30px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.4)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 180px at ${mousePosition.x}px ${mousePosition.y}px, rgba(217, 164, 65, 0.3) 0%, transparent 99%)`,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.2s ease-out',
        }}
      />
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover relative z-10"
      />
      <div className="p-6 text-center relative z-10">
        <Typography variant="h5" color="textDark" className="mb-3">
          {title}
        </Typography>
        <Typography className=" text-sm leading-relaxed">{children}</Typography>
      </div>
    </div>
  );
}

export default SkillCard;
