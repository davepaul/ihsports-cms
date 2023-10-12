// theme/themeConfig.ts
"use client"
import type { ThemeConfig } from 'antd';
import { theme as _theme } from 'antd';

const theme: ThemeConfig = {
  algorithm: _theme.darkAlgorithm,
  token: {
    fontSize: 16,
    // colorPrimary: '#fff',
  },
};

export default theme;