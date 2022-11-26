import Form from './Forms';

export const App = () => {
  function formSubmitHandler(data) {
    console.log(data);
  }
  return (
    <div>
      <Form onSubmit={formSubmitHandler} />
    </div>
  );
};
