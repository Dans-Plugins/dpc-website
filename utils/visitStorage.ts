import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const VISITS_FILE = path.join(DATA_DIR, 'visits.json');

interface VisitData {
    visits: number;
    startDate: string;
}

export const initializeVisitStorage = () => {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    if (!fs.existsSync(VISITS_FILE)) {
        const initialData: VisitData = {
            visits: 0,
            startDate: new Date().toISOString()
        };
        fs.writeFileSync(VISITS_FILE, JSON.stringify(initialData));
    }
};

export const getVisitData = (): VisitData => {
    return JSON.parse(fs.readFileSync(VISITS_FILE, 'utf8'));
};

export const incrementVisitCount = (): VisitData => {
    const data = getVisitData();
    data.visits += 1;
    fs.writeFileSync(VISITS_FILE, JSON.stringify(data));
    return data;
};