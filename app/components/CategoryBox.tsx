'use client';

import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react"
import { IconType } from "react-icons";
import queryString from "query-string";

interface CategoryBoxProps {
	label: string;
	icon: IconType;
	selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ icon: Icon, label, selected }) => {
	const router = useRouter();
	const params = useSearchParams();

	const handleClick = useCallback(() => {
		let currentQuery = {};

		// Parse the current query parameters
		if (params) {
			currentQuery = queryString.parse(params.toString());
		}

		// Update the query with the new category
		const updatedQuery: any = {
			...currentQuery,
			category: label
		};

		// If the category is already selected, remove it from the query
		if (params?.get('category') === label) {
			delete updatedQuery.category;
		}

		// Construct the new URL with the updated query parameters
		const url = queryString.stringifyUrl({
			url: '/',
			query: updatedQuery
		}, { skipNull: true });

		router.push(url);
	}, [label, params, router]);
	return (
		<div onClick={handleClick} className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${selected ? 'border-b-neutral' : 'border-transparent'} ${selected ? 'text-neutral-800' : 'text-neutral-500'}`}>
			<Icon size={26} />
			<div className="font-medium text-sm">
				{label}
			</div>
		</div>
	)
}

export default CategoryBox