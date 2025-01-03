import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitch } from "./LanguageSwitch";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/5f60ebc6-a997-4571-95dc-f818be241ab5.png"
              alt="FSEG Sfax"
              className="h-8 w-auto"
            />
            <span className="text-xl font-semibold text-primary ml-2">SF2024</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" className="hover:bg-primary/10" asChild>
              <a href="/">{t('nav.home')}</a>
            </Button>
            <Button variant="ghost" className="hover:bg-primary/10" asChild>
              <a href="https://drive.google.com/file/d/1DWHcai4zbxPkfGtr2a22kyeaeJulo6Dl/view" target="_blank" rel="noopener noreferrer">
                {t('nav.schedule')}
              </a>
            </Button>
            <LanguageSwitch />
          </div>
        </div>

        {/* Mobile menu items */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden py-2 space-y-2`}>
          <Button variant="ghost" className="w-full justify-start hover:bg-primary/10" asChild>
            <a href="/">{t('nav.home')}</a>
          </Button>
          <Button variant="ghost" className="w-full justify-start hover:bg-primary/10" asChild>
            <a href="https://drive.google.com/file/d/1DWHcai4zbxPkfGtr2a22kyeaeJulo6Dl/view" target="_blank" rel="noopener noreferrer">
              {t('nav.schedule')}
            </a>
          </Button>
          <div className="px-2">
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}