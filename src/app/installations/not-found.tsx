import Image from "next/image";
import notImg from "@/assets/App-Error.png"
const InstallNotFoundPage = () => {
    return (
        <div className="flex justify-center items-center">
            <Image src={notImg} alt="not found"/>
        </div>
    );
};

export default InstallNotFoundPage;