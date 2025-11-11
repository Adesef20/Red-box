const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (endpoint, page = 1) => {
  try {
    const url = endpoint.includes("?")
      ? `${BASE_URL}/${endpoint}&api_key=${API_KEY}&language=en-US&page=${page}`
      : `${BASE_URL}/${endpoint}?api_key=${API_KEY}&language=en-US&page=${page}`;

    const response = await fetch(url);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { results: [] };
  }
};
