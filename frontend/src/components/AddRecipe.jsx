import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContentText } from '@mui/material';
import { MdAddBox, MdAdd } from "react-icons/md";
import { Tooltip, IconButton } from "@mui/material";
import axios from 'axios';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';

// Dropdown menu for nutrion profiles from MUI
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 400,
    },
  },
};

export default function AddRecipe() {

  const [open, setOpen] = React.useState(false);

  // Initial state for each of the form fields
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState(0);
  const [cookTime, setCookTime] = React.useState("");
  const [servings, setServings] = React.useState("");
  const [nutritionProfile, setNutritionProfile] = React.useState([]);
  const [ingredients, setIngredients] = React.useState(['']);
  const [steps, setSteps] = React.useState("");

  const [nutritionFact, setNutritionFact] = React.useState({ 
  calories: "",
  fat: "",
  carbs: "",
  protein: "",
  totalSugars: ""
})


  // Handle submission of the new recipe form
  const handleSubmit = () => {
    // Creating a new recipe object to be sent after submission
    const recipe = {title, description, cookTime, servings, nutritionProfile, ingredients, steps, nutritionFact};
    console.log("Submitting: ", recipe);
    axios.post('/api/recipes', recipe)
    .then(response => {console.log(response)
        })
        .catch(error => console.error(error));
    

    setOpen(false);
  };

  // Opens dialog
  const handleOpen = () => {
    setOpen(true);
  }

  // Closes dialog
  const handleClose = () => {
    setOpen(false);
  };

  // List of nutritional profiles the user can choice from
  const profiles = [
  'Heart Healthy', 'Low-Calorie', 'Low Fat', "Low Sodium", "High-Protein"
   ,"Healthy Immunity", "Gluten-Free", "High Blood Pressure", "Egg Free", "Nut-Free", "Soy-Free", "Vegetarian",
   "Anti-Inflammatory", "Vegan", "Bone Health", " High Calcium", "Dairy-Free"
  ];

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setNutritionProfile(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  // Updates an ingredient when its corresponding text field is changed
  const handleIngredientChange = (index, event) => {
    const values = [...ingredients];
    values[index] = event.target.value;
    setIngredients(values);
  };

  // Add a new ingredient to the end of the ingredient list. Appends an empty string to the ingredients array
  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  // Remove an ingredient from the list. Removing the corresponding elemnt from the ingredients array
  const handleRemoveIngredient = (index) => {
    const values = [...ingredients];
    values.splice(index, 1);
    setIngredients(values);
  };

  return (
    <div>
      <Tooltip title="Add recipe">
          <IconButton onClick={handleOpen}>
            <MdAddBox size={"45px"} color='#64ce56'/>
          </IconButton>
        </Tooltip>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle >Create a recipe</DialogTitle>
        <DialogContent>
        <form onSubmit={handleSubmit} style={{width: 420}}>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="title"
            type="text"
            sx={{ m: 1, width: 250 }}
            variant="standard"
            color='success'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="calories"
            label="calories"
            sx={{ m: 1, width: 100 }}
            type="text"
            color='success'
            variant="standard"
            value={nutritionFact.calories}
            onChange={e => setNutritionFact({ ...nutritionFact, calories: e.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="description"
            sx={{ m: 1, width: 400 }}
            type="text"
            multiline
            rows={3}
            color='success'
            variant="standard"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="cook-time"
            label="cook time"
            sx={{ m: 1, width: 190 }}
            type="text"
            InputProps={{
              endAdornment: <InputAdornment position="end">minutes</InputAdornment>,
            }}
            color='success'
            variant="standard"
            value={cookTime}
            onChange={e => setCookTime(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="servings"
            label="servings"
            sx={{ m: 1, width: 195 }}
            type="text"
            color='success'
            variant="standard"
            value={servings}
            onChange={e => setServings(e.target.value)}
          />
          <DialogContentText sx={{ml: 1, mt: 1}}>nutrition profile</DialogContentText>
          <Select
          labelId="nutrition-profile-label"
          sx={{ m: 1, width: 400 }}
          id="nutrion-profile"
          color='success'
          multiple
          value={nutritionProfile}
          onChange={handleChange}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {profiles.map((profile) => (
            <MenuItem key={profile} value={profile}>
              <Checkbox checked={nutritionProfile.indexOf(profile) > -1} />
              <ListItemText primary={profile} />
            </MenuItem>
          ))}
        </Select>
        <DialogContentText sx={{ml: 1, mt: 1}}>ingredients</DialogContentText>
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <TextField
            label={`item ${index + 1}`}
            variant="outlined"
            sx={{m: 1, width: 250}}
            value={ingredient}
            onChange={event => handleIngredientChange(index, event)}
          />
          <Button sx={{m: 1, mt: 2}} startIcon={<DeleteIcon />} size='large' color="error" variant="outlined" onClick={() => handleRemoveIngredient(index)}>Remove</Button>
        </div>
      ))}
      <Button sx={{m: 1, mt: 2}} startIcon={<MdAdd />} size='large' color="success" variant="outlined" onClick={handleAddIngredient}>add ingredient</Button>
      <TextField
            autoFocus
            margin="dense"
            id="steps"
            label="steps"
            sx={{ m: 1, width: 400 }}
            type="text"
            multiline
            rows={2}
            color='success'
            variant="standard"
            value={steps}
            onChange={e => setSteps(e.target.value)}
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="fat"
            label="fat"
            sx={{ m: 1, width: 90 }}
            InputProps={{
              endAdornment: <InputAdornment position="end">g</InputAdornment>,
            }}
            type="text"
            color='success'
            variant="standard"
            value={nutritionFact.fat}
            onChange={e => setNutritionFact({ ...nutritionFact, fat: e.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="carbs"
            label="carbs"
            sx={{ m: 1, width: 80 }}
            InputProps={{
              endAdornment: <InputAdornment position="end">g</InputAdornment>,
            }}
            type="text"
            color='success'
            variant="standard"
            value={nutritionFact.carbs}
            onChange={e => setNutritionFact({ ...nutritionFact, carbs: e.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="protein"
            label="protein"
            sx={{ m: 1, width: 80 }}
            InputProps={{
              endAdornment: <InputAdornment position="end">g</InputAdornment>,
            }}
            type="text"
            color='success'
            variant="standard"
            value={nutritionFact.protein}
            onChange={e => setNutritionFact({ ...nutritionFact, protein: e.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="sugars"
            label="sugars"
            sx={{ m: 1, width: 80 }}
            InputProps={{
              endAdornment: <InputAdornment position="end">g</InputAdornment>,
            }}
            type="text"
            color='success'
            variant="standard"
            value={nutritionFact.totalSugars}
            onChange={e => setNutritionFact({ ...nutritionFact, totalSugars: e.target.value })}
          />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}