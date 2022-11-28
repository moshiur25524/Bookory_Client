# Bookory (MERN Project)

Live site of [Bookory](https://github.com/facebook/create-react-app).

## Main Features of Bookory

1. Home Page.
2. Books
   - Add Books
   - Manage Books
   - Order Books
3. About
4. Blogs
5. Contact
6. Login and Logout Authentication

### `Details of Components`

1. Home page -> Navbar , Banner, 6 books from the list, Testimonial, Footer
2. Add Books -> A new book can be added in the books list
   Manage Books -> All the books can be manage in this page. Any book can be deleted from the list.
   Order Books -> User can order any books
3. About of the book library.
4. Blogs -> Development Related 4 Questions and their Answers
5. Contact -> Email, Phone number, Addresss are added in the contact component.
6. A User can login and Log out from the application.

### `More Extra Features of Bookory`

* JWT (Json Web Token) implemented in the my order route. A token will be genereted in the server side when a user will login. Then the token will be sent to the client side. Through this token a user can get any secure information if the user is valid. For this heve to send the token to the server. And the server will check that is the token is valid or not. If the token is valid, server will send response of the user data. If the token is not valid, user will be logged out. 
* This Project is mainly server site related. Some collection are created for books and orders.

### `Tools/dependencies of client side`

* axios
* firebase
* react
* react-dom
* react-firebase-hooks
* react-hook-form
* react-router-dom
* react-toastify

### `Tools/Depencies of Server side`

* cors
* dotenv
* express
* jsonwebtoken
* mongodb


**Note: this is a one-way operation. Once you `eject`, you can't go back!**




