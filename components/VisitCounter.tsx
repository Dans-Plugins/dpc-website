import React from 'react';
import { Typography } from '@mui/material';

interface VisitCounterProps {
    visits: number;
}

const VisitCounter: React.FC<VisitCounterProps> = ({ visits }) => (
    <Typography
        variant="body2"
        sx={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            padding: '8px',
            borderRadius: '4px',
            backgroundColor: 'background.paper',
            boxShadow: 1
        }}
    >
        Page Visits: {visits}
    </Typography>
);

export default VisitCounter;