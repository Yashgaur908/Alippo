import React, { useState } from "react";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

// Table component that displays data and handles edit/delete actions
const Table = ({ data, setData }) => {
  // State variables for managing modals and selected item
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Handle edit action: open edit modal with selected item
  const handleEdit = (item) => {
    setSelectedItem(item);
    setEditModalOpen(true);
  };

  // Handle delete action: open delete modal with selected item
  const handleDelete = (item) => {
    setSelectedItem(item);
    setDeleteModalOpen(true);
  };

  // Render the table with data, edit/delete buttons, and modals
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>SL.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Pin Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through data and render rows with edit/delete buttons */}
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name || "-"}</td>
              <td>{item.age || "-"}</td>
              <td>{item.city || "-"}</td>
              <td>{item.pinCode || "-"}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Display edit modal when editModalOpen is true */}
      {editModalOpen && (
        <div className="overlay">
          <EditModal
            item={selectedItem}
            data={data}
            setData={setData}
            onClose={() => setEditModalOpen(false)}
          />
        </div>
      )}

      {/* Display delete modal when deleteModalOpen is true */}
      {deleteModalOpen && (
        <div className="overlay">
          <DeleteModal
            data={data}
            setData={setData}
            item={selectedItem}
            onClose={() => setDeleteModalOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Table;
