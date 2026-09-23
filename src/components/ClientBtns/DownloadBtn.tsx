"use client"
import { appContext } from "@/context/AppContextProvider";
import { IAppType } from "@/types/AppType";
import { useContext } from "react";
import { RiDownloadCloudLine } from "react-icons/ri";
import { toast } from "react-toastify";


interface IAppProps{
    app:IAppType;
}

const DownloadBtn = ({app}:IAppProps) => {
    const {downloads, setDownloads} = useContext(appContext);
    

    const handelDownloads = (id:number)=>{

        const exited = downloads.find(appId => appId.id === id);
        if(exited) {
          toast.success(`${app.title} is allready added to the installation`);
          return;
        };
        setDownloads([...downloads, app]);
        toast.success(`${app.title} is added to the installation`);
    }


  return (
    <button onClick={()=>handelDownloads(app.id)} className="badge badge-ghost gap-1.5 py-3 cursor-pointer">
       <RiDownloadCloudLine size={14} /> Download Now
    </button>
  );
};

export default DownloadBtn;
