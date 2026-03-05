import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как зарегистрироваться в LinkUp?",
      answer:
        "Всё просто: скачай приложение, введи свой номер телефона и подтверди его кодом из SMS. Никакого email и паролей — аккаунт готов за 30 секунд.",
    },
    {
      question: "LinkUp бесплатный?",
      answer:
        "Да, базовые функции — переписка, голосовые сообщения, группы и медиафайлы — полностью бесплатны. Дополнительные возможности доступны в премиум-подписке.",
    },
    {
      question: "Мои сообщения в безопасности?",
      answer:
        "Да. Все личные переписки защищены сквозным шифрованием — никто кроме тебя и собеседника не может прочитать сообщения, даже мы.",
    },
    {
      question: "Сколько человек можно добавить в группу?",
      answer:
        "В групповой чат можно добавить до 10 000 участников. Можно назначать администраторов, закреплять сообщения и управлять правами участников.",
    },
    {
      question: "На каких устройствах работает LinkUp?",
      answer:
        "LinkUp доступен на iOS, Android, в браузере и на десктопе (Windows, macOS). Все чаты синхронизируются между устройствами в реальном времени.",
    },
    {
      question: "Можно ли сменить номер телефона?",
      answer:
        "Да, в настройках аккаунта можно привязать новый номер. Вся история чатов и группы сохранятся — ничего не потеряешь.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё что хочешь знать о LinkUp — здесь.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
