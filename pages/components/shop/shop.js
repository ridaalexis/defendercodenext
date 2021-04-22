import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, PageHeader, Typography, Space, Card} from 'antd';
import { LaptopOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class Page extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
       <><PageHeader 
    
         className="site-page-header"
        // onBack={() => "/"}
        title="Shop"
        subTitle="Electronic as a life"
      />
  <Layout>
    
   <Content style={{ padding: '0 50px' }}>
      
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
          <SubMenu key="sub3" icon={<HomeOutlined />} title="Home" >
          <a href='/'>Home</a>
            </SubMenu>
            <SubMenu key="sub1" icon={<LaptopOutlined />} title="Computers">
              <Menu.Item key="1">Laptops</Menu.Item><a href='../../components/shop/laptops'>Laptops</a>
              <Menu.Item key="2">Tablets</Menu.Item>
          
            </SubMenu>
            <SubMenu key="sub2" icon={<PhoneOutlined />} title="Phones">
              <Menu.Item key="5">Touch</Menu.Item>
             
            </SubMenu>
          
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <Typography>
    <Title>E-commerce training site</Title>
        <Paragraph>
          E-commerce training site
            Welcome to WebScraper e-commerce site. 
            You can use this site for training to learn how to use the Web Scraper. 
            Items listed here are not for sale
    </Paragraph>

  </Typography>
   <div align='center'>
   <Space direction="horizontal" >
      <Card title="Card" style={{ width: 300 }} >
        <p >Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space> </div>
  
  </Content>
      </Layout>
    </Content>
   
  </Layout></>

    );
  }
}

export default Page

// ReactDOM.render(<Sider />, document.getElementById("root"));