import Container from '../Container'
import CatgeoryBox from '../CategoryBox';

import { TbBeach } from 'react-icons/tb';
import { GiWindmill } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';

export const categories = [
	{
		label: 'Beach',
		icon: TbBeach,
		description: 'This property is close to the beach!',
	},
	{
		label: 'Windmills',
		icon: GiWindmill,
		description: 'This property has windmills!',
	},
	{
		label: 'Modern',
		icon: MdOutlineVilla,
		description: 'This property is modern!',
	},
	{
		label: 'Countryside',
		icon: TbBeach,
		description: 'This property is in the countryside!',
	},
	{
		label: 'Pools',
		icon: TbBeach,
		description: 'This property has a pool!',
	},
	{
		label: 'Islands',
		icon: TbBeach,
		description: 'This property is on an island!',
	},
	{
		label: 'Lake',
		icon: TbBeach,
		description: 'This property is by a lake!',
	}
];

const Categories = () => {
	return (
		<Container>
			<div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
				{categories.map((item) => (
					<CatgeoryBox key={item.label} label={item.label} description={item.description} icon={item.icon} />
				))}
			</div>
		</Container>
	)
}

export default Categories