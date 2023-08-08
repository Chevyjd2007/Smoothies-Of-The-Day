import React, { useEffect, useState} from 'react'
import {Box, Typography, Paper, Skeleton, List, ListItem, Tooltip, IconButton, Button} from '@mui/material';
import axios from 'axios';
import { PiDotOutlineFill } from "react-icons/pi";
import { IoIosInformationCircle } from "react-icons/io";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import "./HomePage.css"


const HomePage = () => {
    // Initial states 
    const [pic, setPic] = useState(null);
    const [recipe, setRecipe] = useState(null);
    const [total, setTotal] = useState(null);
    const [open, setOpen] = React.useState(false);

    // Fetches the recipe object and the total number of recipes from the database.
    useEffect(() => {
        const fetchData = async () => {
          try {
            const totalResponse = await axios.get("/api/recipes/totalnumber")
            setTotal(totalResponse.data);

          } catch (error) {
            console.error('Error fetching recipe total number ', error);
          }
        };
    
        fetchData();
      }, []);


      // Fetches the recipe object to populate the recipe of the day homepage from the database
      useEffect(() => {
 
            const fetchData = async () => {
                try {
                    const recipeResponse = await axios.get('/api/recipes/recipe-of-the-day')
                    setRecipe(recipeResponse.data);
                } catch (error) {
                    console.error("Error fetching recipe ", error);
                }
            };
            fetchData();
        }, []);

      // Fetches picture image from unsplash API if the recipe is not null based on the title of the recipe
      useEffect(() => {
        // Fetch image only when recipe is not null.
        if (recipe) {
          const fetchData = async () => {
            try {
              const response = await axios.get("https://api.unsplash.com/search/photos", {
                  params: {
                      query: `${recipe.title} drink`,
                      per_page: 2,
                  },
                  headers: {
                      Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`
                  }
              });
      
              if (response.data.results.length > 0) {
                setPic(response.data.results[1].urls.small);
              } else {
                console.log('No images found :(');
              }
            } catch (error) {
              console.error('Error fetching image', error);
            }
          };
      
          fetchData();
        }
      }, [recipe]); // Recipe is a dependency here

    // Opens dialog
  const handleOpen = () => {
    setOpen(true);
  }

       // Closes dialog
  const handleClose = () => {
    setOpen(false);
  };
      


  return (
    <Box  mt="20px" >
        <Box display="flex" justifyContent={'center'} alignItems={'center'} flexDirection={'column'} height={"100vh"}>
            <Box mb="30px"  mt={"5px"} flexDirection={"row"} alignContent={"center"} alignItems={"center"} display={'flex'}>
                <Tooltip title="Description">
                    <IconButton onClick={handleOpen}>
                        <IoIosInformationCircle color='#8f8c8c' size='50' />
                    </IconButton>
                </Tooltip>
                <Typography noWrap variant="h2" fontWeight="bold" sx={{ m: "0 0 5px 15px", textAlign: 'center', color: '#e892c6'}} >{recipe ? recipe.title : <Skeleton />}</Typography>
                <PiDotOutlineFill size={50} color='#929fe8'/>
                <Typography sx={{ m: "0 0 5px 0", color: '#a8a8a8'}} variant='h4' fontWeight="bold" noWrap>{total} total recipes</Typography>
            </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
            <Box>
                <Box className="paper">
                <Paper elevation={6} sx={{ p: 2 , bgcolor: "#bdf59f", color: '#707070'}}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <Box sx={{m:3 , mr: 2, ml: 2}}>
                            <Typography variant='h5' fontWeight="bold" noWrap >Cook Time:</Typography>
                            <Typography sx={{fontSize: '1.125rem', lineHeight: '1.75rem'}} noWrap>{recipe ? recipe.cookTime : <Skeleton />} mins</Typography>
                        </Box>
                        <Box sx={{m:3 , mr: 2, ml: 2}}>
                            <Typography variant='h5' fontWeight="bold" noWrap>Total Time:</Typography>
                            <Typography sx={{fontSize: '1.125rem', lineHeight: '1.75rem'}} noWrap>{recipe ? recipe.cookTime : <Skeleton />} mins</Typography>
                        </Box>
                        <Box sx={{m:3 , mr: 5, ml: 2}}>
                            <Typography variant='h5' fontWeight="bold" noWrap>Servings:</Typography>
                            <Typography sx={{fontSize: '1.125rem', lineHeight: '1.75rem'}} noWrap>{recipe ? recipe.servings : <Skeleton />}</Typography>
                        </Box>
                    </Box>
                    <Typography sx={{ml:3 , mr: 2, ml: 2}} variant='h5' fontWeight="bold" noWrap>Yield:</Typography>
                    <Typography sx={{ml:3 , mr: 2, ml: 2, fontSize: '1.125rem', lineHeight: '1.75rem'}}  noWrap>{recipe ? recipe.servings : <Skeleton />} servings, 1 cup each</Typography>
                    <Button sx={{pt: '15px'}} size='large'>Nutrition Profile</Button>
                    <hr style={{width: '100%', border: 'none', borderTop: '1px solid #707070', marginTop: 15, marginBottom: 15}}/>
                    <List>
                        {/*recipe && recipe.nutritionProfile.slice(0, 3).map((profile, index) => 
                            <ListItem key={index} style={{fontSize: '1.125rem'}}>
                                {profile}
                            </ListItem>
  )*/}
                    </List>
                </Paper>
                </Box>
                <Box  className="paper">
                <Paper elevation={6} sx={{ p: 2, bgcolor: '#9ceef7', color: '#707070'}}>
                    <Typography sx={{m: 2, mt: 3, mb: 1}} variant='h4' fontWeight="bold" noWrap>Ingredients</Typography>
                        <List>
                            {recipe && recipe.ingredients.map((ingredient, index) => (
                            <ListItem key={index} className='ingredientList'>
                                {ingredient}
                            </ListItem>
                            ))}
                        </List>
                </Paper>
                </Box>
            </Box>
            <Box className="box-container">
                {pic && <img className="image-container" src={pic} alt='smoothies' />}
            </Box>
            <Box>
                <Box className="paper">
                <Paper elevation={6} sx={{ p: 2, bgcolor: '#f7d09c', color: '#707070'}}>
                    <Typography sx={{m: 2, mt: 3, mb: 3}} variant='h4' fontWeight="bold" noWrap>Directions</Typography>
                    <Typography sx={{m: 2, mt: 3, mb: 3}} variant='h5' fontWeight="bold" noWrap>Step 1</Typography>
                    <Typography sx={{m: 2, mt: 3, mb: 3}} variant='body1'>
                    {recipe ? recipe.steps : <Skeleton />}
                    </Typography>
                </Paper>
                </Box>
                <Box className='paper'>
                <Paper elevation={6} sx={{ p: 2, bgcolor: '#f79c9f', color: '#707070'}}>
                    <Box sx={{m:3 , mr: 2, ml: 2, display: 'flex'}}>
                        <Typography   variant='h4' fontWeight="bold" noWrap>Nutrition Facts</Typography>
                        <Typography variant='h6' sx={{pt: .5, pl: 1}}  noWrap>(per serving)</Typography>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Box sx={{m:3 , mr: 2, ml: 2, display: 'flex'}}>
                            <Box sx={{m:3 , mr: 2, ml: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Typography variant='h5' fontWeight="bold" noWrap >{recipe ? recipe.nutritionFact.calories : <Skeleton />}</Typography>
                                <Typography sx={{fontSize: '1.125rem', lineHeight: '1.75rem'}} noWrap>calories</Typography>
                            </Box>
                            <Box sx={{m:3 , mr: 2, ml: 6, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Typography variant='h5' fontWeight="bold" noWrap >{recipe ? recipe.nutritionFact.fat : <Skeleton />}g</Typography>
                                <Typography sx={{fontSize: '1.125rem', lineHeight: '1.75rem'}} noWrap>fat</Typography>
                            </Box>
                            <Box sx={{m:3 , mr: 2, ml: 6, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Typography variant='h5' fontWeight="bold" noWrap >{recipe ? recipe.nutritionFact.carbs : <Skeleton />}g</Typography>
                                <Typography sx={{fontSize: '1.125rem', lineHeight: '1.75rem'}} noWrap>carbs</Typography>
                            </Box>
                            <Box sx={{m:3 , mr: 2, ml: 6, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Typography variant='h5' fontWeight="bold" noWrap >{recipe ? recipe.nutritionFact.protein : <Skeleton />}g</Typography>
                                <Typography sx={{fontSize: '1.125rem', lineHeight: '1.75rem'}} noWrap>protein</Typography>
                            </Box>
                            <Box sx={{m:3 , mr: 2, ml: 6, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Typography variant='h5' fontWeight="bold" noWrap >{recipe ? recipe.nutritionFact.totalSugars : <Skeleton />}g</Typography>
                                <Typography sx={{fontSize: '1.125rem', lineHeight: '1.75rem'}} noWrap>total sugar</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <hr style={{width: '100%', border: 'none', borderTop: '1px solid #707070', marginTop: 15, marginBottom: 15}}/>
                </Paper>
                </Box>
            </Box>
        </Box>    
        </Box>
        <Dialog open={open} onClose={handleClose} >
            <DialogTitle variant='h4' fontWeight="bold" noWrap>Description</DialogTitle>
            <DialogContent>
                <DialogContentText style={{fontSize: '1.125rem'}}>
                    {recipe && recipe.description}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    </Box>
  )
}

export default HomePage