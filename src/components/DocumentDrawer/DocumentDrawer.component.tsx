import { Divider, Drawer, Flex, Typography } from 'antd';

import { CreateDocumentForm } from './CreateDocumentForm/CreateDocumentForm';
import { DocumentSidebarMode } from '../../contexts/DocumentSidebarContext/DocumentSidebarContext.types';
import { FC, useContext } from 'react';
import { DocumentSidebarContext } from '../../contexts/DocumentSidebarContext/DocumentSidebarContext';
import { IDocumentDrawerProps } from './DocumentDrawer.types';

import './DocumentDrawer.css';
import { ClusterOutlined } from '@ant-design/icons';

export const DocumentDrawer: FC<IDocumentDrawerProps> = ({ initialValues }) => {
  const { sidebarMode, setSidebarMode } = useContext(DocumentSidebarContext);
  return (
    <Drawer
      title={
        <Flex align='center' gap='6px'>
          <ClusterOutlined />
          <Typography>Документы</Typography>
          <Divider type='vertical' />
          <Typography className='drawer-header-text'>
            {sidebarMode === DocumentSidebarMode.CREATE ? 'Создание документа' : 'Просмотр документа'}
          </Typography>
        </Flex>
      }
      width='600px'
      open={sidebarMode !== DocumentSidebarMode.CLOSED}
      onClose={() => setSidebarMode(DocumentSidebarMode.CLOSED)}
      destroyOnClose
    >
      <CreateDocumentForm initialValues={initialValues} />
    </Drawer>
  );
};
