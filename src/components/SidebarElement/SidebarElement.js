import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export default function SidebarElement() {
    return (
        <Sidebar >
            <Menu>
                <SubMenu prefix="🔥" className='shadow-sm mb-2' label="Charts">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <MenuItem className='shadow-sm mb-2'> Documentation </MenuItem>
                <MenuItem className='shadow-sm mb-2' component={<Link to={'/login'}/>}> Login </MenuItem>
            </Menu>
        </Sidebar>
    )
}