import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography } from '@mui/material'
import fruit from "../../../assets/fruit.jpg"
import bag from "../../../assets/grocery-bag.jpg"
export  function ImageCarousel(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Sale !!! Save upto 80% on Daily Needs",
            img: fruit
        },
        {
            name: "Random Name #2",
            description: "Big!!! Saving on fruits",
            img: bag
        }
    ]

    return (
        <Carousel duration={100} navButtonsAlwaysInvisible swipe autoPlay indicators={false}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper sx={{ height: 200, minHeight: 200, maxHeight: 200,}}>
            <Typography sx={{textAlign: 'center'}} >{props.item.description}</Typography>
            <img src={props.item.img} style={{width: '100%', height: 200, minHeight: 200, maxHeight: 200, objectFit: 'cover'}} />
          
        </Paper>
    )
}