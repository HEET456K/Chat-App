import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import { PiArrowFatUpFill } from "react-icons/pi";


const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};
	return (
		<form className=' mt-3' onSubmit={handleSubmit}>
			<div className='w-full relative'>
				<input
					type='text'
					className='w-full input input-bordered h-13 rounded-full font-bold transform hover:scale-105 transition duration-300 ease-in-out bg-zinc-800'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<div class="absolute right-2 top-[0.4em]">
					<button
						type='submit'
						className="w-9 h-9 rounded-full bg-indigo-500 group shadow-xl flex items-center justify-center relative overflow-hidden"
					>
						<PiArrowFatUpFill color="#fff" />

						{loading ? <div className='loading loading-spinner'></div> : ""}
					</button>
				</div>
			</div>
		</form>
	);
};
export default MessageInput;
