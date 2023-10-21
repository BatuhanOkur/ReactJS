import {Data} from '../helpers/Data';
import MenuItem from '../components/MenuItem';
import '../style/Menu.css';

function Menu() {
  return (
    <>
      <div className='menu'>
          <h1 className='menuTitle'>Ürünlerimiz</h1>
          <div className="menuList">
            {Data.map((menuItem,index) => {
              return (
                <MenuItem 
                key={index}
                image = {menuItem.image}
                name = {menuItem.name}
                content = {menuItem.content}
                price = {menuItem.price}
                />
              )
            })}
          </div>
      </div>
    </>
  )
}

export default Menu