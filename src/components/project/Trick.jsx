import { NavLink } from 'react-router-dom';

function Trick({ id, title, img }) {
    return (
        <NavLink to={`/tricks/${id}`}>
            <li className="project">
                <img src={img} alt={img} className="project__img" />
                <h3 className="project__title">{title}</h3>
            </li>
        </NavLink>
    );
}

export default Trick;
