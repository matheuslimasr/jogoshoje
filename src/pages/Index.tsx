import Hero from "@/components/Hero";
import VideoTutorial from "@/components/VideoTutorial";
import { Button } from "@/components/ui/button";
import { Download, FileDown, Folder, Settings, CheckCircle } from "lucide-react";
import videoFile from "@/assets/0927.mp4";
import { ref, push, set } from "firebase/database";
import imgWhatsApp from "@/assets/whatsapp.png";

import {db} from "../../firebaseConfig";

const Index = () => {
  const installationSteps = [
    {
      stepNumber: 1,
      title: "Descargar APK",
      description: "Toca en 'Descargar APK' y confirma la descarga",
      details: [
        "Toca en 'Descargar APK'",
        "Espera el aviso de descarga y confirma"
      ],
      icon: Download,
    },
    {
      stepNumber: 2,
      title: "Abrir Archivo",
      description: "Abre el archivo descargado desde las notificaciones",
      details: [
        "Abre el archivo descargado ('Open')",
        "Si ves 'File downloaded', toca en Open",
        "Si no aparece: Entra en 'Descargas' del navegador"
      ],
      icon: FileDown,
    },
    {
      stepNumber: 3,
      title: "Localizar APK",
      description: "Encuentra el archivo JogosHoje.apk en tus descargas",
      details: [
        "Abre el menú del navegador y toca en Downloads/Descargas",
        "En 'Descargas', toca en GolAhora.apk para abrirlo"
      ],
      icon: Folder,
    },
    {
      stepNumber: 4,
      title: "Instalar App",
      description: "Autoriza la instalación y disfruta de Jogos Hoje",
      details: [
        "Toca en 'Instalar'",
        "Si Android pide permiso, autoriza 'orígenes desconocidos' una sola vez",
        "Cuando termine, toca en Abrir"
      ],
      icon: Settings,
      isHighlighted: true,
    },
  ];

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />
      
      {/* Video Tutorial and Introduction Section */}
      <VideoTutorial />
      
      {/* Installation Steps Section */}
      <section className="py-20 px-4" style={{
        backgroundImage: "url('https://www.jogoshoje.site/bg-footer.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white bg-clip-text text-transparent">
              Instalação em apenas alguns passos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Siga estes passos simples para instalar o Jogos Hoje no seu dispositivo Android.
            </p>
          </div>
          
          {/* Steps Grid */}
          <div className="w-full h-auto flex justify-center mb-[40px]">
            {/* {installationSteps.map((step, index) => (
              <StepCard
                key={index}
                stepNumber={step.stepNumber}
                title={step.title}
                description={step.description}
                details={step.details}
                icon={step.icon}
                isHighlighted={step.isHighlighted}
              />
            ))} */}

            <video width={900} controls loop muted>
              <source src={videoFile} type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          </div>
          
          {/* Success Message */}
          <div className="text-center bg-[#161313] rounded-2xl p-8 border border-primary/20">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Pronto para aproveitar!
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Uma vez instalado, você terá acesso a todos os resultados do futebol em tempo real.
            </p>
            <Button variant="hero" size="lg" className="font-semibold" onClick={handledButton}>
              <Download className="w-5 h-5 mr-2" />
              Baixar Jogos Hoje APK
            </Button>
          </div>
        </div>
      </section>

      <div className="fixed bottom-[30px] right-[30px] cursor-pointer" onClick={() => {
        window.location.href = 'https://api.whatsapp.com/send?phone=34639249529'
      }}>
        <img src={imgWhatsApp} width={70} height={70} alt="Atendimento Jogos Hoje" />
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Jogos Hoje. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;