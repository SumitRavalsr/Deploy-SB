const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/oabs');
// mongoose.connect(process.env.MONGODB_CONNECT_URI);




mongoose.connect("mongodb+srv://sumitraval120:qn6AqTgi.ss59-F@clusterforschedule.mp3y1.mongodb.net/ClusterForSchedule?retryWrites=true&w=majority&appName=ClusterForSchedule");


const AdminSchema = new mongoose.Schema({
    admin: { type: String, required: true, unique: true },
    admin_password: { type: String, required: true },
    admin_reckey: { type: String, required: true },
    companyname: { type: String, required: true, unique: true },
    sector: { type: String, required: true },
    address: { type: String, required: true },
    admin_email: { type: String, required: true, unique: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pincode: { type: String, required: true },
    mno: { type: String, required: true, unique: true },
    total_workhours: { type: Number, required: true },
    start_time: { type: String, required: true },
    end_time: { type: String, required: true },
    totalslots: { type: Number, required: true },
    website: { type: String },
    service: { type: String, required: true }
});

const Admin = mongoose.model('admin', AdminSchema);

module.exports = Admin;
