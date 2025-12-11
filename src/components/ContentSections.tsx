import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HistoryEvent {
  year: string;
  title: string;
  description: string;
}

interface Member {
  name: string;
  role: string;
  description: string;
}

interface GalleryImage {
  title: string;
  category: string;
}

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  category: string;
}

interface ContentSectionsProps {
  historyEvents: HistoryEvent[];
  members: Member[];
  galleryImages: GalleryImage[];
  blogPosts: BlogPost[];
}

const ContentSections = ({ historyEvents, members, galleryImages, blogPosts }: ContentSectionsProps) => {
  return (
    <>
      <section id="history" className="py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              История ассоциации
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Путь от возрождения традиций до современной организации
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20" />
            
            {historyEvents.map((event, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-4`}>
                  <div className="flex-1">
                    <Card className="border-2 hover:border-primary/50 transition-colors">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-2xl font-bold text-primary-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
                              {event.year}
                            </span>
                          </div>
                          <div>
                            <CardTitle className="text-xl">{event.title}</CardTitle>
                          </div>
                        </div>
                        <CardDescription className="mt-2">{event.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Новости Ассоциации
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/30">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded text-sm font-semibold">
                    Историческая публикация
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Icon name="Calendar" className="h-4 w-4" />
                    24 августа 2025 года
                  </span>
                </div>
                <CardTitle className="text-3xl mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                  Михаил Булгаков. Грядущие перспективы, 1919 г.
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Теперь, когда наша несчастная родина находится на самом дне ямы позора и бедствия, в которую ее загнала «великая социальная революция», у многих из нас все чаще и чаще начинает являться одна и та же мысль.
                  </p>
                  <p>
                    Эта мысль настойчивая.
                  </p>
                  <p>
                    Она – темная, мрачная, встает в сознании и властно требует ответа.
                  </p>
                  <p>
                    Она проста: а что же будет с нами дальше?..
                  </p>
                  <p>
                    Настоящее перед нашими глазами. Оно таково, что глаза эти хочется закрыть.
                  </p>
                  <p>
                    Не видеть!
                  </p>
                  <p>
                    Остается будущее. Загадочное, неизвестное будущее.
                  </p>
                  <p>
                    В самом деле: что же будет с нами?..
                  </p>
                  <p>
                    На Западе кончилась великая война великих народов. Теперь они зализывают свои раны.
                  </p>
                  <p>
                    Конечно, они поправятся, очень скоро поправятся!
                  </p>
                  <p>
                    И всем, у кого, наконец, прояснился ум, всем, кто не верит жалкому бреду, что наша злостная болезнь перекинется на Запад и поразит его, станет ясен тот мощный подъем титанической работы мира, который вознесет западные страны на невиданную еще высоту мирного могущества.
                  </p>
                  <p>
                    А мы?
                  </p>
                  <p>
                    Мы опоздаем…
                  </p>
                  <p>
                    Мы так сильно опоздаем, что никто из современных пророков, пожалуй, не скажет, когда же, наконец, мы догоним их и догоним ли вообще?
                  </p>
                  <p>
                    Ибо мы наказаны… Расплата началась…
                  </p>
                  <p>
                    И вот пока там, на Западе, будут стучать машины созидания, у нас от края и до края страны будут стучать пулеметы.
                  </p>
                  <p>
                    Безумство двух последних лет толкнуло нас на страшный путь, и нам нет остановки, нет передышки. Мы начали пить чашу наказания и выпьем ее до конца.
                  </p>
                  <p>
                    Там, на Западе, будут сверкать безчисленные электрические огни, летчики будут сверлить покоренный воздух, там будут строить, исследовать, печатать, учиться…
                  </p>
                  <p>
                    А мы… Мы будем драться.
                  </p>
                  <p>
                    Ибо нет никакой силы, которая могла бы изменить это…
                  </p>
                  <p>
                    Нужно будет платить за прошлое неимоверным трудом, суровой бедностью жизни.
                  </p>
                  <p>
                    Платить и в переносном, и в буквальном смысле слова.
                  </p>
                  <p>
                    Платить за безумство мартовских дней, за безумство дней октябрьских, за самостийных изменников, за развращение рабочих, за Брест, за безумное пользование станком для печатания денег… за все!
                  </p>
                  <p>
                    И мы выплатим.
                  </p>
                  <p>
                    И только тогда, когда будет уже очень поздно, мы вновь начнем кой-что созидать, чтобы стать полноправными, чтобы нас впустили опять в версальские залы.
                  </p>
                  <p>
                    Кто увидит эти светлые дни?
                  </p>
                  <p>
                    Мы?
                  </p>
                  <p>
                    О нет! Наши дети, быть может, а быть может, и внуки, ибо размах истории широк и десятилетия она так же легко «читает», как и отдельные годы.
                  </p>
                  <p>
                    И мы, представители неудачливого поколения, умирая еще в чине жалких банкротов, вынуждены будем сказать нашим детям:
                  </p>
                  <p className="font-semibold">
                    – Платите, платите честно и вечно помните социальную революцию!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="members" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Руководство
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Атаманы и старшины, ведущие ассоциацию к процветанию
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {members.map((member, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="User" className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-1" style={{ fontFamily: 'Cormorant, serif' }}>
                        {member.name}
                      </CardTitle>
                      <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-semibold mb-2">
                        {member.role}
                      </div>
                      <CardDescription className="text-base">{member.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Галерея
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Моменты нашей жизни: праздники, обучение, традиции
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <Card key={index} className="group overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-xl cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon name="Camera" className="h-16 w-16 text-muted-foreground/50" />
                </div>
                <CardHeader>
                  <div className="inline-block px-2 py-1 bg-primary/10 text-primary rounded text-xs font-semibold mb-2 w-fit">
                    {image.category}
                  </div>
                  <CardTitle className="text-lg">{image.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Новости и события
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Следите за жизнью ассоциации
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer group">
                <div className="aspect-video bg-gradient-to-br from-accent/20 via-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name="FileText" className="h-16 w-16 text-muted-foreground/50 group-hover:scale-110 transition-transform" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-secondary/20 text-secondary-foreground rounded text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Icon name="Calendar" className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0 text-primary">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSections;