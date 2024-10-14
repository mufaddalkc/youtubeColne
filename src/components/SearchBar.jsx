import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import getSuggestions from "../utils/suggestions";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchTerm) {
        const suggestions = await getSuggestions(searchTerm);
        setSuggestions(suggestions);
      } else {
        setSuggestions([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) navigate(`/search/${searchTerm}`);
    setSearchTerm("");
    setSuggestions([]);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    navigate(`/search/${suggestion}`);
    setSuggestions([]);
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "#2196F3" }}>
        <Search />
      </IconButton>
      {suggestions.length > 0 && searchTerm !== "" ? (
        <ul
          style={{
            position: "absolute",
            backgroundColor: "white",
            border: "1px solid #e3e3e3",
            padding: "10px",
            zIndex: 1,
          }}
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              style={{ padding: "10px", cursor: "pointer" }}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      ) : null}
    </Paper>
  );
};
export default SearchBar;
