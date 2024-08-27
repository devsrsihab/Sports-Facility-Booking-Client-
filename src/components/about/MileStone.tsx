const timeline = [
  {
    name: "Platform Launched",
    description:
      "Our journey began with the launch of the sports booking platform, connecting athletes with top venues. The response was overwhelming.",
    date: "Aug 2021",
    dateTime: "2021-08",
  },
  {
    name: "Partnered with 500+ Venues",
    description:
      "Within just a few months, we secured partnerships with over 500 sports venues, ranging from local gyms to large stadiums.",
    date: "Dec 2021",
    dateTime: "2021-12",
  },
  {
    name: "Launched Mobile App",
    description:
      "To enhance user experience, we released our mobile app, making it easier for users to book and manage their sports sessions on the go.",
    date: "Feb 2022",
    dateTime: "2022-02",
  },
  {
    name: "Expanded Globally",
    description:
      "With growing demand, we expanded our services globally, allowing users from different countries to access sports facilities through our platform.",
    date: "Dec 2022",
    dateTime: "2022-12",
  },
];

const MileStone = () => {
  return (
    <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {timeline.map((item) => (
          <div key={item.name}>
            <time
              dateTime={item.dateTime}
              className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
            >
              <svg
                viewBox="0 0 4 4"
                aria-hidden="true"
                className="mr-4 h-1 w-1 flex-none"
              >
                <circle r={2} cx={2} cy={2} fill="currentColor" />
              </svg>
              {item.date}
              <div
                aria-hidden="true"
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
              />
            </time>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              {item.name}
            </p>
            <p className="mt-1 text-base leading-7 text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MileStone;
