import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { makeStyles } from '@mui/styles';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const useStyles = makeStyles({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  button: {
    marginTop: 'auto',
  },
});

function App() {
  const classes = useStyles();

  return (
    <Swiper>
      <SwiperSlide>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h5" component="h2">
              Welcome to Swiper and Material UI
            </Typography>
            <Typography variant="body2" component="p">
              This is a demo of how to use Swiper and Material UI together.
            </Typography>
          </CardContent>
          <Button
            className={classes.button}
            variant="contained"
            endIcon={<ArrowForward />}>
            Learn More
          </Button>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h5" component="h2">
              Slide 2
            </Typography>
            <Typography variant="body2" component="p">
              This is the second slide.
            </Typography>
          </CardContent>
          <Button
            className={classes.button}
            variant="contained"
            endIcon={<ArrowForward />}>
            Learn More
          </Button>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h5" component="h2">
              Slide 3
            </Typography>
            <Typography variant="body2" component="p">
              This is the third slide.
            </Typography>
          </CardContent>
          <Button
            className={classes.button}
            variant="contained"
            endIcon={<ArrowForward />}>
            Learn More
          </Button>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
}

export default App;
