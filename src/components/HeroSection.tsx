import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
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
  );
};

export default HeroSection;
