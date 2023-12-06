import PropTypes from 'prop-types';
import React from "react";

const MemberModal = ({member, handleClose}) => {

  return (
    <dialog id="member-modal" open>
      <article>
        <header>
          <a href="#close" aria-label="Close" className="close" data-target="member-modal" onClick={handleClose}></a>
          <h3 style={{marginBottom : "0px"}}>{member.name}</h3>
        </header>
        <div style={{display: "flex", gap: "1rem"}}>
          <img style={{width: "150px"}} src={`images/${member.slug}.svg`} alt={member.name}/>
          <p>{member.bio}</p>
        </div>
      </article>
    </dialog>
  );
};

MemberModal.propTypes = {
  member: PropTypes.object,
  handleClose: PropTypes.func
}

export default MemberModal;