

export const signUpWithPhoneNumberFields = [
	{
		label: 'NickName',
		key: 'nickname',
		placeholder: 'NickName',
		required: true,
		displayOrder: 1,
	},
	{
		label: 'Phone Number',
		key: 'phone_number',
		placeholder: 'Phone Number',
		required: true,
		displayOrder: 1,
	},

	{
		label: 'Confirmer numero de téléphone',
		key: 'phone_number',
		placeholder: 'Numéro de téléphone',
		displayOrder: 2
	},
	{
		label: 'Password',
		key: 'password',
		required: true,
		placeholder: 'Password',
		type: 'password',
		displayOrder: 3
	}
];

export const signUpConfig = {
	header: 'Inscription',
	hideAllDefaults: true,
	signUpFields: signUpWithPhoneNumberFields
}