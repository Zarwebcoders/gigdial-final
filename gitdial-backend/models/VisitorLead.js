import mongoose from 'mongoose';

const visitorLeadSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

const VisitorLead = mongoose.model('VisitorLead', visitorLeadSchema);

export default VisitorLead;
