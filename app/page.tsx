import ContactCard from "@/components/misc/(home)/cards/contact-card";
import { GridCards } from "@/components/misc/(home)/grid-cards";
import { Education } from "@/components/misc/(home)/education";
import { Intro } from "@/components/misc/(home)/intro";
import { WorkSection } from "@/components/misc/(home)/work";
import { Projects } from "@/components/misc/(home)/projects";

const Home = () => {
  return (
    <section className="md:mt-8 lg:mt-10 pt-8 pb-16">
      <div className="flex items-center justify-between">
        <h1 className="mt-0 mb-1 text-xl font-medium dark:text-white">
          Yash Gupta
        </h1>
      </div>
      <div className="max-w-[58ch] text-zinc-600 dark:text-zinc-400">
        20 / software engineer
      </div>
      <Intro />
      <WorkSection />
      <Education />
      <Projects />
      <GridCards />
      <ContactCard />
    </section>
  );
};

export default Home;
