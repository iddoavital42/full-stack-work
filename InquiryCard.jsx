 import React from "react";

const InquiryCard = ({ inquiry, onStatusChange }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
      <p><strong>Name:</strong> {inquiry.name}</p>
      <p><strong>Email:</strong> {inquiry.email}</p>
      <p><strong>Message:</strong> {inquiry.message}</p>
      <p><strong>Status:</strong> {inquiry.status}</p>

      <select
        value={inquiry.status}
        onChange={(e) => onStatusChange(inquiry._id, e.target.value)}
      >
        <option value="new">New</option>
        <option value="in-progress">In Progress</option>
        <option value="resolved">Resolved</option>
      </select>
    </div>
  );
};

export default InquiryCard;
