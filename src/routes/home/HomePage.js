import React from 'react';
import { connect } from 'dva';

function HomePage() {
  return (
    <div>首页</div>
  );
}
HomePage.propTypes = {
};

export default connect()(HomePage);