const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 5000;

app.get('/api/user', (req, res) => {
  res.json({
    firstName: 'Asim',
    lastName: 'Mohd',
    age: 23,
    gender: 'Male',
    address: 'Washim , Maharashtra ',
    email: 'Corporateashu@Gmail.com',
    phone: '+91 7020050019',
    bio: 'I’m a Final Year Student @Chandigarh Universityl Support Engineer @ Sanpri Technologies | Mern-Stack Developer Java script (ES6+) | React.js Express.js JAVA SE 23 | PYTHON 3 | C+...'
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
