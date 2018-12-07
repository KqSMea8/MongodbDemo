import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';
import fetch from 'node-fetch';

class Detail extends React.Component {
  state = {
    list: '',
  }
  componentDidMount() {
    const { match } = this.props;
    fetch(`http://localhost:3000/${match.params.id}`)
    .then(res => res.json())
    .then(res => (this.setState({
      list: res
    })))
  }
  render() {
    console.log(this.state.list)
    return (
      <div className={styles.normal}>
        {this.state.list.content}
      </div>
    );
  }
}

Detail.propTypes = {
};

export default connect()(Detail);
