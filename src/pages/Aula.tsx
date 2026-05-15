import Header from "../components/Header";
import Footer from "../components/Footer";

const VIDEO_URL =
  "https://www.youtube.com/embed/TuRcOmk8ZRs?autoplay=1";

export default function Aula() {
  return (
    <main>
      <Header />

      <section className="relative section pt-14 md:pt-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gold/10 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold/30 text-xs font-medium tracking-widest uppercase text-gold-dark">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Aula liberada
          </span>
          <h1 className="font-display font-bold leading-[1.1] mt-6 text-3xl md:text-5xl text-ink">
            Se você é <span className="text-gold-shine">psicóloga</span> e quer{" "}
            <span className="text-gold-shine">transformar</span> a sua vocação
            em uma carreira estruturada e valorizada,{" "}
            <span className="text-gold-shine">assista a aula abaixo</span>.
          </h1>
        </div>

        <div className="max-w-5xl mx-auto mt-12 animate-fade-up [animation-delay:200ms]">
          <div className="relative rounded-3xl overflow-hidden shadow-premium border border-gold/20 bg-ink p-2">
            <div className="absolute inset-0 bg-gold-gradient opacity-20 blur-2xl -z-10" />
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black">
              <iframe
                src={VIDEO_URL}
                title="Aula Ascensão Pro"
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-ink">
            O acompanhamento para quem busca{" "}
            <span className="text-gold-shine">profundidade</span> e resultados.
          </h2>
          <div className="divider-gold" />
          <p className="mt-6 text-stone-600 text-lg leading-relaxed">
            A <strong>Jornada do Potencial — Ascensão Pro</strong> foi
            desenhada para psicólogas que já entenderam que não basta saber a
            técnica clínica; é preciso ter um método para sustentar o próprio
            crescimento. Através do diagnóstico <strong>MAP ID</strong> e
            encontros individuais, vamos desenhar o seu roadmap de atuação para
            os próximos meses.
          </p>

          <div className="mt-10">
            <a
              href="https://chk.eduzz.com/801E4VKNW7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-flex !w-auto px-10"
            >
              Quero conhecer a Jornada Ascensão Pro
            </a>
            <p className="mt-6 font-display italic text-stone-500">
              Se seu potencial é real, é hora de estruturar sua ascensão agora.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
