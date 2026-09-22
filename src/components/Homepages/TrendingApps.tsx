import { getAllApps } from "@/lib/AppData";
import { IAppType } from "@/types/AppType";
import AppCard from "../AppCard/AppCard";
import Link from "next/link";

const TrendingApps = async() => {
    const apps = await getAllApps();
    return (
        <div className="mt-20 text-center space-y-3">
            <h2 className="text-[48px] font-bold">Trending Apps</h2>
            <p className="text-[20px] text-[#627382]">Explore All Trending Apps on the Market developed by us</p>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-330 mx-auto gap-4">
                {
                    apps.slice(0,8).map((app:IAppType)=><AppCard key={app.id} app={app} />)
                }
            </div>

            <div className="text-center mt-8 font-bold text-white mb-8">
                <Link href={`/apps`} className="bg-[#8a51ed] rounded-sm px-6 py-2">Show All</Link>
                      
            </div>
        </div>
    );
};

export default TrendingApps;