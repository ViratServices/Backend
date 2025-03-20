import axios from "axios";
import React, { useEffect, useState } from "react";

const Contact = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getContacts = async () => {
    try {
      const response = await axios.get(
        "https://virat-backend.onrender.com/api/contacts"
      );
      setData(response.data.reverse());
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching contacts:", error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="contact-table">
      <h1>Contact Us Details</h1>

      {loading ? ( // Show spinner while loading
        <div className="spinner"></div>
      ) : (
        <table>
          <thead>
            <tr>
              <th className="th">No's</th>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Company</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((contact, index) => (
              <tr key={contact._id}>
                <td className="th">{index + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.number}</td>
                <td>{contact.company}</td>
                <td>{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Contact;
