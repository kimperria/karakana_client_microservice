import React from 'react';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const theme = createTheme();

function ForgotPassword() {
  return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <Box 
            sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Typography component="h1" variant="h5">
                    Reset Password
                </Typography>
            </Box>

            <Box
            component="form"
            noValidate 
            sx={{ mt: 1}}
            >
            <TextField 
            margin="normal"
            required 
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            />
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Initiate Password Reset
            </Button>
        </Container>
    </ThemeProvider>
  )
}

export default ForgotPassword