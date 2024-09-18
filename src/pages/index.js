
import Layout from "@/components/Layout";
import { Inter } from "next/font/google";
import Link from "next/link";
import { skills, experiences, projects } from "./profile";

export default function Home() {
  return (
       <Layout footer={true}>
      {/* Header Card */}
      <header className="row">
      <div className="col-md-12">
  <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
    <div className="row">
      <div className="col-md-4 text-center">
        <img src="/profile_owen1.jpg" alt="profile Owen Smith" className="img-fluid" />
      </div>
      <div className="col-md-8 d-flex flex-column justify-content-center align-items-center text-center">
        <h1>Owen Smith Angarita</h1>
        <h3>Estudiante de desarrollo web</h3>
        <p>
        Desde que descubrí el desarrollo web me enganché completamente.
        Es la oportunidad de crear cosas desde cero con código y verlas convertirse en vida.
        Me encanta probar nuevas ideas, aprender nuevas tecnologías y pensar en la forma
        de mejorar el trabajo. Programar no es solo trabajo para mí; es algo de lo que disfruto
        y en lo que puedo seguir creciendo.
        </p>
        <Link href="/hireme" className="btn btn-outline-light">
          Trabaja Conmigo
        </Link>
      </div>
    </div>
  </div>
</div>

         {/* Second section */}

      <section className="row">
        <div className="col-md-4 py-2">
          <div className="card bg-light animate__animated animate__fadeInLeft">
            <div className="card-body">
              <h1>Skills</h1>

              {/* Skill Progress  */}
              {skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-8 py-2">
          {/* Experience */}
          <div className="card bg-light animate__animated animate__fadeInRight">
            <div className="card-body">
              <h1>Experiencia</h1>
              <ul>
                {/* List Item Experience */}
                {experiences.map(({ title, description, from, to }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>
                      {from} {to ? `- ${to}` : "- current"}
                    </h5>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
              <Link href="/hireme" className="btn btn-light">
                Conoce mas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portafolio */}
      <section>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-dark">
              <div className="row">
                <div className="col-md-12 my-2">
                  <h1 className="text-center text-light">Portafolio</h1>
                </div>
                {projects.map(({ name, description, image }, index) => (
                  <div className="col-md-4 p-2" key={index}>
                    <div className="card h-100">
                      <div className="overflow">
                        <img src={`/${image}`} alt="project" className="card-img-top" />
                      </div>
                      <div className="card-body">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <a href="#!">Conoce mas</a>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="col-md-12 mt-4">
                  <div className="text-center">
                    <Link href="https://github.com/Owen07siuu" className="btn btn-outline-light">
                      Mas proyectos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </header>
   </Layout>
  );
}
