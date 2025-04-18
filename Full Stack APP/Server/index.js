import express from "express"
import cors from 'cors';
import sql from "mysql2"

const app = express();
const router = express.Router();
app.use(cors());

app.use('/', router);

const db = sql.createConnection({

    host: "localhost",
    user: "root",
    password : 'localhost@56029',
    database : 'student'

});


// router.post('/', (req, res) => {
//     const { firstname, lastname, email, password } = req.body;
//     const q = "INSERT INTO registration VALUES (?, ?, ?, ?)";
//     db.query(q, [firstname, lastname, email, password], (err, result) => {
//       if (err) return res.json(err);
//       return res.json("Student added!");
//     });
// });

router.get('/', (req, res)=>{
    res.send("hello");
});
  

app.listen(8000, () => {
  console.log('Server running on port 8000');
});
