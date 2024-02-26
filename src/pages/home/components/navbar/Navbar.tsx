import { Store } from '@/stores';
import './navbar.scss'
import pictures from '@pictures/index.tsx'
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '@/stores/slices/user.slice';
export default function Navbar() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const userStore = useSelector((store: Store) => store.userStore)

  return (
    <>
      <section className="sup_navbar">
        <div className='sup_navbar_content'>
          Khangshop sản phẩm luôn tốt nhất! {t('hello')}
        </div>
      </section>
      <header>
        <div className='header_content'>
          <div className='content_left'>
            <div className='logo'>
              <img src={pictures.logo} />
            </div>
            <nav>
              <ul>
                {
                  [
                    {
                      title: "BỘ SƯU TẬP",
                      children: [
                        {
                          title: "Miền Gió Cát",
                        },
                        {
                          title: "Speed"
                        },
                        {
                          title: "Di Sản"
                        },
                        {
                          title: "The Day Eyes"
                        },
                        {
                          title: "Baby Cat"
                        },
                        {
                          title: "Baby Dog"
                        }
                      ]
                    },
                    {
                      title: "BLACK FRIDAY - ĐƠN GIẢN"
                    },
                    {
                      title: "BLACK FRIDAY - THIẾT KẾ",
                      children: [
                        {
                          title: "Miền Gió Cát",
                        },
                        {
                          title: "Speed"
                        }
                      ]
                    },
                    {
                      title: "MỚI"
                    }
                  ].map(item => {

                    return (
                      <li key={Date.now() * Math.random()} className={`item ${item.children && "sup"}`}>
                        {item.title}
                        {
                          item.children && (
                            <div className='sup_menu'>
                              {
                                item.children?.map(subItem => (
                                  <div className='sup_menu_item' key={Date.now() * Math.random()}>
                                    {subItem.title}
                                  </div>
                                ))
                              }
                            </div>
                          )
                        }
                      </li>
                    )

                  })
                }
              </ul>
            </nav>
          </div>
          <div className='content_right'>
            <i className="item fa-solid fa-magnifying-glass"></i>
            <i className="item fa-solid fa-bag-shopping"></i>

            {
              userStore.data ? (
                <Dropdown>

                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <div className='item user_box'>
                      <span>{isNaN(Number(userStore.data.userName)) ? userStore.data.userName : userStore.data.email.split("@")[0]}</span>
                      <img src={userStore.data.avatar} />
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {
                      userStore.data?.role == "admin" && (
                        <Dropdown.Item onClick={() => {
                          window.location.href = "/admin"
                        }}>
                          <span>Admin</span>
                        </Dropdown.Item>
                      )
                    }

                    <Dropdown.Item onClick={() => {
                      localStorage.removeItem("token")
                      dispatch(userAction.setData(null))
                    }}>
                      <span style={{ color: "red" }}>Logout</span>
                    </Dropdown.Item>

                  </Dropdown.Menu>

                </Dropdown>
              ) : (
                <div onClick={() => {
                  window.location.href = "/authen"
                }}>
                  <span className='item authen_link'>Register/Login</span>
                </div>
              )
            }
            <div className='language_box'>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Select Language
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => {
                    i18n.changeLanguage('vi')
                    localStorage.setItem("locales", 'vi')
                  }}>
                    <img src={pictures.flagVN} />
                    <span>&nbsp; VN</span>
                  </Dropdown.Item>
                  
                  <Dropdown.Item onClick={() => {
                    i18n.changeLanguage('en')
                    localStorage.setItem("locales", 'en')
                  }}>
                    <img src={pictures.flagUS} />
                    <span>&nbsp; EN</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
