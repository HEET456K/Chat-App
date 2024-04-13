import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='md:min-w-[450px] flex flex-col'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='bg-zinc-700 px-4 py-1 mb-2 mt-4 rounded-full flex'>
						<div className='w-10 rounded-full'>
							<img src={selectedConversation.profilePic} alt='user avatar' />
						</div>
						<span className='text-white font-bold pt-2 pl-3 text-xl'>{selectedConversation.fullName}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 flex flex-col items-center gap-1'>
				<h1 className="text-3xl font-bold">Welcome {authUser.fullName}</h1>
				<p className="font-light text-base">Send and recive message</p>
			</div>
		</div>
	);
};