import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Star, Users, Clock, Shield } from "lucide-react";

import Video from "@/assets/esp.mp4";

import Fed1 from "@/assets/fed1.png";
import Fed2 from "@/assets/fed2.png";
import Fed3 from "@/assets/fed3.png";
import Fed4 from "@/assets/fed4.png";

const VideoTutorial = () => {
  const features = [
    {
      icon: Star,
      title: "Resultados ao Vivo",
      description: "Acompanhe todas as partidas em tempo real"
    },
    {
      icon: Users,
      title: "Várias Ligas",
      description: "Cobertura completa de ligas mundiales"
    },
    {
      icon: Clock,
      title: "Atualizações rápidas",
      description: "Notificações instantâneas de metas"
    },
    {
      icon: Shield,
      title: "Aplicativo seguro",
      description: "Instalação 100% segura e confiável"
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#005e2c]">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Por que escolher Jogos Hoje?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            O aplicativo mais completo para acompanhar o futebol mundial. Fique por dentro dos placares, estatísticas e muito mais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Video Tutorial */}
          <div className="order-2 lg:order-1">
            <Card className="relative overflow-hidden group hover:shadow-glow transition-all duration-500">
              <CardContent className="p-0">
                {/* Video Placeholder with Play Button */}
                <div className="relative bg-black aspect-video flex items-center justify-center">
                  <div className="absolute inset-0  from-primary/10 to-accent/10"></div>
                  
                  
                  <video width={400} controls loop muted>
                    <source src={Video} type="video/mp4" />
                    Seu navegador não suporta vídeo.
                  </video>
                  
                  
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features List */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Todo o futebol no seu bolso
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O Jogos Hoje oferece a experiência mais completa para você acompanhar seus times favoritos.
De placares ao vivo a estatísticas detalhadas.
              </p>
            </div>

            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/10 transition-colors duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-[60px]">
          {[
            { number: "500K+", label: "Downloads" },
            { number: "50+", label: "Ligas" },
            { number: "4.8★", label: "Avaliação" },
            { number: "24/7", label: "Atualizações" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gradient-card rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card"
            >
              <div className="text-3xl md:text-4xl font-bold text-white bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm text-white">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-3xl font-bold text-foreground mb-[2px] text-center">
            Comentários
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Comentários de nossos usuários
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">

            <div 
              className="text-center p-0 bg-gradient-card rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card"
            >
              <img src={Fed1} className="w-[100%]" alt="Feedback - Jogos Hoje" />
            </div>

            <div 
              className="text-center p-0 bg-gradient-card rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card"
            >
              <img src={Fed2} className="w-[100%]" alt="Feedback - Jogos Hoje" />
            </div>

            <div 
              className="text-center p-0 bg-gradient-card rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card"
            >
              <img src={Fed3} className="w-[100%]" alt="Feedback - Jogos Hoje" />
            </div>

            <div 
              className="text-center p-0 bg-gradient-card rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card"
            >
              <img src={Fed4} className="w-[100%]" alt="Feedback - Jogos Hoje" />
            </div>

        </div>

      </div>
    </section>
  );
};

export default VideoTutorial;