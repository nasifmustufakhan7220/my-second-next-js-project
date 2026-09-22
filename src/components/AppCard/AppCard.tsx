
import { IAppType } from "@/types/AppType";
import Image from "next/image";
import { FiDownload, FiStar } from "react-icons/fi";

interface AppCardProps {
  app: IAppType;
}

const AppCard = ({ app }: AppCardProps) => {
  return (
    <div className="card h-auto rounded-lg border border-base-200 bg-base-100 p-2 shadow-sm">
      {/* App Image */}
      <figure className="relative rounded-md bg-base-200">
        <Image
          src={app.image}
          alt={app.title}
          width={200}
          height={200}
          className="object-cover"
        />
      </figure>

      {/* Card Content */}
      <div className="px-0.5 pt-2">
        {/* App Title */}
        <h2 className="truncate text-sm font-semibold text-base-content">
          {app.title}
        </h2>

        {/* Company Name */}
        <p className="mt-0.5 truncate text-xs text-base-content/60">
          {app.companyName}
        </p>

        {/* Bottom Information */}
        <div className="mt-3 flex items-center justify-between gap-2">
          {/* Size */}
          <div className="badge badge-success badge-outline gap-1 rounded-sm px-2 py-3 text-[11px]">
            <FiDownload size={12} />
            {app.size} MB
          </div>

          {/* Rating */}
          <div className="badge badge-warning badge-outline gap-1 rounded-sm px-2 py-3 text-[11px]">
            <FiStar size={12} />
            {app.ratingAvg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;