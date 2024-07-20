import { plans } from '@/constants';

const ProPage = () => {
  return (
    <section className="flex flex-col items-center gap-10 p-6 text-white">
      <h1 className="text-3xl font-bold">Subscription Plan</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="flex max-w-sm flex-col justify-between rounded-lg bg-dark-2 p-6 shadow-md"
          >
            <div>
              <h2 className="mb-4 text-2xl font-bold">{plan.title}</h2>
              <p className="mb-4 text-xl font-semibold">{plan.price}</p>
              <ul className="mb-6 grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <svg
                      className="mr-2 size-5 text-blue-500"
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
            <a
              href="https://sppay.shopee.co.id/qr/00fbca0f3aa13693b669"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 w-full rounded-lg bg-blue-1 px-4 py-2 font-bold text-white transition duration-200 hover:bg-blue-600">
                Choose {plan.title}
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProPage;
