'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { WHATSAPP_CONFIG } from '@/lib/config';

const WhatsAppButton = () => {
  const handleClick = () => {
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${WHATSAPP_CONFIG.NUMBER}&text=${encodeURIComponent(WHATSAPP_CONFIG.MESSAGE)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <TooltipProvider>
      <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Button
                size="icon"
                className="h-14 w-14 rounded-[12px] bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#25D366] focus:ring-opacity-50"
                onClick={handleClick}
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp className="h-7 w-7" />
              </Button>
            </motion.div>
          </TooltipTrigger>
          <TooltipContent className="bg-[#25D366] text-white border-none">
            <p className="font-medium">Chat on WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default WhatsAppButton;