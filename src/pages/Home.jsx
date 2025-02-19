import CountryCards from "../components/CountryCards";
import HeroSection from "../components/HeroSection";


const Home = () => {
  return (
    <main className="px-4 py-2 md:px-10">
      <HeroSection/>
      <h1 className="text-2xl font-bold md:text-4xl  text-center my-10 ">
        Here are the Interesting Facts we&apos;re proud of
      </h1>
      <CountryCards/>
    </main>
  );
};

export default Home;
