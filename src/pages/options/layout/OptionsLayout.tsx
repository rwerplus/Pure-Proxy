import { Box, Container } from '@mui/material';
import './OptionsLayout.scss';

export default function OptionsLayout() {
  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <h1>配置参数</h1>
        <Box component="form" noValidate sx={{ mt: 1 }}></Box>
      </Box>
    </Container>
  );
}
