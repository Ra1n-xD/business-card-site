import { useParams } from 'react-router-dom';
import { projects } from '../../helpers/projectsList';

function ProjectPage() {
    const { id } = useParams();
    const project = projects[id];

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>

                    <div className="project-details__video">
                        <div className="video-wrapper">
                            {/* <iframe
                                src={project.src}
                                title={project.title}
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen='true'
                                seamless="seamless"
                            ></iframe> */}
                        </div>
                    </div>

                    <div className="project-details__desc">
                        <p>{project.desc}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProjectPage;
