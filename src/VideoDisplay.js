import { Box, Stack, Typography } from "@mui/material"

export default function VideoDisplay() {
    return (
        <Stack direction="row">
            <Box
                bgcolor="white"
                height={"60vh"}
                width={"60vw"}>
            </Box>
            <Typography>
                Crowd Safety
            </Typography>
        </Stack>
    );
}