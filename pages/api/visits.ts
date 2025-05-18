import { NextApiRequest, NextApiResponse } from 'next';
import { initializeVisitStorage, getVisitData, incrementVisitCount } from '../../utils/visitStorage';

initializeVisitStorage();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const data = incrementVisitCount();
        res.status(200).json(data);
    } else if (req.method === 'GET') {
        const data = getVisitData();
        res.status(200).json(data);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}