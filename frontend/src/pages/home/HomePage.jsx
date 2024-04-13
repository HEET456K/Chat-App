import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/SidebarBlock";

const Home = () => {
    return (
        <div className='flex sm:h-[450px] md:h-[610px] overflow-hidden  
         p-6 rounded-3xl shadow-md bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40'>
            <Sidebar />
            <MessageContainer />
        </div>
    );
};
export default Home;
