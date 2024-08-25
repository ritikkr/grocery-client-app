import { Box, Divider, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ProductItemCard from "../product/ProductItemCard";
import { items } from "../../_mock/Item";
import SearchItemCard from "./SearchItemCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SearchResults() {
    const { query } = useParams();
    const categoryId = query.includes("category") && query.split("=")[1]
    const [productList, setProductList] = useState([])
    const [category, setCategory] = useState(null)
    // ... search logic using query

    useEffect(() => {
      
      
      if(categoryId){
        axios.get(`/api/category/${categoryId}`, {
          headers: {
            Authorization: 'Bearer '+ JSON.parse(localStorage.getItem("token"))
          }
        }).then((res) => {
          console.log("product cat list: ", res.data);
          setCategory(res.data)
          setProductList(res.data.products)
          
        })
      }
      else{
      
          axios.get(`/api/productByName/${query}`, {
            headers: {
              Authorization: 'Bearer '+ JSON.parse(localStorage.getItem("token"))
            }
          }).then((res) => {
            console.log("product cat list: ", res.data);
            // setCategory(res.data)
            setProductList(res.data)
            
          })
      }
    
    }, [query])

    return (
      <Box>
           
        {!category &&    <Typography>Search result for: {query}</Typography>}

          {category &&   <Typography>Search result for: {category?.name}</Typography>}
           {productList.map((item) =>(
            <>
            <SearchItemCard product={item} key={item.productId}/>
            <Divider />
            </>
            ))}
           
      </Box>
    );  
  }