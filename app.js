//b1: import du lieu
const express = require('express');
const mongoose = require('mongoose');
const sinhvien = require('./sinhvienModal');
//b2: tao doi tuong server
const app = express();
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost:27017/AND103', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("ket noi thanh cong voi Mongodb")
}).catch((err) => {
  console.error(err);
});

app.get('/sinhvien', async (req, res) => {
  try {
    const sinhviens = await sinhvien.find();
    res.render('students', { sinhviens: sinhviens });
    console.log(sinhviens);
  } catch (err) {
    console.error(err);
  }
});
//b5- khoi dong server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server dang chay o cong 3000');
});