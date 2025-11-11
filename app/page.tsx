import HeroSection from "./components/HeroSection";
import MovieSection from "./components/MovieSection";


export default function Home() {
  return (
    <main className="min-h-screen space-y-10 text-white bg-black">
      <HeroSection />
      
      <MovieSection 
      title="Trending Movies"
      endpoint="trending/movie/week"
      viewAllLink="/Movies"
      />
      <MovieSection 
      title="UpComing Movies"
      endpoint="movie/upcoming"
      viewAllLink="/Movies"
      />
      <MovieSection 
      title="Top Rated Movies"
      endpoint="movie/top_rated"
      viewAllLink="/Movies"
      />
      <MovieSection 
      title="Indian Movies"
      endpoint="discover/movie?region=IN"
      viewAllLink="/Movies"
      />  
      <MovieSection 
      title="American Movies"
      endpoint="discover/movie?region=US"
      viewAllLink="/Movies"
      />
      <MovieSection 
      title="Chinese Movies"
      endpoint="discover/movie?region=CN"
      viewAllLink="/Movies"
      />
      <MovieSection 
      title="TV Series"
      endpoint="tv/popular"
      viewAllLink="/Tv-series"
      />
    </main>      
    
  );
}
