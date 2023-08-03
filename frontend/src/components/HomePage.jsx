import React, { useEffect, useState} from 'react'
import {Box, Typography, Paper} from '@mui/material';
import axios from 'axios';
import { TfiLayoutLineSolid } from "react-icons/tfi";

const HomePage = () => {
    const [pic, setPic] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://api.unsplash.com/search/photos?query=smoothie,mango&client_id=o4jd0Qrpke9s01MfRmaddcmgqv86QMfeR0wo2EzyJnI`);
    
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
            <Box mb="30px"  mt={"5px"} flexDirection={"column"} alignContent={"center"} alignItems={"center"} display={'flex'}>
                <Typography noWrap variant="h2" fontWeight="bold" sx={{ m: "0 0 5px 0", textAlign: 'center' }} >Mango-Passion Fruit Smoothie</Typography>
            </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
            <Box>
                <Box mb="30px" pr={20}  mt={"5px"} sx={{display: 'flex', flexWrap: 'wrap', '& > :not(style)': {width: 600, height: 370},}}>
                <Paper elevation={6} sx={{ p: 2 , bgcolor: "#bdf59f", color: '#707070'}}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <Box sx={{m:3 , mr: 2, ml: 2}}>
                            <Typography variant='h5' fontWeight="bold" noWrap >Cook Time:</Typography>
                            <Typography sx={{fontSize: '1.125rem', lineHeight: '1.75rem'}} noWrap>5 mins</Typography>
                        </Box>
                        <Box sx={{m:3 , mr: 2, ml: 2}}>
                            <Typography variant='h5' fontWeight="bold" noWrap>Total Time:</Typography>
                            <Typography sx={{fontSize: '1.125rem', lineHeight: '1.75rem'}} noWrap>5 mins</Typography>
                        </Box>
                        <Box sx={{m:3 , mr: 5, ml: 2}}>
                            <Typography variant='h5' fontWeight="bold" noWrap>Servings:</Typography>
                            <Typography sx={{fontSize: '1.125rem', lineHeight: '1.75rem'}} noWrap>2</Typography>
                        </Box>
                    </Box>
                    <Typography sx={{ml:3 , mr: 2, ml: 2}} variant='h5' fontWeight="bold" noWrap>Yield:</Typography>
                    <Typography sx={{ml:3 , mr: 2, ml: 2, fontSize: '1.125rem', lineHeight: '1.75rem'}}  noWrap>2 servings, 1 cup each</Typography>
                    <hr style={{width: '100%', border: 'none', borderTop: '1px solid #707070', marginTop: 15, marginBottom: 15}}/>
                   
                    <Typography sx={{ml:3 , mr: 2, ml: 2}} variant='h5' fontWeight="bold" noWrap>Nutrition Profile:</Typography>
                    <Typography sx={{ml:3 , mr: 2, ml: 2, fontSize: '1.125rem', lineHeight: '1.75rem'}} variant='body1' noWrap>Heart Healthy</Typography>
                    <Typography sx={{ml:3 , mr: 2, ml: 2, fontSize: '1.125rem', lineHeight: '1.75rem'}} variant='body1' noWrap>Low Calorie</Typography>
                    <Typography sx={{ml:3 , mr: 2, ml: 2, fontSize: '1.125rem', lineHeight: '1.75rem'}} variant='body1' noWrap>Gluten Free</Typography>
                </Paper>
                </Box>
                <Box mb="30px" pr={20}  mt={"5px"} sx={{display: 'flex', flexWrap: 'wrap', '& > :not(style)': {width: 600, height: 350},}}>
                <Paper elevation={6} sx={{ p: 2, bgcolor: '#9ceef7', color: '#707070'}}>
                    <Typography sx={{m: 2, mt: 3, mb: 3}} variant='h4' fontWeight="bold" noWrap>Ingredients</Typography>
                    <li style={{margin: 15, fontSize: '1.125rem', lineHeight: '1.75rem' }}>1 ripe mango, peeled and diced (1 cup)</li>
                    <li style={{margin: 15, fontSize: '1.125rem', lineHeight: '1.75rem' }}>⅔ cup nonfat vanilla yogurt</li>
                    <li style={{margin: 15, fontSize: '1.125rem', lineHeight: '1.75rem' }}>1/3-1/2 cup frozen passion fruit juice concentrate</li>
                    <li style={{margin: 15, fontSize: '1.125rem', lineHeight: '1.75rem' }}>¼ cup water</li>
                    <li style={{margin: 15, fontSize: '1.125rem', lineHeight: '1.75rem' }}>2 ice cubes, crushed</li>
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
                    Combine mango, yogurt, 1/3 cup juice concentrate, water and crushed ice in a blender; cover and blend until smooth and frothy. 
                    Add more concentrate, if desired. Serve immediately.
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
                                <Typography variant='h5' fontWeight="bold" noWrap >291</Typography>
                                <Typography sx={{fontSize: '1.125rem', lineHeight: '1.75rem'}} noWrap>Calories</Typography>
                            </Box>
                            <Box sx={{m:3 , mr: 2, ml: 10, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Typography variant='h5' fontWeight="bold" noWrap >2g</Typography>
                                <Typography sx={{fontSize: '1.125rem', lineHeight: '1.75rem'}} noWrap>Fat</Typography>
                            </Box>
                            <Box sx={{m:3 , mr: 2, ml: 10, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Typography variant='h5' fontWeight="bold" noWrap >60g</Typography>
                                <Typography sx={{fontSize: '1.125rem', lineHeight: '1.75rem'}} noWrap>Carbs</Typography>
                            </Box>
                            <Box sx={{m:3 , mr: 2, ml: 10, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Typography variant='h5' fontWeight="bold" noWrap >9g</Typography>
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