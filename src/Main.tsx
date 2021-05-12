import { useSelector } from 'react-redux';
import Desk from './components/Desk';
import Header from './components/Header';

export default function Main() {
  const { loading, error, ticketsTodo, ticketsInPr, ticketsDone } = useSelector((state: any) => state.skills);

  if (loading) {
    return <h1>loading</h1>;
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
        <Desk coin={ticketsDone.length} text="Done" content={ticketsDone} button="false"/>
      </div>
    </div>
  )
}