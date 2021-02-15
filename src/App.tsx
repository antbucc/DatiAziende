import SignupForm from './components/Form';

function App() {
  return (
    <div className="container bg-gray-100 flex flex-col justify-center items-center py-5">
      <div>
        <img src="logo.jpg" alt="logo" className="align-center w-56 rounded-full my-5 shadow-lg" />
      </div>
      <div className="container md:w-1/2 px-2">
        <SignupForm />
      </div>
    </div>
  );
}

export default App;
