import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Add, CardGiftcard, GroupAdd, HomeRounded, LocalShipping, SettingsInputComponent, VideoLabel } from '@mui/icons-material';
import { styled } from '@mui/material';

const steps = ['Shipped', 'Out For Delivery', 'Delivered'];

export default function OrderStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  
 

  

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} >
        {steps.map((label, index) => {
        
       
          return (
            <Step key={label} >
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                
                <Typography sx={{display: {xs: 'none',md:'block'}}}>{label}</Typography>
                </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      
    </Box>
  );
}

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;
  
    const icons = {
      1: <CardGiftcard />,
      2: <LocalShipping />,
      3: <HomeRounded />,
    };
  
    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  
const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    }),
  }));