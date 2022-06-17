import { useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { recipeMap, getRecipeFilters } from '@utils/index'

function Filter(props) {
  const [activeFilter, setActiveFilter] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    let val = event.target.value as string
    setActiveFilter(val)
    props?.onFilterChange(val)
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
