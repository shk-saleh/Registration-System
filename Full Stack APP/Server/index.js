import express from "express"
import cors from 'cors';
import sql from "mysql2"

// mandatory definitions
const app = express();
const router = express.Router();
app.use(cors());
app.use(express.json());

app.use('/', router);


const db = sql.createConnection({

    host: "localhost",
    user: "root",
    password : 'localhost@56029',
    database : 'student'

});


router.post('/', (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    const q = "INSERT INTO registration VALUES (?, ?, ?, ?)";
    db.query(q, [firstname, lastname, email, password], (err, result) => {
      if (err) return res.json(err);
      return res.json("Student added!");
    });
});

// const values = ["Muhammad", "Saleh", "saleh123@gmail.com", "123"];
// const q = "INSERT INTO registration VALUES (?, ?, ?, ?)";

// try{

//     db.query(q, values, (err, result) => {
//       if (err) throw err;
//       console.log(result);
//     });

// }catch(err){
//     console.log(err);
// }

// router.get('/', (req, res)=>{
//     res.send("hello hh");
// });
  
app.listen(8000, () => {
  console.log('Server running on port 8000');
});
