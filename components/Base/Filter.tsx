import { useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const recipeMap = new Map()
recipeMap.set('Veg Biryani', ['mutton', 'biryani'])
recipeMap.set('Non-Veg Biryani', ['mutton', 'chicken', 'biryani'])
recipeMap.set('Veg Gravy', ['mushroom', 'gravy'])
recipeMap.set('Non-Veg Gravy', ['chicken', 'gravy'])
recipeMap.set('Sweet', ['sweet'])
recipeMap.set('Poriyal', ['poriyal', 'kootu'])
recipeMap.set('Kuzhambu', ['kuzhambu', 'Kulambu', 'curry', 'sambar'])
recipeMap.set('Rasam', ['rasam'])

const getRecipeFilters = () => {
  let arr = []
  recipeMap.forEach((value, key) => {
    arr.push(key)
  })
  return arr
}

function Filter() {
  const [activeFilter, setActiveFilter] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setActiveFilter(event.target.value as string)
  }

  return (
    <Box
      sx={{
        minWidth: 120,
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '1rem',
      }}
    >
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Filter By:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={activeFilter}
          label="Filter By"
          onChange={handleChange}
        >
          {getRecipeFilters().map((x, idx) => (
            <MenuItem key={`menu-item-${idx}`} value={x}>
              {x}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export { Filter }
export default Filter
