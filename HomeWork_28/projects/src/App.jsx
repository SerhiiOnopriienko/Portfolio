import Header from './Header';
import Sidebar from './Sidebar';
import ProjectSection from './ProjectSection';
import MessagesSection from './MessagesSection';

export default function App() {
  return (
    <>
    <div className='app-container'>
      <Header />
      <div className='app-content'>
      <Sidebar />
      <ProjectSection />
      <MessagesSection />
      </div>
    </div>
    
    </>
  );
}
