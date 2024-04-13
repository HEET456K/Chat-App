import { useState } from "react";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
import { PiArrowFatDownFill } from "react-icons/pi";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};
	return (
		<form onSubmit={handleSubmit} className='flex items-center gap-2'>
			<div class="relative rounded-full overflow-hidden bg-zinc-700 shadow-xl ">
				<input
					type="text"
					name="text"
					placeholder="Search..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					class="input bg-transparent outline-none border-none pl-6 py-5 w-64 font-sans text-lg font-semibold"
				/>
				<div class="absolute right-2 top-[0.4em]">
					<button
						type='submit'
						className="w-9 h-9 rounded-full bg-indigo-500 group shadow-xl flex items-center justify-center relative overflow-hidden"
					>
						<PiArrowFatDownFill color="#fff" />
						<div
							className="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-white  group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"
						></div>
						<div
							className="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-black duration-1000"
						></div>
					</button>
				</div>
			</div>
		</form >
	);
};
export default SearchInput;
