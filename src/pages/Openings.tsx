import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

type Section = {
  title: string;
  description: string;
  image: string;
  route: string;
}

const sections: Section[] = [
  {
    title: "Technical Roles",
    description: "If you believe you are technically proficient, these roles are for you!!",
    image: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg",
    route: '/roles'
  },
  {
    title: "Non-Technical Roles",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    image: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg",
    route: '/roles'
  },
  {
    title: "Become a Member",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eliti sed.",
    image: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg",
    route: '/roles'
  }
];

const Openings = () => {
  const router = useNavigate()
  return (
    <div className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold">
        Openings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map(({ title, description, image, route }) => (
          <Card className="cursor-pointer" onClick={() => router(route)} key={title}>
            <CardHeader>
              <img
                src={image}
                alt="Job Section"
                className="w-[200px] lg:w-[300px] mx-auto rounded-md"
              />
            </CardHeader>

            <CardContent className="font-bold text-2xl">{title}</CardContent>

            <CardFooter>
              {description}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Openings