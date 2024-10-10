import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "../components";
 
const Navbar = () => (
  <Stack direction="row" p={2} sx={{ alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, background: "#000" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar