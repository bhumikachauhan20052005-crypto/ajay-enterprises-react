function Solutions() {
    const solutions = [
        {
            title: "ICU Equipment",
            description: "Reliable equipment solutions for intensive care units."
        },
        {
            title: "OT Equipment",
            description: "Essential equipment for modern operation theatres."
        },
        {
            title: "NICU Equipment",
            description: "Specialized solutions for neonatal care."
        },
        {
            title: "Hospital Equipment",
            description: "Complete equipment solutions for hospitals and clinics."
        }
    ];

    return (
        <section id="solutions" className="solutions">

            <div className="section-heading">

                <p className="section-tag">
                    OUR SOLUTIONS
                </p>

                <h2>
                    Healthcare Equipment
                </h2>

                <p>
                    Explore our range of medical and surgical
                    equipment solutions.
                </p>

            </div>


            <div className="solutions-grid">

                {solutions.map((solution, index) => (

                    <div
                        className="solution-card"
                        key={index}
                    >

                        <h3>
                            {solution.title}
                        </h3>

                        <p>
                            {solution.description}
                        </p>

                        <button>
                            Explore
                        </button>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Solutions;