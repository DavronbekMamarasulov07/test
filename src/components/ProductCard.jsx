import React from "react";
import { Card, Button, Space, Tag, Rate, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Meta } = Card;

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <Card
      hoverable
      style={{
        width: 320,
        borderRadius: 12,
      }}
      className="overflow-hidden"
      cover={
        <img
          alt={product.title}
          src={product.imgUrl}
          style={{
            height: 220,
            objectFit: "cover",
          }}
        />
      }
      actions={[
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => onEdit(product)}
        >
          Edit
        </Button>,
        <Button
          danger
          icon={<DeleteOutlined />}
          onClick={() => onDelete(product.id)}
        >
          Delete
        </Button>,
      ]}
    >
      <h2> {product.title} </h2>
      <Tooltip placement="right" title={product.description}>
        <span className="line-clamp-2">{product.description}</span>
      </Tooltip>

      <Space
        direction="vertical"
        size="small"
        style={{ marginTop: 16, width: "100%" }}
      >
        <Tag color="blue">Price: ${product.price}</Tag>

        <Tag color="green">Discount: ${product.discountPrice}</Tag>

        <Tag color="orange">Stock: {product.stock}</Tag>

        <div>
          <span style={{ marginRight: 8 }}>Rating:</span>
          <Rate disabled value={product.rating / 20} />
          <span style={{ marginLeft: 8 }}>({product.rating})</span>
        </div>
      </Space>
    </Card>
  );
};

export default ProductCard;
