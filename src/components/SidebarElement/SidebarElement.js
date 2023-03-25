import { useContext } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

export default function SidebarElement() {
    const {user, setUser} = useContext(UserContext)

    function logOut(){
        //Logout from server
        setUser({});
    }

    return (
        <Sidebar >
            <Menu>
                <SubMenu prefix="🔥" className='shadow-sm mb-2' label="Charts">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <MenuItem className='shadow-sm mb-2'> Documentation </MenuItem>
                {user._id ?
                    (<MenuItem className='shadow-sm mb-2' onClick={logOut} component={<Link to={'/'} />}> Logout {user.email} </MenuItem>)
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