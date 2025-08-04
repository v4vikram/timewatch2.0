"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ArrowRight } from "lucide-react";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .required("Phone is required")
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits"),
  email: Yup.string().email("Invalid email"),
  company: Yup.string(),
  message: Yup.string(),
});

const HomePageForm = () => {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#6d6f72] mb-2">
              First Name
            </label>
            <Field
              type="text"
              name="name"
              placeholder="John"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#d63438] focus:border-transparent outline-none transition-all"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#6d6f72] mb-2">
              Phone
            </label>
            <Field
              type="text"
              name="phone"
              placeholder="9876543210"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#d63438] focus:border-transparent outline-none transition-all"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#6d6f72] mb-2">
            Email
          </label>
          <Field
            type="email"
            name="email"
            placeholder="john@company.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#d63438] focus:border-transparent outline-none transition-all"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#6d6f72] mb-2">
            Company
          </label>
          <Field
            type="text"
            name="company"
            placeholder="Your Company"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#d63438] focus:border-transparent outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#6d6f72] mb-2">
            Message
          </label>
          <Field
            as="textarea"
            rows="4"
            name="message"
            placeholder="Tell us about your requirements..."
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#d63438] focus:border-transparent outline-none transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#d63438] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#b82c30] transition-all flex items-center justify-center space-x-2"
        >
          <span>Send Message</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </Form>
    </Formik>
  );
};

export default HomePageForm;
