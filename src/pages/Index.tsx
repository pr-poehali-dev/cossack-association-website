import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ContentSections from '@/components/ContentSections';
import Footer from '@/components/Footer';

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
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ContentSections 
        historyEvents={historyEvents}
        members={members}
        galleryImages={galleryImages}
        blogPosts={blogPosts}
      />
      <Footer />
    </div>
  );
};

export default Index;
