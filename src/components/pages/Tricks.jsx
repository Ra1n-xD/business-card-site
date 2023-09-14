import Trick from '../project/Trick';

import { tricks } from '../../helpers/tricksList';

function Tricks() {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Фишки CSS</h2>
                <ul className="projects">
                    {tricks.map((project, id) => {
                        return <Trick key={id} id={id} title={project.title} img={project.img} />;
                    })}
                </ul>
            </div>
        </main>
    );
}

export default Tricks;
