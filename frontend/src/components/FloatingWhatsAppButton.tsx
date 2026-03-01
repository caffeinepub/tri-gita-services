import { SiWhatsapp } from 'react-icons/si';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const WHATSAPP_URL = 'https://wa.me/917838867880';

export default function FloatingWhatsAppButton() {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat with us on WhatsApp"
                        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-forest-600 hover:bg-forest-700 flex items-center justify-center shadow-green-lg hover:scale-110 transition-all duration-200"
                    >
                        <SiWhatsapp className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </a>
                </TooltipTrigger>
                <TooltipContent side="left" className="font-body text-sm">
                    Chat with us on WhatsApp
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
