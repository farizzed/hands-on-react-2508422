import PropTypes from 'prop-types';

const ListCasts = ({casts, onClickCast}) => {

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
      gap: "1rem",
      marginBottom: "1rem",
    }}>
      {
        casts.map((member) => {
          return (
            <a key={member.id} onClick={ () => onClickCast(member) } data-tooltip={member.name}>
              <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
            </a>
          );
        })
      }
    </div>
  );
};

ListCasts.propTypes = {
  casts: PropTypes.array,
  onClickCast: PropTypes.func
}

export default ListCasts;