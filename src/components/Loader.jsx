const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 relative animate-spin3d">
        <div className="absolute w-full h-full bg-blue-500 opacity-80 transform rotate-x-0 rotate-y-0"></div>
        <div className="absolute w-full h-full bg-green-500 opacity-80 transform rotate-x-90 rotate-y-0"></div>
        <div className="absolute w-full h-full bg-red-500 opacity-80 transform rotate-x-0 rotate-y-90"></div>
        <div className="absolute w-full h-full bg-yellow-500 opacity-80 transform rotate-x-180 rotate-y-0"></div>
        <div className="absolute w-full h-full bg-purple-500 opacity-80 transform rotate-x-0 rotate-y-180"></div>
        <div className="absolute w-full h-full bg-pink-500 opacity-80 transform rotate-x-270 rotate-y-0"></div>
      </div>
    </div>
  );
};

export default Loader;
