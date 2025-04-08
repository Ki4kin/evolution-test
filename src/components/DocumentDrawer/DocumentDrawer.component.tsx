import { Drawer } from 'antd';

import { CreateDocumentForm } from './CreateDocumentForm/CreateDocumentForm';
import { DocumentSidebarMode } from '../../contexts/DocumentSidebarContext/DocumentSidebarContext.types';
import { FC, useContext } from 'react';
import { DocumentSidebarContext } from '../../contexts/DocumentSidebarContext/DocumentSidebarContext';
import { IDocumentDrawerProps } from './DocumentDrawer.types';

export const DocumentDrawer: FC<IDocumentDrawerProps> = ({ initialValues }) => {
  const { sidebarMode, setSidebarMode } = useContext(DocumentSidebarContext);
  return (
    <Drawer
      title={sidebarMode === DocumentSidebarMode.CREATE ? 'Создать документ' : 'Просмотр документа'}
      width='50%'
      open={sidebarMode !== DocumentSidebarMode.CLOSED}
      onClose={() => setSidebarMode(DocumentSidebarMode.CLOSED)}
      destroyOnClose
    >
      <CreateDocumentForm initialValues={initialValues} />
    </Drawer>
  );
};
