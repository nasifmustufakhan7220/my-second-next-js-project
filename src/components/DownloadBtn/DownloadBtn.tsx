"use client"
import { appContext } from "@/context/AppContextProvider";
import { IAppType } from "@/types/AppType";
import { useContext } from "react";
import { RiDownloadCloudLine } from "react-icons/ri";


interface IAppProps{
    app:IAppType;
}

const DownloadBtn = ({app}:IAppProps) => {
    const {downloads, setDownloads} = useContext(appContext);

    const handelDownloads = ()=>{
        setDownloads([...downloads, app]);
    }

    console.log(downloads);


  return (
    <button onClick={()=>handelDownloads()} className="badge badge-ghost gap-1.5 py-3 cursor-pointer">
      <RiDownloadCloudLine size={14} />
      Download Now
    </button>
  );
};

export default DownloadBtn;
