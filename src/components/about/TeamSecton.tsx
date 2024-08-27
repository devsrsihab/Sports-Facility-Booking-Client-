const team = [
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Sarah Williams",
    role: "CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "David Kim",
    role: "Chief Marketing Officer",
    imageUrl:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Emily Brown",
    role: "Head of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?crop=faces&fit=crop&w=1024&h=1024&q=80",
  },
  {
    name: "James Anderson",
    role: "Lead Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Olivia Harris",
    role: "Customer Success Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
];

const TeamSection = () => {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Meet Our Team
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We are a team of passionate professionals dedicated to making sports
          facilities more accessible. Our combined experience in technology,
          marketing, and customer success drives our mission to connect athletes
          with the best venues worldwide.
        </p>
      </div>
      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
      >
        {team.map((person) => (
          <li key={person.name}>
            <img
              alt={`${person.name} - ${person.role}`}
              src={person.imageUrl}
              className="mx-auto h-24 w-24 rounded-full"
            />
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
              {person.name}
            </h3>
            <p className="text-sm leading-6 text-gray-600">{person.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamSection;
