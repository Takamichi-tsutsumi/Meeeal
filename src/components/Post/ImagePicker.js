import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  ListView,
  CameraRoll,
  TouchableHighlight,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Immutable from 'immutable';
import groupByEveryN from 'react-native/Libraries/Utilities/groupByEveryN';

class ImagePicker extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => { return r1 !== r2; } });

    this.state = {
      assets: [],
      dataSource: ds,
      lastCursor: null,
      loadingMore: false,
      noMore: false
    };

    this.fetch = this.fetch.bind(this);
    this._fetch = this._fetch.bind(this);
    this.appendAssets = this.appendAssets.bind(this);
    this._onEndReached = this._onEndReached.bind(this);
    this._renderFooterSpinner = this._renderFooterSpinner.bind(this);
    this._fetch = this._fetch.bind(this);
    this._fetch = this._fetch.bind(this);
  }

  componentWillMount() {
    this.fetch();
  }

  fetch() {
    if (!this.state.loadingMore) {
      this.setState({ loadingMore: true }, () => { this._fetch(); });
    }
  }

  _fetch() {
    const fetchParams = {
      first: 3,
      assetType: 'Photos'
    };

    if (this.state.lastCursor) {
      fetchParams.after = this.state.lastCursor;
    }

    CameraRoll.getPhotos(fetchParams)
      .then(this.appendAssets, this.logError);
  }

  appendAssets(data) {
    const assets = data.edges;
    const newState = {
      loadingMore: false
    };

    if (!data.page_info.has_next_page) {
      newState.noMore = true;
    }

    if (assets.length > 0) {
      newState.lastCursor = data.page_info.end_cursor;
      newState.assets = this.state.assets.concat(assets);
      newState.dataSource = this.state.dataSource.cloneWithRows(
        groupByEveryN(newState.assets, this.props.imagesPerRow)
      );
    }

    this.setState(newState);
  }

  logError(e) {
    console.error(e);
  }

  _renderFooterSpinner() {
    if (!this.state.noMore) {
      return <ActivityIndicator />;
    }

    return null;
  }

  _onEndReached() {
    if (!this.state.noMore) {
      this.fetch();
    }
  }

  _renderImage(asset) {
    console.log(asset.node);
    const imageStyle = {
      width: 150,
      height: 150
    };

    return (
      <Image
        key={asset.node.uri}
        style={[imageStyle, styles.image]}
        source={asset.node.image}
      />
    );
  }

  renderRow(rowData, sectionID, rowID) {
    const images = rowData.map((asset) => {
      if (asset === null) {
        return null;
      }
      return this._renderImage(asset);
    });

    return (
      <View style={styles.row}>
        {images}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          renderRow={(rowData) => { return this.renderRow(rowData); }}
          dataSource={this.state.dataSource}
          pageSize={this.props.pageSize}
          renderFooter={this._renderFooterSpinner}
          onEndReached={this._onEndReached}
          scrollRenderAheadDistance={this.props.scrollRenderAheadDistance}
          enableEmptySections={true}
          removeClippedSubviews={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    margin: 2
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  }
});

ImagePicker.propTypes = {
  scrollRenderAheadDistance: PropTypes.number,
  pageSize: PropTypes.number,
  imagesPerRow: PropTypes.number,

};

ImagePicker.defaultProps = {
  scrollRenderAheadDistance: 500,
  pageSize: 3,
  imagesPerRow: 3,
};

export default ImagePicker;
