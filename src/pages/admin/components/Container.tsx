import { Outlet } from 'react-router'
import { useNavigate } from 'react-router-dom'

export default function Container({ menuState }: {
    menuState: boolean
}) {
    const navigate = useNavigate()

    const menus = [
        {
            title: 'Example Parent Menu',
            child: [
                {
                    title: "Child Menu Fn",
                    link: null,
                    fn: () => {
                        console.log("ok")
                    }
                },
                {
                    title: "Child Menu",
                    link: "product/list",
                    fn: null
                }
            ]
        },
        {
            title: 'Category',
            child: [
                {
                    title: "Add",
                    link: null,
                    fn: () => {
                        alert("ok")
                    }
                },
                {
                    title: "List",
                    link: "category/list",
                    fn: null
                }
            ]
        },
        {
            title: 'Product',
            child: [
                {
                    title: "Add",
                    link: null,
                    fn: () => {
                        alert("ok")
                    }
                },
                {
                    title: "List",
                    link: "product/list",
                    fn: null
                }
            ]
        }
    ]
    return (
        <div className='admin_container'>
            <div className={`${menuState && "hidden"} menu_bar`}>
                {
                    menus.map(item => (
                        <div key={Date.now() * Math.random()} className='menu_item'>

                            <button onClick={(e) => {
                                let targetEl = (e.target as any).parentNode.querySelector('.menu_item_sub');
                                if (targetEl.classList.length > 1) {
                                    targetEl.classList.remove("hidden") 
                                } else {
                                    targetEl.classList.add("hidden")
                                }
                            }} className='menu_item_main btn btn-dark'>
                                {item.title}
                            </button>
                            
                            <ul className='menu_item_sub'>
                                {
                                    item.child?.map(supItem => (<li onClick={() => {
                                        if (supItem.fn) {
                                            supItem.fn()
                                        } else {
                                            navigate(supItem.link)
                                        }
                                    }} key={Date.now() * Math.random()}>{supItem.title}</li>))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>

            <div className='content'>
                <div className='history'>
                    <span>Home</span>
                    <span>Admin</span>
                    <span>Product</span>
                </div>
                <div className='content_body'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}