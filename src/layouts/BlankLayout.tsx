import React from 'react';
import useViewport from '@/components/useViewport/index.jsx'

const Layout: React.FC = ({ children }) => <useViewport.ViewportProvider>{children} </useViewport.ViewportProvider>;

export default Layout;
