"use client"
import InstallationsCard from "@/components/InstallationsCard/InstallationsCard";
import { appContext } from "@/context/AppContextProvider";
import { useContext } from "react";
import InstallNotFoundPage from "./not-found";

const InstallationPage = () => {
    const {downloads} = useContext(appContext);
    return (
        <div className="mt-20 text-center space-y-5">
            <h2 className="text-[48px] font-bold">Your Installed Apps</h2>
            <p className="text-[20px] text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
            <div className="grid grid-cols-1 max-w-7xl mx-auto gap-4">
            {
                downloads.length > 0 ? downloads.map((app, idx)=><InstallationsCard key={idx} app={app} />)  : <InstallNotFoundPage/>
            }
            </div>
        </div>
    );
};

export default InstallationPage;