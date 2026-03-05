import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Зарегистрируйся",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Введи номер телефона, получи код подтверждения и создай свой профиль. Никаких паролей и сложных форм —
            аккаунт готов за 30 секунд.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Введи номер телефона
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Подтверди через SMS-код
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Настрой имя и фото профиля
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Найди друзей",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            LinkUp автоматически найдёт твоих контактов из телефонной книги, которые уже в приложении. Добавляй новых
            друзей по номеру или юзернейму.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Синхронизация с контактами телефона
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Поиск по никнейму или номеру
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              QR-код для быстрого добавления
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Создай группу",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Объединяй друзей, коллег или сообщества в групповых чатах. Устанавливай правила, назначай модераторов
            и делись всем что важно.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              До 10 000 участников в группе
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Роли: создатель, администратор, участник
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Закреплённые сообщения и медиагалерея
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Как начать общение</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Три простых шага — и ты уже общаешься с друзьями, создаёшь группы и делишься самым важным в LinkUp.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
