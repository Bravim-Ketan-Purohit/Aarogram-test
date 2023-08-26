
const User = require('../models/reports-model')

const generateReport = async (request,response) => {
    const user = request.body;
    const newUser = new User(user);

    try {
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error) {
        response.status(400).json({message: error.message})
    }
}

module.exports = generateReport;