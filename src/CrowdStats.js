import { Box, Stack, Typography } from "@mui/material"

export default function CrowdStats() {
    return (
        <Stack direction="row">
            <Box
                bgcolor="grey"
                height={"60vh"}
                width={"50vw"}>
            </Box>
            <Typography>
                Disaster Probability
            </Typography>
            <Typography>
                Crowd Flow
            </Typography>
            <Typography>
                Crowd Density
            </Typography>
        </Stack>
    );
}