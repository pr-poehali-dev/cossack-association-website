import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const historyEvents = [
    { year: '1990', title: 'Основание ассоциации', description: 'Создание ассоциации вольных казаков «Держава» для возрождения традиций' },
    { year: '1995', title: 'Первый большой круг', description: 'Проведение первого войскового круга с участием 500 казаков' },
    { year: '2000', title: 'Открытие казачьего центра', description: 'Строительство культурного центра для обучения молодежи' },
    { year: '2010', title: 'Международное признание', description: 'Установление связей с казачьими организациями по всему миру' },
    { year: '2020', title: 'Современность', description: 'Активная работа по сохранению культурного наследия' }
  ];

  const members = [
    { name: 'Игорь Леонидович Сивцов', role: 'Атаман, генерал-лейтенант', description: 'Руководит ассоциацией с весны 2024 года' },
    { name: 'Михаил Сергеевич Волков', role: 'Есаул', description: 'Заместитель атамана, координатор культурных программ' },
    { name: 'Александр Николаевич Орлов', role: 'Хорунжий', description: 'Начальник штаба, организация мероприятий' },
    { name: 'Дмитрий Владимирович Кузнецов', role: 'Старшина', description: 'Работа с молодежью и казачатами' }
  ];

  const galleryImages = [
    { title: 'Войсковой круг 2023', category: 'Мероприятия' },
    { title: 'Праздник казачьей культуры', category: 'Праздники' },
    { title: 'Обучение молодежи', category: 'Образование' },
    { title: 'Конный парад', category: 'Традиции' },
    { title: 'Фольклорный ансамбль', category: 'Культура' },
    { title: 'Историческая реконструкция', category: 'История' }
  ];

  const blogPosts = [
    {
      title: 'Празднование Дня казачества',
      date: '15 ноября 2024',
      excerpt: 'Торжественное мероприятие собрало более 300 участников из разных регионов. В программе были показательные выступления, концерт и награждение отличившихся казаков.',
      category: 'События'
    },
    {
      title: 'Открытие школы казачьей культуры',
      date: '1 октября 2024',
      excerpt: 'При ассоциации открылась новая школа для детей и подростков. Программа включает изучение истории, традиций, фольклора и боевых искусств.',
      category: 'Образование'
    },
    {
      title: 'Участие в международном форуме',
      date: '20 сентября 2024',
      excerpt: 'Делегация ассоциации приняла участие в Международном форуме казачьих организаций. Обсуждались вопросы сохранения традиций и культурного обмена.',
      category: 'Новости'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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

      <section id="home" className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-background" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-primary/10 p-6">
                <Icon name="Shield" className="h-16 w-16 text-primary" />
              </div>
            </div>
            <h1 className="mb-6 text-5xl md:text-7xl font-bold text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
              Ассоциация вольных казаков «Держава»
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Хранители традиций, защитники культурного наследия. Возрождаем и сохраняем казачий дух для будущих поколений.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => scrollToSection('history')}>
                <Icon name="BookOpen" className="mr-2 h-5 w-5" />
                Наша история
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('blog')}>
                <Icon name="Newspaper" className="mr-2 h-5 w-5" />
                Новости
              </Button>
            </div>
          </div>

          <div className="mt-16 mb-12">
            <Card className="border-2 border-primary/30 bg-primary/5">
              <CardHeader className="text-center pb-3">
                <div className="flex justify-center mb-4">
                  <Icon name="Crown" className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-3xl" style={{ fontFamily: 'Cormorant, serif' }}>
                  Атаман ассоциации
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Игорь Леонидович Сивцов
                </h3>
                <p className="text-lg text-primary font-semibold mb-3">
                  Генерал-лейтенант
                </p>
                <p className="text-muted-foreground">
                  Руководит ассоциацией вольных казаков «Держава» с весны 2024 года
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 mb-12">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <Icon name="Heart" className="h-10 w-10 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl" style={{ fontFamily: 'Cormorant, serif' }}>
                  Дорогие земляки
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center max-w-3xl mx-auto">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Этот сайт создан с целью посеять зёрна возрождения казацких традиций, жизненного уклада наших предков, 
                  дабы продолжать славу нашего рода и быть достойными представителями нашей Родины.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 mb-12">
            <Card className="border-2 border-secondary/30 bg-secondary/5">
              <CardHeader className="text-center">
                <Icon name="BookOpen" className="h-10 w-10 text-secondary mx-auto mb-4" />
                <CardTitle className="text-2xl mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                  Из наследия Льва Николаевича Толстого
                </CardTitle>
              </CardHeader>
              <CardContent className="max-w-3xl mx-auto">
                <blockquote className="text-lg text-muted-foreground italic leading-relaxed border-l-4 border-secondary pl-6">
                  <p className="mb-4">
                    Вся история России сделана казаками. Недаром нас зовут европейцы казаками. Народ казаками желает быть. 
                    Голицын при Софии ходил в Крым, осрамился, а от Палея просили пардона крымцы, и Азов взяли 4000 казаков и удержали, – 
                    тот Азов, который с таким трудом взял Пётр и потерял…
                  </p>
                  <footer className="text-sm text-muted-foreground not-italic mt-4">
                    — Лев Николаевич Толстой, Записные книжки, 4 апреля 1870 г.
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 mb-12">
            <Card className="border-2 border-accent/30">
              <CardHeader>
                <Icon name="Feather" className="h-8 w-8 text-accent mb-3" />
                <CardTitle className="text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
                  Линейка
                </CardTitle>
                <CardDescription className="text-xs">Валентин Самофал</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground leading-relaxed space-y-3 whitespace-pre-line text-sm">
                  {`Школьный двор, лежит портфелей груда.
От галстуков светло как от костра.
А привела меня сюда Люда
Моя родная, старшая сестра.

Помнится была жара такая,
Так и хотелось где-то в тень прилечь.
Звучала, над школой разливаясь,
Директора напутственная речь

И тогда, всего не понимая,
Стояли мы дыханье затая,
Впереди, улыбки не скрывая,
Учительница первая моя.

Кончены торжественные сборы
Под звук оркестра мы заходим в класс.
Учительница важно и скоро
Проводит к парте каждого из нас.

Мы садимся, первый раз вдыхаем,
Приятный запах знаний и добра.
Вечной жизни книгу открываем.
Вчерашняя босая детвора.`}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/30">
              <CardHeader>
                <Icon name="Feather" className="h-8 w-8 text-accent mb-3" />
                <CardTitle className="text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
                  Поговорим с тобой родная
                </CardTitle>
                <CardDescription className="text-xs">Валентин Самофал</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground leading-relaxed space-y-3 whitespace-pre-line text-sm">
                  {`Поговорим с тобой родная
О благах жизни, о былой.
О том, что ты совсем другая
И я уже совсем другой.

Нас годы так перетрепали,
Перекроили как могли
И верность искреннюю дали
Взамен утраченной любви.

И пусть с несбывшейся любовью
Умчатся прежние мечты,
И пусть весенней звонкой новью
Не будоражат чувств цветы,

И пусть не так уж сердце бьётся,
Как в те былые времена
И благо просто не даётся,
И горе выпито до дна.

И пусть как в прошлом замерцает
Звезда надежды над тобой
И ничего что ты другая,
И я уже совсем другой.`}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Icon name="Users" className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Братство</CardTitle>
                <CardDescription>Объединяем казаков по всей стране</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Icon name="Award" className="h-10 w-10 text-secondary mb-2" />
                <CardTitle>Традиции</CardTitle>
                <CardDescription>Сохраняем культурное наследие веков</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Icon name="GraduationCap" className="h-10 w-10 text-accent mb-2" />
                <CardTitle>Образование</CardTitle>
                <CardDescription>Обучаем молодое поколение</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;