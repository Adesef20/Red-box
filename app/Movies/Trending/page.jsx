import MovieSection from "../components/MovieSection";

export default function TrendingMovies() {
  return (
    <main className="min-h-screen p-10 text-white bg-black">
      <MovieSection title="Trending Movies" endpoint="trending/movie/week" />
    </main>
  );
}
