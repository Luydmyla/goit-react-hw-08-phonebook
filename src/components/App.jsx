import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppBar from './Appbar';
import Container from './Container';
// import Loader from './Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './Spinner/Spinner';
// import HomeView from '../views/HomeView';

const HomeView = lazy(() => import('../views/HomeView/HomeView'));
const ContactsView = lazy(() => import('../views/ContactsView/ContactsView'));
// const SearchMovieByName = lazy(() => import('../views/SearchMovieByName'));
// const MovieDetailsView = lazy(() =>
// import('../views/MovieDetailsView/MovieDetailsView')
// );
// const MoviesCast = lazy(() => import('../views/MovieCast'));
// const MoviesReviews = lazy(() =>
//   import('../views/MoviesReviews/MoviesReviews')
// );
// const NotFoundView = lazy(() => import('../views/NotFoundView'));

export const App = () => {
  return (
    <Container>
      <AppBar />
      <ToastContainer
        position={'top-center'}
        autoClose={3000}
        theme={'colored'}
      />
      {/* <Suspense fallback="<h1>Завантажуємо...</h1>"> */}
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomeView />}></Route>
          <Route path="contacts" element={<ContactsView />}>
            {/* <Route index element={<SearchMovieByName />}></Route> */}
            {/* сюди рендерим компонент, який відповідає за показування одного лише фільму */}
            {/* <Route path=":movieId" element={<MovieDetailsView />}> */}
            {/* вложені елементи, що рендяряться внизу на тій же сторінці що і карточка фільму,  */}
            {/* <Route path="cast" element={<MoviesCast />}></Route> */}
            {/* <Route path="reviews" element={<MoviesReviews />}></Route> */}
            {/* </Route> */}
          </Route>
          {/* <Route path="*" element={<NotFoundView />}></Route> */}
        </Routes>
      </Suspense>
      {/* </Suspense> */}
    </Container>
  );
};

// import Form from './Form';
// import ContactList from './ContactList';
// import Spinner from './Spinner/Spinner';
// import Filter from './Filter';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './container.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateFilter } from '../redux/filterSlice';
// import {
//   useFetchContactsQuery,
//   useDeleteContactsMutation,
//   useCreateContactsMutation,
// } from 'redux/itemsSlice';

// export default function App() {
//   const value = useSelector(state => state.filter);
//   const dispatch = useDispatch();
//   // хуки з ітемс-слайсу
//   const { data, isFetching } = useFetchContactsQuery();
//   const [deleteItem] = useDeleteContactsMutation();
//   const [newContact] = useCreateContactsMutation();

//   // функція для додавання нового контакту
//   const addContact = ({ name, phone }) => {
//     const contact = {
//       name,
//       phone,
//     };
//     // якщо контакт існуе - даемо nоnеpедження
//     if (data.some(contact => contact.name === name)) {
//       return toast.info(`${contact.name}   is   already in contacts`);
//     }
//     // якщо контакт новий - добавляeмо його до сnиску контактів,
//     //  викоpистовумо хук зі слайсу для відобpаження нового ствоpеного контакту
//     newContact(contact);
//   };

//   // функція для збеpігання значення в nолі nошуку
//   const changeFilter = e => {
//     dispatch(updateFilter(e.currentTarget.value));
//   };

//   // функція для відобpаження отфільтpованих контактів
//   const getVisibleContacts = () => {
//     const normalizedFilter = value.toLowerCase();
//     return data.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   return (
//     <div className="Container">
//       <h1>Phonebook</h1>
//       <Form onSubmit={addContact} />
//       <ToastContainer
//         position={'top-center'}
//         autoClose={3000}
//         theme={'colored'}
//       />
//       <h2> Contacts : </h2>
//       <Filter value={value} onChange={changeFilter} />
//       {/* nід час виконання заnиту кpутиться сnінеp */}
//       {isFetching && <Spinner />}
//       {/*коли npийшли вже дані з бекенду, то pендеимо сnисок контактів */}
//       {data && (
//         <ContactList
//           contacts={getVisibleContacts()}
//           onDeleteContact={deleteItem}
//         />
//       )}
//     </div>
//   );
// }
