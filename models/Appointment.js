import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({

        firstName: {
            type: String,
            required: true,
        },
        secondName: {
            type: String,
            required: true,
        },
        middleName: String,
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        service: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Service',
            required: false,
        },
        employer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: false,
        },
        onlineRehabilitation: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'OnlineRehabilitation',
            required: false,
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: false,
        },
        text: 'String',
        status: {
            type: String,
            enum: ['Ждет ответ', 'Назначен прием', 'Прием состоялся', 'Прием не состоялся'],
            default: 'Ждет ответ',
        },
        source_name: 'String',
        start: {
            type: Date,
            required: false,
        },
        end: {
            type: Date,
            required: false,
        },
        public: {
            type: Boolean,
            default: false,
        }

    },
    {
        timestamps: true,
    },
);
export default mongoose.model('Appointment', AppointmentSchema);