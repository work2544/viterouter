import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAuth } from "~/context/usercontext";

interface ILoginForm {
  email: string;
  username: string;
  password: string;
}
function Register() {
  const Authcontext = useAuth();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    const success = Authcontext?.register({ ...data, role: "user" });
    if (success) {
      navigate("/log-in");
    }
  };

  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            {...register("email", { required: true })}
            placeholder="email@domain.com"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            {...register("username", { required: true })}
            placeholder="username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            {...register("password", { required: true })}
            placeholder="******************"
          />
          {(errors.username || errors.password) && (
            <p className="text-red-500 text-xs italic">
              Please enter credential
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
