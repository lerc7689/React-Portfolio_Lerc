import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// 🟢 Subcomponente con label y título
function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number; titulo: string }
) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width:"100%" }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <h2 style={{
            fontSize:"18px",
            fontWeight:"normal",
            display:"flex",
            alignItems:"center",
        }}>{props.titulo}</h2>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: 35,
            height: 35,
          }}
        >
          <Typography variant="body2" sx={{  }}>
           <h2 style={{
            fontSize:"14px",
            color:"#a3a1a1ff"
           }}> {`${Math.round(props.value)}%`}</h2>
          </Typography>
        </Box>
      </div>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          variant="determinate"
          style={{
            height: '7px',
            borderRadius: '5px',
          }}
          sx={{
            '& .MuiLinearProgress-bar': {
            backgroundColor: "#e47c05", // color del relleno
            },
            backgroundColor: '#c0bdb96d', // color de fondo de la barra
        }}
          {...props}
        />
      </Box>
    </Box>
  );
}

// 🟢 Componente principal
export default function LinearWithValueLabel({
  stopAt = 85,
  titulo = 'Progreso',
}: {
  stopAt?: number;
  titulo?: string;
}) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= stopAt) {
          clearInterval(timer); // Detiene el progreso al alcanzar el límite
          return stopAt;
        }
        return prevProgress + 10;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [stopAt]);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={progress} titulo={titulo} />
    </Box>
  );
}
