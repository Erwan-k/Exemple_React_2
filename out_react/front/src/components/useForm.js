import {useState} from 'react';

export const useForm = initialValues => {
	const [values, setValues] = useState(initialValues);

	return [
		values,
		(nom,valeur) => { values[nom] = valeur ; setValues({...values})}
	]
}
