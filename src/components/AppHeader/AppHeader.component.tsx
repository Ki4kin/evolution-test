import { useContext } from 'react';
import { Button, Layout } from 'antd';
import { DocumentSidebarContext } from '../../contexts/DocumentSidebarContext/DocumentSidebarContext';
import { DocumentSidebarMode } from '../../contexts/DocumentSidebarContext/DocumentSidebarContext.types';

const { Header } = Layout;

export const AppHeader = () => {
  const { setSidebarMode } = useContext(DocumentSidebarContext);
  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#AFAFAF',
        height: '64px',
      }}
    >
      <div></div>
      <Button type='primary' onClick={() => setSidebarMode(DocumentSidebarMode.CREATE)}>
        Создать
      </Button>
    </Header>
  );
};
