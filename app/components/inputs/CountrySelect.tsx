'use client'

import useCountries from '@/app/hooks/useCountries';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import Twemoji from 'react-twemoji';

export type CountrySelectValue = {
	flag: string;
	label: string;
	latlng: number[];
	region: string;
	value: string;
}

interface CountrySelectProps {
	value?: CountrySelectValue;
	onChange?: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {

	const { getAll } = useCountries();
	const [isWindows, setIsWindows] = useState(false);

	useEffect(() => {
		// Check if the platform is Windows
		const platform = window.navigator.platform.toLowerCase();
		setIsWindows(platform.includes('win'));
	}, []);

	return (
		<div>
			<Select
				isClearable
				options={getAll()}
				value={value}
				placeholder="Anywhere"
				onChange={(value) => onChange?.(value as CountrySelectValue)}
				formatOptionLabel={(option: CountrySelectValue) => (
					<div className="flex flex-row items-center gap-3">
						{isWindows ? (
							<div className='w-[1em] h-[1em]'>
								<Twemoji>
									{option.flag}
								</Twemoji>
							</div>
						) : (
							<div>{option.flag}</div>
						)}
						<div>{option.label}, <span className='text-neutral-500 ml-1'>{option.region}</span></div>
					</div>
				)}
				classNames={{
					control: () => 'p-3 border-2',
					placeholder: () => 'text-neutral-700',
					input: () => 'text-lg',
					singleValue: () => 'text-lg',
					option: () => 'text-lg',
				}}
				theme={(theme) => ({
					...theme,
					borderRadius: 6,
					colors: {
						...theme.colors,
						primary: 'black',
						primary25: '#ffe4e6',
					},
				})}
			/>
		</div>
	)
}

export default CountrySelect