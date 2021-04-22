import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Menu, PageHeader } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import Link from 'next/link'
const { SubMenu } = Menu;
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;
class Typographyy extends React.Component {
  render() {
    return (
      <Typography>
        <Title>E-commerce training site</Title>
        <Paragraph>
          E-commerce training site
            Welcome to WebScraper e-commerce site. 
            You can use this site for training to learn how to use the Web Scraper. 
            Items listed here are not for sale
        </Paragraph>
    </Typography>
    );
  }
}

export default Typographyy