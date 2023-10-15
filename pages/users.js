//tidak menggunakan data langsung dari https://gorest.co.in/

import React, { useState } from 'react';
import Navbar from "./components/navbar";

const initialUsers = [
  { id: 1, name: 'Akshayakeerti Patil', email: 'patil_akshayakeerti@schuster.example' },
  { id: 2, name: 'Arya Banerjee', email: 'arya_banerjee@dach-corwin.example' },
  { id: 3, name: 'Daevi Agarwal', email: 'daevi_agarwal@rutherford.example' },
  { id: 4, name: 'Bhoj Iyengar', email: 'bhoj_iyengar@heidenreich.example' },
  { id: 5, name: 'Chandran Iyer', email: 'chandran_iyer@hills.example' },
  { id: 6, name: 'Brahma Rana DO', email: 'brahma_rana_do@dicki-lang.test' },
  { id: 7, name: 'Gorakhnath Rana', email: 'gorakhnath_rana@renner-goodwin.example' },
  { id: 8, name: 'Tara Sinha', email: 'tara_sinha@leffler.test' },
  { id: 9, name: 'Pres. Arindam Tagore', email: 'arindam_pres_tagore@schamberger.test' },
];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const [editingUserId, setEditingUserId] = useState(null);

  const addUser = () => {
    const newUser = {
      id: users.length + 1, 
      ...formData,
    };

    setUsers([...users, newUser]);
    setFormData({ name: '', email: '' });
    setMessage('Pengguna berhasil ditambahkan.');
  };

  const editUser = () => {
    if (editingUserId !== null) {
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === editingUserId ? { ...user, ...formData } : user))
      );
      setFormData({ name: '', email: '' });
      setEditingUserId(null);
      setMessage('Pengguna berhasil diperbarui.');
    }
  };

  const deleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    setMessage('Pengguna berhasil dihapus.');
  };

  const searchUsers = () => {
    // Filter daftar pengguna berdasarkan searchTerm
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div>
<Navbar />
      <br></br>
      <h1
        className="text-center"
        style={{ fontSize: "24px", fontWeight: "bold" }}
      >
        Daftar Pengguna
      </h1>
      <br></br>
      <input
        type="text"
        placeholder="Cari Pengguna"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control mx-auto mb-2"
      />
      <table className="table table-striped mx-auto">
        <thead>
          <tr>
            <th className="text-center">Nama</th>
            <th className="text-center">Email</th>
            <th className="text-center">Tindakan</th>
          </tr>
        </thead>
  <tbody>
    {searchUsers().map((user) => (
      <tr key={user.id}>
        <td class="text-center">{user.name}</td>
        <td class="text-center">{user.email}</td>
        <td class="text-center">
          <button onClick={() => deleteUser(user.id)} className="btn btn-danger">Hapus</button>{' '}
          <button onClick={() => setEditingUserId(user.id)} className="btn btn-warning">Edit</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
<h1 className="text-center" style={{ fontSize: "24px", fontWeight: "bold" }}>{editingUserId ? 'Edit Pengguna' : 'Tambah Pengguna Baru'}</h1>
<div className="text-center">
<input className="form-control mx-auto mb-2" type="text" placeholder="Nama" value={formData.name} />
<input className="form-control mx-auto mb-2" type="text" placeholder="Email" value={formData.email} />
</div>
<div className="text-center">
{editingUserId ? (
  <button onClick={editUser} className="btn btn-primary">Perbarui</button>
) : (
  <button  onClick={addUser} className="btn btn-primary">Tambah Pengguna</button>
)}
</div>
{message && (
        <p
          className="text-center mt-2"
          style={{ fontSize: "18px", fontWeight: "bold" }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default UserManagement;
