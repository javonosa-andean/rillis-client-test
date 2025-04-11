import React from 'react';
import { Container, Box, Typography, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const RillisScript = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://rillis-widget-prd.s3.sa-east-1.amazonaws.com/rillis-widget-identity.es.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  textAlign: 'center',
  borderRadius: '16px',
  boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
  backgroundColor: '#ffffff',
}));

const Feature = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
}));

function App() {
  return (
    <>
      <RillisScript />
      <Container maxWidth="md" sx={{ backgroundColor: '#f4f4f9', minHeight: '100vh', padding: '20px' }}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            RillisPay
          </Typography>
          
          <StyledPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Integra Rillis en tu aplicación de pagos
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              Esta aplicación de prueba muestra cómo integrar el widget de verificación de identidad de Rillis. 
              Facilita a tus clientes la verificación de identidad en segundos, asegurando un proceso de pago seguro y eficiente.
            </Typography>

            <Box sx={{ my: 4, display: 'flex', justifyContent: 'center' }} id="rillis-widget-identity-container">
              <rillis-widget-identity 
                client_id="serXvWKccQ4EjGV1KSIvXP4hbihWwaZS8X101GYrV0w=" 
                flow="6786a8ec37b026792a30c42e"
                metadata={JSON.stringify({
                  "user_id": "1234567890",
                  "user_email": "test@example.com",
                  "user_name": "Test User"
                })}
                >
              </rillis-widget-identity>
            </Box>
          </StyledPaper>
        </Box>
      </Container>
    </>
  );
}

export default App; 