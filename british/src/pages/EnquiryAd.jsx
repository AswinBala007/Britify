import { useState } from 'react';
 import Sidebar from "../components/SideNavBar";
import "../assets/css/enquiryad.css"; // Import CSS for styling
import AdNavbar from '../components/AdminNavBar';

const EnquiriesAd = () => {
  // Sample data for enquiries (replace with actual data from your backend)
  const [enquiries, setEnquiries] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", message: "I'm interested in the Python course. Can you provide more details?" },
    { id: 2, name: "Alice Smith", email: "alice@example.com", message: "Do you offer any discounts for group enrollments?" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", message: "Is there a trial period for the Machine Learning course?" },
    { id: 1, name: "John Doe", email: "john@example.com", message: "I'm interested in the Python course. Can you provide more details?" },
    { id: 2, name: "Alice Smith", email: "alice@example.com", message: "Do you offer any discounts for group enrollments?" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", message: "Is there a trial period for the Machine Learning course?" },{ id: 1, name: "John Doe", email: "john@example.com", message: "I'm interested in the Python course. Can you provide more details?" },
    { id: 2, name: "Alice Smith", email: "alice@example.com", message: "Do you offer any discounts for group enrollments?" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", message: "Is there a trial period for the Machine Learning course?" },// Add more enquiries here...
  ]);

  // Function to handle reply to an enquiry
  const handleReply = (id) => {
    // Logic to handle reply to an enquiry
    console.log(`Replying to enquiry with ID: ${id}`);
  };

  // Function to handle deletion of an enquiry
  const handleDelete = (id) => {
    // Logic to delete an enquiry
    setEnquiries(enquiries.filter(enquiry => enquiry.id !== id));
  };

  return (
    <div className="enquiries_page_enquiryad">
      <AdNavbar />
      <div className="homeContainer_enquiryad">
        <Sidebar className="sidebar_enquiryad"/>
        <div className="dashboardContent_enquiryad">
          <h2>Enquiries</h2>
          <div className="enquiries_container_enquiryad">
            {enquiries.map(enquiry => (
              <div className="enquiry_card_enquiryad" key={enquiry.id}>
                <div className="enquiry_info_enquiryad">
                  <h3>{enquiry.name}</h3>
                  <p>Email: {enquiry.email}</p>
                  <p>{enquiry.message}</p>
                </div>
                <div className="enquiry_actions_enquiryad">
                  <button onClick={() => handleReply(enquiry.id)}>Reply</button>
                  <button onClick={() => handleDelete(enquiry.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiriesAd;
