import CountryCards from "../components/CountryCards";

const About = () => {
  return (
    <div className="flex flex-col px-4 py-2 md:px-10 gap-4 ">
      <h1 className="text-2xl font-bold md:text-4xl text-center my-4">
        Here are the Interesting Facts we&apos;re proud of
      </h1>
      <CountryCards />
    </div>
  );
};

export default About;
