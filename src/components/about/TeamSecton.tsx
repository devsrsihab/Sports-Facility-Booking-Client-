import teamImg1 from "../../assets/img/team/team (1).avif"
import teamImg2 from "../../assets/img/team/team (2).avif"
import teamImg3 from "../../assets/img/team/team (3).avif"
import teamImg4 from "../../assets/img/team/team (4).avif"
import teamImg5 from "../../assets/img/team/team (5).avif"
import teamImg6 from "../../assets/img/team/team (6).jpeg"


const team = [
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl: teamImg1,
  },
  {
    name: "Sarah Williams",
    role: "CEO",
    imageUrl: teamImg2,
  },
  {
    name: "David Kim",
    role: "Chief Marketing Officer",
    imageUrl: teamImg3,
  },
  {
    name: "Emily Brown",
    role: "Head of Product",
    imageUrl: teamImg4,
  },
  {
    name: "James Anderson",
    role: "Lead Developer",
    imageUrl: teamImg5,
  },
  {
    name: "Olivia Harris",
    role: "Customer Success Manager",
    imageUrl: teamImg6,
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
