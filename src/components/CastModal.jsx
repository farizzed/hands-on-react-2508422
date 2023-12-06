import PropTypes from 'prop-types';

const CastModal = ({cast, handleClose}) => {

  return (
    <dialog id="member-modal" open>
      <article>
        <header>
          <a href="#close" aria-label="Close" className="close" data-target="member-modal" onClick={handleClose}></a>
          <h3 style={{marginBottom : "0px"}}>{cast.name}</h3>
        </header>
        <div style={{display: "flex", gap: "1rem"}}>
          <img style={{width: "150px"}} src={`images/${cast.slug}.svg`} alt={cast.name}/>
          <p>{cast.bio}</p>
        </div>
      </article>
    </dialog>
  );
};

CastModal.propTypes = {
  cast: PropTypes.object,
  handleClose: PropTypes.func
}

export default CastModal;