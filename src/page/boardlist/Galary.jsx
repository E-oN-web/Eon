import React from "react";
import Layout from "../../layout/Layout";
import Autopic from "../../components/Board/Autopic";
import Galaryport from "../../components/Board/Galaryport";

export default function Gallery() {
  return (
    <Layout>
      <Autopic />
      <div style={{ height: "200px" }} /> {/* 200px의 공간을 생성 */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Galaryport />
        <Galaryport />
        <Galaryport />
      </div>
    </Layout>
  );
}
