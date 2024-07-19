import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* Link가 아닌 NavLink 태그는 클래스네임에 불리언타입의 객체변수를 받고 
            우리는 그것으로 클래스명을 조작할 수 있음 
            to 속성의 url을 찾아서 활성인지 비활성인지 판단
            이 페이지의 모든 url이 '/' 이기 때문에 end 속성을 추가해서 '/'인 링크만 적용되게함*/}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              // style={({isActive}) => ({textAlign: isActive ? 'center' : 'left'})} 이것처럼 인라인 속성에서도 활용 가능
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
