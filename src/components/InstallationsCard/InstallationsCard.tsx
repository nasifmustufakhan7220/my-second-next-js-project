import { IAppType } from "@/types/AppType";
import Image from "next/image";
import {
  FiDownload,
  FiHardDrive,
  FiStar,
} from "react-icons/fi";
import UninstallBtn from "../ClientBtns/UninstallBtn";

const InstallationsCard = ({app}:{app:IAppType}) => {
    return (
        <div className="flex flex-col gap-4 rounded-md bg-base-100 p-3 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-4">
      {/* App Information */}
      <div className="flex min-w-0 items-center gap-3">
        {/* App Image */}
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-base-200">
          <Image
            src={app.image}
            alt={app.title}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>

        {/* Title and Details */}
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-base-content">
            {app.title}
          </h3>

          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            {/* Downloads */}
            <span className="flex items-center gap-1 text-success">
              <FiDownload size={13} />
              {app.downloads}
            </span>

            {/* Rating */}
            <span className="flex items-center gap-1 text-warning">
              <FiStar size={14} className="fill-warning" />
              {app.ratingAvg}
            </span>

            {/* Size */}
            <span className="flex items-center gap-1 text-base-content/60">
              <FiHardDrive size={13} />
              {app.size} MB
            </span>
          </div>
        </div>
      </div>

      {/* Uninstall Button */}
      <UninstallBtn app={app}/>
    </div>
    );
};

export default InstallationsCard;