export const getRequest = async ({ path }: { path: string }) => {
    const response = await fetch(path);

    if (!response.ok) throw new Error("Error occured while fetching data...");

    const data = await response.json();
    return data.data;
};
