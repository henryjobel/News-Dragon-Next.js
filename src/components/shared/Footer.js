"use Client"
import { Box, Button, Container, Typography } from '@mui/material';
import { IconButton} from '@mui/material';
// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';



const Footer = () => {
    const naveItems = [

        {
            route: "Home",
            pathname: "/",
        },
        {
            route: "Pages",
            pathname: "/pages",
        },
        {
            route: "Category",
            pathname: "/cetagory",
        },
        {
            route: "Contatc",
            pathname: "/contact",
        },
        {
            route: "About",
            pathname: "/about",
        },
    
    ];

    return (
        <Box className='bg-black'  sx={{"& svg":{color:"white"}}}>
            <Container>
            <Box className="w-full text-center">
                       
                        <IconButton>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton>
                            <YouTubeIcon />
                        </IconButton>
                        <IconButton>
                            <TwitterIcon />
                        </IconButton>
                     
                    </Box>
                    <Box className='w-full text-center'>
                        {naveItems.map((item) => (
                            <Link key={item} href={item.pathname}>
                                <Button className='text-white'>
                                    {item.route}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Typography className="text-center text-gray-400">@2023 The Drogon News Desing By Programing Hero</Typography>
            </Container>
        </Box>
    );
};

export default Footer;