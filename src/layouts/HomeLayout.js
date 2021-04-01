import React from "react";
import { Layout } from "antd";
import NavHeader from "../components/NavHeader"
import styles from  "./HomeLayout.less"
import Content from "../components/Content"
import Footer from "../components/Footer"
export default function HomeLayout(props) {
  return (
    <Layout className={styles.layout}>
     <NavHeader {...props}/>
     <Content {...props}/>
     <Footer/>
    </Layout>
  );
}
