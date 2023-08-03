import React, { useEffect, useState} from 'react'
import {Box, Typography, Paper, Skeleton, List, ListItem, Grid} from '@mui/material';
import axios from 'axios';
import { PiDotOutlineFill } from "react-icons/pi";

const HomePage = () => {
    // Initial states 
    const [pic, setPic] = useState(null);
    const [recipe, setRecipe] = useState(null);
    const [total, setTotal] = useState(null);

    // Fetches picture image based on the title of the recipe as well as the recipe object and the total number of recipes from the database.
    useEffect(() => {
        const fetchData = async () => {
          try {
            const recipeResponse = await axios.get('http://localhost:8080/api/recipes/5')
            const totalResponse = await axios.get("http://localhost:8080/api/recipes/totalnumber")
            setRecipe(recipeResponse.data);
            setTotal(totalResponse.data);

            
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=$smoothie`, {
            headers: {
              Authorization: 'o4jd0Qrpke9s01MfRmaddcmgqv86QMfeR0wo2EzyJnI'
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
      }, []);


  return (
    <Box  mt="20px" >
        <Box display="flex" justifyContent={'center'} alignItems={'center'} flexDirection={'column'} height={"100vh"}>
            <Box mb="30px"  mt={"5px"} flexDirection={"row"} alignContent={"center"} alignItems={"center"} display={'flex'}>
                <Typography noWrap variant="h2" fontWeight="bold" sx={{ m: "0 0 5px 0", textAlign: 'center', color: '#e892c6'}} >{recipe ? recipe.title : <Skeleton />}</Typography>
                <PiDotOutlineFill size={50} color='#929fe8'/>
                <Typography sx={{ m: "0 0 5px 0", color: '#a8a8a8'}} variant='h4' fontWeight="bold" noWrap>{total} total recipes</Typography>
            </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
            <Box>
                <Box mb="30px" pr={20}  mt={"5px"} sx={{display: 'flex', flexWrap: 'wrap', '& > :not(style)': {width: 600, height: 370},}}>
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
                    <hr style={{width: '100%', border: 'none', borderTop: '1px solid #707070', marginTop: 15, marginBottom: 15}}/>
                    <Typography sx={{ml:3 , mr: 2, ml: 2}} variant='h5' fontWeight="bold" noWrap>Nutrition Profile:</Typography>
                    <List>
                        {recipe && recipe.nutritionProfile.slice(0, 3).map((profile, index) => 
                            <ListItem key={index} style={{fontSize: '1.125rem'}}>
                                {profile}
                            </ListItem>
                        )}
                    </List>
                </Paper>
                </Box>
                <Box mb="30px" pr={20}  mt={"5px"} sx={{display: 'flex', flexWrap: 'wrap', '& > :not(style)': {width: 600, height: 350},}}>
                <Paper elevation={6} sx={{ p: 2, bgcolor: '#9ceef7', color: '#707070'}}>
                    <Typography sx={{m: 2, mt: 3, mb: 1}} variant='h4' fontWeight="bold" noWrap>Ingredients</Typography>
                        <List>
                            {recipe && recipe.ingredients.map((ingredient, index) => (
                            <ListItem key={index} style={{fontSize: '1.125rem'}}>
                                {ingredient}
                            </ListItem>
                            ))}
                        </List>
                </Paper>
                </Box>
            </Box>
            <Box>
                {pic && <img style={{height: "100%", width: "150%", position: 'relative', left: '50%', transform: 'translate(-50%, 0)'}} src={pic} alt='smoothies' />}
            </Box>
            <Box>
                <Box mb="30px" pl={20}  mt={"5px"} sx={{display: 'flex', flexWrap: 'wrap', '& > :not(style)': {width: 600, height: 350},}}>
                <Paper elevation={6} sx={{ p: 2, bgcolor: '#f7d09c', color: '#707070'}}>
                    <Typography sx={{m: 2, mt: 3, mb: 3}} variant='h4' fontWeight="bold" noWrap>Directions</Typography>
                    <Typography sx={{m: 2, mt: 3, mb: 3}} variant='h5' fontWeight="bold" noWrap>Step 1</Typography>
                    <Typography sx={{m: 2, mt: 3, mb: 3}} variant='body1'>
                    {recipe ? recipe.steps : <Skeleton />}
                    </Typography>
                </Paper>
                </Box>
                <Box mb="30px"  pl={20}  mt={"5px"} sx={{display: 'flex', flexWrap: 'wrap', '& > :not(style)': {width: 600, height: 350},}}>
                <Paper elevation={6} sx={{ p: 2, bgcolor: '#f79c9f', color: '#707070'}}>
                    <Box sx={{m:3 , mr: 2, ml: 2, display: 'flex'}}>
                        <Typography   variant='h4' fontWeight="bold" noWrap>Nutrition Facts</Typography>
                        <Typography variant='h6' sx={{pt: .5, pl: 1}}  noWrap>(per serving)</Typography>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Box sx={{m:3 , mr: 2, ml: 2, display: 'flex'}}>
                            <Box sx={{m:3 , mr: 2, ml: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Typography variant='h5' fontWeight="bold" noWrap >{recipe ? recipe.nutritionFact.calories : <Skeleton />}</Typography>
                                <Typography sx={{fontSize: '1.125rem', lineHeight: '1.75rem'}} noWrap>Calories</Typography>
                            </Box>
                            <Box sx={{m:3 , mr: 2, ml: 10, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Typography variant='h5' fontWeight="bold" noWrap >{recipe ? recipe.nutritionFact.fat : <Skeleton />}g</Typography>
                                <Typography sx={{fontSize: '1.125rem', lineHeight: '1.75rem'}} noWrap>Fat</Typography>
                            </Box>
                            <Box sx={{m:3 , mr: 2, ml: 10, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Typography variant='h5' fontWeight="bold" noWrap >{recipe ? recipe.nutritionFact.carbs : <Skeleton />}g</Typography>
                                <Typography sx={{fontSize: '1.125rem', lineHeight: '1.75rem'}} noWrap>Carbs</Typography>
                            </Box>
                            <Box sx={{m:3 , mr: 2, ml: 10, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Typography variant='h5' fontWeight="bold" noWrap >{recipe ? recipe.nutritionFact.protein : <Skeleton />}g</Typography>
                                <Typography sx={{fontSize: '1.125rem', lineHeight: '1.75rem'}} noWrap>Protein</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <hr style={{width: '100%', border: 'none', borderTop: '1px solid #707070', marginTop: 15, marginBottom: 15}}/>
                </Paper>
                </Box>
            </Box>
        </Box>    
        </Box>
    </Box>
  )
}

export default HomePage