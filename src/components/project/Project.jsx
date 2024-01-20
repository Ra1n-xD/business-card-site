import { NavLink } from 'react-router-dom';

function Trick({ id, title, img }) {
    return (
      <li className="project">
        <NavLink to={`/tricks/${id}`}>
          <img src={img} alt={img} className="project__img" />
          <h3 className="project__title">{title}</h3>
        </NavLink>
      </li>
    );
}

export default Trick;
