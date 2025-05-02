// components/CallToAction.tsx
const CallToAction = () => {
    return (
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-primary text-center">
        <h2 className="text-3xl font-bold text-terciary mb-6">Entre em Contato</h2>
        <p className="text-terciary max-w-xl mx-auto mb-8">
          Tem dúvidas ou deseja agendar um atendimento? Fale conosco pelo WhatsApp clicando no botão abaixo.
        </p>
        <div className="flex justify-center">
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full font-semibold shadow-md transition"
          >
            Fale no WhatsApp
          </a>
        </div>
      </section>
    )
  }
  
  export default CallToAction
  