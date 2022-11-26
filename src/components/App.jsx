import { LoginForm } from './FormExample/LoginForm';
import { ProductReviewForm } from './FormExample/ProductReviewForm';
import Form from './Forms';

export const App = () => {
  function formSubmitHandler(data) {
    console.log(data);
  }
  return (
    <div>
      <Form onSubmit={formSubmitHandler} />
      <LoginForm />
      <br />
      <ProductReviewForm />
    </div>
  );
};
