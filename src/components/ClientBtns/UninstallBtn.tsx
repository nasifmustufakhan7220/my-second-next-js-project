"use client"
import { appContext } from "@/context/AppContextProvider";
import { IAppType } from "@/types/AppType";
import { useContext } from "react";
import { toast } from "react-toastify";

const UninstallBtn = ({app}:{app:IAppType}) => {
  const { downloads, setDownloads } = useContext(appContext);

  const handelDelete = (id:number)=>{
      const isConfirmed = window.confirm( `Are you sure you want to uninstall ${app.title}?`);

      if(!isConfirmed){
        toast.error(`${app.title} is not  uninstalled`);
        return;
      }
    const updatedData:IAppType[] = downloads.filter(downloadId=> id !== downloadId.id);
    setDownloads(updatedData);
    toast.success(`${app.title} is uninstalled`);
  }
  return (
    <div>
      <button onClick={()=>handelDelete(app.id)}
        type="button"
        className="btn btn-success btn-sm w-full text-white sm:w-auto"
      >
        Uninstall
      </button>
    </div>
  );
};

export default UninstallBtn;
