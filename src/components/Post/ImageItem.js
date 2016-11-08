import React, { Component, PropTypes } from 'react';
import {
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

class ImageItem extends Component {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  componentWillMount() {
    let { width } = Dimensions.get('window');
    const { imageMargin, imagesPerRow, containerWidth } = this.props;

    if (typeof containerWidth !== 'undefined') {
      width = containerWidth;
    }

    this._imageSize = (width - ((imagesPerRow + 1) * imageMargin)) / imagesPerRow;
  }

  _handleClick(item) {
    this.props.onClick(item);
  }

  render() {
    const { item, imageMargin } = this.props;
    const image = item.node.image;

    return (
      <TouchableOpacity
        style={{ marginBottom: imageMargin, marginRight: imageMargin }}
        onPress={() => this._handleClick(image)}
      >
        <Image
          source={image}
          style={{ height: this._imageSize, width: this._imageSize }}
        />
      </TouchableOpacity>
    );
  }
}

ImageItem.propTypes = {
  item: PropTypes.object.isRequired,
  imagesPerRow: PropTypes.number.isRequired,
  imageMargin: PropTypes.number,
  onClick: PropTypes.func.isRequired
};

ImageItem.defaultProps = {
  imageMargin: 2
};

export default ImageItem;
