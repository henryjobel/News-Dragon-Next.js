import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headerImage from '../../assets/The Dragon News.png'
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
    const curentDate = getCurrentDate()
    return (
        <Box className='w-full my-5'>
            <Container>
            <Image src={headerImage} width={500} height={500} alt='logo' className="mx-auto" />
            <Typography className="text-center text-black">Journalism Without Fear or Favour</Typography>
            <Typography className="text-center text-black">{curentDate}</Typography>
            </Container>
        </Box>
    );
};

export default Header;