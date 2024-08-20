'use client';

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';

const RegisterModal = () => {
	const registerModal = useRegisterModal();
	const [isLoading, setIsLoading] = useState(false);

	// Register form
	const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		axios.post('/api/register', data).then((response) => {
			registerModal.onClose();
		}).catch((error) => {
			console.log(error);
		}).finally(() => {
			setIsLoading(false);
		});
	};

	const bodyContent = (
		<div className='flex flex-col gap-4'>
			<Heading title="Welcome to Airbnb" />
			<Input id="email" label="Email Address" disabled={isLoading} register={register} errors={errors} required />
		</div>
	)

	return (
		<Modal
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			title='Log in or sign up'
			actionLabel='Continue'
			onClose={registerModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
		/>
	)
}

export default RegisterModal