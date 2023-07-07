import RegistrationPage from "@/components/RegistrationPage";

export default function Register({params}) {
  return <RegistrationPage typeRegistration={params.functionType} />;
}

