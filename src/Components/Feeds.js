import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NestedGrid from './Grid';
 
const useStyles = makeStyles((theme) => ({
 root: {
 maxWidth: 345,
 marginBottom: 20,
 
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
}));
 
export default function RecipeReviewCard() {
 const classes = useStyles();
 const [expanded, setExpanded] = React.useState(false);
 
 const handleExpandClick = () => {
 setExpanded(expanded);
 };
 
 return (
            <Card className={classes.root}>
            <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            R
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
            <MoreVertIcon />
            </IconButton>
            }
                title="Calerb Louis Jean"
                subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                image="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/shift-in-the-us-carpooling-market-harsh-raj.jpg"
                title="Paella dish"
                />
            <CardContent>
            {/* <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography> */}
            
            <NestedGrid/>
            
            </CardContent>
            <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="comment">
            <ChatBubbleOutlineIcon />
            </IconButton>
            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton>
            <IconButton
            className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="save"
            >
            <BookmarkBorderIcon />
            </IconButton>
            </CardActions> 
            </Card>
 );
}