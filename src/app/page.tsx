"use client"

import { Check, Shield, Star, Users, Award, Clock, ArrowRight, Sparkles, Play } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-[#D4AF37]">Domine a Mesclagem</span>
              <br />
              <span className="text-white">de Cabelos para Extensões</span>
              <br />
              <span className="text-[#D4AF37]">e Nunca Mais Perca Clientes</span>
            </h1>
            
            {/* VSL Section */}
            <div className="py-8 sm:py-12">
              <div className="max-w-4xl mx-auto">
                <div className="relative bg-gradient-to-br from-[#D4AF37]/20 to-transparent p-4 sm:p-6 rounded-3xl border border-[#D4AF37]/30">
                  <div className="aspect-video rounded-2xl overflow-hidden relative bg-black">
                    {/* Wistia Iframe Embed - Mais estável para sandbox */}
                    <iframe
                      src="https://fast.wistia.net/embed/iframe/vrqklu444k?videoFoam=true"
                      title="VSL - Mesclagem de Cabelos"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      className="w-full h-full rounded-2xl"
                      style={{
                        border: 'none',
                        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
                      }}
                    />
                  </div>
                  
                  {/* Video Description */}
                  <div className="mt-4 sm:mt-6 text-center">
                    <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
                      Neste vídeo exclusivo, você vai descobrir os <span className="text-[#D4AF37] font-semibold">3 segredos</span> 
                      que as profissionais de sucesso usam para criar extensões com mesclagem perfeita
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              Transforme sua insegurança em confiança e prepare extensões perfeitas, 
              <span className="text-[#D4AF37] font-semibold"> no tom exato da cliente.</span>
            </p>
          </div>
          
          <div className="pt-6 sm:pt-8">
            <button className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg">
              Quero Garantir Minha Vaga
            </button>
          </div>
          
          <div className="flex items-center justify-center space-x-2 pt-4">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
            <span className="text-xs sm:text-sm text-gray-400 text-center">Vagas limitadas • Oferta especial de lançamento</span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
          </div>
        </div>
      </section>

      {/* Seção da Dor */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4AF37] mb-4 sm:mb-6">
              Você Já Passou Por Isso?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              Sabemos exatamente como é frustrante quando a extensão não combina perfeitamente...
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-black/50 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-[#D4AF37]/30 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Clientes Insatisfeitas</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Extensões que não batem na cor natural deixam o resultado artificial e a cliente descontente.
              </p>
            </div>
            
            <div className="bg-black/50 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-[#D4AF37]/30 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Insegurança Profissional</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Aquela sensação de não saber se vai dar certo, se a cor vai ficar perfeita ou se a cliente vai aprovar.
              </p>
            </div>
            
            <div className="bg-black/50 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-[#D4AF37]/30 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4AF37] rotate-180" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Perda de Clientes</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Resultados inconsistentes fazem clientes procurarem outros profissionais mais seguros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção da Solução */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-gray-800 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  <span className="text-[#D4AF37]">A Solução</span>
                  <br />
                  <span className="text-white">Que Você Procurava</span>
                </h2>
                
                <div className="w-16 sm:w-20 h-1 bg-[#D4AF37]"></div>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D4AF37]">
                  Mesclagem de Cabelos Pré-Aplicação
                </h3>
                
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Uma técnica revolucionária que permite criar a cor perfeita ANTES de aplicar a extensão, 
                  garantindo um resultado natural e harmonioso que suas clientes vão amar.
                </p>
                
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Não é mais sobre "torcer para dar certo". É sobre <span className="text-[#D4AF37] font-semibold">ter certeza absoluta</span> 
                  de que o resultado será impecável, toda vez.
                </p>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="bg-gradient-to-br from-[#D4AF37]/20 to-transparent p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30">
                <div className="bg-black/80 p-6 sm:p-8 rounded-2xl">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#D4AF37] rounded-full flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-white">Análise precisa do tom natural</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#D4AF37] rounded-full flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-white">Técnica de mesclagem profissional</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#D4AF37] rounded-full flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-white">Resultado natural garantido</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#D4AF37] rounded-full flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-white">Clientes 100% satisfeitas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4 sm:mb-6">
              O Que Você Vai Conquistar
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              Mais do que uma técnica, é a chave para sua transformação profissional
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 sm:w-5 sm:h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Confiança Absoluta</h3>
                  <p className="text-sm sm:text-base text-gray-300">Nunca mais duvide do resultado. Você saberá exatamente como ficará antes mesmo de aplicar.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 sm:w-5 sm:h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Fidelização de Clientes</h3>
                  <p className="text-sm sm:text-base text-gray-300">Resultados perfeitos criam clientes fiéis que indicam você para outras pessoas.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 sm:w-5 sm:h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Valorização do Seu Trabalho</h3>
                  <p className="text-sm sm:text-base text-gray-300">Técnica exclusiva permite cobrar mais caro por um serviço diferenciado e perfeito.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 sm:w-5 sm:h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Resultados Naturais</h3>
                  <p className="text-sm sm:text-base text-gray-300">Extensões que parecem ter nascido junto com o cabelo natural da cliente.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 sm:w-5 sm:h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Crescimento Financeiro</h3>
                  <p className="text-sm sm:text-base text-gray-300">Mais clientes satisfeitas = mais indicações = mais faturamento mensal.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 sm:w-5 sm:h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Reconhecimento Profissional</h3>
                  <p className="text-sm sm:text-base text-gray-300">Torne-se referência na sua região como a especialista em extensões perfeitas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Autoridade */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full mx-auto flex items-center justify-center">
              <div className="w-20 h-20 sm:w-28 sm:h-28 bg-black rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 sm:w-12 sm:h-12 text-[#D4AF37]" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37]">
                Sua Instrutora Especialista
              </h2>
              
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
                Com mais de 10 anos de experiência em extensões capilares e centenas de profissionais formadas, 
                nossa especialista desenvolveu esta técnica exclusiva que revolucionou o mercado de extensões.
              </p>
              
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
                <span className="text-[#D4AF37] font-semibold">Reconhecida nacionalmente</span> por seus resultados impecáveis 
                e por formar profissionais de sucesso em todo o Brasil.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 pt-6 sm:pt-8">
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                <span className="text-sm sm:text-base text-white">+500 Profissionais Formadas</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                <span className="text-sm sm:text-base text-white">10+ Anos de Experiência</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                <span className="text-sm sm:text-base text-white">Técnica Exclusiva</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Especial */}
      <section className="py-16 sm:py-20 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-[#D4AF37] text-black px-4 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider">
                Oferta Exclusiva de Lançamento
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-[#D4AF37]">DESCONTO ESPECIAL</span>
                <br />
                <span className="text-white">Para as Primeiras Profissionais</span>
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2">
                Apenas as primeiras 50 profissionais terão acesso a esta condição especial. 
                <span className="text-[#D4AF37] font-semibold">Não perca esta oportunidade única!</span>
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-[#D4AF37]/10 to-transparent p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30">
              <div className="space-y-4 sm:space-y-6">
                <div className="text-center">
                  <div className="text-gray-400 text-base sm:text-lg line-through">De R$ 997</div>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#D4AF37]">R$ 497</div>
                  <div className="text-white text-base sm:text-lg">ou 12x de R$ 49,70</div>
                </div>
                
                <button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold text-lg sm:text-xl py-5 sm:py-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  QUERO GARANTIR MINHA VAGA AGORA
                </button>
                
                <p className="text-xs sm:text-sm text-gray-400">
                  🔒 Pagamento 100% seguro • Acesso imediato após confirmação
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-gray-100 to-gray-200 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#D4AF37] rounded-full mx-auto flex items-center justify-center">
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-black" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Garantia de <span className="text-[#D4AF37]">7 Dias</span>
              </h2>
              
              <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-2">
                Estamos tão confiantes na qualidade da nossa formação que oferecemos 
                <span className="font-semibold"> 7 dias de garantia incondicional</span>. 
                Se não ficar satisfeita, devolvemos 100% do seu investimento.
              </p>
              
              <p className="text-sm sm:text-base text-gray-600 px-2">
                Sem perguntas, sem complicações. Sua satisfação é nossa prioridade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4 sm:mb-6">
              O Que Nossas Alunas Dizem
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 px-2">
              Resultados reais de profissionais que transformaram suas carreiras
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-black border-2 border-[#D4AF37]/30 p-6 sm:p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] fill-current" />
                  ))}
                </div>
                
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  "Depois da formação, minha agenda lotou! As clientes ficam impressionadas 
                  com o resultado natural das extensões. Já aumentei meus preços em 40%."
                </p>
                
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-[#D4AF37] font-semibold text-sm sm:text-base">Marina Silva</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Cabeleireira - São Paulo</p>
                </div>
              </div>
            </div>
            
            <div className="bg-black border-2 border-[#D4AF37]/30 p-6 sm:p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] fill-current" />
                  ))}
                </div>
                
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  "A técnica é revolucionária! Agora tenho total confiança no que faço. 
                  Minhas clientes sempre saem satisfeitas e me indicam para amigas."
                </p>
                
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-[#D4AF37] font-semibold text-sm sm:text-base">Carla Mendes</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Especialista em Extensões - RJ</p>
                </div>
              </div>
            </div>
            
            <div className="bg-black border-2 border-[#D4AF37]/30 p-6 sm:p-8 rounded-2xl md:col-span-2 lg:col-span-1">
              <div className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] fill-current" />
                  ))}
                </div>
                
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  "Meu faturamento dobrou em 3 meses! A mesclagem perfeita fez toda diferença. 
                  Agora sou referência na minha cidade."
                </p>
                
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-[#D4AF37] font-semibold text-sm sm:text-base">Ana Costa</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Empreendedora - MG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="py-16 sm:py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-[#D4AF37]">Apenas Algumas Vagas</span>
                <br />
                <span className="text-white">Disponíveis.</span>
                <br />
                <span className="text-[#D4AF37]">Decida Agora.</span>
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
                Esta é sua chance de transformar sua carreira e nunca mais ter insegurança 
                com extensões. <span className="text-[#D4AF37] font-semibold">As vagas são limitadas</span> 
                e a oferta especial termina em breve.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-[#D4AF37]/20 p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/50">
              <div className="space-y-4 sm:space-y-6">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#D4AF37] mb-2">R$ 497</div>
                  <div className="text-white text-base sm:text-lg">12x de R$ 49,70 sem juros</div>
                </div>
                
                <button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold text-lg sm:text-xl py-5 sm:py-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  SIM, EU QUERO TRANSFORMAR MINHA CARREIRA
                </button>
                
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Garantia 7 dias</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Acesso imediato</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Suporte completo</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-500 px-2">
              ⚠️ Esta oferta é válida apenas para as primeiras 50 profissionais. 
              Após esgotar as vagas, o valor retorna para R$ 997.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2024 Formação Mesclagem de Cabelos. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}