import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { withRouter } from "react-router-dom";
import Aux from "../../components/Aux_";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Layout(props) {
  const classes = useStyles();
  console.log("props", props.children);
  return (
    <Aux>
 
 {localStorage.getItem("JWT") ?
 (     
 <div className="wrapper">
 <div id="sideBarContent">
   <Sidebar />
 </div>
 <main className={classes.content}>
     <div className={classes.toolbar} />
     <Typography paragraph>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
       ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
       facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
       gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
       donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
       adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
       Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
       imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
       arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
       donec massa sapien faucibus et molestie ac.
     </Typography>
     <Typography paragraph>
       Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
       facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
       tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
       consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
       vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
       hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
       tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
       nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
       accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
     </Typography>
   </main>

</div>
):( 
     <main className={classes.content}>
     <div className={classes.toolbar} />
     <Typography paragraph>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
       ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
       facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
       gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
       donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
       adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
       Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
       imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
       arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
       donec massa sapien faucibus et molestie ac.
     </Typography>
     <Typography paragraph>
       Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
       facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
       tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
       consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
       vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
       hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
       tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
       nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
       accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
     </Typography>
   </main>
 )
 
 }
   

    </Aux>
  );
}

export default withRouter(Layout);
