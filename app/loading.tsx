import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

const Loading: React.FC = () =>
  <div className='flex justify-center min-h-[100vh]'>
    <div className='self-center'>
      <Spin size='large' />
    </div>
  </div>;

export default Loading;