import express from 'express';
import { createVisitorLead, getVisitorLeads } from '../controllers/visitorLeadController.js';

const router = express.Router();

router.route('/')
    .post(createVisitorLead)
    .get(getVisitorLeads);

export default router;
