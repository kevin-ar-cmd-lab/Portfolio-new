export default function ServicesOverview() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      <p className="text-gray-300 mb-8">
        I provide end-to-end digital solutions engineered to deliver business results at scale.
      </p>

      <div className="space-y-6">
        <ServiceLink
          title="Web Development"
          description="High-performance websites tailored for speed, SEO, and conversion."
          href="/services/web-development"
        />
        <ServiceLink
          title="Mobile App Development"
          description="Cross-platform Android/iOS solutions powered by modern stacks."
          href="/services/mobile-development"
        />
        <ServiceLink
          title="UI/UX Design"
          description="Intuitive, user-centric designs that elevate customer experience."
          href="/services/ui-ux-design"
        />
       <ServiceLink
         title="IT Consulting"
         description="Strategic digital advisory for scaling your online presence."
         href="/services/consulting"
       />
      </div>
    </div>
  );
}

function ServiceLink({ title, description, href }) {
  return (
    <a href={href} className="block p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-400 text-sm">{description}</p>
    </a>
  );
}
