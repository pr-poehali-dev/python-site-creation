import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Screenshots = () => {
  const screenshots = [
    {
      title: "Главное меню",
      description: "Стильный интерфейс с анимациями",
      image: "/placeholder.svg",
    },
    {
      title: "Боевая система",
      description: "Динамичные сражения в реальном времени",
      image: "/placeholder.svg",
    },
    {
      title: "Исследование мира",
      description: "Красочные локации и секретные области",
      image: "/placeholder.svg",
    },
    {
      title: "Инвентарь",
      description: "Удобная система управления предметами",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4 font-rubik">
            Скриншоты игры
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Посмотри, как выглядит игра изнутри - каждый кадр создан с любовью к
            деталям
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {screenshots.map((screenshot, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1 font-rubik">
                      {screenshot.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {screenshot.description}
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="Expand" size={16} className="text-white" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA секция */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-4 font-rubik">
              Готов начать приключение?
            </h3>
            <p className="text-gray-300 mb-8 text-lg max-w-md mx-auto">
              Скачай игру прямо сейчас и погрузись в увлекательный мир Python
              геймдева!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Скачать сейчас
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg rounded-full backdrop-blur-sm"
              >
                <Icon name="Github" size={20} className="mr-2" />
                Исходный код
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
