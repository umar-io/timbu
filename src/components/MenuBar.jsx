import { menuBaritems , profileImg } from ".."
const MenuBar = ({className}) => {
  return (
    <aside className={`menubar ${className}`}>
        <div className="profileinfo">
            <img src={profileImg} alt="" />
            <div className="activity">
            </div>
            <div className="fulls">
                <h5>Olivia Rhye</h5>
                <p>oliviarhy@gmail.com</p>
            </div>
        </div>
        <div>
            <ul className="menuLink">
                {menuBaritems.map((item, index) => (
                    <li key={index}><span><img src={item.img} alt="" /></span> <p>{item.link}</p></li>
                ))}
            </ul>
        </div>
    </aside>
  )
}
export default MenuBar