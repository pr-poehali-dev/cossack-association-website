import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="border-t py-12 bg-accent text-accent-foreground">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Shield" className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-bold text-secondary" style={{ fontFamily: 'Cormorant, serif' }}>
                Держава
              </span>
            </div>
            <p className="text-accent-foreground/80">
              Ассоциация вольных казаков по возрождению и сохранению традиций казачества
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg" style={{ fontFamily: 'Cormorant, serif' }}>Контакты</h3>
            <div className="space-y-2 text-accent-foreground/80">
              <div className="flex items-center gap-2">
                <Icon name="Mail" className="h-4 w-4" />
                <span>info@derzhava.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" className="h-4 w-4" />
                <span>+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" className="h-4 w-4" />
                <span>Москва, Россия</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg" style={{ fontFamily: 'Cormorant, serif' }}>Мы в соцсетях</h3>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="hover:bg-secondary hover:text-secondary-foreground">
                <Icon name="Facebook" className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-secondary hover:text-secondary-foreground">
                <Icon name="Instagram" className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-secondary hover:text-secondary-foreground">
                <Icon name="Youtube" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-accent-foreground/20 text-center text-accent-foreground/60">
          <p>© 2024 Ассоциация вольных казаков «Держава». Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
