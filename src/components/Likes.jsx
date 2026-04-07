import { useState } from "react";
import { GoHeartFill } from "react-icons/go";

export default function Likes() {
	const [likes, setLikes] = useState(0);

	return (
		<button
			className="btn btn-neutral btn-sm "
			aria-label={`(${likes}) likes`}
			onClick={() => setLikes((likes) => likes + 1)}>
			<GoHeartFill aria-hidden="true" />
			{likes}
		</button>
	);
}
