import PageHeader from "../pageHeader/PageHeader";

export default function Videos() {
  return (
    <>
      <section>
        <PageHeader
          eyebrow="Tradición panelera"
          title="Planta Panelera Las Palmas"
          subtitle={
            <>
              La panela no se fabrica: se nace de la unión entre el campesino y
              su tierra. Cada bloque es un tributo al equilibrio sagrado entre
              el sudor y la cosecha. <br></br>
              <strong style={{ fontSize: "1.3em" }}>
                Dulzura que endulza la vida y honra a quienes la hacen posible.
              </strong>
            </>
          }
          align="center"
        />
      </section>

      <section>
        <p>This is the Videos page.</p>
      </section>
    </>
  );
}
