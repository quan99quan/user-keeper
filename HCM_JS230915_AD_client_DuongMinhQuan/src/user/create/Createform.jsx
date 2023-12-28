import React from 'react';
import { useDispatch } from 'react-redux';

import { userAction } from '../../store/slices/user.slice';
import api from '@services/apis';
import "./createform.css"
export default function CreateForm() {
  const dispatch = useDispatch();

  const handleAddUser = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const description = e.target.des.value;

    try {
   
      const response = await api.user.create({ name, description });
console.log(response);
   
      dispatch(userAction.addData(response.data));

      
      dispatch(userAction.loadModal());
    } catch (error) {
      console.error('Lỗi khi thêm người dùng:', error);
    }
  };

  return (
    <div className="create_form">
      <form onSubmit={handleAddUser}>
        <div className="btn_box">
          <span></span>
          <button
            onClick={() => {
              dispatch(userAction.loadModal());
            }}
            type="button"
            className="btn btn-danger"
          >
            X
          </button>
        </div>
        <div className="form_group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form_control"
            placeholder="User Name"
            name="name"
          />
        </div>
        <div className="form_group">
          <label htmlFor="des">Description</label>
          <input
            type="text"
            id="des"
            className="form_control"
            placeholder="User Description"
            name="des"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Create
        </button>
      </form>
    </div>
  );
}
