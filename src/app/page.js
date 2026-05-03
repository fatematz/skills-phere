import Banner from "@/components/Banner";
import LearningTips from "@/components/LearningTips";
import NewRelease from "@/components/NewRelease";
import TopCourse from "@/components/TopCourse";
import TopInstructors from "@/components/TopInstructors";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
    <Banner/>
    <TopCourse/>
    <LearningTips/>
    <TopInstructors/>
    <NewRelease/>
    </div>
  );
}
