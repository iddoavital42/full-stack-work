 import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InquiryCard from './InquiryCard';

const Dashboard = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/inquiries');
        setInquiries(response.data);
      } catch (error) {
        console.error('Error fetching inquiries:', error);
      }
    };

    fetchInquiries();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:4000/api/inquiries/${id}`, { status: newStatus });

      setInquiries((prevInquiries) =>
        prevInquiries.map((inquiry) =>
          inquiry._id === id ? { ...inquiry, status: newStatus } : inquiry
        )
      );
    } catch (error) {
      console.error('Error updating inquiry status:', error);
    }
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <h2>Inquiry Dashboard</h2>
      {inquiries.map((inquiry) => (
        <InquiryCard
          key={inquiry._id}
          inquiry={inquiry}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
};

export default Dashboard;
