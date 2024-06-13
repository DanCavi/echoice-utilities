import { Button } from "@mui/material"
import { GridToolbarContainer } from "@mui/x-data-grid"
import { IconPlus } from "@tabler/icons-react"


const UserToolbar = ( props ) => {

  const {
    variant = "contained",
    startIcon = <IconPlus />,
    sx = {
      ml: 'auto'
    },
    onClick = () => console.log('add user'),
    ...other
  } = props;

  return (
    <GridToolbarContainer sx={{ p: 1 }}>
      <Button 
        variant={variant} 
        startIcon={startIcon} 
        sx={sx}
        onClick={onClick}
      >
        Add User
      </Button>
    </GridToolbarContainer>
  )
}
export default UserToolbar