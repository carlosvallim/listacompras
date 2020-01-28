import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import './CustomCard.css';

function CustomCard(props) {
  const { containerClass, children, footer, link, image } = props;

  return (
    <div className={containerClass}>
      <Link to={link}>
        <Card className="card">
          <CardActionArea onClick={props.action} className="card-action-area">
            {image && <CardMedia component="img" className="card-img" height="100" image={image} title="image" />}
            <CardContent className="card-context">{children}</CardContent>
          </CardActionArea>
          {footer && (
            <>
              <Divider />
              <CardActions className="card-footer">{footer}</CardActions>
            </>
          )}
        </Card>
      </Link>
    </div>
  );
}

CustomCard.defaultProps = {
  footer: null,
  image: '',
};

CustomCard.propTypes = {
  containerClass: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  footer: PropTypes.element,
  link: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default CustomCard;
