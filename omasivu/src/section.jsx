function Section({ id, title, content }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
}

export default Section;