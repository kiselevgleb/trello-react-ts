import { useSelector } from 'react-redux';
import Desk from './components/Desk';
import Header from './components/Header';
import Loader from 'react-loader';

export default function Main(props) {
  const { loading, error, ticketsTodo, ticketsInPr, ticketsDone } = useSelector(state => state.skills);

  if (loading) {
    return <Loader></Loader>;
  }
  if (error) {
    return <p className="error">Произошла ошибка!</p>;
  }

  return (
    <div className="App">
      <Header />
      <div className="row rowMar">
        <Desk coin={ticketsTodo.length} text="To do" button="Start" content={ticketsTodo} />
        <Desk coin={ticketsInPr.length} text="In progress" button="Resolve" content={ticketsInPr} />
        <Desk coin={ticketsDone.length} text="Done" content={ticketsDone} />
      </div>
    </div>
  )
}