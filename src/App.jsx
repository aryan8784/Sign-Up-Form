import "./App.css";
import {
  Card,
  Input,
  Typography,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";
import { Controller, useForm } from "react-hook-form";
function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    watch
  } = useForm({});

  const domain = watch("domain")
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="h-screen grid place-items-center bg-gray-50">
        <Card color="transparent" shadow={true} className="p-7 bg-white">
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
          <br />
          <form
            className="mb-4 w-[500px] grid grid-cols-2 gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <Controller
                name="Username"
                rules={{
                  required: "Username is Required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters required",
                  },
                }}
                control={control}
                render={({ field }) => (
                  <Input
                    size="lg"
                    {...field}
                    placeholder="Enter Your Name"
                    label="Username"
                    error={Boolean(errors?.Username?.message)}
                  />
                )}
              />
              {errors?.Username?.message && (
                <span className="error-text">{errors?.Username?.message}</span>
              )}
            </div>
            <div>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email ID is Required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Email ID is Invalid",
                  },
                }}
                render={({ field }) => (
                  <Input
                    size="lg"
                    type="email"
                    {...field}
                    placeholder="Enter Your Email"
                    label="Email ID"
                    error={Boolean(errors?.email?.message)}
                  />
                )}
              />
              {errors?.email?.message && (
                <span className="error-text">{errors?.email?.message}</span>
              )}
            </div>
            <div>
              <Controller
                name="domain"
                control={control}
                rules={{
                  required: "Domain is Required",
                }}
                render={({ field }) => (
                  <Select
                    label="Select Domain"
                    {...field}
                    error={Boolean(errors?.domain?.message)}
                  >
                    <Option value="designer">Designer</Option>
                    <Option value="developer">Developer</Option>
                    <Option value="tester">Tester</Option>
                    <Option value="others">Others</Option>
                  </Select>
                )}
              />
              {errors?.domain?.message && (
                <span className="error-text">{errors?.domain?.message}</span>
              )}
            </div>
            <div>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Password is Required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
                    message: "Password not strong enough",
                  },
                }}
                render={({ field }) => (
                  <Input
                    size="lg"
                    type="password"
                    {...field}
                    placeholder="Enter Your Password"
                    label="Password"
                    error={Boolean(errors?.password?.message)}
                  />
                )}
              />
              {errors?.password?.message && (
                <span className="error-text">{errors?.password?.message}</span>
              )}
            </div>
            <div>
              <Controller
                name="confirmpassword"
                control={control}
                rules={{
                  required: "Confirm Password is Required",
                 validate: (value)=> getValues("password") === value || "Password do not match",
                }}
                render={({ field }) => (
                  <Input
                    size="lg"
                    type="password"
                    {...field}
                    placeholder="Enter Your Password"
                    label="Confirm Password"
                    error={Boolean(errors?.confirmpassword?.message)}
                  />
                )}
              />
               {errors?.confirmpassword?.message && (
                <span className="error-text">{errors?.confirmpassword?.message}</span>
              )}
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-3">
              <Button type="reset" variant="outlined">
                Reset
              </Button>
              <Button type="submit">Create Account</Button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}

export default App;
