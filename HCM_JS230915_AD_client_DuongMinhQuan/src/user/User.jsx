import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import Createform from './create/Createform';
import { userAction } from '../store/slices/user.slice';
import user from '../services/apis/user';
import UpdateForm from './UpdateForm';

export default function User() {
  const dispatch = useDispatch();
  const userStore = useSelector(store => store.userStore);
  const [sortDirection, setSortDirection] = useState('asc');
  const generateRandomId = () => {
    const randomString = Math.random().toString(36).substring(2, 8);
    return randomString;
  };

  const handleDelete = async (userId) => {
    try {
      await user.delete(userId);
      dispatch(userAction.deleteData(userId));
    } catch (error) {
      console.error('Lỗi khi xóa dữ liệu:', error);
    }
  };

  const handleUpdate = (user) => {
    dispatch(userAction.setEditUser(user));
    dispatch(userAction.loadModal());
  };

  // Hàm sắp xếp danh sách theo id
  const handleSort = () => {
    const sortedData = [...userStore.data];

    if (sortDirection === 'asc') {
      sortedData.sort((a, b) => a.id - b.id);
      setSortDirection('desc');
    } else {
      sortedData.sort((a, b) => b.id - a.id);
      setSortDirection('asc');
    }

    dispatch(userAction.setData(sortedData));
  };

  return (
    <>
      <div>
        <button onClick={() => dispatch(userAction.loadModal())}>Create</button>
        {userStore.addModal && <Createform dispatch={dispatch} />}
      </div>
      <Table striped bordered hover className="table">
        <caption>User</caption>
        <thead>
          <tr>
            <th scope="col" onClick={handleSort} style={{ cursor: 'pointer' }}>
              id {sortDirection == 'asc' ? '↑' : '↓'}
            </th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userStore.data?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.description}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleUpdate(user)}>
                  Update
                </button>
                <button className="btn btn-primary" onClick={() => handleDelete(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {userStore.editUser && (
        <UpdateForm user={userStore.editUser} onClose={() => dispatch(userAction.loadModal())} />
      )}
    </>
  );
}
