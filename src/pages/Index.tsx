import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("planets");

  const planets = [
    {
      name: "Юпитер",
      type: "Газовый гигант",
      distance: "778 млн км",
      mass: "1.898 × 10²⁷ кг",
      description: "Крупнейшая планета Солнечной системы с мощными штормами",
      image: "https://cdn.poehali.dev/projects/615a317a-bb2b-4fd6-8dc3-ec9a43e675cd/files/4badd763-8f9b-4fdc-a152-d78270a038ae.jpg",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Сатурн",
      type: "Газовый гигант",
      distance: "1.4 млрд км",
      mass: "5.683 × 10²⁶ кг",
      description: "Известен своими великолепными кольцами изо льда и камней",
      image: "https://cdn.poehali.dev/projects/615a317a-bb2b-4fd6-8dc3-ec9a43e675cd/files/cc01814a-8141-4442-9883-a8e50b4e3823.jpg",
      color: "from-yellow-500 to-amber-600"
    },
    {
      name: "Нептун",
      type: "Ледяной гигант",
      distance: "4.5 млрд км",
      mass: "1.024 × 10²⁶ кг",
      description: "Самые быстрые ветра в Солнечной системе - до 2100 км/ч",
      image: "https://cdn.poehali.dev/projects/615a317a-bb2b-4fd6-8dc3-ec9a43e675cd/files/cc01814a-8141-4442-9883-a8e50b4e3823.jpg",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  const galaxies = [
    {
      name: "Млечный Путь",
      type: "Спиральная галактика",
      diameter: "100,000 св. лет",
      stars: "200-400 млрд",
      description: "Наша родная галактика содержащая Солнечную систему",
      image: "https://cdn.poehali.dev/projects/615a317a-bb2b-4fd6-8dc3-ec9a43e675cd/files/ed83a9d3-cee3-44d2-9bb4-f685260eb13d.jpg"
    },
    {
      name: "Андромеда",
      type: "Спиральная галактика",
      diameter: "220,000 св. лет",
      stars: "1 триллион",
      description: "Ближайшая к нам крупная галактика, столкнется с Млечным Путем через 4.5 млрд лет",
      image: "https://cdn.poehali.dev/projects/615a317a-bb2b-4fd6-8dc3-ec9a43e675cd/files/ed83a9d3-cee3-44d2-9bb4-f685260eb13d.jpg"
    }
  ];

  const stars = [
    { name: "Солнце", type: "G-тип", temp: "5,778 K", luminosity: "1.0" },
    { name: "Сириус", type: "A-тип", temp: "9,940 K", luminosity: "25.4" },
    { name: "Бетельгейзе", type: "M-тип", temp: "3,500 K", luminosity: "100,000" },
    { name: "Проксима", type: "M-тип", temp: "3,042 K", luminosity: "0.0017" }
  ];

  const research = [
    {
      title: "Телескоп Джеймса Уэбба",
      status: "Активен",
      year: "2021",
      achievement: "Обнаружение экзопланет с признаками атмосферы"
    },
    {
      title: "Миссия Voyager",
      status: "Активен",
      year: "1977",
      achievement: "Первый объект созданный человеком покинувший Солнечную систему"
    },
    {
      title: "Марсоход Perseverance",
      status: "Активен",
      year: "2020",
      achievement: "Поиск признаков древней жизни на Марсе"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="star-field fixed inset-0 opacity-50 animate-twinkle" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />

      <div className="relative z-10">
        <header className="border-b border-primary/20 backdrop-blur-md bg-background/80 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
                  <Icon name="Telescope" className="text-background" size={24} />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold glow-cyan">БИБЛИОТЕКА ВСЕЛЕННОЙ</h1>
                  <p className="text-xs text-muted-foreground">Исследуйте бесконечность космоса</p>
                </div>
              </div>
              
              <Button className="glow-box-cyan bg-primary hover:bg-primary/80 text-background font-semibold">
                <Icon name="Map" size={18} className="mr-2" />
                3D-Карта
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="text-center mb-12 space-y-4">
            <Badge className="glow-box-purple bg-secondary/20 text-secondary border-secondary/50 text-sm px-4 py-2">
              <Icon name="Sparkles" size={14} className="mr-2" />
              Интерактивная визуализация
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold glow-purple animate-float">
              Познайте тайны космоса
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Путешествуйте по галактикам, изучайте планеты и открывайте новые звездные системы
            </p>
          </div>

          <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8 bg-card/50 backdrop-blur-sm p-2 h-auto gap-2">
              <TabsTrigger 
                value="map" 
                className="data-[state=active]:bg-primary data-[state=active]:text-background data-[state=active]:glow-box-cyan flex flex-col gap-1 py-3"
              >
                <Icon name="Map" size={20} />
                <span className="text-xs">3D-Карта</span>
              </TabsTrigger>
              <TabsTrigger 
                value="planets"
                className="data-[state=active]:bg-primary data-[state=active]:text-background data-[state=active]:glow-box-cyan flex flex-col gap-1 py-3"
              >
                <Icon name="Globe" size={20} />
                <span className="text-xs">Планеты</span>
              </TabsTrigger>
              <TabsTrigger 
                value="galaxies"
                className="data-[state=active]:bg-primary data-[state=active]:text-background data-[state=active]:glow-box-cyan flex flex-col gap-1 py-3"
              >
                <Icon name="Sparkles" size={20} />
                <span className="text-xs">Галактики</span>
              </TabsTrigger>
              <TabsTrigger 
                value="stars"
                className="data-[state=active]:bg-primary data-[state=active]:text-background data-[state=active]:glow-box-cyan flex flex-col gap-1 py-3"
              >
                <Icon name="Star" size={20} />
                <span className="text-xs">Звёзды</span>
              </TabsTrigger>
              <TabsTrigger 
                value="research"
                className="data-[state=active]:bg-primary data-[state=active]:text-background data-[state=active]:glow-box-cyan flex flex-col gap-1 py-3"
              >
                <Icon name="Rocket" size={20} />
                <span className="text-xs">Исследования</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="map" className="space-y-6">
              <Card className="cosmic-gradient border-primary/30 glow-box-cyan overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="relative w-64 h-64 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 animate-rotate-slow" />
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-secondary/40 to-primary/40 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
                    <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/50 to-secondary/50 animate-pulse-glow" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <Icon name="Globe" size={64} className="text-primary glow-cyan" />
                    </div>
                    
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full animate-orbit" />
                    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-secondary rounded-full animate-orbit" style={{ animationDuration: '15s', animationDelay: '3s' }} />
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full animate-orbit" style={{ animationDuration: '8s', animationDelay: '1s' }} />
                  </div>
                  <h3 className="text-3xl font-bold mb-3 glow-cyan">Интерактивная 3D-Карта Вселенной</h3>
                  <p className="text-muted-foreground mb-6">Исследуйте космос в трех измерениях с анимированными орбитами и вращениями</p>
                  <Button size="lg" className="glow-box-cyan bg-primary hover:bg-primary/80 text-background">
                    <Icon name="Eye" size={20} className="mr-2" />
                    Запустить визуализацию
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="planets" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {planets.map((planet, index) => (
                  <Card 
                    key={planet.name}
                    className="cosmic-gradient border-primary/30 glow-box-cyan overflow-hidden group hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${planet.color} opacity-50 mix-blend-overlay`} />
                      <img 
                        src={planet.image} 
                        alt={planet.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary/90 text-background border-0">
                          {planet.type}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-2 glow-cyan">{planet.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{planet.description}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Расстояние:</span>
                          <span className="font-semibold text-primary">{planet.distance}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Масса:</span>
                          <span className="font-semibold text-secondary">{planet.mass}</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-primary/20 hover:bg-primary/30 border border-primary/50">
                        <Icon name="Info" size={16} className="mr-2" />
                        Подробнее
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="galaxies" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {galaxies.map((galaxy, index) => (
                  <Card 
                    key={galaxy.name}
                    className="cosmic-gradient border-secondary/30 glow-box-purple overflow-hidden group hover:scale-105 transition-all duration-300"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={galaxy.image} 
                        alt={galaxy.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 animate-rotate-slow"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge className="bg-secondary/90 text-background border-0 mb-2">
                          {galaxy.type}
                        </Badge>
                        <h3 className="text-3xl font-bold glow-purple">{galaxy.name}</h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground mb-4">{galaxy.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground block mb-1">Диаметр</span>
                          <span className="font-semibold text-secondary text-lg">{galaxy.diameter}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground block mb-1">Звёзд</span>
                          <span className="font-semibold text-primary text-lg">{galaxy.stars}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="stars" className="space-y-6">
              <Card className="cosmic-gradient border-primary/30 glow-box-cyan">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 glow-cyan flex items-center gap-2">
                    <Icon name="Star" size={24} />
                    Классификация звёзд
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-primary/20">
                          <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Название</th>
                          <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Тип</th>
                          <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Температура</th>
                          <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Светимость</th>
                        </tr>
                      </thead>
                      <tbody>
                        {stars.map((star, index) => (
                          <tr 
                            key={star.name} 
                            className="border-b border-primary/10 hover:bg-primary/5 transition-colors"
                          >
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                                <span className="font-semibold">{star.name}</span>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <Badge className="bg-secondary/20 text-secondary border-secondary/50">
                                {star.type}
                              </Badge>
                            </td>
                            <td className="py-4 px-4 text-primary font-mono">{star.temp}</td>
                            <td className="py-4 px-4 text-secondary font-mono">{star.luminosity}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {research.map((project, index) => (
                  <Card 
                    key={project.title}
                    className="cosmic-gradient border-primary/30 glow-box-cyan group hover:scale-105 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:animate-pulse-glow">
                          <Icon name="Rocket" size={24} className="text-background" />
                        </div>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                          {project.status}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2 glow-cyan">{project.title}</h3>
                      <p className="text-xs text-muted-foreground mb-4">Запуск: {project.year}</p>
                      <p className="text-sm text-muted-foreground">{project.achievement}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>

        <footer className="border-t border-primary/20 backdrop-blur-md bg-background/80 mt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                © 2024 Библиотека Вселенной. Исследуйте бесконечность космоса
              </div>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="hover:text-primary">
                  <Icon name="Github" size={18} />
                </Button>
                <Button variant="ghost" size="sm" className="hover:text-primary">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button variant="ghost" size="sm" className="hover:text-primary">
                  <Icon name="Mail" size={18} />
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
