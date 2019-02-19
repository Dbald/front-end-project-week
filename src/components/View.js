import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const View = ({ _id, del, content, title }) => {
  return (
    <Fragment>
      <div className="Edit">
        <Link className="Edit__Link" to={`/edit/${_id}`}>
          edit
        </Link>
        <Link className="Edit__Link" to="/" onClick={() => del(_id)}>
          delete
        </Link>
      </div>
      <h2 className="ViewNote">{title}</h2>
      <div className="ViewText">{content}</div>
    </Fragment>
  );
};

export default View;