import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn(); // Mock 함수 작성
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);
    // useEffect의 경우 처음 랜더링되고 실행되어 fetch가 응답이 오면 결과에 따라
    // 다시 랜더링되므로
    // 단순하게 테스트 코드를 작성하면 의도에 맞지않게됨
    // 테스트 코드도 비동기 가능
    const listItemElements = await screen.findAllByRole("listitem");

    expect(listItemElements).not.toHaveLength(0);
  });
});
