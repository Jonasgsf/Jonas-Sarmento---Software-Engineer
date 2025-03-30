import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { scrollToTopSlowly } from "../components/Navbar";
import { Link as ScrollLink } from "react-scroll";

export default function Home() {
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoKey, setVideoKey] = useState(0);
  const [bgImage, setBgImage] = useState(null);
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleProducts, setIsVisibleProducts] = useState(false);
  const [videoHidden, setVideoHidden] = useState(false);
  const [ isVisibleAboutJonas, setIsVisibleAboutJonas] = useState(false)
  const videoAboutRef = useRef(null)
  // Função para capturar o frame atual do vídeo
  const captureCurrentFrame = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/png");
      setBgImage(dataUrl);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Se o usuário rolar e o vídeo ainda estiver sendo exibido...
      if (window.scrollY > 10) {
        if (videoRef.current && !videoRef.current.paused) {
          videoRef.current.pause();
          setIsVideoPaused(true);
          // Captura o frame atual se ainda não tiver sido capturado
          if (!videoHidden) {
            captureCurrentFrame();
          }
          setVideoEnded(true);
          setVideoHidden(true);
        }
      } else {
        // Se voltar ao topo e o vídeo estiver pausado e não finalizado, continua a reprodução
        if (videoRef.current && isVideoPaused && !videoEnded) {
          videoRef.current.play();
          setIsVideoPaused(false);
          setVideoHidden(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVideoPaused, videoEnded, videoHidden]);

  // Caso o vídeo termine naturalmente
  const handleVideoEnded = () => {
    setVideoEnded(true);
    setTimeout(() => {
      captureCurrentFrame();
      setVideoHidden(true);
    }, 100);
  };

  const handleReplayVideo = () => {
    setVideoEnded(false);
    setVideoHidden(false);
    setIsVideoPaused(false);
    setBgImage(null);
    setVideoKey((prev) => prev + 1);
  };

  useEffect(() => {
    const handleScrollVisibility = () => {
      const section = document.getElementById("about-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  useEffect(() => {
    const handleScrollProducts = () => {
      const section = document.getElementById("produtos");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.3) {
          setIsVisibleProducts(true);
        }}};
    window.addEventListener("scroll", handleScrollProducts);
    return () => window.removeEventListener("scroll", handleScrollProducts);
  }, []);

    useEffect(() =>{
      const handleScrollAboutJonas = () => {
        const section = document.getElementById("about-Jonas");
        if (section){
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.3) {
            setIsVisibleAboutJonas(true)
          }}};
      
      window.addEventListener("scroll", handleScrollAboutJonas);
      return () => window.removeEventListener("scroll", handleScrollAboutJonas);
    }, []);

    useEffect(() => {
      if (isVisibleAboutJonas && videoAboutRef.current){
        videoAboutRef.current.play();
      }
    }, [isVisibleAboutJonas])

  return (
    <main className="bg-black">
      <section
          id="about-section"
          className="relative py-32 dark:text-white overflow-hidden min-h-screen"
          style={{
            backgroundImage: bgImage ? `url(${bgImage})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed", 
            backgroundRepeat: "no-repeat"
          }}
        >
        {!videoHidden && (
          <video
            key={videoKey}
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700"
          >
            <source src="backGround 2.mp4" type="video/mp4" />
          </video>
        )}

        {!videoHidden && (
          <div className="absolute inset-0 z-10 transition-opacity duration-700">
            <div className="w-full h-full bg-black/50" />
          </div>
        )}

        <div
          className={`
            relative mx-auto max-w-7xl px-8 flex flex-col md:flex-row
            justify-between items-center gap-12
            transition-all duration-700
            ${videoHidden ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
          style={{ zIndex: 20 }}
        >
          <div className="text-center md:text-left flex-1">
            <h2
              className="text-4xl md:text-5xl tracking-wide text-blue-500 transition-all mb-5 duration-700 opacity-100 translate-y-0"
              style={{ fontFamily: '"Nasalization", sans-serif' }}
            >
              Jonas Sarmento{" "}
              {videoEnded && (
                <button
                  onClick={handleReplayVideo}
                  className="mt-6 text-white border border-white/30 hover:border-white/70 hover:bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-sm transition-all duration-500 shadow-md"
                >
                  Animar
                </button>
              )}
              <br />
              <span className="text-2xl md:text-3xl text-blue-300">
                Technology & Artificial Inteligence
              </span>
            </h2>

            <div className="text-lg md:text-xl leading-loose transition-all duration-1000 opacity-100 translate-y-0">
              <div className="p-6 md:p-8 rounded-lg shadow-lg backdrop-blur-md bg-white/10 dark:bg-black/30 relative neon-glow w-full max-w-[400px] md:max-w-[500px] h-auto">
                <h3
                  className="text-xl md:text-2xl font-semibold text-blue-500"
                  style={{ fontFamily: '"Nasalization", sans-serif' }}
                >
                  | Software Development | <br /> | AI Expertise | 
                </h3>
                <p className="mt-3 text-blue-300">
                  Hello, welcome to the future!
                </p>
                <p className="mt-4 text-sm text-white">
                  Feel free to explore the {" "}
                  <a href="/termos-de-uso" className="text-blue-500 hover:underline">
                    services
                  </a> available.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 text-white">
            {[
              {
                text: "Solutions using Advanced Artificial Intelligence",
                image: "./apoiar.png",
                neonColor: "blue",
              },
              {
                text: "All kinds of innovation",
                image: "./promover.png",
                neonColor: "green",
              },
              {
                text: "Modern solutions with optimized algorithms",
                image: "./formentar.png",
                neonColor: "blue",
              },
              {
                text: "Applications and integrations with big data analysis",
                image: "./potenciar.png",
                neonColor: "green",
              },
            ].map((item, index) => (
              <li
                key={index}
                className={`relative p-5 md:p-6 rounded-lg shadow-lg text-center transition-all duration-[1500ms] transform ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-32"
                } hover:scale-105 neon-card w-full md:w-[240px] h-auto md:min-h-[180px] overflow-hidden flex flex-col items-center`}
              >
                <img src={item.image} alt="Ícone" className="h-12 w-12 mb-4" />
                <p className="mt-2 text-md text-white px-3">
                  {item.text}
                </p>
                <div
                  className={`neon-border ${
                    index % 2 === 0 ? "neon-blue" : "neon-green"
                  }`}
                />
              </li>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-16">
          <ScrollLink            
            to="produtos"
            smooth={true}
            duration={1500}
            offset={-50}
            className="border border-blue-300 text-blue-300 px-8 py-4 rounded-full text-lg font-bold transition-all duration-500 hover:bg-blue-300 hover:text-white cursor-pointer"
          >
            Projects and clients
          </ScrollLink>
          <Link
            to="reuniao"
            className="border border-blue-300 text-blue-300 px-8 py-4 rounded-full text-lg font-bold transition-all duration-500 hover:bg-blue-300 hover:text-white"
          >
            Contact
          </Link>
        </div>

        <style>
          {`
            .neon-glow {
              position: relative;
              transition: box-shadow 0.5s ease-in-out;
              overflow: hidden;
            }
            .neon-glow:hover {
              border: 2px solid rgba(0, 72, 255, 0.7);
              box-shadow: 0 0 30px rgba(0, 72, 255, 0.8);
            }
            .neon-card {
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.2);
              box-shadow: 0 4px 15px rgba(0,0,0,0.1);
              transition: all 0.5s ease-in-out;
            }
            .neon-card:hover {
              border: 2px solid rgba(0, 255, 100, 0.9);
              box-shadow: 0 0 30px rgba(0, 255, 200, 0.8);
            }
            .neon-card:nth-child(odd):hover {
              border-color: rgba(0, 72, 255, 0.6);
              box-shadow: 0 0 30px rgba(0, 72, 255, 0.6);
            }
            .neon-border {
              position: absolute;
              inset: 0;
              border-radius: inherit;
              transition: box-shadow 0.5s ease-in-out;
            }
            .neon-blue:hover {
              border: 2px solid rgba(0, 72, 255, 0.6);
              box-shadow: 0 0 30px rgba(0, 72, 255, 0.6);
            }
            .neon-green:hover {
              border: 2px solid rgba(0, 255, 100, 0.6);
              box-shadow: 0 0 30px rgba(0, 255, 100, 0.6);
            }
            @media (max-width: 1024px) {
              .neon-glow {
                width: 100%;
                max-width: 100%;
              }
              .neon-card {
                width: 100%;
                max-width: 100%;
                height: auto;
              }
            }
            @media (max-width: 768px) {
              .neon-card {
                width: 100%;
                height: auto;
                padding: 20px;
              }
            }
            @media (max-width: 480px) {
              .neon-glow {
                padding: 20px;
              }
              .neon-card {
                width: 100%;
                height: auto;
                padding: 15px;
              }
            }
          `}
        </style>
      </section>

      <section
        id="produtos"
        className="relative bg-black bg-center bg-no-repeat text-white p-12 md:p-20 rounded-3xl overflow-hidden"
        style={{ backgroundImage: "url('banner_sem_fundo.png')", backgroundSize: "80%"} }
      >
        

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <span
            className={`inline-flex items-center gap-2 text-green-400 py-2 px-4 rounded-full text-sm font-semibold shadow-md tracking-wide transition-all duration-1000 ${
              isVisibleProducts ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            🚀 the best
          </span>

          <h1
            className={`text-4xl md:text-5xl font-bold mt-4 mb-4 text-blue-500 transition-all duration-1000 ${
              isVisibleProducts ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`
          }
          style={{ fontFamily: '"Nasalization", sans-serif' }}
          >
            Discover your <span className="text-blue-300">new</span> {" "}
            <span className="text-green-400">opportunity</span>   
              <br />to reinvent <span className="text-blue-300">yourself</span>
          </h1>

          
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"${
              isVisibleProducts ? "opacity-100 translate-y-0" : "opacity-0 translate-y-100"
            }`}
            >
          {[
            {
              title: "SMART AI RECRUITER",
              description:
                "Automatiza processos de recrutamento e hunting, garantindo agilidade e precisão nas contratações.",
              link: "/smart-ai-recruiter",
            },
            {
              title: "AI INTERVIEW TUTOR",
              description:
                "Treina candidatos para entrevistas reais, oferecendo simulações realistas e feedback imediato.",
              link: "/ai-interview-tutor",
            },
            {
              title: "MENTOR AI",
              description:
                "Capacite sua equipe com um assistente pedagógico interativo e planos de desenvolvimento personalizados.",
              link: "/mentor-ai",
            },
            {
              title: "DRIVE ASSISTANCE",
              description:
                "Melhore a integração de novos colaboradores e aumente a adesão aos fluxos de trabalho.",
              link: "/drive-assistance",
            },
            {
              title: "FIRSTCONTACT AI",
              description:
                "Oriente clientes ao primeiro contato, coletando informações essenciais e qualificando leads.",
              link: "/firstcontact-ai",
            },
            {
              title: "SMARTSUPPORT AI",
              description:
                "Automatize o suporte interno de forma personalizada, melhorando a experiência do usuário.",
              link: "/smartsupport-ai",
            },
          ].map((product, index) => (
            <div
              key={index}
              className={`relative p-6 md:p-8 rounded-lg shadow-lg text-center bg-black/50 transition-all duration-700 transform product-card ${
                isVisibleProducts
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
            >
              <h3 className="text-xl font-semibold text-white mb-4"
              style={{ fontFamily: '"Nasalization", sans-serif' }}>
                {product.title}
              </h3>
              <p className="text-gray-300 mb-6">{product.description}</p>
              <Link
                to={product.link}
                className="border border-blue-300 text-gray-400 px-8 py-4 rounded-full text-lg font-bold transition-all duration-500 hover:bg-blue-300 hover:text-white"
              >
                Saiba Mais
              </Link>
            </div>
          ))}
        </div>

        <style>
          {`
            .product-card {
              border: 1px solid rgba(255, 255, 255, 0.2);
              box-shadow: 0 4px 15px rgba(0,0,0,0.1);
              transition: all 0.7s ease-in-out;
            }

            .product-card:hover {
              transform: scale(1.05);
              border-color: rgba(255, 165, 0, 0.8);
              box-shadow: 0 0 30px rgba(255, 165, 0, 0.7);
            }

            @media (max-width: 1024px) {
              .product-card {
                width: 100%;
                max-width: 100%;
                height: auto;
              }
            }

            @media (max-width: 768px) {
              .product-card {
                width: 100%;
                height: auto;
                padding: 20px;
              }
            }

            @media (max-width: 480px) {
              .product-card {
                width: 100%;
                height: auto;
                padding: 15px;
              }
            }
          `}
        </style>
      </section>
      <section 
        id="reuniao"
        className="relative py-2 pt-20 pb-20 "
        style={{ backgroundImage: "url('https://github.com/Jonasgsf/pcai-midia/raw/main/white.png')" }}>
        <div className="absolute inset-0 pointer-events-none" 
        style={{ backgroundImage: "url('https://github.com/Jonasgsf/pcai-midia/raw/main/white-celula.gif')" }}>
        </div>
        
        <div className="relative max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-blue-500 ">
            Pronto para impulsionar sua transformação digital?
          </h2>
          <p className="mb-6">
            Tecnologia é mais do que uma ferramenta, é um parceiro estratégico 
            que molda um futuro mais humano e financeiramente robusto.
          </p>
          <p className="mb-6">
            Nossa abordagem pode transformar a sua organização. Entre em contato 
            para uma demonstração personalizada e descubra como a IA pode levar 
            sua empresa a outro patamar.
          </p>
          <Link
            to="/agendar-reuniao"
            className="btn border border-blue-300 text-blue-300 px-8 py-4 rounded-full text-lg font-bold transition-all duration-500 hover:bg-blue-300 hover:text-white"
            onClick={scrollToTopSlowly}
          >
            Marcar uma Reunião
          </Link>
        </div>
      </section>
      <section id="about-Jonas" className="relative py-32 dark:text-white rounded-3xl">
        <video
            ref={videoAboutRef}
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 rounded-3xl"
          >
            <source src="flash.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 pointer-events-none"></div>

        <div className="relative mx-auto max-w-7xl px-8 flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl tracking-wide text-blue-500 transition-all mb-5 duration-700"
              style={{ fontFamily: '"Nasalization", sans-serif' }}>
              About Jonas 
            </h2>

            <div className="text-lg md:text-xl  text-blackelative bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 md:p-10 shadow-2xl shadow-blue-300/20">
              <p>
                Hello, I'm Jonas, first of all, i would like to say that I'm very happy that you visited my website.
              </p><br />
              <p>
              I am currently an AI Software Engineer and Lead AI Developer, specializing in building intelligent systems that solve real-world problems.
              My primary focus is on developing and optimizing Machine Learning models, Natural Language Processing (NLP) algorithms, and AI-powered Virtual Assistants using Python, with a strong emphasis on performance, scalability, and accuracy.
              <br /><br />
              In addition to backend AI development, I have solid experience in crafting clean, modern, and responsive user interfaces using React.js, ensuring seamless integration between AI services and the frontend.
              This full-stack capability allows me to deliver end-to-end solutions — from model training and inference to interactive and dynamic user-facing applications.
              <br /><br />
              I'm passionate about creating systems that understand, process, and generate natural language with high accuracy, and I'm constantly exploring new ways to combine AI with intuitive UX to elevate digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="bob"
        className="relative bg-cover bg-center text-white p-12 md:p-20 overflow-hidden"
        style={{ backgroundImage: "url('banner.png')" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "url('banner.png')" }}
        ></div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-green-400 mb-6 drop-shadow-[0_0_20px_rgba(255,125,0,0.8)]"
            style={{ fontFamily: '"Nasalization", sans-serif' }}
          >
            Contact
          </h2>
          <p
            className="text-lg text-gray-300 mb-8 leading-relaxed"
            style={{ fontFamily: '"Nasalization", sans-serif' }}
          >
            Hello, I'm Jonas, first of all I would like to say that I'm very happy that you visited my website.
          </p>

          <div className="relative bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 md:p-10 shadow-2xl shadow-blue-300/20">
            <div className="chat-box overflow-y-auto h-64 mb-6 p-4 border border-blue-300 rounded-lg text-left">
              <p
                className="text-gray-100 animate-pulse tracking-wide"
                style={{ fontFamily: '"Nasalization", sans-serif' }}
              >
                BOB : 👋 Olá! Como posso ajudar você hoje?
              </p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Digite sua pergunta..."
                className="w-full px-6 py-4 bg-white/10 text-white placeholder-gray-400 border border-blue-300/50 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all duration-300"
              />
              <button className="bg-blue-300 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold shadow-[0_0_20px_rgba(255,125,0,0.6)] transition-all duration-300">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/**
       * =====================================================================
       * SECTION 6: INTEGRAÇÃO DE ANALYTICS / FEEDBACK
       * =====================================================================
       */}
      <section  className="relative py-20 bg-white dark:bg-gray-900">
        <div className="absolute inset-0 pointer-events-none"></div>

        <div className="relative max-w-3xl mx-auto px-4">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Monitoramento e Otimização
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Utilizamos ferramentas de Analytics para entender o comportamento 
              dos utilizadores e evoluir continuamente a experiência do site. 
              Recebemos feedback regular, possibilitando ajustes rápidos e eficazes.
            </p>
            <Link
              to="/contato"
              className="btn variant-primary px-6 py-3"
              onClick={scrollToTopSlowly}
            >
              Enviar Feedback
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
