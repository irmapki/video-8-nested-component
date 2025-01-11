import InputForm from "../Elements/input";
import Button from "../Elements/Button";

const FormLogin = () => {
    const handleLogin = (event) =>{
      event.preventDefault();
      loca
      console.log(event.target.email.value);
      console.log(event.target.password.value);
      console.log("login");
    };
    return (
        <form onSubmit={handleLogin}>
        <InputForm
          label="Email"
          type="email"
          placeholder="kiminonamaewa@gmail.com"
          name="email"
        />
       <InputForm
          label="Password"
          type="password"
          placeholder="1234"
          name="password"
        />
       
        <Button className="bg-blue-600 w-full" type="submit">Login</Button>
      </form>
    )
};

export default FormLogin;