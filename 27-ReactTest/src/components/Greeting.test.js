import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  // 그룹화 하기
  test("renders Hello World as text", () => {
    //Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });
  //클릭하지않았을때
  test("renders It's good to see you if the button was NOT clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("It's good to see you!", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });
  // 클릭했을때
  test("renders Changed if the button was clicked", () => {
    // Arrenge
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button"); // 요소를 가져오고
    userEvent.click(buttonElement); // 이벤트로 넘겨줌

    // Assert
    const outputElement = screen.getByText("Changed", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });
  // 개발자가 코드를 잘못 작성해서 두개의 텍스트 모두 존재하면 위의 테스트 들이 전부 통과할 것임
  test("does not render good to see you if the button was clicked", () => {
    // Arrenge
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button"); // 요소를 가져오고
    userEvent.click(buttonElement); // 이벤트로 넘겨줌

    // Assert
    const outputElement = screen.queryByText("It's good to see you!", {
      exact: false,
    });
    // queryByText -> 요소가 찾아지지않으면 null을 반환
    expect(outputElement).toBeNull();
  
  });
  
});
