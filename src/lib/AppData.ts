export const getAllApps= async()=>{
    try {
        const res = await fetch("http://localhost:3000/data.json");
        return res.json();
    } catch (error) {
        console.error(`${error} is found from data fetching`);
    }
}