import React from 'react'
import { 
    HeroSection, 
    HeroWrapper,
    HeroImage, 
    HeroContent
} from './HeroElement'
import banner from '../../images/pexels-mikhail-nilov-6964138.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ContactForm from '../ContactForm/contactForm';

const useStyles = makeStyles({
  root: {
    minWidth: 700,
    minHeight:750,
    zIndex: 11,
    opacity: 1,
    marginRight:250,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
});

const HeroElement = () => {

  const classes = useStyles();
  
    return (
      <HeroSection>
        <HeroWrapper>
          <HeroImage src={banner} />
          <HeroContent>
            <h2>
              Welcome to <br /> 
            </h2>
            <h1>
              My Debt Manager
            </h1>
          </HeroContent>
          <Card  className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textPrimary"
                gutterBottom
              >
                Get In Touch With Us!
              </Typography>
              <ContactForm/>
            </CardContent>
          </Card>
        </HeroWrapper>
      </HeroSection>
    );
}

export default HeroElement
