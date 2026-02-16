export default function Timeline() {
  const steps = [
    "VPC Design",
    "Subnets & Security",
    "Load Balancer",
    "Auto Scaling",
    "Route 53 Failover",
  ];

  return (
    <section id="timeline" className="min-h-screen flex flex-col justify-center items-center reveal">
      <h2 className="text-5xl text-cyan-400 mb-16">
        Architecture Timeline
      </h2>

      <div className="flex flex-col gap-8 max-w-3xl">
        {steps.map((step, index) => (
          <div key={index} className="glass-card interactive-card">
            <span className="text-cyan-400 font-semibold">
              Step {index + 1}
            </span>
            <p className="text-slate-300">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
