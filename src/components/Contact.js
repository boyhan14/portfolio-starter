import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_z4984tc',     // contoh: 'service_f3bxyz'
      'template_5xg8s3o',    // contoh: 'template_x1a2b3c'
      form.current,
      'SNEo7MRFfO9K2j03B'      // contoh: '4kZZ2xqFxxxxxxxxx'
    ).then((result) => {
        console.log(result.text);
        alert("Pesan berhasil dikirim!");
    }, (error) => {
        console.log(error.text);
        alert("Gagal mengirim pesan.");
    });

    e.target.reset();
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* Text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
              Get in touch
            </h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
              Let's work <br /> together!
            </h2>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-6 pb-24 lg:pb-0'
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your Name'
              name='name'
              required
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='email'
              placeholder='Your Email'
              name='email'
              required
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Subject'
              name='title'
              required
            />
            <textarea
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Your Message'
              name='message'
              rows="5"
              required
            ></textarea>
            <button type='submit' className='btn btn-lg self-start'>Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
