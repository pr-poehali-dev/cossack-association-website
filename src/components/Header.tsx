import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Shield" className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary" style={{ fontFamily: 'Cormorant, serif' }}>
            Держава
          </span>
        </div>
        <nav className="hidden md:flex gap-6">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === 'home' ? 'text-primary' : 'text-foreground/60'
            }`}
          >
            Главная
          </button>
          <button
            onClick={() => scrollToSection('history')}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === 'history' ? 'text-primary' : 'text-foreground/60'
            }`}
          >
            История
          </button>
          <button
            onClick={() => scrollToSection('members')}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === 'members' ? 'text-primary' : 'text-foreground/60'
            }`}
          >
            Члены
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === 'gallery' ? 'text-primary' : 'text-foreground/60'
            }`}
          >
            Галерея
          </button>
          <button
            onClick={() => scrollToSection('blog')}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === 'blog' ? 'text-primary' : 'text-foreground/60'
            }`}
          >
            Блог
          </button>
        </nav>
        <Button className="bg-primary hover:bg-primary/90">Присоединиться</Button>
      </div>
    </header>
  );
};

export default Header;
