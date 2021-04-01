import React, { Component } from 'react'
import {Layout} from "antd"
import styles from "./index.less"
const {Footer} = Layout
export default class index extends Component {
    render() {
        return (
            <Footer className={styles.footer}>
                @小小荧
          </Footer>
        )
    }
}
