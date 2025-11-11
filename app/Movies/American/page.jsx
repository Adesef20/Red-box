import MovieSection from "../components/MovieSection";


export default function AmericanMovies() {
  return (
    <main className="min-h-screen p-10 text-white bg-black">
      <MovieSection title="American Movies" endpoint="american/movie/week" />
    </main>
  );
}
