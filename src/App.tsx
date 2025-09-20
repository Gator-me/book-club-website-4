import './App.css'
import {Accordion, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {BOOKS} from "./data/books.ts";
import {slugify} from "./util/utils.ts";
import {BASE_URL} from "./data/constants.ts";

function App() {
  const booktabs = BOOKS.map((book) =>
      <Nav.Link href={`${BASE_URL}/books/${slugify(book.title)}`}>{book.title}</Nav.Link>)
  const bookDropdownItems = BOOKS.map((book) =>
      <NavDropdown.Item key={book.title} href={`${BASE_URL}/books/${slugify(book.title)}`}>{book.title}</NavDropdown.Item>);
  return (
      <>
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
            integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
            crossOrigin="anonymous"
        />
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">
              <img
                  src={BASE_URL + "/BookClubLogo_BookBeerBullshit.png"}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Book Club Logo"
              />
            </Navbar.Brand>            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                {booktabs}
                <Nav.Link href="">Link</Nav.Link>
                <Nav.Link>Link</Nav.Link>
                <Nav.Link>Link</Nav.Link>
              </Nav>
              <NavDropdown id="basic-navbar-nav" title={"Books"}>
                {bookDropdownItems}
              </NavDropdown>
            </Navbar.Collapse>
          </Container>

      </Navbar>
        <Accordion defaultActiveKey={"0"}>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
            Hello
          </Accordion.Header>
          <Accordion.Body>
            This is the body
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>
            Goodbye
          </Accordion.Header>
          <Accordion.Body>
            This is the body 2
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <h1>Books, Beer, and Bullshit</h1>
      <a className="" href={BASE_URL + "/books"}>books</a>
        </>
  )
}

export default App
