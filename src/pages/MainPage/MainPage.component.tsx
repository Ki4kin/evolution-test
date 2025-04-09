import { Layout, Spin, Typography } from 'antd';
import { useQuery } from 'react-query';
import { fetchDocuments } from '../../api/documentService/documentService';
import { DocumentDrawer } from '../../components/DocumentDrawer/DocumentDrawer.component';
import { useState } from 'react';
import { IDocument } from '../../api/documentService/documentService.types';
import DocumentsList from './DocumentsList/DocumentsList.component';

import './MainPage.css';

const { Content } = Layout;
const { Title } = Typography;

export const MainPage = () => {
  const [activeDocument, setActiveDocument] = useState<IDocument>();
  const { data: documentsList, isLoading } = useQuery('documents', fetchDocuments);

  return (
    <Content className='main-page'>
      <DocumentDrawer initialValues={activeDocument} />
      {isLoading && <Spin fullscreen />}
      <Title level={1}>Документы</Title>
      <div className='document-list'>
        {documentsList?.length ? (
          <DocumentsList documents={documentsList} setActiveDocument={setActiveDocument}/>
        ) : (
          <Typography className='document-list-empty-txt'>Список пуст</Typography>
        )}
      </div>
    </Content>
  );
};
