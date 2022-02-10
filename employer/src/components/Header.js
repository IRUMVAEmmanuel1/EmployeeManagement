import React from 'react'
import {AppBar, IconButton} from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import Badge from '@material-ui/core/Badge'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import {makeStyles} from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
const useStyles = makeStyles({
     root:{
         backgroundColor: '#fff',
        
     },
     searchInput:{
         float:'left',
         opacity:'0.6',
         padding:'3px 12px',
         fontSize:'0.8rem',
         '&:hover':{
             backgroundColor:'#f2f2f2'  

         },
         '&. MuisvgIcon-root':{
             marginRight: '8px'
         },
         btn:{
             backgroundColor:'#ff9'}
     },
     btnLabel:{
           backgroundColor:'red'
     },
     btnRoot:{
         backgroundColor:'green'
     } 
})
export default function Header() {
    const classes = useStyles();
    return (<div>
        <AppBar position="relative" className={classes.root}>
          <Toolbar>
              <Grid container  alignItems="center" >
                <Grid item>
                <InputBase 
                 placeholder="search Topics"
                 color="secondary"
                 className={classes.searchInput}
                 startAdornment = {<SearchIcon fontSize="small" />}
                 />
                </Grid>
                <Grid item sm> 
                </Grid>
                <Grid item  >
                    
                    <IconButton  className={{root:classes.btnRoot,label:classes.btnLabel}}> 
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsNoneIcon fontSize="small"/>
                         </Badge></IconButton>
                         <IconButton>
                        <Badge badgeContent={3} color="primary">
                            <ChatBubbleOutlineIcon fontSize="small" />
                        </Badge>
                    </IconButton>
                    <IconButton>
                      <PowerSettingsNewIcon/>
                    </IconButton>
                </Grid>
              </Grid>
         </Toolbar>    
        </AppBar>
        </div>
    )
}
