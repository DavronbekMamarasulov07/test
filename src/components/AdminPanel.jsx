"use client";

import React, { useEffect, useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import ProductCard from "./ProductCard";
import ModalComponent from "./ModalComponent";
const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));
const AdminPanel = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
     


    const showModal = () => {
      setIsModalOpen(true);
    };

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://6a62eaf31bffb2ffab8b846f.mockapi.io/products",
      );

      const data = await res.json();

      setProducts(data);
    };

    fetchProducts();
  }, []);
    
    

  return (
    <Layout className="min-h-screen">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        className="h-screen"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px" }}>
          <div
            className="flex-1 h-full"
            style={{
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Button onClick={showModal} type="primary">
              Create
            </Button>
            <div className="grid grid-cols-3 mt-5">
              {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          <ModalComponent
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminPanel;
