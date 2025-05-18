import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const VISITS_FILE = path.join(DATA_DIR, 'visits.json');

// Ensure the data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Ensure the visits file exists
if (!fs.existsSync(VISITS_FILE)) {
    fs.writeFileSync(VISITS_FILE, JSON.stringify({ visits: 0 }));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Read current visits
        const data = JSON.parse(fs.readFileSync(VISITS_FILE, 'utf8'));

        // Increment visits
        data.visits += 1;

        // Save updated visits
        fs.writeFileSync(VISITS_FILE, JSON.stringify(data));

        // Return new count
        res.status(200).json(data);
    } else if (req.method === 'GET') {
        // Read current visits
        const data = JSON.parse(fs.readFileSync(VISITS_FILE, 'utf8'));
        res.status(200).json(data);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}