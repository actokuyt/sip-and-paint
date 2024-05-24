import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        
    }
}

const registrantSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    phone: {
        type: String,
        required: [true, "Please provide a phone number"],
    },
    homeAddress: {
        type: String,
        required: [true, "Please Provide Your Address"],
    },
    dateOfBirth: {
        type: String,
        required: [true, "Please Provide Your Date of Birth"]
    },
    dietaryRequirements: {
        type: String,
    },
    transactionId: {
        type: String,
        required: [true, "Please provide a phone number"],
    },
})

export const Registrant = mongoose.models.registrant || mongoose.model("registrant", registrantSchema);