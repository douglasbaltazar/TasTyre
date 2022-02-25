import { AppBar, Button, Toolbar } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle'
import { Box } from "@mui/system";


function Navbar() {
    return (
        <AppBar position="sticky" color="transparent" sx={{ zIndex: '1300' }} >
            <Toolbar>
                <Box
                    component='img'
                    src={require('assets/img/tastyreLogo.png')} 
                    alt="Logo Tastyre"
                    height={50}
                />
                <Box sx={{flexGrow: 1}} />
                <Button color="success" variant="outlined" startIcon={<AccountCircle />} href="http://github.com/douglasbaltazar" >GitHub.com/douglasbaltazar</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;