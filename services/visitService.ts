const getBaseUrl = () => process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const incrementVisits = async (): Promise<void> => {
    await fetch(`${getBaseUrl()}/api/visits`, { method: 'POST' });
};

export const getVisits = async (): Promise<number> => {
    const response = await fetch(`${getBaseUrl()}/api/visits`);
    const data = await response.json();
    return data.visits;
};