import InputForm from "../Elements/input";
import Button from "../Elements/Button";

const FormProfile = () => {
    return (
        <form action="">
        <InputForm
          label="Name"
          type="name"
          placeholder="endang *****"
          name="name"
        />
       <InputForm
          label="Date of Birth"
          type="date"
          placeholder="19/08/98"
          name="date"
        />
       
       <Button className="bg-blue-600 w-full">Selesai</Button>
       </form>
    )
};

export default FormProfile;