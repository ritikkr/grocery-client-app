import { Box, Divider, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ProductItemCard from "../product/ProductItemCard";
import { items } from "../../_mock/Item";
import SearchItemCard from "./SearchItemCard";

export default function SearchResults() {
    const { query } = useParams();
    // ... search logic using query
    return (
      <Box>
            <Typography>Search result for: {query}</Typography>
           {items.map((item) =>(
            <>
            <SearchItemCard product={item}/>
            <Divider />
            </>
            ))}
           
      </Box>
    );  
  }