// import './App.css';
import { Layout } from 'antd';
import { AppHeader } from './components/AppHeader/AppHeader.component';
import { AppSidebar } from './components/AppSidebar/AppSidebar.component';
import { MainPage } from './pages/MainPage/MainPage.component';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        width={80}
        style={{
          position: 'fixed',
          height: '100vh',
          left: 0,
          zIndex: 2,
          background: '#D9D9D9',
        }}
      >
        <AppSidebar />
      </Sider>

      <Layout style={{ marginLeft: 80 }}>
        <AppHeader />
        <Content>
          <MainPage />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
