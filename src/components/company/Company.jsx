export default function Company() {
  const descripcion = [
    {
      src: "",
      title: "MISIÓN",
      description:
        "En la Planta Panelera las Palmas, nos dedicamos a la siembra, cultivo y cosecha de caña de azúcar, transformando nuestra producción en panela natural, un producto tradicional y nutritivo. Nuestra misión es ofrecer al mercado productos de alta calidad que contribuyan al bienestar de nuestros clientes, respetando el medio ambiente y fomentando el desarrollo de la comunidad agrícola. Trabajamos con innovación, responsabilidad social y un firme compromiso con la sostenibilidad, para ser líderes en la industria agroalimentaria.",
    },
    {
      src: "",
      title: "VISIÓN",
      description:
        "Ser una empresa líder en la producción de panela natural a nivel nacional e internacional, reconocida por su compromiso con la calidad, innovación y el respeto por el medio ambiente. Buscamos expandir nuestra presencia en mercados internacionales, promoviendo productos naturales que aporten al bienestar de las personas y contribuyan al crecimiento del sector agrícola en nuestra región.",
    },
    {
      src: "",
      title: "VALORES",
      list: [
        "Fomentamos prácticas agrícolas responsables que respetan y cuidan el medio ambiente, asegurando que nuestras acciones beneficien tanto a la tierra como a las futuras generaciones.",
        "Nos dedicamos a ofrecer productos de la más alta calidad, manteniendo la integridad de la panela como un producto natural y nutritivo.",
        "Valoramos el trabajo en equipo, la unión y el trabajo compartido, tanto dentro de nuestra organización como con los grupos con los que colaboramos.",
      ],
    },
    {
      src: "",
      title: "OBJETIVOS",
      list: [
        "Ampliar nuestra distribución tanto a nivel nacional como internacional, llevando productos naturales a más consumidores y mercados.",
        "Implementar prácticas agrícolas sostenibles, proteger los recursos naturales y generar empleo para las comunidades locales, con un enfoque en el respeto por el medio ambiente.",
        "Continuamente mejorar nuestros procesos de producción y distribución, adoptando tecnologías que optimicen la eficiencia y reduzcan el impacto ambiental.",
      ],
    },
  ];

  return (
    <>
      <section className="company">
        <div className="filosofia orbe-animada">
          {descripcion.map((item, index) => (
            <div key={index} className={`orbe-animada filosofia__item item-${index}`}>
              <h3 className="filosofia__title">{item.title}</h3>
              {item.description && (
                <p className="filosofia__descripcion">{item.description}</p>
              )}

              {item.list && (
                <ul className="filosofia__lista">
                  {item.list.map((val, i) => (
                    <li key={i}>{val}</li>
                  ))}
                </ul>
              )}
            </div>
            
          ))}
        </div>
      </section>
    </>
  );
}
