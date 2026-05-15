import Header from "../components/Header";
import Footer from "../components/Footer";
import LeadForm from "../components/LeadForm";

const points = [
  "Por que o excesso de dedicação clínica, sem estrutura de bastidor, leva ao esgotamento.",
  "Como alinhar sua identidade técnica (sua Voz) com uma organização que te dá liberdade.",
  "O caminho para ter uma agenda sustentável e um posicionamento que reflete sua autoridade.",
];

const mentoras = [
  {
    nome: "Amanda Silvestre",
    cargo: "Psicóloga e Criadora do Método",
    img: "/amanda.png",
    bio: [
      "Psicóloga, especialista em desenvolvimento de pessoas com pós-graduação em Gestão de Pessoas e Psicologia Organizacional.",
      "Mais de 10 anos construindo estratégias de desenvolvimento que transformam carreiras e impulsionam negócios.",
      "Já treinou equipes em grandes empresas. Hoje é a criadora do método Ascensão Pro, ajudando profissionais a alcançarem seu potencial máximo em meses.",
    ],
    tag: "Desenvolvimento Humano",
  },
  {
    nome: "Luciana Ludwig",
    cargo: "Consultora de Carreira e Estrategista",
    img: "/luciana.png",
    bio: [
      "Consultora de carreira e especialista em desenvolvimento profissional com 24 anos de experiência em grandes empresas.",
      "Sua trajetória inclui liderança de equipes e estruturação de estratégias de crescimento.",
      "Atua como estrategista no Ascensão Pro, acelerando resultados e direcionando carreiras.",
    ],
    tag: "Estratégia de Carreira",
  },
];

export default function Home() {
  return (
    <main>
      <Header />

      {/* HERO */}
      <section className="relative section pt-16 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gold/10 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold/30 text-xs font-medium tracking-widest uppercase text-gold-dark">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Aula gratuita exclusiva
            </span>
            <h1 className="font-display font-bold leading-[1.05] mt-6 text-4xl md:text-6xl text-ink">
              Saia da <span className="text-gold-shine">sobrecarga</span>{" "}
              operacional e construa um caminho{" "}
              <span className="text-gold-shine">profissional</span> com
              estrutura, leveza e propósito.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-stone-600 leading-relaxed max-w-xl">
              Para a psicóloga que cuida de todos, mas sente que a própria
              carreira está no improviso.
            </p>
          </div>

          <div className="md:col-span-2 animate-fade-up [animation-delay:200ms]">
            <div className="card-glass p-7 md:p-8 relative">
              <div className="absolute -top-px left-8 right-8 h-px bg-gold-gradient" />
              <h2 className="font-display text-2xl text-ink font-bold text-center">
                Assista à aula exclusiva
              </h2>
              <p className="text-center text-sm text-stone-500 mt-1 mb-6">
                Preencha para liberar seu acesso gratuito
              </p>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* POINTS */}
      <section className="section bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-ink">
              Pare de Desperdiçar Seu Potencial
            </h2>
            <div className="divider-gold" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {points.map((p, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl bg-cream border border-stone-200 hover:border-gold/40 hover:shadow-premium transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-gradient text-white font-display font-bold text-xl flex items-center justify-center mb-6 shadow-lg shadow-gold/30 group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <p className="text-stone-700 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-center text-ink">
            O Problema Não É Esforço — É Falta de{" "}
            <span className="text-gold-shine">Método</span>
          </h2>
          <div className="divider-gold" />

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-soft">
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                A Realidade
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Você trabalha muito. Dá o seu melhor todos os dias. Mas sente
                que está travado. Muito esforço, pouco resultado. Falta de
                direção clara. Você sabe que tem potencial, mas ele não se
                traduz em crescimento real e rentabilidade.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-ink-gradient text-cream border border-gold/20 shadow-premium">
              <h3 className="font-display text-2xl font-bold mb-4 text-gold-shine">
                A Verdade
              </h3>
              <p className="text-cream/80 leading-relaxed">
                O que falta não é esforço. É um{" "}
                <span className="text-white font-semibold">
                  método que estruture seu potencial máximo e elimine as
                  interferências
                </span>{" "}
                que te impedem de crescer com autenticidade e consistência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MENTORAS */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-ink">
              Mentoras do Método Ascensão Pro
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            {mentoras.map((m) => (
              <article
                key={m.nome}
                className="group rounded-3xl overflow-hidden bg-cream border border-stone-200 shadow-soft hover:shadow-premium transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    src={m.img}
                    alt={m.nome}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 text-cream">
                    <h3 className="font-display text-2xl font-bold">
                      {m.nome}
                    </h3>
                    <p className="text-gold-light text-sm">{m.cargo}</p>
                  </div>
                </div>
                <div className="p-7 space-y-3">
                  {m.bio.map((b, i) => (
                    <p key={i} className="text-stone-600 leading-relaxed text-[15px]">
                      {b}
                    </p>
                  ))}
                  <div className="pt-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gold/30 text-xs font-semibold text-gold-dark uppercase tracking-wider">
                      {m.tag}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 max-w-3xl mx-auto p-6 rounded-2xl bg-cream border border-stone-200 text-center">
  
  <p className="text-stone-600 mb-6">
    Dois olhares complementares para acelerar sua evolução:
  </p>

  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
    
    {/* BLOCO 1 */}
    <div className="flex flex-col items-center max-w-xs">
      <span className="text-ink font-semibold text-lg">
        Desenvolvimento Humano
      </span>
      <span className="text-stone-500 text-sm mt-1">
        Autoconhecimento e transformação
      </span>
    </div>

    {/* + */}
    <div className="text-gold text-2xl font-semibold">
      +
    </div>

    {/* BLOCO 2 */}
    <div className="flex flex-col items-center max-w-xs">
      <span className="text-ink font-semibold text-lg">
        Estratégia de Negócios
      </span>
      <span className="text-stone-500 text-sm mt-1">
        Planejamento e execução prática
      </span>
    </div>

  </div>
</div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section bg-ink-gradient text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/20 blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="font-display font-bold text-3xl md:text-5xl">
            Sua Aula Gratuita{" "}
            <span className="text-gold-shine">Já Está Pronta</span>
          </h2>
          <div className="divider-gold" />
          <p className="mt-6 text-cream/80 text-lg leading-relaxed">
            Não é só teoria: você terá um acompanhamento estratégico, sessões
            individuais e suporte semanal para garantir que o plano saia do
            papel e funcione na prática.
          </p>

          <div className="mt-10 max-w-md mx-auto card-glass p-7">
            <h3 className="font-display text-xl font-bold text-ink text-center">
              Assista à aula exclusiva gratuitamente
            </h3>
            <div className="mt-5">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
