import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const ListCasts = ({onClickMember}) => {
  const [cast, setCast] = useState([]);

  /* Get casts from json (used to mimic hit API) */
  async function fetchCast() {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  /* Fetch the cast when loaded */
  useEffect(() => {
    fetchCast();
  });

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
      gap: "1rem",
      marginBottom: "1rem",
    }}>
      {
        cast.map((member) => {
          return (
            <a key={member.id} onClick={ () => onClickMember(member) } data-tooltip={member.name}>
              <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
            </a>
          );
        })
      }
    </div>
  );
};

ListCasts.propTypes = {
  onClickMember: PropTypes.func
}

export default ListCasts;