'use client';

import {
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  IconButton,
} from '@material-tailwind/react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

export function ContactForm() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    first: '',
    last: '',
    email: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { first, last, email, message } = formData;

    if (!first || !last || !email || !message) {
      toast.error('Please fill in all fields.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }

    if (message.length < 10) {
      toast.error('Message must be at least 10 characters long.');
      return false;
    }

    return true;
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    emailjs
      .send(
        'service_hh8cckt',
        'template_08rrwj9',
        {
          first_name: formData.first,
          last_name: formData.last,
          user_email: formData.email,
          message: formData.message,
        },
        '48spd0v-pW66wa4Dg'
      )
      .then(() => {
        toast.success('Message sent!');
        setFormData({ first: '', last: '', email: '', message: '' });
      })
      .catch((error) => {
        toast.error('Failed to send message. Please try again later.');
        console.error(error);
      });
  };

  return (
    <section className="px-8 pt-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contact Us
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Ready to get started? Feel free to reach out through the contact form.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Fill up the form and we will get back to you as soon as
                possible.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  +971 55 959 1480
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  steelfabricationsmj@gmail.com
                </Typography>
              </div>
              <div className="flex items-center gap-5">
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-facebook text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-github text-lg" />
                </IconButton>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="First Name"
                    name="first"
                    value={formData.first}
                    onChange={handleChange}
                    placeholder="eg. Lucas"
                    containerProps={{ className: '!min-w-full mb-3 md:mb-0' }}
                  />
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    name="last"
                    value={formData.last}
                    onChange={handleChange}
                    placeholder="eg. Jones"
                    containerProps={{ className: '!min-w-full' }}
                  />
                </div>
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="eg. lucas@mail.com"
                  containerProps={{ className: '!min-w-full mb-8' }}
                />
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  containerProps={{ className: '!min-w-full mb-8' }}
                />
                <div className="w-full flex justify-end">
                  <Button
                    type="submit"
                    className="w-full md:w-fit"
                    color="gray"
                    size="md"
                  >
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
