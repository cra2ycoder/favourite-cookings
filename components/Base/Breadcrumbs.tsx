import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface IBreadcrumbProps {
  links: string[]
}

function Breadcrumbs(props: IBreadcrumbProps) {
  return (
    <Box>
      {props?.links?.map(x => (
        <Typography>{x}</Typography>
      ))}
    </Box>
  )
}

export default Breadcrumbs
