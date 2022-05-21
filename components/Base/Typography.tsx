import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface IHeadingProps {
  text: string
}

function PrimaryHeading(props: IHeadingProps) {
  return (
    <Box padding={2} marginBottom={10}>
      <Typography
        align="center"
        fontSize={72}
        fontFamily={'inherit'}
        fontWeight={900}
      >
        {props?.text || ''}
      </Typography>
      <div
        style={{
          height: '6px',
          background: '#d00d0d',
          width: '100%',
          margin: 'auto',
        }}
      />
    </Box>
  )
}

function SecondaryHeading(props: IHeadingProps) {
  return (
    <Box padding={2}>
      <Typography align="center" fontSize={72} fontWeight={700}>
        {props?.text.split('/')}
      </Typography>
      <div
        style={{
          height: '6px',
          background: '#4e9d0d',
          width: '100%',
          margin: 'auto',
        }}
      />
    </Box>
  )
}

export { PrimaryHeading, SecondaryHeading }
