import {cleanup,fireEvent,render,screen} from "@testing-library/react";
import {Counter} from "../component/Counter";
//Group of Counter test
describe("Counter",() =>{
  //when test finish,do to clean up
  afterEach(() =>{
    cleanup();
  })
  //snap shot test
  test("render",() =>{
    const {asFragment} = render(<Counter/>);
    expect(asFragment()).toMatchSnapshot();
  });

  test("click:count" ,() =>{
    render(<Counter/>);
    const button = screen.getByText("increment");
    //user operation
    fireEvent.click(button);
    fireEvent.click(button);
    screen.getByText("Count:2");
  });
})
