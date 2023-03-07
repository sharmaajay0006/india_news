import { Image } from '@mui/icons-material';
import { Box } from '@mui/material';
import React from 'react'
import loader from '../assest/loader.gif'

const Spinner = () => {
    return (
        <Box
            component="img"
            sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src={loader}
        />
    )
}

export default Spinner;
