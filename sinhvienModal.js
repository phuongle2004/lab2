const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sinhvienSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    // Định nghĩa các trường khác ở đây
});

const sinhvien = mongoose.model('Student', sinhvienSchema);
module.exports = sinhvien;
