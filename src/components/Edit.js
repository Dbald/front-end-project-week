import React from 'react';

export const Edit = ({ edit, handleChange, history, id, content, title }) => {
  const submit = async (e) => {
    e.preventDefault();
    await edit(id);
    history.push('/');
  };

  return (
    <div>
      <h2>Edit Note</h2>
      <form onSubmit={submit}>
        <input
          className="EditTitle"
          placeholder="Edit Title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <input
          className="EditContent"
          placeholder="Edit Content"
          name="content"
          value={content}
          onChange={handleChange}
        />
        <button className="SaveButton" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;