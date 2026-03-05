import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алина Соколова",
    role: "Студентка, Москва",
    avatar: "/professional-woman-scientist.png",
    content:
      "Наконец-то мессенджер, где удобно общаться с группой из универа! Регистрация заняла буквально минуту по номеру телефона.",
  },
  {
    name: "Дмитрий Орлов",
    role: "Предприниматель, Санкт-Петербург",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Создал рабочую группу для команды за пару кликов. Быстро, надёжно, без лишнего. LinkUp — наш основной мессенджер уже 3 месяца.",
  },
  {
    name: "Мария Ким",
    role: "Дизайнер, Екатеринбург",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Обожаю, что можно отправлять фото и видео без сжатия! И шифрование — знаю, что переписка точно только моя.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят пользователи</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Тысячи людей уже общаются в LinkUp — и делятся впечатлениями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
