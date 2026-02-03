
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">Hemantha Akkaraju</span>
          <div className="space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900">
              Experience
            </a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">
              Skills
            </a>
            <a href="#hobbies" className="text-gray-600 hover:text-gray-900">
              Hobbies
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">Hemantha Akkaraju</h1>
        <p className="text-2xl text-gray-600 mb-2">Software Engineer</p>
        <p className="text-lg text-gray-500 max-w-2xl text-center mb-8">
          Building scalable systems and automation solutions with 4+ years of experience
        </p>
        <div className="flex space-x-4">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Software Engineer with 4+ years at Amazon building scalable, data-driven systems across supply chain and financial
            automation. Experienced in solving complex operational problems end-to-end — from understanding stakeholder pain points
            to designing, deploying, and integrating production-grade solutions. Passionate about applying technical depth to real-world
            impact through customer-focused engineering.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Experience</h2>
          <div className="space-y-10">
            {/* RBC Technologies */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Software Development Engineer
                  </h3>
                  <p className="text-lg text-gray-700">RBC Technologies</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Seattle, WA</p>
                  <p className="text-gray-500">Nov 2025 - Present</p>
                </div>
              </div>
              <ul className="list-disc list-outside space-y-2 text-gray-700 ml-5">
                <li>
                  Building an in-house AI-powered testing automation tool that generates test cases from requirement documents, reducing manual test planning effort and improving coverage for client deliverables
                </li>
                <li>
                  Developing scalable full-stack applications using .NET, C#, and Angular with Docker containerization and Auth0 for authentication and authorization
                </li>
                <li>
                  Rapidly adapting to new technologies and frameworks, collaborating with cross-functional teams to translate ambiguous product requirements into production-ready solutions
                </li>
              </ul>
            </div>

            {/* Amazon - Device Supply Chain */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Software Engineer</h3>
                  <p className="text-lg text-gray-700">
                    Amazon.com — Device Supply Chain Technologies
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Seattle, WA</p>
                  <p className="text-gray-500">Jan 2023 - Sep 2025</p>
                </div>
              </div>
              <ul className="list-disc list-outside space-y-2 text-gray-700 ml-5">
                <li>
                  Developed and maintained Townsend, a Product Lifecycle Management tool that streamlined supply-chain operations through real-time tracking and workflow automation, reducing delays and improving visibility
                </li>
                <li>
                  Built responsive UI components using React and TypeScript, improving user experience for supply-chain workflows and reducing customer support tickets by 15%
                </li>
                <li>
                  Designed and deployed microservice-based workflow automation features using AWS Lambda, API Gateway, and DynamoDB, collaborating with cross-functional teams to improve process reliability and scalability
                </li>
                <li>
                  Took ownership of customer onboarding for 3,000+ internal users, delivering integration solutions and workflow guides that accelerated AWS adoption and improved developer productivity
                </li>
                <li>
                  Improved operational uptime by reducing downtime incidents by 20% through proactive monitoring, CloudWatch alerting, incident management, and on-call ownership
                </li>
                <li>
                  Leveraged AI-powered tools (Amazon Q, Amazon Bedrock) to accelerate development, enhance code quality, and automate documentation—boosting engineering productivity and reducing turnaround time for new feature delivery
                </li>
                <li>
                  Mentored junior engineers and authored standardized runbooks for testing and development, improving onboarding speed and ensuring consistency across the team
                </li>
              </ul>
            </div>

            {/* Amazon - Financial System */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Software Engineer</h3>
                  <p className="text-lg text-gray-700">
                    Amazon.com — Device Sales & Financial System Automation
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Seattle, WA</p>
                  <p className="text-gray-500">May 2022 - Dec 2022</p>
                </div>
              </div>
              <ul className="list-disc list-outside space-y-2 text-gray-700 ml-5">
                <li>
                  Optimized claim processing and approval workflows, cutting credit timelines by 2.5 days and reducing manager workload by 60%
                </li>
                <li>
                  Built automated approval models that improved finance team productivity by 25% and reduced manual errors
                </li>
                <li>
                  Partnered with cross-functional stakeholders to modernize approval workflows, mentoring junior engineers on automation best practices
                </li>
              </ul>
            </div>

            {/* Amazon - Operations Tech */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Systems Development Engineer
                  </h3>
                  <p className="text-lg text-gray-700">
                    Amazon.com — Operations Tech
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Seattle, WA</p>
                  <p className="text-gray-500">Apr 2021 - May 2022</p>
                </div>
              </div>
              <ul className="list-disc list-outside space-y-2 text-gray-700 ml-5">
                <li>
                  Developed automation tools that ensured 99.99% service availability, minimizing downtime for critical operational systems
                </li>
                <li>
                  Created interactive dashboards for real-time monitoring, providing stakeholders with immediate visibility into service health
                </li>
                <li>
                  Integrated AWS Lambda with DynamoDB pipelines to implement event-driven monitoring, reducing manual intervention by 40%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Languages & Frameworks */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Languages & Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Java
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  .NET
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Python
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  C++
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Angular
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Spring Boot
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  GraphQL
                </span>
              </div>
            </div>

            {/* Cloud & Microservices */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Cloud & Microservices
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  AWS Lambda
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  API Gateway
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  S3
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  DynamoDB
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  CloudWatch
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  SQS
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  SNS
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  Microservices
                </span>
              </div>
            </div>

            {/* Databases */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  SQL
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  NoSQL
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  DynamoDB
                </span>
              </div>
            </div>

            {/* DevOps & CI/CD */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                DevOps & CI/CD
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Git
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Docker
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  CloudFormation
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  CodePipeline
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Maven
                </span>
              </div>
            </div>

            {/* AI & Automation */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                AI & Automation
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                  Amazon Q
                </span>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                  Amazon Bedrock
                </span>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                  LLM Development
                </span>
              </div>
            </div>

            {/* Testing */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Testing</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                  JUnit
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                  Jest
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                  React Testing Library
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                  Cypress
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Hobbies & Interests</h2>
          <p className="text-lg text-gray-700 mb-8">
            When I'm not coding, I enjoy building LEGO sets and other creative projects.
            Here's my growing collection:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vintage Camper */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                  src="/camper.jpg"
                  alt="Vintage Camper LEGO Build"
                  className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Vintage Camper</h3>
                <p className="text-gray-600">
                  A detailed retro camper build complete with flamingo lawn ornaments and a miniature grill.
                </p>
              </div>
            </div>

            {/* Ship in a Bottle */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                  src="/bottle-ship.jpg"
                  alt="Ship in a Bottle LEGO Build"
                  className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ship in a Bottle - Leviathan</h3>
                <p className="text-gray-600">
                  An intricate ship-in-a-bottle build featuring the Leviathan with detailed rigging and ocean effects.
                </p>
              </div>
            </div>

            {/* Placeholder for future builds */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-dashed border-gray-300">
              <div className="h-64 flex items-center justify-center bg-gray-50">
                <p className="text-gray-400 text-lg">Next Build Coming Soon...</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">More Builds on the Way</h3>
                <p className="text-gray-600">
                  Stay tuned for more creative projects!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Projects</h2>

          <div className="grid md:grid-cols-1 gap-8">
            {/* Finance Tracker */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Finance Tracker</h3>
              <p className="text-gray-700 mb-4">
                A full-stack financial management application designed to help users track expenses, manage budgets,
                and gain insights into their spending patterns through interactive visualizations and reports.
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Expense tracking and categorization system</li>
                  <li>Budget management with real-time spending alerts</li>
                  <li>Interactive dashboards with data visualizations</li>
                  <li>RESTful API backend with secure authentication</li>
                  <li>Responsive Angular frontend with Material Design</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">.NET Core</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">C#</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Angular</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">SQL Server</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Entity Framework</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">RESTful API</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/hemu-codes/FinanceTracker/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View on GitHub →
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Live Demo →
                </a>
              </div>
            </div>

            {/* Placeholder for future projects */}
            <div className="border border-dashed border-gray-300 rounded-lg p-6 bg-white text-center">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">More Projects Coming Soon</h3>
              <p className="text-gray-500">
                Currently building new projects to showcase here...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact</h2>
          <p className="text-lg text-gray-600 mb-4">
            I'm currently open to new opportunities and collaborations. If you'd like to get in touch, please reach out!
          </p>
          <a
            href="mailto:hemanthaakkaraju@gmail.com"
            className="text-blue-600 hover:underline"
          >
            Email Me
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-4 px-4 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2026 Hemantha Akkaraju. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}