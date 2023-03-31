import Icon from '@ant-design/icons/lib/components/Icon';
import { useContext } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import userIcon from './userIcon.png';

export default function SidebarElement() {
    const { user, setUser } = useContext(UserContext)
    const location = window.location.pathname;
    function logOut() {
        //Logout from server
        setUser({});
    }

    return (
        <Sidebar >
            <Menu menuItemStyles={{
                button: ({ level, active, disabled }) => {
                    // only apply styles on first level elements of the tree
                    if (level === 0)
                        return {
                            //color: active ? '#fff' : '#222',
                            backgroundColor: active ? 'beige' : undefined,                            
                        };
                },
            }}>
                {user.email ? <div className='user-icon-wraper'><img src={userIcon} className="user-icon"/><h6>{user.email}</h6></div> : ''}
                <MenuItem className='shadow-sm mb-2' active={location === "/"} component={<Link to={'/'} />}> Home </MenuItem>
                {/* <SubMenu prefix="🔥" className='shadow-sm mb-2' label="Charts">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu> */}
                <MenuItem className='shadow-sm mb-2' active={location === "/counter"} component={<Link to={'/counter'} />}> Counter </MenuItem>
                <MenuItem className='shadow-sm mb-2' active={location === "/mounter"} component={<Link to={'/mounter'} />}> Mounter </MenuItem>
                {user._id ?
                    (<MenuItem className='shadow-sm mb-2' onClick={logOut} component={<Link to={'/'} />}> Logout </MenuItem>)
                    :
                    <>
                        <MenuItem className='shadow-sm mb-2' component={<Link to={'/login'} />}> Login </MenuItem>
                        <MenuItem className='shadow-sm mb-2' component={<Link to={'/register'} />}> Register </MenuItem>
                    </>
                }
            </Menu>
        </Sidebar>
    )
}