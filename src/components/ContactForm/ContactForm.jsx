import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),

    number: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
});

function ContactForm({ onSubmit }) {
    const nameFieldId = useId();
    const numberFieldId = useId();

    return (
        <Formik
            initialValues={{
                name: "",
                number: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={(values, { resetForm }) => {
                onSubmit(values);
                resetForm();
            }
            }
        >
            <Form className={css.form}>
                <label className={css.label} htmlFor={nameFieldId}>
                    Name
                </label>

                <Field
                    className={css.input}
                    type="text"
                    name="name"
                    id={nameFieldId}
                />

                <ErrorMessage
                    className={css.error}
                    name="name"
                    component="span"
                />

                <label className={css.label} htmlFor={numberFieldId}>
                    Number
                </label>

                <Field
                    className={css.input}
                    type="text"
                    name="number"
                    id={numberFieldId}
                />

                <ErrorMessage
                    className={css.error}
                    name="number"
                    component="span"
                />

                <button className={css.button} type="submit">
                    Add Contact
                </button>
            </Form>
        </Formik>
    );
}

export default ContactForm;