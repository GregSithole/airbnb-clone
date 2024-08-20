'use client';

import { PropsWithChildren, useEffect, useState } from "react";

interface ClientOnlyProps {
	children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
	const [hasMounted, setHasMounted] = useState(false)

	useEffect(() => {
		setHasMounted(true);
	}, []);

	// If the component is not mounted, we return null
	if (!hasMounted) {
		return null;
	}

	return (
		<>{children}</>
	)
}

export default ClientOnly;