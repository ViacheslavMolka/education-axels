import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { MobileStepper, Paper, Typography, Button } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'

import { ChartDoughnut, ChartBar, ChartPolar } from './index';

import { SliderWrapper } from '../style/index';


const tutorialSteps = [
    {
        label: 'Doughnut Chart',
        chartPath: <ChartDoughnut/>
    },
    {
        label: 'Bar Chart',
        chartPath: <ChartBar/>
    },
    {
        label: 'Polat Chart',
        chartPath: <ChartPolar/>
    }
];

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: '#fcfcfc',
  }
}));

const SliderForCharts = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <SliderWrapper>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      {tutorialSteps[activeStep].chartPath}
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </SliderWrapper>
  );
}

export default SliderForCharts;
