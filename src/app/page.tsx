import Banner from "@/components/Homepages/Banner";
import TrendingApps from "@/components/Homepages/TrendingApps";
import Trusted from "@/components/Homepages/Trusted";

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <Trusted/>
      <TrendingApps/>
    </div>
  );
};

export default HomePage;