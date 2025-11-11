import MovieSection from "../components/MovieSection";


export default function IndianMovies() {
  return (
    <main className="min-h-screen p-10 text-white bg-black">
      <MovieSection title="Indian Movies" endpoint="Indian/movie/week" />
    </main>
  );
}
