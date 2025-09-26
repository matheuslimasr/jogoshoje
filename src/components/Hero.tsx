import { Button } from "@/components/ui/button";
import heroImage from "@/assets/football-players-hd-emqpbm760h1avxrx.jpg";
import { Download, Smartphone } from "lucide-react";
import { ref, push, set } from "firebase/database";
import {db} from "../../firebaseConfig";

import logo from "@/assets/logo.png";

const Hero = () => {

  function registerDownload() {
      // Formatar data e hora atual
      const now = new Date();
      const formattedDate = `${now.toLocaleDateString("pt-BR")} ${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`;
  
      // Referência para a coleção "downloads"
      const downloadsRef = ref(db, "downloads");
  
      // Criar novo item dentro da coleção
      const newDownloadRef = push(downloadsRef);
  
      // Salvar dados
      set(newDownloadRef, {
        instalou: "sim",
        data: formattedDate,
      });
    }
  
    function handledButton(){
      registerDownload()
      window.location.href = 'https://www.jogoshoje.site/jogoshoje.apk'
    }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/10 to-background/90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">

          

          {/* Logo/Title */}
          <div className="mb-8 flex justify-center flex-col items-center">
            <img src={logo} className="w-[250px] h-auto mb-[20px]" />
            {/* <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent animate-pulse">
              Jogos Hoje
            </h1> */}
            <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-muted-foreground mb-6">
              <Smartphone className="w-8 h-8 text-primary" />
              <span>Resultados de futebol em tempo real</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed">
            Baixe nosso aplicativo e fique por dentro de todos os resultados, estatísticas e notícias do mundo todo.
          </p>
          
          {/* CTA Button */}
          <Button 
            variant="hero" 
            size="lg" 
            className="text-xl px-12 py-6 mb-8 font-semibold"
            onClick={handledButton}
          >
            <Download className="w-6 h-6 mr-2" />
            Baixar APK
          </Button>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <p className="text-sm text-muted-foreground mb-2">Instruções de instalação</p>
            <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;