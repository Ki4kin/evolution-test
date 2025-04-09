import { FC, useContext, useEffect, useState } from 'react';
import { Button, Divider, Flex, Form, Select, Tag, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';

import { DocumentSidebarMode } from '../../../contexts/DocumentSidebarContext/DocumentSidebarContext.types';
import { DocumentType, IDocument } from '../../../api/documentService/documentService.types';
import { IDocumentDrawerProps } from '../DocumentDrawer.types';

import { DocumentSidebarContext } from '../../../contexts/DocumentSidebarContext/DocumentSidebarContext';
import { createNewDocument, fetchDocuments } from '../../../api/documentService/documentService';
import { getSelectStyle, selectOptions } from './CreateDocumentForm.data';

import './CreateDocumentForm.css';

export const CreateDocumentForm: FC<IDocumentDrawerProps> = ({ initialValues }) => {
  const { sidebarMode, setSidebarMode } = useContext(DocumentSidebarContext);
  const watchMode = sidebarMode === DocumentSidebarMode.WATCH;
  const [selectedOption, setSelectedOption] = useState<Array<(typeof DocumentType)[keyof typeof DocumentType]>>([
    DocumentType.REGULATION,
  ]);

  useEffect(() => {
    if (watchMode && initialValues?.type) {
      setSelectedOption([initialValues?.type]);
    }
  }, [initialValues, watchMode]);

  const [form] = Form.useForm();
  const formValues = Form.useWatch([], form);
  const isSubmitDisabled = !formValues || !formValues.title || !formValues.description;

  const onSubmit = (values: IDocument) => {
    createNewDocument(values).then(() => fetchDocuments());
    setSidebarMode(DocumentSidebarMode.CLOSED);
  };

  const onSelectChange = (newValue: Array<0 | 1 | 2>) => {
    const lastSelected = newValue[newValue.length - 1];
    if (lastSelected !== undefined && lastSelected !== selectedOption[0]) {
      setSelectedOption([lastSelected]);
      form.setFieldValue('type', lastSelected);
    }
  };

  return (
    <Form
      form={form}
      layout='vertical'
      onFinish={onSubmit}
      initialValues={
        watchMode
          ? { ...initialValues, type: selectOptions.find((opt) => opt.value === initialValues?.type) }
          : { type: selectOptions[0].value }
      }
      disabled={watchMode}
    >
      <Form.Item name='title'>
        <TextArea placeholder='Название' variant='borderless' className='title-input' size='large' autoSize />
      </Form.Item>

      <Form.Item name='type'>
        <Flex gap='large' align='center'>
          <Flex gap='small'>
            <img src='../../../../public/DocumentTypeIcon.svg' alt='тип документа' />
            <Typography className='item-label'>Тип документа</Typography>
          </Flex>
          <Select
            mode='tags'
            className='custom-select'
            variant='borderless'
            onChange={onSelectChange}
            value={selectedOption}
            tagRender={(props) => {
              const { label, value } = props;
              return (
                <Tag closable={false} style={getSelectStyle(value)}>
                  {label}
                </Tag>
              );
            }}
            options={selectOptions}
          />
        </Flex>
      </Form.Item>

      <Flex gap='small'>
        <img src='../../../../public/DescriptionIcon.svg' alt='описание документа' />
        <Typography className='description-item-label'>Описание</Typography>
      </Flex>
      <Form.Item name='description'>
        <TextArea rows={4} className='description-item-textarea' />
      </Form.Item>

      <div className='form-footer'>
        <Divider />
        <Form.Item className='submit-form-item'>
          <Flex justify='flex-end'>
            <Button
              type='primary'
              htmlType='submit'
              disabled={isSubmitDisabled}
              style={watchMode ? { visibility: 'hidden' } : {}}
            >
              Создать
            </Button>
          </Flex>
        </Form.Item>
      </div>
    </Form>
  );
};
