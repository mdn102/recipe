import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RecipeCard from './RecipeCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class RecipeGrid extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.demo} justify="center" spacing={16}>
        {this.props.data.map(({recipe, index}) => (
          <Grid key={index} item>
            <RecipeCard key={index} className={classes.paper} data={recipe}/>
          </Grid>
        ))}
      </Grid>
    );
  }
}

//TODO figure this out
RecipeGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeGrid);
