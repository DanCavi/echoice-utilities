import { Button } from "@mui/material"
import { GridToolbarContainer } from "@mui/x-data-grid"
import { IconPlus } from "@tabler/icons-react"


const UserToolbar = ({ 
  variant = "contained",
  startIcon = <IconPlus />,
  sx = {
    ml: 'auto'
  },
  onClick = () => console.log('add user'),
  ...other
}) => {

  return (
    <GridToolbarContainer sx={{ p: 1 }}>
      <Button 
        variant={variant} 
        startIcon={startIcon} 
        sx={sx}
        onClick={onClick}
        { ...other }
      >
        Add User
      </Button>
    </GridToolbarContainer>
  )
}
export default UserToolbar