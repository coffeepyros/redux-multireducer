import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser, addBook } from "./redux/actions";

function App() {
  const users = useSelector((state) => state.user.users);
  const books = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  return (
    <main>
      <h1>Book Shop</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const inputUser = document.getElementById("inputUser");
          let data = inputUser.value;
          dispatch(addUser(data));
          inputUser.value = "";
        }}
      >
        <fieldset>
          <label htmlFor="inputUser">User Name:</label>
          <input type="text" id="inputUser" />
          <button type="submit">Add User</button>
        </fieldset>

        <section id="users">
          <strong>Userlist:</strong> {users.join(", ")}
        </section>
      </form>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const inputBook = document.getElementById("inputBook");
          let data = inputBook.value;
          dispatch(addBook(data));
          inputBook.value = "";
        }}
      >
        <fieldset>
          <label htmlFor="inputBook">Book Title:</label>
          <input type="text" id="inputBook" />
          <button type="submit">Add Book</button>
        </fieldset>

        <section id="books">
          <strong>Books:</strong> {books.join(", ")}
        </section>
      </form>

      <section id="display">
        {books.map((book) => {
          let randomIndex = getRandomInt(0, users.length - 1);
          // let randomColor = {
          //   r: getRandomInt(0, 255),
          //   g: getRandomInt(0, 255),
          //   b: getRandomInt(0, 255),
          //   a: 0.5,
          // };
          let author = users[randomIndex];
          return (
            <div
              className="card"
              //  style={backgroundColor: `rgba(${randomColor.r},${randomColor.g},${randomColor.b},${randomColor.a})` }
            >
              <h3>{book}</h3>
              <p>{author}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default App;
