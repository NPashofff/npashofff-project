import { Col, Row, Layout, theme } from 'antd';
import { Link } from 'react-router-dom';
import SidebarElement from '../SidebarElement/SidebarElement';

export default function MainElement(){

  
    const { Header, Content, Footer, Sider } = Layout;
    const siderStyle = {
      textAlign: 'center',
      lineHeight: '120px',
      color: '#fff',
      backgroundColor: '#3ba0e9',
    };

    return(
        <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
            <SidebarElement/>
            <main className='main bg-white' style={{ padding: 10 }}>
              <Content >
                <h2 className='elevation-3 mb-4 pt-4 pb-4 text-center bg-secondary'>Sidebar</h2>
                <a href='#'>Test</a>
                <p className='shadow-sm mb-4 bg-white' >This sidebar is of full height (100%) and always shown.</p>
                <p className='shadow-sm mb-4 bg-white' >Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p className='shadow-sm mb-4 bg-white' >Scroll down the page to see the result.</p>
                <p className='shadow-sm mb-4 bg-white' >Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p className='shadow-sm mb-4 bg-white' >Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p className='shadow-sm mb-4 bg-white' >Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p className='shadow-sm mb-4 bg-white' >Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p className='shadow-sm mb-4 bg-white' >Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p className='shadow-sm mb-4 bg-white' >Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p className='shadow-lg mb-4 bg-white' >Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p className='shadow-lg mb-4 bg-white' >Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
              </Content>
            </main>
          </div>
    )
}