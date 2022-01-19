import { render, screen } from '@testing-library/react';
import App from './App';
import Detail from "./components/Detail"

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("<Detail />" , ()=> {

  it("Debería tener una propiedad llamada name" , ()=>{
    expect(Detail(1).text().includes(pokemon.name)).toEqual(true);
  })
})