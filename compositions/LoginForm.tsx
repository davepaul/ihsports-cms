'use client';

import React from 'react'
import { Card, Input, Button } from 'antd';
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation'
// import { Button, Input, Space } from 'antd';

const LoginForm = () => {
  const router = useRouter()
  const onSubmit = async () => {
    const response: any = await signIn("credentials", { redirect: false });
    console.log('response', response);
    router.refresh();
  }
  return (
    <div className='flex justify-center min-h-[100vh]'>
      <div className='self-center'>
        <Card title="Login" bordered={false}>
          <div className="grid grid-flow-row gap-4">
            <Input size='large' placeholder="input username" />
            <Input.Password size='large' placeholder="input password" />
            <Button onClick={onSubmit} type="primary">Login</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default LoginForm