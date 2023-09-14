import { useParams } from 'react-router-dom';
import { tricks } from '../../helpers/tricksList';

function TrickPage() {
    const { id } = useParams();
    const trick = tricks[id];

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{trick.title}</h1>

                    <div className="project-details__video">
                        <div className="video-wrapper">
                            <iframe
                                src={trick.src}
                                title={trick.title}
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen='true'
                                seamless="seamless"
                            ></iframe>
                        </div>
                    </div>

                    <div className="project-details__desc">
                        <p>{trick.desc}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default TrickPage;
