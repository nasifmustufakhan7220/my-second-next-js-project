import { IAppType } from "@/types/AppType";
import Image from "next/image";
import Link from "next/link";

import {
  FiArrowLeft,
  FiCheckCircle,
  FiDownload,
  FiHardDrive,
  FiMessageCircle,
  FiStar,
} from "react-icons/fi";
import DownloadBtn from "../DownloadBtn/DownloadBtn";


interface AppDetailsProps {
  app: IAppType;
}

const formatCount = (count: number) => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(count);
};

const AppDetailsCard = ({ app }: AppDetailsProps) => {
  const totalRatings = app.ratings.reduce(
    (total, rating) => total + rating.count,
    0
  );

  return (
    <section className="min-h-screen bg-base-200 px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-6xl">
        {/* Back Button */}
        <Link
          href="/apps"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-base-content/70 transition-colors hover:text-primary"
        >
          <FiArrowLeft size={18} />
          Back to Apps
        </Link>

        {/* Main Details Card */}
        <div className="card overflow-hidden border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body p-5 sm:p-8 lg:p-10">
            {/* App Header */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              {/* App Image */}
              <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-2xl border border-base-200 bg-base-200 sm:h-44 sm:w-44">
                <Image
                  src={app.image}
                  alt={`${app.title} app icon`}
                  fill
                  sizes="(max-width: 640px) 144px, 176px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* App Information */}
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="badge badge-success badge-outline gap-1">
                    <FiCheckCircle size={12} />
                    Verified App
                  </span>
                </div>

                <h1 className="text-2xl font-bold tracking-tight text-base-content sm:text-3xl lg:text-4xl">
                  {app.title}
                </h1>

                <p className="mt-2 text-sm text-base-content/60">
                  Developed by{" "}
                  <span className="font-medium text-base-content/80">
                    {app.companyName}
                  </span>
                </p>

                {/* Rating and Reviews */}
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
                  <div className="flex items-center gap-1.5">
                    <FiStar
                      size={17}
                      className="fill-warning text-warning"
                    />
                    <span className="font-semibold">
                      {app.ratingAvg}
                    </span>
                    <span className="text-base-content/50">
                      Rating
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-base-content/70">
                    <FiMessageCircle size={16} />
                    <span>{app.reviews}</span>
                    <span className="text-base-content/50">
                      Reviews
                    </span>
                  </div>
                </div>

                {/* App Details Badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="badge badge-ghost gap-1.5 py-3">
                    <FiHardDrive size={14} />
                    {app.size} MB
                  </span>

                  <span className="badge badge-ghost gap-1.5 py-3">
                    <FiDownload size={14} />
                    {app.downloads} Downloads
                  </span>

                  <DownloadBtn app={app}/>
                </div>
              </div>
            </div>

            <div className="my-7 h-px bg-base-200" />

            {/* Description */}
            <div>
              <h2 className="text-xl font-bold text-base-content">
                About this app
              </h2>

              <p className="mt-3 text-sm leading-7 text-base-content/70 sm:text-base">
                {app.description}
              </p>
            </div>

            <div className="my-7 h-px bg-base-200" />

            {/* Rating Overview */}
            <div>
              <h2 className="text-xl font-bold text-base-content">
                Ratings & Reviews
              </h2>

              <div className="mt-6 grid gap-8 md:grid-cols-[180px_1fr] md:items-center">
                {/* Average Rating */}
                <div className="text-center md:border-r md:border-base-200 md:pr-8">
                  <p className="text-5xl font-bold text-base-content">
                    {app.ratingAvg}
                  </p>

                  <div className="mt-2 flex justify-center gap-1 text-warning">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FiStar
                        key={index}
                        size={16}
                        className={
                          index < Math.round(app.ratingAvg)
                            ? "fill-warning"
                            : ""
                        }
                      />
                    ))}
                  </div>

                  <p className="mt-2 text-xs text-base-content/50">
                    Based on {formatCount(totalRatings)} ratings
                  </p>
                </div>

                {/* Rating Bars */}
                <div className="space-y-3">
                  {[...app.ratings].reverse().map((rating) => {
                    const percentage =
                      totalRatings > 0
                        ? (rating.count / totalRatings) * 100
                        : 0;

                    return (
                      <div
                        key={rating.name}
                        className="flex items-center gap-3 text-xs"
                      >
                        <span className="w-12 shrink-0 text-base-content/60">
                          {rating.name}
                        </span>

                        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-base-200">
                          <div
                            className="h-full rounded-full bg-warning"
                            style={{
                              width: `${percentage}%`,
                            }}
                          />
                        </div>

                        <span className="w-14 text-right text-base-content/50">
                          {formatCount(rating.count)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="my-7 h-px bg-base-200" />

            {/* Additional Information */}
            <div>
              <h2 className="text-xl font-bold text-base-content">
                App Information
              </h2>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-base-200/60 p-4">
                  <p className="text-xs text-base-content/50">
                    App ID
                  </p>
                  <p className="mt-1 font-semibold">
                    #{app.id}
                  </p>
                </div>

                <div className="rounded-xl bg-base-200/60 p-4">
                  <p className="text-xs text-base-content/50">
                    App Size
                  </p>
                  <p className="mt-1 font-semibold">
                    {app.size} MB
                  </p>
                </div>

                <div className="rounded-xl bg-base-200/60 p-4">
                  <p className="text-xs text-base-content/50">
                    Total Downloads
                  </p>
                  <p className="mt-1 font-semibold">
                    {app.downloads}
                  </p>
                </div>

                <div className="rounded-xl bg-base-200/60 p-4">
                  <p className="text-xs text-base-content/50">
                    Total Reviews
                  </p>
                  <p className="mt-1 font-semibold">
                    {app.reviews}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="mt-8">
              <Link
                href="/"
                className="btn btn-primary w-full gap-2 sm:w-auto"
              >
                <FiArrowLeft size={17} />
                Explore More Apps
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDetailsCard;