import AppCard from "@/components/AppCard/AppCard";
import { getAllApps } from "@/lib/AppData";
import { IAppType } from "@/types/AppType";

const AllAppsPage = async() => {
    const apps = await getAllApps();
    return (
        <div className="mt-20 text-center space-y-5">
            <h2 className="text-[48px] font-bold">Our All Applications</h2>
            <p className="text-[20px] text-[#627382]">Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-330 mx-auto gap-4">
                {
                    apps.map((app:IAppType)=><AppCard key={app.id} app={app} />)
                }
            </div>
        </div>
    );
};

export default AllAppsPage;