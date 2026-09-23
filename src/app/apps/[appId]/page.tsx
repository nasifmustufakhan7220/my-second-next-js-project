import AppDetailsCard from "@/components/AppDetailsCard/AppDetailsCard";
import { getAllApps } from "@/lib/AppData";
import { IAppType } from "@/types/AppType";

interface IParamsProps{
    params:Promise<{appId:string}>
}

const AppDetailsPage = async({params}:IParamsProps) => {
    const apps = await getAllApps();
    const {appId} = await params;

    const app:IAppType = apps.find((app:IAppType)=> app.id === Number(appId));
    return (
        <div>
            <AppDetailsCard app={app} />
        </div>
    );
};

export default AppDetailsPage;