//menggunakan data langsung dari https://gorest.co.in/

import { useState, useEffect } from "react";
import Navbar from "./components/navbar";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://gorest.co.in/public/v1/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.data));
  }, []);

  const handleCreateUser = () => {
    fetch("https://gorest.co.in/public/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 201) {
          setMessage("Pengguna berhasil ditambahkan.");
          setUsers([...users, data.data]);
        } else {
          setMessage("Gagal menambahkan pengguna.");
        }
      });
  };

  const handleEditUser = (userId) => {
    const userToEdit = users.find((user) => user.id === userId);

    if (userToEdit) {
      setFormData({
        name: userToEdit.name,
        email: userToEdit.email,
      });

      setEditingUser(userToEdit);
      setEditModalOpen(true);
    } else {
      console.error("Pengguna tidak ditemukan.");
    }
  };

  const handleDeleteUser = (userId) => {
    fetch(`https://gorest.co.in/public/v1/users/${userId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 204) {
          setMessage("Pengguna berhasil dihapus.");
          setUsers(users.filter((user) => user.id !== userId));
        } else {
          setMessage("Gagal menghapus pengguna.");
        }
      });
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
          {users
            .filter(
              (user) =>
                user.name.includes(searchTerm) ||
                user.email.includes(searchTerm)
            )
            .map((user) => (
              <tr key={user.id}>
                <td className="text-center">{user.name}</td>
                <td className="text-center">{user.email}</td>
                <td className="text-center">
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="btn btn-danger"
                  >
                    Hapus
                  </button>
                  <button
                    onClick={() => handleEditUser(user.id)}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <h1
        className="text-center"
        style={{ fontSize: "24px", fontWeight: "bold" }}
      >
        Tambah pengguna baru
      </h1>
      <input
        type="text"
        placeholder="Nama"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="form-control mx-auto mb-2"
      />
      <input
        type="text"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="form-control mx-auto mb-2"
      />
      <div className="text-center">
        <button onClick={handleCreateUser} className="btn btn-primary mx-auto">
          Tambah Pengguna
        </button>
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
}

export default UsersPage;
