import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Home() {
    return (
        <Container maxWidth='lg'>
            <Box
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '100px'
                }}
            >
                <Typography
                    color={'white'}
                    variant='body1'

                >
                    O TasTyre é uma forma de juntar seu belo gosto musical com o acrescimo cultural regional, para que você e a região desejada enriqueça culturalmente.
                </Typography>
                <Typography 
                    color='white'
                    variant='body2'
                    marginTop={'20px'}
                >
                    Conheça Bandas, Musicos da sua Região.
                </Typography>
            </Box>

        </Container>
    )
}

export default Home;