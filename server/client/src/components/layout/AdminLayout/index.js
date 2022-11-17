import HeaderWrapper from './HeaderWrapper'
import SidebarWrapper from './SidebarWrapper';
import { Outlet } from 'react-router-dom';
import './index.css'

const AdminLayout = () => {
  return (
    <SidebarWrapper>
      <HeaderWrapper>
        <div className = 'mt-14'>
          <Outlet />
        </div>
      </HeaderWrapper>
    </SidebarWrapper>
  )
}

export default AdminLayout