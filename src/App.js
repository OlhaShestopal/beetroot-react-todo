import { Layout } from './components/Layout';
import { Todo } from './components/Todo';
import "./app.scss";

function App() {
  return (
    <Layout>
      <Todo />
    </Layout>
  );
}

export {
  App
};
