import MovieSection from "../components/MovieSection";


export default function TopratedMovies() {
  return (
    <main className="min-h-screen p-10 text-white bg-black">
      <MovieSection title="Toprated Movies" endpoint="toprated/movie/week" />
    </main>
  );
}
