import React, { useState } from "react";
import { Button, Modal } from "antd";
import ProductForm from "./ProductForm";
const ModalComponent = ({ isModalOpen, setIsModalOpen }) => {
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  return (
    <>
      <Modal
        title="Create Product"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <ProductForm
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
    </>
  );
};
export default ModalComponent;
