import { Container, Row, Col } from "react-bootstrap"
import "./styles/cv.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
const Cv = function () {
  return (
    <div className="cv-layout">
      <div className="cv-sidebar">
        <img src="/imp.png" alt="Foto profilo" className="cv-photo" />
        <h3>Stella Marucelli</h3>
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
            <span className="ms-2">
              https://www.linkedin.com/in/stella-marucelli-0992081a3/
            </span>
          </a>
        </p>
        {/* ... */}
      </div>

      <div className="cv-content">
        <h2>🎯 Profilo</h2>
        <p>
          Sviluppatrice full stack con una forte passione per il design
          funzionale e l’interazione utente. Dopo un percorso formativo
          intensivo con Epicode, ho realizzato diversi progetti web che spaziano
          dal frontend dinamico al backend in Java. Ogni progetto è stato
          un’occasione per crescere, superare ostacoli e consolidare competenze
          tecniche e creative
        </p>
        <h2>🎓 Formazione</h2>
        <h4>📍 Qualifica professionale in Grafica Pubblicitaria</h4>
        <p>
          <ul>
            <li>
              Studio di comunicazione visiva, impaginazione editoriale, branding
            </li>
            <li>Software: Adobe Photoshop, Illustrator, InDesign</li>
            <li>Progetti scolastici e laboratori creativi</li>
          </ul>
        </p>
        <h4>Corso Full Stack Developer – Epicode 📅 Gennaio – Agosto 2025</h4>
        <p>
          <ul>
            <li>HTML, CSS, JavaScript, React, Redux</li>
            <li>Backend con Java e Spring Boot</li>
            <li>Responsive design, API REST, testing</li>
          </ul>
        </p>
        <h2>🧠 Competenze Tecniche</h2>
        <p>
          <ul>
            <li>Frontend: HTML, CSS, JavaScript, React, Redux, Bootstrap</li>
            <li>Backend: Java, Spring Boot</li>
            <li>Tools: Git, GitHub, Vite, REST API, VS Code</li>
            <li>Design: Responsive layout, UX/UI, animazioni CSS</li>
          </ul>
        </p>
        <h2>🗣 Lingue</h2>
        <p>
          <ul>
            <li>Italiano: madrelingua</li>
            <li>Inglese: scolastico</li>
          </ul>
        </p>
        <h2>💼 Esperienza Progetti</h2>
        <h4>Sneaky Workout – Capstone finale </h4>
        <p>
          <ul>
            <li>App fitness con frontend React e backend Java</li>
            <li>Gestione utenti, interfaccia motivante, logica avanzata</li>
          </ul>
        </p>
        <h4>Music Play – Redux in azione </h4>
        <p>
          <ul>
            <li>App musicale con gestione stato avanzata</li>
            <li>Consolidamento delle competenze in React e Redux</li>
          </ul>
        </p>
        <h4>
          ...tutti i miei progetti{" "}
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
