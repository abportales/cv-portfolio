import { personalData } from "../data"

export const PersonalData = () => {

  const data = personalData;

  return (
    <>
      <div className="card cardData">
        <h3> Datos Personales </h3>
        <hr />
        <ul className="noStyle">
          {
            data.map((item) => (
              <li key={item.id}>
                <i className={item.icon}></i>
                <span>{item.data}</span>
              </li>
            ))
          }
          <li>
            <i className="bi bi-linkedin"></i>
            <a href="https://www.linkedin.com/in/abraham-portales-947275150/" target="_blank" rel="noopener noreferrer">
              Linkedin
            </a>
          </li>
          <li>
            <i className="bi bi-github"></i>
            <a href="https://github.com/abportales" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
