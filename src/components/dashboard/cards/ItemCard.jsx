import { Box, Button, Chip, IconButton, Paper, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import fruit from "../../../assets/fruit.jpg"
import { Add, Remove } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const ItemCard = ({item}) => {
    const [ratingValue, setRatingValue] = React.useState(2);
    const [itemCount, setItemCount] = React.useState(0);
    return (
      
        <Paper sx={{ width: { xs: "100%", lg: 220 }, height: 330, p: 2, m: 2, }}>
            <Stack sx={{height: '40%'}}>
            <Link to={`/app/products/${item.id}`} style={{textDecoration: 'none'}}>
                <Stack sx={{position: 'relative',  justifyContent: 'center', alignItems: 'center', height: '100%',}}>
                <Chip label={item.discountPercent+"%"} sx={{position: 'absolute', left: 2, top: 5, background: "#c93131", color: "#fff"}}/>
                <img src={item.imgLink}
                    style={{ minWidth: '200px', width:'200px',  objectFit: 'contain' }} />
                </Stack>
                </Link>
                <Stack  sx={{height: '60%'}} >
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Typography>{item.name}</Typography>
                        {itemCount > 0 && <IconButton sx={{ border: '1px solid red', borderRadius: 2 }} size='small' onClick={() => setItemCount((prev) => prev - 1)}>
                            <Remove sx={{ color: "red" }} />
                        </IconButton>}
                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Rating
                            name="simple-controlled"
                            value={item.rating}
                            onChange={(event, newValue) => {
                                setRatingValue(newValue);
                            }}
                            readOnly
                        />
                        
                        {itemCount > 0 && <Typography sx={{ mr: 2 }}>{itemCount}</Typography>}
                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Typography>${item.price}</Typography>
                        <IconButton sx={{ border: '1px solid red', borderRadius: 2 }} size='small' onClick={() => setItemCount((prev) => prev + 1)}>
                            <Add sx={{ color: "red" }} />
                        </IconButton>
                    </Stack>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default ItemCard