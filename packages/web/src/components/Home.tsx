import LandingIntro from "./LandingIntro"

const Home = () => {
    return (
      // <div className={`h-dvh w-dvw transition-opacity duration-750 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="w-dvw transition-opacity duration-750 ease-in-out">
        <LandingIntro/>
      </div>
    )
}

export default Home;
