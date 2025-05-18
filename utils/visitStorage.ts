import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const VISITS_FILE = path.join(DATA_DIR, 'visits.json');

export const initializeVisitStorage = () => {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    if (!fs.existsSync(VISITS_FILE)) {
        fs.writeFileSync(VISITS_FILE, JSON.stringify({ visits: 0 }));
    }
};

export const getVisitCount = (): number => {
    const data = JSON.parse(fs.readFileSync(VISITS_FILE, 'utf8'));
    return data.visits;
};

export const incrementVisitCount = (): number => {
    const data = JSON.parse(fs.readFileSync(VISITS_FILE, 'utf8'));
    data.visits += 1;
    fs.writeFileSync(VISITS_FILE, JSON.stringify(data));
    return data.visits;
};