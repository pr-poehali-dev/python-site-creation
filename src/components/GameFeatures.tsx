import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const GameFeatures = () => {
  const features = [
    {
      icon: "Sword",
      title: "Эпические сражения",
      description:
        "Захватывающие бои с боссами и множеством врагов. Прокачивай навыки и собирай лучшее оружие!",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: "Map",
      title: "Огромный мир",
      description:
        "Исследуй бескрайние локации, находи секретные области и открывай новые квесты.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "Users",
      title: "Многопользовательский режим",
      description:
        "Играй с друзьями в кооперативе или сражайся в PvP арене за звание лучшего.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Sparkles",
      title: "Магическая система",
      description:
        "Изучай заклинания, создавай артефакты и комбинируй магические способности.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "Trophy",
      title: "Достижения",
      description:
        "Более 100 достижений, рейтинговая система и еженедельные турниры.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: "Palette",
      title: "Кастомизация",
      description:
        "Создавай уникального персонажа, настраивай внешность и выбирай стиль игры.",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4 font-rubik">
            Особенности игры
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Погрузись в мир, где каждая деталь создана для максимального
            удовольствия от игры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}
                >
                  <Icon
                    name={feature.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-rubik">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20">
            <Icon name="Code" size={20} className="text-purple-400" />
            <span className="text-white font-medium">Создано на Python 🐍</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameFeatures;
