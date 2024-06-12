export default function TabButton({ children, isSelected, ...props }){
    /*
    document.querySelector('button').addEventListener('click', () => {
        이런식으로 함수를 부여하는게 아닌 리액트에게 시킬 것임
    });
    */

    // 두번째 매개변수는 아무 이름이나 가능 하지만 컨포넌트 태그의 props 속성값과 같은 이름으로 쓸 것

    // label 값으로 받아서 사용할 수도 있음
    return(
        // children이란 것은 리액트 props 의 특별 내장 옵션으로 
        // children이라는 이름의 속성명으로 전달된 값이 아닌 컴포넌트 태그의 컨텐트영역의 값임 
        // 문자열만 가능
        <>
            <li>
                <button className={isSelected ? 'active' : undefined} {...props}>
                    {children}
                </button>
            </li>
        </>
    );
}