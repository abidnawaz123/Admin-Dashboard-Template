import React from "react";
import { Modal, Form, Input, Select, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

const { TextArea } = Input;
const { Option } = Select;

const AddProjectModal = ({ visible, onCancel, all_leads, all_employees }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const employees = useSelector((state) => state?.employees?.list || []);
  const leads = useSelector((state) => state?.employees?.leads || []); // Assuming leads are separately available

  const handleSubmit = (values) => {
    console.log('vaues are ==>', values)

    dispatch({
      type: "POST_NEW_PROJECT_REQUEST",
      payload: values,
    });
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      title="Add New Project"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          assigned_employee: [],
          assigned_lead: undefined,
        }}
      >
        <Form.Item
          label="Project Name"
          name="name"
          rules={[{ required: true, message: "Please enter the project name" }]}
        >
          <Input placeholder="Enter project name" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter a description" }]}
        >
          <TextArea placeholder="Enter project description" rows={4} />
        </Form.Item>

        <Form.Item
          label="Assign Lead"
          name="assigned_lead"
          rules={[{ required: true, message: "Please select a project lead" }]}
        >
          <Select placeholder="Select lead">
            {all_leads?.map((lead) => (
              <Option key={lead.id} value={lead.id}>
                {lead.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Assign Employees"
          name="assigned_employee"
          rules={[{ required: true, message: "Please select employees" }]}
        >
          <Select
            mode="multiple"
            placeholder="Select employees"
            optionFilterProp="children"
          >
            {all_employees?.map((emp) => (
              <Option key={emp.id} value={emp.name}>
                {emp.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddProjectModal;
