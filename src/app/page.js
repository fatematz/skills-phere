import Banner from "@/components/Banner";
import LearningTips from "@/components/LearningTips";
import TopCourse from "@/components/TopCourse";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
    <Banner/>
    <TopCourse/>
    <LearningTips/>
    </div>
  );
}
