import React from 'react';
import { Typography, Box } from '@mui/material';

interface VisitCounterProps {
    visits: number;
    startDate: string;
}

const VisitCounter: React.FC<VisitCounterProps> = ({ visits, startDate }) => {
    const formattedDate = new Date(startDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <Box
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
            <Typography variant="body2">
                Page Visits: {visits}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.8em', opacity: 0.8 }}>
                Since {formattedDate}
            </Typography>
        </Box>
    );
};

export default VisitCounter;