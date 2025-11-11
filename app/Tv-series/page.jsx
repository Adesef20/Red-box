"use client";
import { useEffect, useState } from "react";
import { fetchMovies } from "../libs/fetchMovies";
import MovieCard from "./components/MovieCard";

export default function TvSeriesPage() {
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadSeries = async () => {
      const data = await fetchMovies("tv/popular", page);
      setSeries(data.results || []);
    };
    loadSeries();
  }, [page]);

  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));

  return (
    <main className="p-6">
      <h1 className="mb-4 text-2xl font-bold text-white">Popular TV Series</h1>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {series.map((show) => (
          <MovieCard key={show.id} movie={show} />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-4 py-2 text-white bg-gray-700 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-4 py-2 text-white">Page {page}</span>
        <button
          onClick={handleNext}
          className="px-4 py-2 text-white bg-gray-700 rounded"
        >
          Next
        </button>
      </div>
    </main>
  );
}
