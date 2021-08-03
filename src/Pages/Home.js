import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PostAddIcon from '@material-ui/icons/PostAdd';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Feeds from '../Components/Feeds';
 
function TabPanel(props) {
 const { children, value, index, ...other } = props; // props destructuring ES6
 
 
 return (
 <div
 role="tabpanel"
 hidden={value !== index}
 id={`full-width-tabpanel-${index}`}
 aria-labelledby={`full-width-tab-${index}`}
 {...other}
 >
 {value === index && (
 <Box p={3}>
 {children}
 </Box>
 )}
 </div>
 );
}
 
TabPanel.propTypes = {
 children: PropTypes.node,
 index: PropTypes.any.isRequired,
 value: PropTypes.any.isRequired,
};
 
const useStyles = makeStyles((theme) => ({
 root: {
 flexGrow: 1,
 width: '100%',
 
 },
}));
 
export default function FullWidthTabs() {
 const classes = useStyles();
 const theme = useTheme();
 const [value, setValue] = React.useState(0);
 
 const handleChange = (event, newValue) => {
 setValue(newValue);
 };
 
 const handleChangeIndex = (index) => {
 setValue(index);
 };
 
 return (
 <div className={classes.root}>
 <AppBar position="static" color="default">
 <Tabs
 value={value}
 onChange={handleChange}
 indicatorColor="secondary"
 textColor="secondary"
 variant="fullWidth"
 aria-label="full width tabs example"
 >
 <Tab icon={<PostAddIcon />} label="POST" />
 <Tab icon={<DynamicFeedIcon />} label="FEEDS" />
 <Tab icon={<PersonPinIcon />} label="NEARBY" />
 </Tabs>
 </AppBar>
 <SwipeableViews
 axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
 index={value}
 onChangeIndex={handleChangeIndex}
 >
 <TabPanel value={value} index={0} dir={theme.direction}>
  Item One
 </TabPanel>
 <TabPanel value={value} index={1} dir={theme.direction}>
 <Feeds/>
 <Feeds/>
 <Feeds/>
 <Feeds/>
 </TabPanel>
 <TabPanel value={value} index={2} dir={theme.direction}>
 Item Three
 </TabPanel>

 </SwipeableViews>
 </div>
 );
}