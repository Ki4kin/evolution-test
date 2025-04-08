import { Button, Flex, Form, Input, Select, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { IDocument } from '../../../api/documentService/documentService.types';

import './CreateDocumentForm.css';
import { createNewDocument } from '../../../api/documentService/documentService';
import { FC, useContext } from 'react';
import { DocumentSidebarContext } from '../../../contexts/DocumentSidebarContext/DocumentSidebarContext';
import { DocumentSidebarMode } from '../../../contexts/DocumentSidebarContext/DocumentSidebarContext.types';
import { selectOptions } from './CreateDocumentForm.data';
import { IDocumentDrawerProps } from '../DocumentDrawer.types';

export const CreateDocumentForm: FC<IDocumentDrawerProps> = ({ initialValues }) => {
  const { sidebarMode } = useContext(DocumentSidebarContext);

  const [form] = Form.useForm();
  const onSubmit = (values: Omit<IDocument, 'id' | 'created_at'>) => {
    createNewDocument(values);
  };

  return (
    <Form
      form={form}
      layout='vertical'
      onFinish={onSubmit}
      initialValues={sidebarMode === DocumentSidebarMode.WATCH && initialValues}
      disabled={sidebarMode === DocumentSidebarMode.WATCH}
    >
      <Form.Item name='title' rules={[{ required: true, message: 'Введите название' }]}>
        <Input placeholder='Название' style={{ border: 'none' }} />
      </Form.Item>

      <Flex gap='large'>
        <Typography>Тип документа</Typography>
        <Form.Item name='type' rules={[{ required: true }]}>
          <Select defaultActiveFirstOption className='custom-select'>
            {selectOptions.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Flex>

      <Form.Item name='description' label='Описание' rules={[{ required: true, message: 'Введите описание' }]}>
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  );
};
