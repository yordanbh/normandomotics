'use client';

import { MessageCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { generateWhatsAppUrl } from '@/lib/utils';
import { COMPANY } from '@/lib/constants';

interface WhatsAppButtonProps {
  productName?: string;
  serviceName?: string;
}

export default function WhatsAppButton({ productName, serviceName }: WhatsAppButtonProps) {
  const pathname = usePathname();

  const getMessage = (): string => {
    if (productName) {
      return `Hola, estoy interesado en el producto: ${productName}. ¿Podrían brindarme más información y cotización?`;
    }
    if (serviceName) {
      return `Hola, me gustaría solicitar información sobre el servicio de ${serviceName}.`;
    }
    if (pathname.startsWith('/productos')) {
      return 'Hola, me gustaría consultar sobre sus productos tecnológicos.';
    }
    if (pathname.startsWith('/servicios')) {
      return 'Hola, me gustaría solicitar información sobre sus servicios.';
    }
    if (pathname.startsWith('/contacto')) {
      return 'Hola, me gustaría hablar con un asesor de Norman Technologies.';
    }
    return COMPANY.whatsapp.defaultMessage;
  };

  const getLabel = (): string => {
    if (productName) return 'Consultar por este producto';
    if (serviceName) return 'Solicitar información';
    if (pathname.startsWith('/contacto')) return 'Hablar con un asesor';
    if (pathname.startsWith('/servicios')) return 'Solicitar información';
    return 'Escríbenos por WhatsApp';
  };

  const whatsappUrl = generateWhatsAppUrl(getMessage());

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label={getLabel()}
      id="whatsapp-float"
    >
      {/* Tooltip */}
      <span className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-surface-dark text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {getLabel()}
      </span>

      {/* Button */}
      <div className="w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-300">
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </div>

      {/* Pulse */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  );
}
