'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { WHATSAPP_CONFIG } from '@/lib/config';

const WhatsAppButton = () => {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.NUMBER}?text=${encodeURIComponent(WHATSAPP_CONFIG.MESSAGE)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <TooltipProvider>
      <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50 animate-pulse"
              onClick={handleClick}
              aria-label="Chat on WhatsApp"
            >
              <Phone className="h-7 w-7" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-green-500 text-white border-none">
            <p className="font-medium">Chat on WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default WhatsAppButton;