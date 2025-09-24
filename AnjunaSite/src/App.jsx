import "./App.css";
import BG_Anjuna from "./assets/BG-Anjuna.png";

function App() {
  return (
    <>
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
        </div>
      </header>
      <main>
        <h1 className="titulo_primario">Expertise and Innovation at the Service of the Future</h1>
        <p className="texto_primario">
          In a world in constant evolution, anticipating challenges and seizing opportunities is crucial for sustained success. This is where our commitment comes to life. We combine deep knowledge and extensive experience in the technology sector to develop pioneering solutions.
        </p>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vulputate mi sit amet blandit porttitor. Sed tempor lacus posuere
            sapien tristique feugiat. Pellentesque dignissim ligula odio, at
            ornare purus aliquam et. Etiam tristique ut tortor aliquet
            efficitur. Aliquam dictum aliquam lectus quis semper. Nullam
            elementum mollis enim vel blandit. Vestibulum ut ante at orci
            facilisis dignissim. Phasellus placerat mattis lobortis. Praesent
            malesuada ligula vel risus porta auctor. Nunc tristique hendrerit
            felis non eleifend. Duis nulla tellus, lacinia vitae dolor vel,
            tristique porttitor mi.
          </p>
        </div>
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
      </main>
    </>
  );
}

export default App;
