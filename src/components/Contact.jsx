import useReveal from "./useReveal";

export function Contact() {
  const ref = useReveal();
  return (
    <section id="contact" className="contact reveal" ref={ref}>
      <span className="contact__num">04. What's next?</span>
      <h2 className="contact__title">Get in touch.</h2>
      <p className="contact__body">
        Happy to chat about engineering, contests, or interesting problems.
        My inbox is open — drop a line.
      </p>
      <a className="btn" href="mailto:borodi.bogdan@yahoo.com">
        Say hello →
      </a>
    </section>
  );
}

export default Contact;
