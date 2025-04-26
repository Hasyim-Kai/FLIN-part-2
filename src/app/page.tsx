import Image from "next/image";

export default function Home() {

  const features = ["Environmental Awareness", "Community Engagement", "Sustainable Solutions"];
  const imgs = [
    "/img/tree1.jpg",
    "/img/tree2.jpg",
    "/img/tree3.jpg"
  ];

  return <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-600 px-6">

    {/* HERO SECTION */}
    <section className="text-center pt-32 pb-24">
      <h1
        className="text-5xl font-extrabold leading-tight sm:text-6xl"
      >
        Join Us in Protecting Our Planet
      </h1>
      <p
        className="mt-6 text-lg text-gray-500"
      >
        Together, we can create a sustainable future for generations to come.
      </p>
      <button
        className="text-white mt-8 px-8 py-3 rounded-full bg-green-600 hover:bg-green-700 transition"
      >
        Get Involved
      </button>
    </section>

    {/* FEATURES SECTION */}
    <section className="py-20 w-full max-w-6xl flex flex-col items-center gap-10">
      {features.map((feature, idx) => (
        <div
          key={feature}
          className="flex flex-col sm:flex-row items-center w-full max-w-4xl"
        >
          <div className="relative w-72 h-72 rounded-lg sm:mr-8 mb-4 sm:mb-0 overflow-hidden">
            <Image
              src={imgs[idx]}
              alt={feature}
              width={1000}
              height={1000}
              className="object-cover"
            />
          </div>
          <div className="text-center sm:text-left p-8">
            <h1 className="text-2xl font-bold mb-2">{feature}</h1>
            <p className="text-gray-400">
              Learn how we are making a difference through {feature.toLowerCase()}.
            </p>
          </div>
        </div>
      ))}
    </section>

    {/* ABOUT SECTION */}
    <section className="py-32 text-center max-w-4xl">
      <h2
        className="text-4xl font-bold mb-6"
      >
        Why Support Us?
      </h2>
      <p
        className="text-gray-400 text-lg"
      >
        We are dedicated to promoting environmental sustainability and empowering communities to take action for a greener future.
      </p>
    </section>

    {/* FOOTER */}
    <footer className="py-10 text-gray-600">
      © 2025 GreenFuture. All rights reserved.
    </footer>

  </main>
}
