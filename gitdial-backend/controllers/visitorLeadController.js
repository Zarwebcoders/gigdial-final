import asyncHandler from 'express-async-handler';
import VisitorLead from '../models/VisitorLead.js';

// @desc    Create a new visitor lead
// @route   POST /api/visitor-leads
// @access  Public
const createVisitorLead = asyncHandler(async (req, res) => {
    const { name, phone } = req.body;

    if (!name || !phone) {
        res.status(400);
        throw new Error('Name and phone number are required');
    }

    // Check if the phone already exists in visitor leads
    const existingLead = await VisitorLead.findOne({ phone });

    if (existingLead) {
        return res.status(200).json({
            message: 'Lead already exists',
            lead: existingLead
        });
    }

    const lead = await VisitorLead.create({
        name,
        phone
    });

    res.status(201).json({
        message: 'Lead created successfully',
        lead
    });
});

// @desc    Get all visitor leads
// @route   GET /api/visitor-leads
// @access  Private/Admin
const getVisitorLeads = asyncHandler(async (req, res) => {
    const leads = await VisitorLead.find({}).sort({ createdAt: -1 });
    res.json(leads);
});

export { createVisitorLead, getVisitorLeads };
