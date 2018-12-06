import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import fetch from 'node-fetch';

class IndexPage extends React.Component {
  state = {
    list: '',
  }
  componentDidMount() {
    fetch('http://localhost:3000/')
    .then(res => res.json())
    .then(res => (this.setState({
      list: res.newData
    })))
  }
  render() {
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>
          {
            this.state.list && this.state.list.map(i => (
              <a>{i.name}</a>
            ))
          }
        </h1>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
