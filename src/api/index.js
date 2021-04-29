export const postTicket = async (data) => {
    const response = await fetch(`${process.env.REACT_APP_POSTTASK_URL}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: data
        }
    );
    if (!response.ok) {
        throw new Error(response.statusText);
    } else {
        return await response.json();
    }
}

export const listTickets = async () => {
    const response = await fetch(`${process.env.REACT_APP_ALL_URL}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}