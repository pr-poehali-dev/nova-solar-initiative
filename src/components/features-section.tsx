import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Регистрация по номеру",
    description: "Создай аккаунт за 30 секунд — только номер телефона и код подтверждения. Никаких паролей и email.",
    icon: "phone",
    badge: "Быстро",
  },
  {
    title: "Личные сообщения",
    description: "Мгновенная доставка сообщений, голосовых и видео. Сквозное шифрование защищает каждый диалог.",
    icon: "lock",
    badge: "Приватно",
  },
  {
    title: "Групповые чаты",
    description: "Создавай группы до 10 000 участников, назначай администраторов и делись файлами без ограничений.",
    icon: "globe",
    badge: "Группы",
  },
  {
    title: "Мгновенная доставка",
    description: "Сообщения доходят за миллисекунды в любую точку мира. Онлайн-статус и уведомления в реальном времени.",
    icon: "zap",
    badge: "Скорость",
  },
  {
    title: "Медиа и файлы",
    description: "Отправляй фото, видео, документы и голосовые сообщения без потери качества и ограничений по размеру.",
    icon: "link",
    badge: "Медиа",
  },
  {
    title: "Все платформы",
    description: "iOS, Android, Web и Desktop — твои чаты синхронизируются на всех устройствах в реальном времени.",
    icon: "target",
    badge: "Кроссплатформа",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Всё для общения с друзьями</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            LinkUp — мессенджер, который объединяет людей просто и безопасно
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "phone" && "📱"}
                    {feature.icon === "lock" && "🔒"}
                    {feature.icon === "globe" && "👥"}
                    {feature.icon === "zap" && "⚡"}
                    {feature.icon === "link" && "📎"}
                    {feature.icon === "target" && "💻"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
