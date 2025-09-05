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
        <h2>Profilo</h2>
        <p>
          Sviluppatrice full stack con una forte passione per il design
          funzionale e l’interazione utente. Dopo un percorso formativo
          intensivo con Epicode, ho realizzato diversi progetti web che spaziano
          dal frontend dinamico al backend in Java. Ogni progetto è stato
          un’occasione per crescere, superare ostacoli e consolidare competenze
          tecniche e creative
        </p>
        <h2>Lingue</h2>
        <p>Inglese - base</p>

        <h2>
          Conoscenze <br /> Informatiche
        </h2>

        <ul className="list-unstyled">
          <li className="d-flex align-items-center">
            <i
              className="fab fa-html5"
              style={{ fontSize: "20px", color: "#E34F26" }}
            ></i>
            <span className="ms-2">HTML5</span>
          </li>
          <li className="d-flex align-items-center">
            <i
              className="fab fa-css3-alt"
              style={{ fontSize: "20px", color: "#1572B6" }}
            ></i>
            <span className="ms-2">CSS3</span>
          </li>
          <li className="d-flex align-items-center">
            <i
              className="fab fa-js"
              style={{ fontSize: "20px", color: "#F7DF1E" }}
            ></i>
            <span className="ms-2">JavaScript</span>
          </li>
          <li className="d-flex align-items-center">
            <i
              className="fab fa-java"
              style={{ fontSize: "20px", color: "#007396" }}
            ></i>
            <span className="ms-2">Java</span>
          </li>
          <li className="d-flex align-items-center">
            <i
              className="fab fa-bootstrap"
              style={{ fontSize: "20px", color: "#7952B3" }}
            ></i>
            <span className="ms-2">Bootstrap</span>
          </li>
        </ul>
      </div>

      <div className="cv-content">
        <h1>Stella Marucelli</h1>
        <h2>Junior Full Stack Developer</h2>
        <h2>🎓 Formazione</h2>

        <h4>Master Full Stack Developer – Epicode 📅 Gennaio – Agosto 2025</h4>
        <p>
          Percorso intensivo di formazione pratica e teorica sullo sviluppo web
          full stack. Durante il corso ho acquisito competenze nello sviluppo di
          applicazioni web moderne, sia lato frontend che backend, lavorando su
          progetti individuali e di gruppo.
        </p>
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
        <h4>
          Receptionist 📅 Giugno 2020 – Settembre 2022 <br />
          <span className="luogo">
            ASD associazione Sportiva Dilettantistica
          </span>{" "}
          <br />
          <span className="luogo">Ragusa, Sicilia, Italia</span>
        </h4>
        <p>
          Gestione autonoma dell’area reception, accoglienza clienti e
          smistamento verso gli uffici di competenza. Esperienza quotidiana nel
          rispondere a richieste generiche, mantenere ordine e organizzazione, e
          gestire situazioni in modo rapido e preciso. Ruolo che ha rafforzato
          le mie capacità comunicative, la pazienza e l’attenzione al dettaglio
        </p>

        <h2>✨Portfolio online:</h2>
        <h4>
          <span>
            Ecco il mio portfolio, dove ogni progetto racconta un pezzo del mio
            percorso da sviluppatrice:
          </span>
          <a href="https://portfolio-stella-lyart.vercel.app/home">
            Portfolio - https://portfolio-stella-lyart.vercel.app/home
          </a>
        </h4>
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
