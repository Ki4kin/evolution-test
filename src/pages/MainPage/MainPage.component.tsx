import { Flex, Layout, Spin, Typography } from 'antd';
import { useQuery } from 'react-query';
import { fetchDocuments } from '../../api/documentService/documentService';
import { DocumentDrawer } from '../../components/DocumentDrawer/DocumentDrawer.component';
import { useContext, useState } from 'react';
import { DocumentSidebarContext } from '../../contexts/DocumentSidebarContext/DocumentSidebarContext';
import { DocumentSidebarMode } from '../../contexts/DocumentSidebarContext/DocumentSidebarContext.types';
import { IDocument } from '../../api/documentService/documentService.types';

const { Content } = Layout;
const { Title } = Typography;

export const MainPage = () => {
  const [activeDocument, setActiveDocument] = useState<IDocument>();
  const { data: documentsList, isLoading } = useQuery('documents', fetchDocuments);
  const { setSidebarMode } = useContext(DocumentSidebarContext);

  return (
    <Content style={{ padding: '24px', minHeight: 'calc(100vh - 64px)' }}>
      <DocumentDrawer initialValues={activeDocument} />
      {isLoading && <Spin fullscreen />}
      <Title level={1}>Документы</Title>
      <Flex vertical gap='small'>
        {documentsList?.length &&
          documentsList.map((document) => (
            <div
              key={document.id}
              onClick={() => {
                setActiveDocument(document);
                setSidebarMode(DocumentSidebarMode.WATCH);
              }}
              style={{ border: '1px solid #000', width: '150px' }}
            >
              <Typography>Документ №{document.id}</Typography>
            </div>
          ))}
      </Flex>
    </Content>
  );
};
