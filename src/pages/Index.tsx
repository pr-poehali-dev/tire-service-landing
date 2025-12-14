import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Сварка TIG/Аргон (315 Ампер)",
      description: "Цветные металлы: алюминий, нержавейка, магний, латунь, медь, чугун",
      price: "4500₽/час",
      icon: "Zap"
    },
    {
      title: "Ремонт ГБЦ и агрегатов",
      description: "Головки, поддоны, АКП, МКПП и прочее. Оплата почасовая",
      price: "4500₽/час",
      icon: "Cog"
    },
    {
      title: "Ремонт систем охлаждения",
      description: "Трубки кондиционера, радиаторы, отопители, охладители",
      price: "от 1000₽",
      icon: "Wind"
    },
    {
      title: "Сварка глушителей и выхлопных систем",
      description: "Ремонт и замена элементов выхлопной системы",
      price: "от 1000₽",
      icon: "Flame"
    },
    {
      title: "Слесарные работы",
      description: "Ремонт подвески, замена элементов, диагностика",
      price: "По запросу",
      icon: "Tool"
    },
    {
      title: "Сварка литых дисков",
      description: "Сварка трещин, правка дисков. В среднем 20-30 минут работы",
      price: "от 1000₽",
      icon: "Settings"
    },
    {
      title: "Наплавка фрагмента диска",
      description: "Восстановление поврежденных участков диска",
      price: "от 2500₽",
      icon: "Layers"
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
      title: "Шиномонтажные работы",
      description: "Шиномонтаж от и до. Сезонная смена шин",
      price: "По запросу",
      icon: "Wrench"
    },
    {
      title: "Продажа и прокат шин/дисков",
      description: "Новые и б/у шины, диски. Выкуп, обмен, прокат для постановки на учёт",
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
      <header className="bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white py-8 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg">Асса тигПро</h1>
              <p className="text-lg md:text-xl text-white/90">Автосервис и шиномонтаж. Сварочные работы TIG/Аргон</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Button onClick={handlePhone} size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold gap-2 shadow-lg hover:shadow-xl transition-all whitespace-nowrap">
                <Icon name="Phone" size={20} />
                Позвонить
              </Button>
              <Button onClick={handleWhatsApp} size="lg" className="bg-green-500 hover:bg-green-600 text-white font-semibold gap-2 shadow-lg hover:shadow-xl transition-all whitespace-nowrap">
                <Icon name="MessageCircle" size={20} />
                WhatsApp
              </Button>
              <Button onClick={handleAvito} size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold gap-2 shadow-lg hover:shadow-xl transition-all whitespace-nowrap">
                <Icon name="ExternalLink" size={20} />
                Авито
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-b from-white to-muted/30 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none">
          <svg viewBox="0 0 200 200" fill="currentColor" className="text-secondary">
            <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="4"/>
            <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="100" cy="100" r="20" fill="currentColor"/>
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 - 90) * Math.PI / 180;
              const x1 = 100 + 25 * Math.cos(angle);
              const y1 = 100 + 25 * Math.sin(angle);
              const x2 = 100 + 85 * Math.cos(angle);
              const y2 = 100 + 85 * Math.sin(angle);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="3"/>;
            })}
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">О нас</h2>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Профессиональный автосервис с акцентом на сварочные работы. TIG сварка в защитной среде газа Аргон на мощном трёхфазном аппарате 315 Ампер. 
                Также варим электродом и полуавтоматом. Ремонт всего, что сделано из цветных металлов: нержавеющая сталь, магний, алюминий, латунь, медь и сплавы чугуна.
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary p-6 rounded-lg shadow-md">
                <p className="text-secondary font-semibold text-lg">
                  👆 Для девушек, женщин, бабушек, дедушек — за сварочные пятиминутные работы денег не возьмем! 
                  Если сломалась кастрюлька, тяпка, детская коляска/люлька, велосипед и т.п. — приносите, не стесняйтесь, починим. Максимум за шоколадку/чай/кофе.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/7a057220-fcba-4497-909a-2dda109a6269/files/3b094547-52f8-4889-a846-a0204f0261ed.jpg" 
                alt="Шиномонтаж" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-4xl font-bold text-center text-secondary mb-4">Наши работы</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">До и после ремонта</p>
            <Carousel className="max-w-5xl mx-auto">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2">
                  <Card className="border-2 shadow-lg">
                    <CardHeader className="bg-gradient-to-br from-red-50 to-red-100/50">
                      <CardTitle className="text-red-600 flex items-center gap-2">
                        <Icon name="AlertCircle" size={20} />
                        До ремонта
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <img 
                        src="https://cdn.poehali.dev/projects/7a057220-fcba-4497-909a-2dda109a6269/files/5b47cfa8-dcbd-489d-b95e-07fe2098180c.jpg" 
                        alt="Трещина на диске" 
                        className="w-full h-64 object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2">
                  <Card className="border-2 shadow-lg">
                    <CardHeader className="bg-gradient-to-br from-green-50 to-green-100/50">
                      <CardTitle className="text-green-600 flex items-center gap-2">
                        <Icon name="CheckCircle" size={20} />
                        После ремонта
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <img 
                        src="https://cdn.poehali.dev/projects/7a057220-fcba-4497-909a-2dda109a6269/files/62eaf572-c598-4e9a-8da9-58475ec93a67.jpg" 
                        alt="Отремонтированный диск" 
                        className="w-full h-64 object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2">
                  <Card className="border-2 shadow-lg">
                    <CardHeader className="bg-gradient-to-br from-red-50 to-red-100/50">
                      <CardTitle className="text-red-600 flex items-center gap-2">
                        <Icon name="AlertCircle" size={20} />
                        До ремонта
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <img 
                        src="https://cdn.poehali.dev/projects/7a057220-fcba-4497-909a-2dda109a6269/files/5a72c784-4b99-4873-a481-846a0b922dea.jpg" 
                        alt="Погнутый диск" 
                        className="w-full h-64 object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2">
                  <Card className="border-2 shadow-lg">
                    <CardHeader className="bg-gradient-to-br from-green-50 to-green-100/50">
                      <CardTitle className="text-green-600 flex items-center gap-2">
                        <Icon name="CheckCircle" size={20} />
                        После ремонта
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <img 
                        src="https://cdn.poehali.dev/projects/7a057220-fcba-4497-909a-2dda109a6269/files/dd88f494-0a77-49b2-9410-76a4163009ef.jpg" 
                        alt="Выпрямленный диск" 
                        className="w-full h-64 object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="-left-12" />
              <CarouselNext className="-right-12" />
            </Carousel>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-secondary mb-4">Фотогалерея</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Наше оборудование и рабочий процесс</p>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/projects/7a057220-fcba-4497-909a-2dda109a6269/files/1f8b6a8e-6124-4e5b-ab0e-e63ea5c5b433.jpg" 
                alt="Сварочное оборудование" 
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-white">
                <p className="text-center font-semibold text-secondary">Сварочные работы TIG/Аргон</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/projects/7a057220-fcba-4497-909a-2dda109a6269/files/6a051e8a-a00f-4bb6-bd87-30275703ac18.jpg" 
                alt="Ремонт дисков" 
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-white">
                <p className="text-center font-semibold text-secondary">Ремонт и восстановление дисков</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/projects/7a057220-fcba-4497-909a-2dda109a6269/files/ce6cc317-a72c-4995-8033-537e644ab148.jpg" 
                alt="Шиномонтаж" 
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-white">
                <p className="text-center font-semibold text-secondary">Шиномонтажные работы</p>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center text-secondary mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Полный спектр работ по ремонту дисков и шин</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center bg-gradient-to-r from-muted/50 to-muted/30 p-8 rounded-2xl">
            <p className="text-lg text-foreground mb-4">
              Стоимость сварочных работ в защитной среде газа Аргон: <span className="font-bold text-primary text-2xl">от 4500₽/час</span>
            </p>
            <p className="text-base text-muted-foreground">
              ⚡ В сезон смены шин плотная запись. Рекомендуем записаться заранее!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-secondary mb-4">Как нас найти</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Мы находимся в удобном месте</p>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-2xl mb-8 border-4 border-white">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=37.617700,55.755800&z=10"
                width="100%" 
                height="100%" 
                frameBorder="0"
                className="w-full h-full"
              />
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={28} />
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-lg">Адрес</p>
                    <p className="text-muted-foreground">Уточните при звонке</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={28} />
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-lg">Режим работы</p>
                    <p className="text-muted-foreground">По записи</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={28} />
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-lg">Телефон</p>
                    <p className="text-muted-foreground">+7 (900) 000-00-00</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Готовы записаться?</h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом для записи на обслуживание
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={handlePhone} size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold gap-2 text-lg px-8 py-6 shadow-2xl hover:shadow-primary/50 transition-all">
              <Icon name="Phone" size={24} />
              Позвонить
            </Button>
            <Button onClick={handleWhatsApp} size="lg" className="bg-green-500 hover:bg-green-600 text-white font-semibold gap-2 text-lg px-8 py-6 shadow-2xl hover:shadow-green-500/50 transition-all">
              <Icon name="MessageCircle" size={24} />
              Написать в WhatsApp
            </Button>
            <Button onClick={handleAvito} size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold gap-2 text-lg px-8 py-6 shadow-2xl hover:shadow-blue-500/50 transition-all">
              <Icon name="ExternalLink" size={24} />
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