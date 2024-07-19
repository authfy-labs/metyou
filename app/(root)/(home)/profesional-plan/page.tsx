import { plans } from "@/constants";

const ProPage = () => {
    
  
    return (
      <section className="flex flex-col items-center gap-10 text-white p-6">
        <h1 className="text-3xl font-bold">Professional Plan</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.title} className="flex flex-col justify-between max-w-sm p-6 bg-dark-2 rounded-lg shadow-md">
              <div>
                <h2 className="text-2xl font-bold mb-4">{plan.title}</h2>
                <p className="text-xl font-semibold mb-4">{plan.price}</p>
                <ul className="flex-grow mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="mb-2 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-blue-1 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-200">
                Choose {plan.title}
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ProPage;
  