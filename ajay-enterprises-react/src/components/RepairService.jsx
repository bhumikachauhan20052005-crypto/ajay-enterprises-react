function RepairService() {

    const services = [
        {
            title: "Equipment Repair",
            description:
                "Professional repair solutions for medical and surgical equipment."
        },
        {
            title: "Preventive Maintenance",
            description:
                "Regular maintenance to keep your healthcare equipment reliable."
        },
        {
            title: "Technical Support",
            description:
                "Technical assistance and support for equipment-related issues."
        }
    ];

    return (
        <section id="services" className="repair-service">

            <div className="section-heading">

                <p className="section-tag">
                    REPAIR & SERVICE
                </p>

                <h2>
                    Reliable Service & Support
                </h2>

                <p>
                    We provide repair, maintenance and technical
                    support for medical and surgical equipment.
                </p>

            </div>


            <div className="services-grid">

                {services.map((service, index) => (

                    <div
                        className="service-card"
                        key={index}
                    >

                        <div className="service-icon">
                            {index === 0 && "🔧"}
                            {index === 1 && "⚙️"}
                            {index === 2 && "🛠️"}
                        </div>

                        <h3>
                            {service.title}
                        </h3>

                        <p>
                            {service.description}
                        </p>

                        <button
    onClick={() => {
        document
            .getElementById("contact")
            .scrollIntoView({
                behavior: "smooth"
            });
    }}
>
    Know More
</button>
                    </div>

                ))}

            </div>

        </section>
    );
}

export default RepairService;