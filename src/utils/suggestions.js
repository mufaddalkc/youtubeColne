import { fetchFromAPI } from "./fetchFromAPI";

const getSuggestions = async (searchTerm) => {
  if (!searchTerm) return [];

  const response = await fetchFromAPI(
    `search?part=snippet&q=${searchTerm}&maxResults=5`
  );
  const data = response.items;

  const suggestions = data.map((item) => item.snippet.title);

  return suggestions;
};

export default getSuggestions;
