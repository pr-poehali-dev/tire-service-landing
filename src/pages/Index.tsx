import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Шиномонтажные работы",
      description: "Профессиональный шиномонтаж любой сложности",
      price: "По запросу",
      icon: "Wrench"
    },
    {
      title: "Сварка литых дисков (TIG/аргон)",
      description: "Сварка трещин литого диска, восстановление",
      price: "от 1000₽",
      icon: "Zap"
    },
    {
      title: "Наплавка фрагмента диска",
      description: "Восстановление поврежденных участков диска",
      price: "от 2500₽",
      icon: "Settings"
    },
    {
      title: "Восстановление геометрии дисков",
      description: "Правка дисков, устранение деформаций",
      price: "от 1000₽",
      icon: "Gauge"
    },
    {
      title: "Ремонт восьмерок",
      description: "Устранение биения колеса",
      price: "от 2500₽",
      icon: "Target"
    },
    {
      title: "Ремонт трубок кондиционера и радиаторов",
      description: "Сварка и восстановление трубок охлаждения",
      price: "от 1000₽",
      icon: "Wind"
    },
    {
      title: "Ремонт ГБЦ и агрегатов",
      description: "Головки, поддоны, АКП, МКПП и прочее",
      price: "4500₽/час",
      icon: "Cog"
    },
    {
      title: "Продажа шин и дисков",
      description: "Новые и б/у шины, диски разных размеров",
      price: "По запросу",
      icon: "CircleDot"
    }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/79000000000', '_blank');
  };

  const handlePhone = () => {
    window.location.href = 'tel:+79000000000';
  };

  const handleAvito = () => {
    window.open('https://www.avito.ru', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-secondary text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Шиномонтаж и сварка дисков</h1>
              <p className="text-white/80">Профессиональный ремонт и восстановление</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button onClick={handlePhone} size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                <Icon name="Phone" size={20} />
                <span className="hidden sm:inline">Позвонить</span>
              </Button>
              <Button onClick={handleWhatsApp} size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                <Icon name="MessageCircle" size={20} />
                <span className="hidden sm:inline">WhatsApp</span>
              </Button>
              <Button onClick={handleAvito} size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                <Icon name="ExternalLink" size={20} />
                <span className="hidden sm:inline">Авито</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-4">О нас</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Профессиональный шиномонтаж и сварка дисков в защитной среде газа Аргон. 
                Мощное оборудование 315 Ампер для работы с любыми металлами.
              </p>
              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                <p className="text-secondary font-semibold">
                  👆 Для женщин и пенсионеров мелкий ремонт бесплатно! 
                  Если сломалась кастрюлька, велосипед или коляска — приносите, починим.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/projects/7a057220-fcba-4497-909a-2dda109a6269/files/3b094547-52f8-4889-a846-a0204f0261ed.jpg" 
                alt="Шиномонтаж" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">Наши услуги</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Icon name={service.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Стоимость сварочных работ в защитной среде газа Аргон: <span className="font-bold text-secondary">от 4500₽/час</span>
            </p>
            <p className="text-sm text-muted-foreground">
              В сезон смены шин плотная запись. Рекомендуем записаться заранее!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">Как нас найти</h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-xl mb-6">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=37.617700,55.755800&z=10"
                width="100%" 
                height="100%" 
                frameBorder="0"
                className="w-full h-full"
              />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                <Icon name="MapPin" className="text-primary" size={24} />
                <div>
                  <p className="font-semibold text-secondary">Адрес</p>
                  <p className="text-sm text-muted-foreground">Уточните при звонке</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                <Icon name="Clock" className="text-primary" size={24} />
                <div>
                  <p className="font-semibold text-secondary">Режим работы</p>
                  <p className="text-sm text-muted-foreground">По предварительной записи</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                <Icon name="Phone" className="text-primary" size={24} />
                <div>
                  <p className="font-semibold text-secondary">Телефон</p>
                  <p className="text-sm text-muted-foreground">+7 (900) 000-00-00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы записаться?</h2>
          <p className="text-lg mb-8 text-white/80">
            Свяжитесь с нами удобным способом для записи на обслуживание
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={handlePhone} size="lg" className="bg-primary hover:bg-primary/90 gap-2">
              <Icon name="Phone" size={20} />
              Позвонить
            </Button>
            <Button onClick={handleWhatsApp} size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
              <Icon name="MessageCircle" size={20} />
              Написать в WhatsApp
            </Button>
            <Button onClick={handleAvito} size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
              <Icon name="ExternalLink" size={20} />
              Открыть на Авито
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/90 text-white/60 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Шиномонтаж и сварка дисков. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
