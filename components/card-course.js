import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    maxWidth: 360,
    margin: '20px 10px'
  },
  media: {
    height: 190
  },
  actions: {
    paddingBottom: '1rem'
  }
});

export default function CardCourse({ course, viewDetail }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="elevation" elevation={12}>
      <CardHeader title={course.description}></CardHeader>
      <CardMedia className={classes.media} image={course.iconUrl} />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {course.longDescription}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button color="primary" variant="contained" onClick={() => viewDetail(course.id)}>
          Details
        </Button>
        <Button color="secondary" variant="contained">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}

CardCourse.propTypes = {
  course: PropTypes.any.isRequired,
  viewDetail: PropTypes.func
};
