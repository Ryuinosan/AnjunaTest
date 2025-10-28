import "./App.css";
import React, { useState } from 'react';
import { useFormulario } from './hooks/useFormulario'; // Importe o hook

// 1. Componente WorkflowSection (separado)
const WorkflowSection = () => {
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
                <div className="workflow-steps">
                    <ul className="process-list">
                        {processSteps.map((step, index) => (
                            <li key={index} data-step={index + 1}>
                                <div className="step-info">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="workflow-illustration">
                    <img 
                        src="placeholder-illustration.png" 
                        alt="Ilustração do Fluxo de Trabalho"
                        style={{ width: '100%', maxWidth: '450px', height: 'auto' }}
                    />
                </div>
            </div>
        </section>
    );
};
// FIM do WorkflowSection

// 2. Componente App (separado - NOVO COM FORMULÁRIO INTEGRADO)
function App() {
  // === ESTADOS DO FORMULÁRIO ===
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [mensagem, setMensagem] = useState('');

  // === USE O HOOK PERSONALIZADO ===
  const { loading, resultado, enviarFormulario } = useFormulario();

  // === FUNÇÃO DE ENVIO DO FORMULÁRIO ===
  const handleSubmit = async (e) => {
    e.preventDefault();

    const dados = { 
      nome, 
      email, 
      empresa, 
      mensagem 
    };

    const sucesso = await enviarFormulario(dados);

    if (sucesso) {
      // Limpa o formulário após envio bem-sucedido
      setNome('');
      setEmail('');
      setEmpresa('');
      setMensagem('');
    }
  };

  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#name">Contact</a></li>
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
            A Anjuna Tech revoluciona a análise de HFMEA's (Healthcare Failure Mode and Effects Analysis) através de inteligência artificial e visualização por grafos. Nossa plataforma permite identificar, priorizar e mitigar riscos em processos de saúde com precisão nunca antes alcançada.

            Com nossa tecnologia, você pode analisar falhas potenciais em tempo real, visualizar interconexões complexas entre processos e tomar decisões baseadas em dados preditivos. A interface intuitiva apresenta todos os modos de falha e efeitos em gráficos interativos, garantindo total compreensão situacional para toda a equipe.

            Conectamos todos os pontos do processo assistencial e transformamos dados complexos em insights acionáveis, medidos e acessíveis.
          </p>
        </div>
        
        <section id="services" className="services-section">
          <div className="titulo_servico">
            <div>
              <h2 className="titulo_secundario">Nossos Serviços</h2>
              <p className="texto_primario">
                Oferecemos soluções especializadas em análise de riscos para organizações de saúde. Desde a leitura automatizada de HFMEA's até a visualização interativa de processos, fornecemos suporte completo para ajudar instituições a navegar pelas complexidades da segurança do paciente.
              </p>
            </div>
          </div>
        </section>
        
        <div className="container">
          <div className="card">
            <div className="icon-circle">
              <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"></path>
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
        
        {/* Inclua o componente de Workflow */}
        <WorkflowSection />
        
        {/* FOOTER COM FORMULÁRIO ATUALIZADO */}
        <footer className="footer">
          <div className="formulario">
            <h1>Entre em contato</h1>
            <p className="texto_footer">
              Tem uma pergunta ou quer iniciar um projeto? Nos envie uma mensagem!
            </p>
            
            {/* FORMULÁRIO COM INTEGRAÇÃO DA API */}
            <form onSubmit={handleSubmit}>
              <div className="form_group">
                <label htmlFor="nome">Nome</label>
                <input 
                  type="text" 
                  id="nome" 
                  name="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>
              
              <div className="form_group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email"
                  id="email" 
                  name="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>
              
              <div className="form_group">
                <label htmlFor="empresa">Empresa</label>
                <input 
                  type="text"
                  id="empresa" 
                  name="empresa" 
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>
              
              <div className="form_group">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea 
                  id="mensagem" 
                  name="mensagem" 
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  required
                  disabled={loading}
                  rows="4"
                />
              </div>
              
              <button 
                className="form_send" 
                type="submit" 
                disabled={loading}
              >
                {loading ? 'Enviando...' : 'Enviar'}
              </button>
            </form>

            {/* MENSAGEM DE RESULTADO */}
            {resultado.mensagem && (
              <div 
                style={{ 
                  marginTop: '1rem',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  color: resultado.tipo === 'sucesso' ? 'green' : 'red',
                  border: `1px solid ${resultado.tipo === 'sucesso' ? 'green' : 'red'}`,
                  backgroundColor: resultado.tipo === 'sucesso' ? '#f0fff0' : '#fff0f0'
                }}
              >
                {resultado.mensagem}
              </div>
            )}
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;