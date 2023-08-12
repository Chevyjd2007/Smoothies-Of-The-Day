import React, { useEffect, useState} from 'react'
import { Button} from '@mui/material'
import Dialog from '@mui/material/Dialog';
import {useTable} from "react-table";
import "./table.css"
import axios from 'axios';

const NutritionButton = () => {
    const [open, setOpen] = React.useState(false);
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
 
        const fetchData = async () => {
            try {
                const Response = await axios.get('/api/recipes/recipe-of-the-day')
                setProfiles(Response.data.nutritionProfile);
            } catch (error) {
                console.error("Error fetching profiles: ", error);
            }
        };
        fetchData();
    }, []);

    const data = profiles.map(profile => ({ profile }));

      // Opens dialog
  const handleOpen = () => {
    setOpen(true);
  }

       // Closes dialog
  const handleClose = () => {
    setOpen(false);
  };


  const columns = React.useMemo(
    () => [
      {
        Header: 'Index',
        accessor: (_, index) => index + 1,
      },
      {
        Header: 'Profiles',
        accessor: "profile",
      },
    ],
    []
  );

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data });

    

  return (
    <div>
        <Button onClick={handleOpen} variant='outlined' sx={{borderColor: '#4dd0e1', color: '#4dd0e1', marginTop: '50px', ml: 2}} size='large'>Nutrition Profiles</Button>
        <Dialog open={open} onClose={handleClose} >
        <table {...getTableProps()} className="custom-table">
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Dialog>
    </div>
  )
}

export default NutritionButton