import { Container, Row, Col } from "react-bootstrap"
import "./styles/cv.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
const Cv = function () {
  return (
    <div className="cv-layout">
      <div className="cv-sidebar">
        <img src="/imp.png" alt="Foto profilo" className="cv-photo" />
        <h2>Contatti</h2>
        <p className="d-flex align-items-center justify-content-center">
          <i
            className="fas fa-calendar-alt"
            style={{ fontSize: "18px", color: "#477cb4ff" }}
          ></i>
          <span className="ms-3">11/02/1992</span>
        </p>
        <p className="d-flex align-items-center justify-content-center">
          <i
            className="fas fa-map-marker-alt"
            style={{ fontSize: "18px", color: "#477cb4ff" }}
          ></i>
          <span className="ms-3">Reggello (FI)</span>
        </p>
        <p>
          <a
            href="mailto:stella.marucelli@gmail.com"
            className="contact-link  d-flex align-items-center justify-content-center"
          >
            <i
              className="fas fa-envelope "
              style={{ fontSize: "18px", color: "#477cb4ff" }}
            ></i>
            <span className="ms-3">stella.marucelli@gmail.com</span>
          </a>
        </p>
        <p>
          <a
            href="tel:+393780662596"
            className="contact-link d-flex align-items-center justify-content-center"
          >
            <i
              className="fas fa-phone-volume"
              style={{ fontSize: "18px", color: "#477cb4ff" }}
            ></i>
            <span className="ms-3">+39 378 066 2596</span>
          </a>
        </p>
        <p>
          <a
            href="https://github.com/11292-stella"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link d-flex align-items-center justify-content-center"
          >
            <i
              className="fab fa-github"
              style={{ fontSize: "18px", color: "#477cb4ff" }}
            ></i>
            <span className="ms-2">https://github.com/11292-stella</span>
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/stella-marucelli-0992081a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link d-flex align-items-center justify-content-center"
          >
            <i
              className="fab fa-linkedin"
              style={{ fontSize: "18px", color: "#477cb4ff" }}
            ></i>
            <span className="ms-2">www.linkedin.com/in/stella-marucelli</span>
          </a>
        </p>
        {/* ... */}

        <h2>Lingue</h2>
        <p>Inglese - base</p>

        <h2>
          Conoscenze <br /> Informatiche
        </h2>

        <div className="cv-skills">
          <p>
            <strong>Frontend</strong>
          </p>
          <div className="d-flex flex-wrap gap-3 mb-3">
            <div className="skill-item">
              <i className="fab fa-html5" style={{ color: "#E34F26" }}></i>
              <span>HTML5</span>
            </div>
            
            <div className="skill-item">
              <i className="fab fa-css3-alt" style={{ color: "#1572B6" }}></i>
              <span>CSS3</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-js" style={{ color: "#F7DF1E" }}></i>
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
  <i className="fab fa-flutter" style={{ color: "#02569B" }}></i>
  <span>Flutter</span>
</div>
            <div className="skill-item">
              <i className="fab fa-react" style={{ color: "#61DBFB" }}></i>
              <span>React</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-bootstrap" style={{ color: "#7952B3" }}></i>
              <span>Bootstrap</span>
            </div>
          </div>

          <p>
            <strong>Backend</strong>
          </p>
          <div className="d-flex flex-wrap gap-3 mb-3">
            <div className="skill-item">
              <i className="fab fa-java" style={{ color: "#007396" }}></i>
              <span>Java</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-server" style={{ color: "#6c757d" }}></i>
              <span>Spring Boot</span>
            </div>
          </div>

          <p>
            <strong>Database</strong>
          </p>
          <div className="d-flex flex-wrap gap-3 mb-3">
            <div className="skill-item">
              <i className="fas fa-database" style={{ color: "#336791" }}></i>
              <span>PostgreSQL</span>
            </div>
          </div>

          <p>
            <strong>Versionamento</strong>
          </p>
          <div className="d-flex flex-wrap gap-3 mb-3">
            <div className="skill-item">
              <i className="fab fa-git-alt" style={{ color: "#F1502F" }}></i>
              <span>Git</span>
            </div>
          </div>

          <p>
            <strong>Deployment</strong>
          </p>
          <div className="d-flex flex-wrap gap-3 mb-3">
            <div className="skill-item">
              <i
                className="fas fa-cloud-upload-alt"
                style={{ color: "#477cb4ff" }}
              ></i>
              <span>Vercel</span>
            </div>
          </div>

          <p>
            <strong>In apprendimento</strong>
          </p>
          <div className="d-flex flex-wrap gap-3 mb-3">
            <div className="skill-item">
              <i className="fab fa-angular" style={{ color: "#DD0031" }}></i>
              <span>Angular</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-python" style={{ color: "#3776AB" }}></i>
              <span>Python</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-docker" style={{ color: "#0db7ed" }}></i>
              <span>Docker</span>
            </div>
            <div className="skill-item">
  <i className="fab fa-node-js" style={{ color: "#3C873A" }}></i>
  <span>Node.js</span>
</div>
            <h2>🧠 Soft Skills</h2>
            <div className="soft-skills">
  <div className="skill">
    <span>Analisi Funzionale e QA Testing</span>
    <div className="bar">
      <div className="fill" style={{ width: "95%" }}></div>
    </div>
              </div>
  <div className="skill">
    <span>Problem Solving e Troubleshooting Tecnico</span>
    <div className="bar">
      <div className="fill" style={{ width: "92%" }}></div>
    </div>
  </div>
              <div className="skill">
    <span>Documentazione Tecnica e Reportistica Analitica</span>
    <div className="bar">
      <div className="fill" style={{ width: "95%" }}></div>
    </div>
  </div>
              <div className="skill">
    <span>Comunicazione Tecnica Inter-dipartimentale</span>
    <div className="bar">
      <div className="fill" style={{ width: "88%" }}></div>
    </div>
  </div>
              <div className="skill">
    <span>User Experience (UX) & UI Audit</span>
    <div className="bar">
      <div className="fill" style={{ width: "85%" }}></div>
    </div>
  </div>
              <div className="skill">
    <span>Gestione delle Priorità e Scadenze (Agile/Sprint)</span>
    <div className="bar">
      <div className="fill" style={{ width: "90%" }}></div>
    </div>
  </div>
              <div className="skill">
    <span>Pensiero Critico e Validazione dei Dati</span>
    <div className="bar">
      <div className="fill" style={{ width: "92%" }}></div>
    </div>
  </div>
              <div className="skill">
    <span>Apprendimento Rapido di Nuovi Stack Software</span>
    <div className="bar">
      <div className="fill" style={{ width: "94%" }}></div>
    </div>
  </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cv-content">
  <h1>Stella Marucelli</h1>
  <h2>Junior Full Stack Developer & QA Analyst</h2>
  
  <h2>Profilo Professionale</h2>
 <p>
    Sviluppatrice Full Stack formata con <strong>Epicode</strong>, con esperienza consolidata nell'<strong>Analisi Funzionale e QA Testing</strong> per sistemi gestionali complessi. <br />
    
    Specializzata nel testing software in ambienti demo e produzione, mi occupo di individuare criticità logiche e sistemistiche, documentandole in modo analitico per supportare il team di sviluppo nella risoluzione dei bug. <br />
    
    Ho maturato solide competenze di <strong>troubleshooting</strong> lavorando su architetture integrate (Cassa, Mobile, Cloud), mantenendo un approccio metodico e una costante curiosità verso l'evoluzione tecnologica. <br />
    
    <strong>Cerco un'opportunità lavorativa principalmente da remoto</strong>; valuto il trasferimento su tutto il territorio nazionale a fronte di una proposta contrattuale solida. <br />
    
    Motivata a contribuire attivamente alla qualità del prodotto e a crescere all'interno di un team di sviluppo strutturato.
  </p>

        <h2>🎓 Formazione</h2>

        <h4>Master Full Stack Developer – Epicode 📅 Gennaio – Agosto 2025</h4>
        <p>
          Percorso intensivo di formazione pratica e teorica sullo sviluppo web
          full stack. Durante il corso ho acquisito competenze nello sviluppo di
          applicazioni web moderne, sia lato frontend che backend, lavorando su
          progetti individuali e di gruppo.
        </p>
        <div className="corso">
    <h4>Academy JEE (Java Enterprise Edition) 📅 Nov 2025 – Dic 2025</h4>
    <p>
      <strong>Adecco Formazione S.r.l. / Forma.Temp (200 ore)</strong> <br />
      Corso intensivo di specializzazione sullo stack Java Enterprise. 
      Focus su architetture backend, programmazione ad oggetti avanzata, 
      gestione database e sviluppo di applicazioni scalabili in ambiente JEE.
    </p>
  </div>
        <h4>
          Qualifica professionale in Grafica Pubblicitaria 📅 Settembre 2009 –
          Agosto 2011 <br />
          <span className="luogo">
            Istituto Statale di istruzione superiore Guglielmo Marconi
          </span>{" "}
          <br />
        </h4>
        <p>
          Percorso formativo in comunicazione visiva e progettazione grafica,
          con focus su branding, impaginazione editoriale e design digitale.
          Durante il corso ho sviluppato competenze creative e tecniche
          attraverso progetti scolastici e laboratori pratici, lavorando su
          concept visivi, layout e identità visive.
        </p>

        <h2>💼 Esperienza lavorative</h2>

   <h4>
  Analista e Progettista di Software 📅 Dicembre 2025 – In corso <br />
  <span className="luogo">Sellogic S.r.l.</span> <br />
  <span className="luogo">Collazzone, Umbria, Italia (Remoto/Ibrido)</span>
</h4>
<p>
  Collaborazione strategica nello sviluppo e nel controllo qualità di sistemi gestionali integrati. <br />
  Esecuzione di cicli di test funzionali, stress test e regressioni su piattaforme multi-modulo (Cassa, App Mobile, Backend Cloud). <br />
  Responsabile dell'individuazione e della rendicontazione tecnica delle anomalie, con particolare focus sulla verifica dei flussi dati e sulla validazione dei fix rilasciati. <br />
  Supporto tecnico alla progettazione per il miglioramento dell'esperienza utente e della stabilità delle release software.
</p>

        <h4>
          Brand Ambassador Iliad 📅 Ottobre 2024 – Dicembre 2024 <br />{" "}
          <span className="luogo">Iliad</span> <br />
          <span className="luogo">
            Figline e Incisa Valdarno, Toscana, Italia (Fi)
          </span>
        </h4>

        <p>
          Gestione autonoma di stand promozionali e vendita diretta delle
          offerte Iliad. Esperienza a contatto con il pubblico, orientata alla
          comunicazione efficace, alla risoluzione rapida delle richieste e alla
          promozione del brand in contesti dinamici.
        </p>
        

        <h2>🛠️Progetti</h2>

        <div className="project">
          <h4>🌟Sneaky Workout</h4>
          <p>
            Web app per la creazione di schede di allenamento personalizzate,
            con autenticazione e gestione utenti.
            <br />
            <strong>Tecnologie:</strong> React, Java, PostgreSQL, RESTful API
            <br />
            <a
              href="https://front-project-personal-trainer.vercel.app/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Live demo
            </a>
          </p>
        </div>

        <div className="project">
          <h4>🌟CV Online</h4>
          <p>
            Curriculum interattivo sviluppato in React, con layout responsive e
            deploy su Vercel.
            <br />
            <strong>Tecnologie:</strong> React, Vercel
            <br />
            <a
              href="https://cv-stella-marucelli.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Live demo
            </a>
          </p>
        </div>

        <div className="project">
          <h4>📁Portfolio online</h4>
          <p>
            Raccolta dei miei progetti web, con sezioni dedicate a frontend,
            backend e design.
            <br />
            <a
              href="https://portfolio-stella-lyart.vercel.app/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Visita il portfolio
            </a>
          </p>
        </div>

        <h2>🎓 Certificazioni</h2>
        <div className="project">
          <h4>Epicode Talent</h4>
          <p>
            Certificazione ottenuta al termine del percorso Full Stack
            Developer, con valutazione positiva su progetti e competenze.
          </p>
          <a
            href="https://talent.epicode.com/talent/549fd8c5-b132-433a-8a03-c38daf4a8960"
            target="_blank"
            rel="noopener noreferrer"
            className="cert-link"
          >
            🔗 Visualizza profilo su Epicode Talent
          </a>
        </div>

        <p>
          Sono disponibile per un colloquio conoscitivo e pronta a mettermi in
          gioco in un team dinamico e orientato all’innovazione.
        </p>
        <br />
        <p>
          Stella Marucelli – Reggello
          <br />
          <br />
          <img
            src="/firma.png"
            alt="Firma Stella Marucelli"
            style={{ width: "150px", marginTop: "10px" }}
          />
          <hr />
          Autorizzo il trattamento dei miei dati personali ai sensi del D.Lgs.
          196/2003 e del Regolamento UE 2016/679 (GDPR).
        </p>
      </div>
    </div>
  )
}

export default Cv
