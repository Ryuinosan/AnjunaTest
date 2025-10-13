import "./App.css";

// 1. Defina o novo componente de Workflow
const WorkflowSection = () => {
    // Dados do processo em um array para facilitar a manutenção
    const processSteps = [
        {
            title: "Consultation",
            description: "Schedule a consultation to discuss your business goals and digital marketing needs with our team."
        },
        {
            title: "Strategy Development",
            description: "Our team will develop a customized digital marketing strategy tailored to your business."
        },
        {
            title: "Implementation",
            description: "We will put the strategy into action and launch your digital marketing campaigns."
        },
        {
            title: "Monitoring & Optimization",
            description: "We continually monitor and optimize your campaigns to maximize results and ROI."
        },
        {
            title: "Reporting & Analysis",
            description: "We provide regular reports and analysis on campaign performance."
        },
    ];

    return (
        
        <section id="about" className="workflow-section">
            <h2 className="title">Our Process Workflow</h2>

            <div className="workflow-content">
                
                {/* O container workflow-steps usa CSS Grid para posicionar 3 itens na coluna 1 e 2 itens na coluna 2 */}
                <div className="workflow-steps">
                    {/* A lista <ul> usa CSS Counters e os data-attributes para criar o visual do workflow */}
                    <ul className="process-list">
                        {processSteps.map((step, index) => (
                            <li 
                                key={index} 
                                // data-step é crucial para o posicionamento e estilização no CSS
                                data-step={index + 1} 
                            >
                                <div className="step-info">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Coluna da Direita (Ilustração) - Posicionada ao lado da lista pelo CSS Grid */}
                <div className="workflow-illustration">
                    {/* **SUBSTITUA ESTE SRC** pela sua imagem da ilustração! */}
                    <img 
                        src="placeholder-illustration.png" 
                        alt="Ilustração do Fluxo de Trabalho"
                        // O style é opcional, mas garante que a imagem não distorça
                        style={{ width: '100%', maxWidth: '450px', height: 'auto' }}
                    />
                </div>

            </div>
        </section>
    );
};
// Fim do novo componente de Workflow


function App() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header>
        <div className="cabecalho">
          <h1 className="cabecalho_logo">
            Anjuna <span className="tech_color">Tech</span>
          </h1>
          <p className="cabecalho_titulo">
            The innovation powered by knowledge
          </p>
          <p className="cabecalho_texto">
            We are a technology company that provides{" "}
            <span className="tech_color">innovative solutions</span> to help
            businesses thrive in the digital age. Our team of{" "}
            <span className="tech_color">experts</span> is dedicated to
            delivering cutting-edge products and services that drive growth and
            success.
          </p>
          <div className="Conteiner_bg"></div>
        </div>
      </header>
      <main>
        <section id="home" className="home-section">
        <h1 className="titulo_primario">Expertise e Inovação a Serviço do Futuro</h1>
        <p className="texto_primario">
          Em um mundo em constante evolução, antecipar desafios e aproveitar oportunidades é crucial para o sucesso sustentado. É aqui que nosso compromisso ganha vida..
        </p>
        <p className="texto_primario_seguinte">Combinamos conhecimento profundo e extensa experiência no setor de tecnologia para desenvolver soluções pioneiras. Nossa abordagem centrada no cliente garante que cada projeto seja personalizado para atender às necessidades específicas do seu negócio.</p>
        </section>
        <div>
          <svg
            className="icone_coracao"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <path
              fill="#1B6C64"
              stroke="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M39.858 11.853C35.855 6.988 27.412 6.804 24 12.165c-3.412-5.36-11.854-5.176-15.858-.312C-1.953 24.117 19.84 39.826 24 39.826s25.953-15.71 15.858-27.973"
              stroke-width="2"
            />
            <path
              fill="white"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M31.221 16.053c-.64 0-1.254.255-1.707.707l-6.546 6.551l-3.14-3.216a2.413 2.413 0 1 0-3.452 3.374l4.844 4.962a2.413 2.413 0 0 0 3.433.02l8.274-8.277a2.415 2.415 0 0 0-1.705-4.12z"
              stroke-width="1"
            />
          </svg>
          <p className="texto_coracao">
            A Anjuna transforma a gestão em saúde, permitindo um diálogo direto com os dados da sua operação. Usando IA e as bases HVBC, mapeamos processos e riscos em um mapa completo do ciclo de cuidados.

            Com nossa plataforma, você pode conversar com os dados em linguagem natural, extraindo insights valiosos. A interface é simples e intuitiva, apresentando todos os passos e procedimentos de forma visual para garantir total consciência situacional à equipe. Conecte todos os pontos do processo e tenha os desfechos corretamente registrados, medidos e acessíveis.
            
          </p>
        </div>
        <section id="services" className="services-section">
        <div className="titulo_servico">
          <div>
            <h2 className="titulo_secundario">Our Service</h2>
            <p className="texto_primario">
              We offer a range of services designed to meet the unique needs of each client. From custom software development to IT consulting and cloud solutions, we provide comprehensive support to help businesses navigate the complexities of the digital landscape.
            </p>
          </div>
        </div>
        </section>
        <div className="container">
          <div className="card">
            <div className="icon-circle">
              <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM12 8c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zM12 9c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zM12 10c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"></path>
              </svg>
            </div>
            <h3>Lorem ipsum</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="button" data-modal="modal1">
              Saiba mais
            </button>
          </div>

          <div className="card">
            <div className="icon-circle">
              <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"></path>
              </svg>
            </div>
            <h3>Lorem ipsum</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="button" data-modal="modal2">
              Saiba mais
            </button>
          </div>
          <div className="card">
            <div className="icon-circle">
              <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
                <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-1 16H6c-.551 0-1-.449-1-1V6c0-.551.449-1 1-1h12c.551 0 1 .449 1 1v12c0 .551-.449 1-1 1zm-1-6h-3V9h-2v4H8v2h4v3h2v-3h3v-2z"></path>
              </svg>
            </div>
            <h3>Lorem ipsum</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="button" data-modal="modal3">
              Saiba mais
            </button>
          </div>

          <div className="card">
            <div className="icon-circle">
              <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
                <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
              </svg>
            </div>
            <h3>Lorem ipsum</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="button" data-modal="modal4">
              Saiba mais
            </button>
          </div>
        </div>
        
        {/* 2. Inclua o novo componente de Workflow AQUI */}
        <WorkflowSection />
        {/* Fim do componente de Workflow */}
        <footer className="footer">
          <p className="ftexto">© 2024 Anjuna Tech. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}

export default App;