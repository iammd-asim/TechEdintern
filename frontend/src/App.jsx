import React from 'react';

const Profile = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Profile</h2>
        <h1 style={styles.name}>Asim Mohd</h1>
        <p><strong>Age:</strong> 23</p>
        <p><strong>Gender:</strong> Male</p>
        <p><strong>Address:</strong> Washim, Maharashtra</p>
        <p><strong>Email:</strong> Corporateashu@gmail.com</p>
        <p><strong>Phone:</strong> +91 7020050019</p>
        <p>
          <strong>Bio:</strong> I’m a Final Year Student @ Chandigarh University | Support Engineer @ Sanpri Technologies |
          Mern-Stack Developer JavaScript (ES6+) | React.js Express.js JAVA SE 23 | PYTHON 3 | C++...
        </p>

        {/* Education Section */}
        <div style={styles.section}>
          <h3 style={styles.subHeading}>Education</h3>
          <ul>
            <li>BCA – Chandigarh University</li>
            <li>Intermediate – XYZ School</li>
          </ul>
        </div>

        {/* Work Experience Section */}
        <div style={styles.section}>
          <h3 style={styles.subHeading}>Work Experience</h3>
          <ul>
            <li>Support Engineer @ Sanpri Technologies</li>
            <li>Intern @ ABC Company – Frontend Developer</li>
          </ul>
        </div>

        {/* Skills Section */}
        <div style={styles.section}>
          <h3 style={styles.subHeading}>Skills</h3>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>Python 3</li>
            <li>C++</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#121212',
  },
  card: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    border: '2px solid #00bfff',
    width: '600px',
    maxHeight: '80vh',
    overflowY: 'auto',
  },
  heading: {
    fontSize: '18px',
    color: '#aaa',
    marginBottom: '5px',
  },
  name: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#4f46e5',
  },
  section: {
    marginTop: '20px',
  },
  subHeading: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#00bfff',
    marginBottom: '5px',
  },
};

export default Profile;
