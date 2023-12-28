// UpdateForm.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userAction } from "../store/slices/user.slice";
import api from '@services/apis';
// import './update.css'
const UpdateForm = ({ user, onClose }) => {
  const dispatch = useDispatch();
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  useEffect(() => {
    setUpdatedUser({ ...user });
  }, [user]);

  const handleSave = async () => {
    try {
      const response = await api.user.update(updatedUser.id, updatedUser);
      console.log(response);
      dispatch(userAction.addData(response.data));
      dispatch(userAction.clearEditUser());
      onClose();
    } catch (error) {
      console.error("Lỗi khi cập nhật thông tin người dùng:", error);
    }
  };


  return (
    <div>
      <h2>Cập nhật thông tin người dùng</h2>
      <form>
        <label>Tên:</label>
        <input
          type="text"
          value={updatedUser.name}
          onChange={(e) =>
            setUpdatedUser({ ...updatedUser, name: e.target.value })
          }
        />
        <label>Mô tả:</label>
        <input
          type="text"
          value={updatedUser.description}
          onChange={(e) =>
            setUpdatedUser({ ...updatedUser, description: e.target.value })
          }
        />
        <button type="button" onClick={handleSave}>
          Lưu
        </button>
        <button type="button" onClick={() => onClose()}>
          Hủy
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
