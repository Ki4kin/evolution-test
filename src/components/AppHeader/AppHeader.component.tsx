import { useContext } from 'react';
import { Button, Layout } from 'antd';
import { DocumentSidebarContext } from '../../contexts/DocumentSidebarContext/DocumentSidebarContext';
import { DocumentSidebarMode } from '../../contexts/DocumentSidebarContext/DocumentSidebarContext.types';

import './AppHeader.css';

const { Header } = Layout;

export const AppHeader = () => {
  const { setSidebarMode } = useContext(DocumentSidebarContext);
  return (
    <Header className='app-header'>
      <Button type='primary' className='create-document-btn' onClick={() => setSidebarMode(DocumentSidebarMode.CREATE)}>
        Создать
      </Button>
    </Header>
  );
};
