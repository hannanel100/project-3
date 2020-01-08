import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { connect } from 'react-redux';


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    center: {
        margin: 'auto'
    }
}));

function SingleVacation(props) {
    const classes = useStyles();
    const vacationId = props.vacation.id;
    const userId = props.userId;

    return (
        <Card className={classes.card}>
            <CardHeader
                title={props.vacation.description}
                subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                image={props.vacation.picture}
                title={props.vacation.picture}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    price: {props.vacation.price} <br></br>
                    dates: {props.vacation.dates}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton id={props.vacation.id} aria-label="add to favorites" onClick={() => {
                    props.likeHandler(userId, vacationId)
                }}>
                    <FavoriteIcon />
                </IconButton>
            </CardActions>

        </Card >
    );
}

const mapStateToProps = state => {

    return {
        userId: state.userReducers.userId
    }
}
export default connect(mapStateToProps)(SingleVacation)