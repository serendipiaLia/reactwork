
const MyComponent = (props) => { //props : 속성을 부모 컴포넌트 -> 자식 컴포넌트로 넘겨줌
    // 비구조화 할당
    const {name, age} = props // props.name, props.age

    return(
        <>
            <div>
                <h3>안녕하세용가리치킨너겟<br />
                    이름은 {name}이고,
                    나이는 {age}세 입니다.
                </h3>
                {/* <h3>안녕하세용가리치킨너겟<br />
                    이름은 {props.name}이고,
                    나이는 {props.age}세 입니다.
                </h3> */}
            </div>
        </>
    );
}

// Component를 사용시에는 외부에 내보내기 필수 > export해주기
export default MyComponent