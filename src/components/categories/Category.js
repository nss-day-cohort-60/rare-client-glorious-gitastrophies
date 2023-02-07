
export const Category = ({ category }) => (
    <article key={`category--${category.id}`} className="card user" style={{ width: `18rem` }}>
    <section className="card-body">

        <div className="card-title">{category.label}</div> 

    </section>
    </article>
)
