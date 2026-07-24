import { Form, Input, InputNumber, Button } from "antd";

const ProductForm = ({ setIsModalOpen }) => {
    const [form] = Form.useForm();
    

    const createProduct = async (values) => {
        await fetch("https://6a62eaf31bffb2ffab8b846f.mockapi.io/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
    }

    const onFinish = async (values) => {
      console.log(values)
      await createProduct(values);
      setIsModalOpen(false)
    //   form.resetFields()
  };

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "20px auto",
        padding: 12,
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ marginBottom: 12 }}>Create Product</h2>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          price: 0,
          discountPrice: 0,
          rating: 0,
          stock: 0,
        }}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Title kiriting!" }]}
        >
          <Input placeholder="Product title" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Description kiriting!" }]}
        >
          <Input.TextArea rows={4} placeholder="Product description" />
        </Form.Item>

        <Form.Item
          label="Image URL"
          name="imgUrl"
          rules={[
            { required: true, message: "Image URL kiriting!" },
            { type: "url", message: "To'g'ri URL kiriting!" },
          ]}
        >
          <Input placeholder="https://example.com/image.jpg" />
        </Form.Item>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
          }}
        >
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Price kiriting!" }]}
          >
            <InputNumber
              min={0}
              style={{ width: "100%" }}
              placeholder="Price"
            />
          </Form.Item>

          <Form.Item
            label="Discount Price"
            name="discountPrice"
            rules={[{ required: true, message: "Discount price kiriting!" }]}
          >
            <InputNumber
              min={0}
              style={{ width: "100%" }}
              placeholder="Discount Price"
            />
          </Form.Item>

          <Form.Item
            label="Rating"
            name="rating"
            rules={[{ required: true, message: "Rating kiriting!" }]}
          >
            <InputNumber
              min={0}
              max={100}
              style={{ width: "100%" }}
              placeholder="Rating"
            />
          </Form.Item>

          <Form.Item
            label="Stock"
            name="stock"
            rules={[{ required: true, message: "Stock kiriting!" }]}
          >
            <InputNumber
              min={0}
              style={{ width: "100%" }}
              placeholder="Stock"
            />
          </Form.Item>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large">
            Save Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductForm;
