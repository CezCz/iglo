import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const TabPanel = ({children, value, index, ...other}) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography component="div" sx={{p: 1}}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default TabPanel
