import AdNavbar_users from "../components/AdminNavBar";
import Sidebar_users from "../components/SideNavBar";
import "../assets/css/users.css";

const Users = () => {
  // Sample user data
  const users = [
    { username: "user1", email: "user1@example.com", coursesEnrolled: 3 },
    { username: "user2", email: "user2@example.com", coursesEnrolled: 5 },
    { username: "user1", email: "user1@example.com", coursesEnrolled: 3 },
    { username: "user2", email: "user2@example.com", coursesEnrolled: 5 },
    { username: "user1", email: "user1@example.com", coursesEnrolled: 3 },
    { username: "user2", email: "user2@example.com", coursesEnrolled: 5 },
    { username: "user1", email: "user1@example.com", coursesEnrolled: 3 },
    { username: "user2", email: "user2@example.com", coursesEnrolled: 5 },
    { username: "user1", email: "user1@example.com", coursesEnrolled: 3 },
    { username: "user2", email: "user2@example.com", coursesEnrolled: 5 },
    { username: "user1", email: "user1@example.com", coursesEnrolled: 3 },
    { username: "user2", email: "user2@example.com", coursesEnrolled: 5 },
    { username: "user1", email: "user1@example.com", coursesEnrolled: 3 },
    { username: "user2", email: "user2@example.com", coursesEnrolled: 5 },
    { username: "user1", email: "user1@example.com", coursesEnrolled: 3 },
    { username: "user2", email: "user2@example.com", coursesEnrolled: 5 },{ username: "user1", email: "user1@example.com", coursesEnrolled: 3 },
    { username: "user2", email: "user2@example.com", coursesEnrolled: 5 },
    { username: "user1", email: "user1@example.com", coursesEnrolled: 3 },
    { username: "user2", email: "user2@example.com", coursesEnrolled: 5 },{ username: "user1", email: "user1@example.com", coursesEnrolled: 3 },
    { username: "user2", email: "user2@example.com", coursesEnrolled: 5 },
    { username: "user1", email: "user1@example.com", coursesEnrolled: 3 },
    { username: "user2", email: "user2@example.com", coursesEnrolled: 5 },
    // Add more users as needed
  ];

  return (
    <div className="home_users" style={{ backgroundColor: "black", backgroundImage: "url('path/to/background/image')" }}>
      <AdNavbar_users />
      <div className="homeContainer_users">
        <Sidebar_users />
        <div className="userTable_users">
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email ID</th>
                <th>No. of Courses Enrolled</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.coursesEnrolled}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
