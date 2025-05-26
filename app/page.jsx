import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16 p-6 md:p-10">
            <section className="text-center">
                <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                    Unlock Document Insights Faster with <span className="text-indigo-600">External-VDU</span>
                </h1>
                <p className="mb-8 text-lg text-gray-700 sm:text-xl lg:text-2xl">
                    Stop wasting time on manual data extraction. Experience the power of AI to instantly pull key information from your documents.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
                    <Link href="/process" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Start Processing Documents
                    </Link>
                    <Link href="/billing" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        See Pricing
                    </Link>
                </div>
            </section>

            <section className="py-8 md:py-12">
                <div className="max-w-5xl mx-auto">
                    <h2 className="mb-6 text-3xl font-semibold text-gray-800">Key Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="mb-2 text-xl font-semibold text-indigo-600">Time Savings</h3>
                            <p className="text-gray-700">Automate information extraction and reclaim valuable time.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="mb-2 text-xl font-semibold text-indigo-600">Improved Accuracy</h3>
                            <p className="text-gray-700">Reduce human error and ensure reliable data extraction.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="mb-2 text-xl font-semibold text-indigo-600">Easy to Use</h3>
                            <p className="text-gray-700">Get started quickly without complex setup or training.</p>
                        </div>
                        {/* You can add more benefits here */}
                    </div>
                </div>
            </section>

            {/* You can add more sections like "How it Works" or Testimonials here */}

            <footer className="py-6 text-center text-gray-500 border-t">
                <p>&copy; {new Date().getFullYear()} External-VDU. All rights reserved.</p>
            </footer>
        </div>
    );
}
