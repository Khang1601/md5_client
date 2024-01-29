import pictures from '@/pictures'
import { Dropdown } from 'react-bootstrap';
import MenuBtn from '@components/MenuBtn'
import { Modal } from 'antd';
export default function Navbar({ menuState, setMenuState }: {
    menuState: boolean,
    setMenuState: any
}) {

  return (
    <nav>
      <div className='logo'>
        <img src={pictures.logo} />
        <MenuBtn onClickFn={setMenuState} open={menuState} />
      </div>
      <div className='user'>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <span>hi Admin</span>
            <img src={pictures.flagVN} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => {
              window.location.href = "/"
            }}>Home Page</Dropdown.Item>
            <Dropdown.Item onClick={() => {
              Modal.confirm({
                title: "Logout",
                content: "Ok?",
                onOk: () => {

                }
              })
            }}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  )
}