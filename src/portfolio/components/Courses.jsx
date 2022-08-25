import { coursesMobile, coursesNetworking, coursesWeb } from "../data";
import { BaseCourse } from "./BaseCourse"

export const Courses = () => {

    const cursosWeb = coursesWeb;
    const cursosMovil = coursesMobile;
    const cursosRed = coursesNetworking;

    return (
        <>
            <div className="card" data-aos="fade-right">
                <h3 className="card-header"> Cursos Web</h3>
                <div className="card-body">
                    <BaseCourse key={cursosWeb.id} {...cursosWeb} />
                </div>
            </div>
            <div className="card" data-aos="fade-left">
                <h3 className="card-header"> Cursos Móvil</h3>
                <div className="card-body">
                    {
                        cursosMovil.map((curso) =>
                            <BaseCourse key={curso.id} {...curso} />

                        )
                    }
                </div>
            </div>
            <div className="card" data-aos="fade-right">
                <h3 className="card-header"> Cursos de Redes</h3>
                <div className="card-body">
                    {
                        cursosRed.map((curso) =>
                            <BaseCourse key={curso.id} {...curso} />
                        )
                    }
                </div>
            </div>
        </>
    )
}
