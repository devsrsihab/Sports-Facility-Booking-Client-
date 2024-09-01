const stats = [
  { label: "Bookings every 24 hours", value: "2,500" },
  { label: "Venues under partnership", value: "1,200" },
  { label: "New users annually", value: "20,000" },
];

const OurMission = () => {
  return (
    <div>
      <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Our Mission
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600">
                Our mission is to make sports accessible to everyone. Whether
                you're an amateur or a professional, we believe in providing
                seamless access to the best sports facilities, empowering you to
                focus on what you love—playing the game. Our platform connects
                you to venues and events, ensuring that every player has the
                opportunity to excel.
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                <p>
                  With a user-friendly booking system, you can easily reserve
                  courts, fields, or other sports venues with just a few clicks.
                  We are committed to growing the community of sports
                  enthusiasts by providing them with the tools they need to
                  practice, compete, and thrive. Join us in our mission to
                  elevate the sports experience for everyone, everywhere.
                </p>
                <p className="mt-10">
                  From local pickup games to professional training sessions, our
                  platform is designed to cater to the needs of every athlete.
                  We partner with top-tier venues to ensure that you have access
                  to the best facilities, no matter where you are. Together, we
                  can make sports a part of everyone's daily life.
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-y-4"
                  >
                    <dt className="text-base leading-7 ">
                      {stat.label}
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-primary">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
