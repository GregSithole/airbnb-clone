import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
	label: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	outline?: boolean;
	small?: boolean;
	icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, outline, small, icon: Icon }) => {
	const bgColor = outline ? 'bg-white' : 'bg-rose-500';
	const borderColor = outline ? 'border-black' : 'border-rose-500';
	const textColor = outline ? 'text-black' : 'text-white';
	const textSize = small ? 'text-sm' : 'text-md';
	const padding = small ? 'py-1' : 'py-3';
	const fontWeight = small ? 'font-light' : 'font-semibold';
	const borderSize = small ? 'border-[1px]' : 'border-2';


	return (
		<button className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${bgColor} ${borderColor} ${textColor} ${textSize} ${padding} ${fontWeight} ${borderSize}`}>
			{Icon && <Icon size={24} className="absolute left-4 top-3" />}
			{label}
		</button>
	)
}

export default Button