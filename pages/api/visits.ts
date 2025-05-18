import { NextApiRequest, NextApiResponse } from 'next';
import { initializeVisitStorage, getVisitCount, incrementVisitCount } from '../../utils/visitStorage';

initializeVisitStorage();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const visits = incrementVisitCount();
        res.status(200).json({ visits });
    } else if (req.method === 'GET') {
        const visits = getVisitCount();
        res.status(200).json({ visits });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}