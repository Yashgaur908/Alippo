import React from "react";

// DeleteModal component for confirming data deletion
const DeleteModal = ({ item, onClose, data, setData }) => {
  //* Handle Item Delete Function
  const handleDelete = () => {
    // Filter out the selected item for deletion
    const updatedData = data.filter((dataItem) => dataItem !== item);
    // Update the data and close the modal
    setData(updatedData);
    onClose();
  };

  // Render the DeleteModal UI
  return (
    <div className="deleteModal">
      <div className="deleteEntry">Delete Entry</div>
      <p>Are you sure you want to delete this entry?</p>
      <div className="buttonContainer">
        <button className="confirmDelete" onClick={handleDelete}>
          Delete
        </button>
        <button className="cancelDelete-button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
